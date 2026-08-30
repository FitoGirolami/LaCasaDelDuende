(() => {
  const {DIMENSIONS,CORE,CLARIFIERS,PAIRS,GENERIC_REACTIONS,TENSIONS,fallbackPair} = window.ESPEJO_DATA;

  const intro = document.getElementById("intro");
  const conversation = document.getElementById("conversation");
  const result = document.getElementById("result");
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const reactionEl = document.getElementById("reaction");
  const trailFill = document.getElementById("trailFill");
  const startBtn = document.getElementById("startBtn");
  const restartBtn = document.getElementById("restartBtn");
  const shareBtn = document.getElementById("shareBtn");
  const shareStatus = document.getElementById("shareStatus");
  const duendeVideo = document.getElementById("duendeVideo");
  const soundBtn = document.getElementById("soundBtn");

  const MAIN_QUESTIONS_PER_RUN = 10;
  const RECENT_LIMIT = 20;
  const RECENT_KEY = "espejo_duende_recent_questions_v2";
  const BANK_SRC = "assets/espejo-preguntas.js?v=20260830c";

  let scores, tags, queue, step, totalSteps, lastReaction, finalResult, coreLength;
  let extraBank = {QUESTION_BANK:[],CLARIFIER_BANK:{}};

  const bankReady = loadQuestionBank();

  function loadQuestionBank(){
    return new Promise((resolve) => {
      if(window.ESPEJO_BANK){
        extraBank = window.ESPEJO_BANK;
        resolve(extraBank);
        return;
      }

      const script = document.createElement("script");
      script.src = BANK_SRC;
      script.async = true;
      script.onload = () => {
        extraBank = window.ESPEJO_BANK || extraBank;
        resolve(extraBank);
      };
      script.onerror = () => resolve(extraBank);
      document.head.appendChild(script);
    });
  }

  function randomInt(max){
    if(max <= 1) return 0;
    try{
      if(window.crypto && crypto.getRandomValues){
        const value = new Uint32Array(1);
        crypto.getRandomValues(value);
        return Math.floor((value[0] / 4294967296) * max);
      }
    }catch(_){ }
    return Math.floor(Math.random() * max);
  }

  function shuffle(items){
    const arr = [...items];
    for(let i = arr.length - 1; i > 0; i--){
      const j = randomInt(i + 1);
      [arr[i],arr[j]] = [arr[j],arr[i]];
    }
    return arr;
  }

  function stableId(text){
    let hash = 2166136261;
    const input = String(text || "");
    for(let i = 0; i < input.length; i++){
      hash ^= input.charCodeAt(i);
      hash = Math.imul(hash,16777619);
    }
    return "legacy-" + (hash >>> 0).toString(36);
  }

  function inferFocus(question){
    const sums = Object.fromEntries(Object.keys(DIMENSIONS).map(key => [key,0]));
    (question.answers || []).forEach(answer => {
      Object.entries(answer.w || {}).forEach(([dim,value]) => {
        if(dim in sums) sums[dim] += Number(value) || 0;
      });
    });
    return Object.entries(sums).sort((a,b) => b[1] - a[1])[0]?.[0] || "sabio";
  }

  function normalizeQuestion(question, forcedFocus){
    return {
      ...question,
      id: question.id || stableId(question.text),
      focus: forcedFocus || question.focus || inferFocus(question)
    };
  }

  function readRecent(){
    try{
      const parsed = JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
      return Array.isArray(parsed) ? parsed : [];
    }catch(_){
      return [];
    }
  }

  function rememberIds(ids){
    try{
      const current = readRecent();
      const merged = [...current,...ids.filter(Boolean)];
      const unique = [];
      for(const id of merged){
        const existing = unique.indexOf(id);
        if(existing !== -1) unique.splice(existing,1);
        unique.push(id);
      }
      localStorage.setItem(RECENT_KEY,JSON.stringify(unique.slice(-RECENT_LIMIT)));
    }catch(_){ }
  }

  function buildMainPool(){
    const legacy = CORE.map(q => normalizeQuestion(q));
    const expanded = (extraBank.QUESTION_BANK || []).map(q => normalizeQuestion(q));
    return [...legacy,...expanded];
  }

  function selectMainQuestions(){
    const pool = buildMainPool();
    const recent = new Set(readRecent());
    const dimensions = shuffle(Object.keys(DIMENSIONS));

    let available = pool.filter(q => !recent.has(q.id));
    if(available.length < MAIN_QUESTIONS_PER_RUN){
      available = [...pool];
    }

    const selected = [];
    const selectedIds = new Set();

    // Garantiza que las seis dimensiones tengan al menos una oportunidad de aparecer.
    dimensions.forEach(dim => {
      const candidates = available.filter(q => q.focus === dim && !selectedIds.has(q.id));
      if(candidates.length){
        const chosen = candidates[randomInt(candidates.length)];
        selected.push(chosen);
        selectedIds.add(chosen.id);
      }
    });

    const remaining = shuffle(available.filter(q => !selectedIds.has(q.id)));
    for(const question of remaining){
      if(selected.length >= MAIN_QUESTIONS_PER_RUN) break;
      selected.push(question);
      selectedIds.add(question.id);
    }

    // Fallback si el banco externo no cargó o quedó demasiado pequeño.
    if(selected.length < MAIN_QUESTIONS_PER_RUN){
      for(const question of shuffle(pool)){
        if(selected.length >= MAIN_QUESTIONS_PER_RUN) break;
        if(!selectedIds.has(question.id)){
          selected.push(question);
          selectedIds.add(question.id);
        }
      }
    }

    const finalSelection = shuffle(selected.slice(0,MAIN_QUESTIONS_PER_RUN));
    rememberIds(finalSelection.map(q => q.id));
    return finalSelection;
  }

  function selectClarifier(dimension){
    const expanded = (extraBank.CLARIFIER_BANK?.[dimension] || []).map(q => normalizeQuestion(q,dimension));
    const legacy = CLARIFIERS[dimension] ? [normalizeQuestion(CLARIFIERS[dimension],dimension)] : [];
    const pool = [...expanded,...legacy];
    if(!pool.length) return null;

    const recent = new Set(readRecent());
    let candidates = pool.filter(q => !recent.has(q.id));
    if(!candidates.length) candidates = pool;

    const chosen = candidates[randomInt(candidates.length)];
    rememberIds([chosen.id]);
    return chosen;
  }

  function resetState(){
    scores = Object.fromEntries(Object.keys(DIMENSIONS).map(k => [k,0]));
    tags = new Set();
    queue = selectMainQuestions();
    coreLength = queue.length;
    step = 0;
    totalSteps = coreLength + 2;
    lastReaction = -1;
    finalResult = null;
    reactionEl.textContent = "";
    reactionEl.classList.remove("show");
    trailFill.style.width = "0%";
    shareStatus.textContent = "";
  }

  async function begin(){
    startBtn.disabled = true;
    restartBtn.disabled = true;
    await bankReady;
    resetState();
    startBtn.disabled = false;
    restartBtn.disabled = false;

    intro.classList.add("hidden");
    result.classList.remove("active");
    conversation.classList.add("active");
    soundBtn.hidden = true;
    duendeVideo.muted = true;
    duendeVideo.loop = true;
    duendeVideo.play().catch(() => {});
    renderQuestion();
    window.scrollTo({top:0,behavior:"smooth"});
  }

  function renderQuestion(){
    const q = queue[step];
    if(!q){ finish(); return; }

    questionEl.textContent = q.text;
    answersEl.innerHTML = "";

    // También cambia el orden de las respuestas en cada aparición.
    shuffle(q.answers || []).forEach((answer) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "answer-btn";
      btn.textContent = answer.text;
      btn.addEventListener("click", () => choose(answer));
      answersEl.appendChild(btn);
    });

    const progress = Math.min(100,(step / totalSteps) * 100);
    trailFill.style.width = progress + "%";
  }

  function choose(answer){
    [...answersEl.querySelectorAll("button")].forEach(b => b.disabled = true);

    Object.entries(answer.w || {}).forEach(([dim,value]) => {
      scores[dim] = (scores[dim] || 0) + value;
    });
    (answer.tags || []).forEach(tag => tags.add(tag));

    const special = detectTension();
    reactionEl.textContent = special || nextReaction();
    reactionEl.classList.add("show");

    step++;

    if(step === coreLength){
      const top = rankedDimensions().slice(0,2).map(x => x[0]);
      const first = selectClarifier(top[0]);
      const second = selectClarifier(top[1]);
      if(first) queue.push(first);
      if(second) queue.push(second);
      totalSteps = queue.length;
    }

    setTimeout(() => {
      reactionEl.classList.remove("show");
      setTimeout(() => {
        if(step >= queue.length){ finish(); }
        else { renderQuestion(); }
      },150);
    },720);
  }

  function nextReaction(){
    let idx;
    do{
      idx = randomInt(GENERIC_REACTIONS.length);
    }while(idx === lastReaction && GENERIC_REACTIONS.length > 1);
    lastReaction = idx;
    return GENERIC_REACTIONS[idx];
  }

  function detectTension(){
    for(const t of TENSIONS){
      if(tags.has(t.a) && tags.has(t.b) && !tags.has("shown:"+t.a+"|"+t.b)){
        tags.add("shown:"+t.a+"|"+t.b);
        return "Ah… aquí aparece una contradicción interesante.";
      }
    }
    return null;
  }

  function rankedDimensions(){
    return Object.entries(scores).sort((a,b) => b[1] - a[1]);
  }

  function pairKey(a,b){
    return [a,b].sort().join("|");
  }

  function findTensionText(){
    for(const t of TENSIONS){
      if(tags.has(t.a) && tags.has(t.b)) return t.text;
    }
    return "No apareció una contradicción dominante. Eso no significa ausencia de tensión: sólo que, en este recorrido, tus elecciones se organizaron alrededor de dos figuras que prefirieron acompañarse antes que enfrentarse.";
  }

  function finish(){
    const ranking = rankedDimensions();
    const primary = ranking[0][0];
    const secondary = ranking[1][0];
    const pair = PAIRS[pairKey(primary,secondary)] || fallbackPair;

    finalResult = {primary,secondary,pair};

    document.getElementById("resultTitle").textContent = pair.title;
    document.getElementById("resultCopy").textContent = pair.copy;
    document.getElementById("primaryFigure").textContent = DIMENSIONS[primary].label;
    document.getElementById("secondaryFigure").textContent = DIMENSIONS[secondary].label;
    document.getElementById("openQuestion").textContent = pair.question;
    document.getElementById("tensionBox").innerHTML = "<strong>Una tensión que apareció:</strong><br>" + escapeHtml(findTensionText());

    trailFill.style.width = "100%";
    conversation.classList.remove("active");
    result.classList.add("active");
    window.scrollTo({top:0,behavior:"smooth"});
  }

  function escapeHtml(str){
    return String(str)
      .replaceAll("&","&amp;")
      .replaceAll("<","&lt;")
      .replaceAll(">","&gt;")
      .replaceAll('"',"&quot;")
      .replaceAll("'","&#039;");
  }

  async function shareResult(){
    if(!finalResult) return;
    const text = `El Espejo del Duende me mostró: ${finalResult.pair.title}. “${finalResult.pair.question}”`;
    const shareUrl = "https://lacasadelduende.art/espejo-del-duende.html?wa=2";
    const data = {title:"El Espejo del Duende | La Casa del Duende",text,url:shareUrl};

    try{
      if(navigator.share){
        await navigator.share(data);
        shareStatus.textContent = "El espejo salió del bosque.";
      }else if(navigator.clipboard){
        await navigator.clipboard.writeText(text + " " + shareUrl);
        shareStatus.textContent = "Resultado copiado para compartir.";
      }else{
        shareStatus.textContent = "Puedes copiar la dirección de esta página y compartir tu resultado.";
      }
    }catch(err){
      if(err && err.name !== "AbortError"){
        shareStatus.textContent = "No pude abrir el menú para compartir.";
      }
    }
  }

  function setAmbientLoop(){
    duendeVideo.muted = true;
    duendeVideo.loop = true;
    soundBtn.textContent = "🔊 Escuchar al duende";
    soundBtn.setAttribute("aria-label","Reproducir la introducción del duende con sonido");
    duendeVideo.play().catch(() => {});
  }

  async function toggleDuendeSound(){
    if(!duendeVideo.muted){
      setAmbientLoop();
      return;
    }
    try{
      duendeVideo.loop = false;
      duendeVideo.currentTime = 0;
      duendeVideo.muted = false;
      await duendeVideo.play();
      soundBtn.textContent = "🔇 Silenciar";
      soundBtn.setAttribute("aria-label","Silenciar la introducción del duende");
    }catch(err){
      setAmbientLoop();
    }
  }

  duendeVideo.addEventListener("ended",() => {
    duendeVideo.currentTime = 0;
    setAmbientLoop();
  });
  soundBtn.addEventListener("click",toggleDuendeSound);
  startBtn.addEventListener("click",begin);
  restartBtn.addEventListener("click",begin);
  shareBtn.addEventListener("click",shareResult);
})();
