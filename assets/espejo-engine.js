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

  let scores, tags, queue, step, totalSteps, lastReaction, finalResult;

  function resetState(){
    scores = Object.fromEntries(Object.keys(DIMENSIONS).map(k => [k,0]));
    tags = new Set();
    queue = [...CORE];
    step = 0;
    totalSteps = CORE.length + 2;
    lastReaction = -1;
    finalResult = null;
    reactionEl.textContent = "";
    reactionEl.classList.remove("show");
    trailFill.style.width = "0%";
    shareStatus.textContent = "";
  }

  function begin(){
    resetState();
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

    q.answers.forEach((answer) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "answer-btn";
      btn.textContent = answer.text;
      btn.addEventListener("click", () => choose(answer));
      answersEl.appendChild(btn);
    });

    const progress = Math.min(100, (step / totalSteps) * 100);
    trailFill.style.width = progress + "%";
  }

  function choose(answer){
    [...answersEl.querySelectorAll("button")].forEach(b => b.disabled = true);

    Object.entries(answer.w || {}).forEach(([dim,value]) => {
      scores[dim] = (scores[dim] || 0) + value;
    });
    (answer.tags || []).forEach(tag => tags.add(tag));

    const special = detectTension();
    let reaction = special || nextReaction();
    reactionEl.textContent = reaction;
    reactionEl.classList.add("show");

    step++;

    if(step === CORE.length){
      const top = rankedDimensions().slice(0,2).map(x => x[0]);
      queue.push(CLARIFIERS[top[0]], CLARIFIERS[top[1]]);
    }

    setTimeout(() => {
      reactionEl.classList.remove("show");
      setTimeout(() => {
        if(step >= queue.length){ finish(); }
        else { renderQuestion(); }
      }, 150);
    }, 720);
  }

  function nextReaction(){
    let idx;
    do {
      idx = Math.floor(Math.random() * GENERIC_REACTIONS.length);
    } while(idx === lastReaction && GENERIC_REACTIONS.length > 1);
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
    // URL versionada para que WhatsApp vuelva a leer la vista previa Open Graph.
    const shareUrl = "https://lacasadelduende.art/espejo-del-duende.html?wa=2";
    const data = {
      title:"El Espejo del Duende | La Casa del Duende",
      text,
      url:shareUrl
    };

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
    soundBtn.setAttribute("aria-label", "Reproducir la introducción del duende con sonido");
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
      soundBtn.setAttribute("aria-label", "Silenciar la introducción del duende");
    }catch(err){
      setAmbientLoop();
    }
  }

  duendeVideo.addEventListener("ended", () => {
    duendeVideo.currentTime = 0;
    setAmbientLoop();
  });
  soundBtn.addEventListener("click", toggleDuendeSound);
  startBtn.addEventListener("click", begin);
  restartBtn.addEventListener("click", begin);
  shareBtn.addEventListener("click", shareResult);

})();
