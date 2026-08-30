window.ESPEJO_BANK = (() => {
  const QUESTION_BANK = [
    // SOMBRA
    {id:"sombra-01",focus:"sombra",text:"Alguien te atribuye un defecto que detestas reconocer en otras personas. ¿Qué haces primero?",answers:[
      {text:"Lo niego si siento que no me describe.",w:{sombra:2,umbral:1},tags:["protect_boundary"]},
      {text:"Me pregunto por qué me incomoda tanto escucharlo.",w:{sombra:3,sabio:1},tags:["seek_inward"]},
      {text:"Le pido ejemplos concretos antes de aceptarlo.",w:{sabio:2,artesano:1},tags:["verify"]},
      {text:"Hago una broma para quitarle peso.",w:{trickster:2,sombra:1},tags:["play_rules"]}
    ]},
    {id:"sombra-02",focus:"sombra",text:"Hay una habitación de tu propia casa que aparece cerrada con una llave que no recuerdas haber usado. ¿Qué haces?",answers:[
      {text:"Busco la llave y entro.",w:{sombra:2,umbral:2},tags:["seek_truth"]},
      {text:"Intento recordar por qué podría haberla cerrado.",w:{sombra:2,sabio:2},tags:["recover_past"]},
      {text:"La dejo cerrada hasta sentir que quiero saber.",w:{sombra:2,umbral:1},tags:["protect_boundary"]},
      {text:"Examino la puerta y la cerradura antes de decidir.",w:{artesano:2,sabio:1},tags:["need_structure"]}
    ]},
    {id:"sombra-03",focus:"sombra",text:"Escuchas una grabación antigua y reconoces tu propia voz diciendo algo que hoy te avergüenza. ¿Qué aparece primero?",answers:[
      {text:"Quisiera borrar la grabación.",w:{sombra:3},tags:["avoid_past"]},
      {text:"Intento recordar quién era yo en ese momento.",w:{sombra:2,sabio:1},tags:["recover_past"]},
      {text:"Me sorprende comprobar cuánto cambié.",w:{umbral:2,sombra:1},tags:["change_belief"]},
      {text:"Me río de esa versión de mí sin destruirla.",w:{trickster:2,nino:1,sombra:1},tags:["accept_trace"]}
    ]},
    {id:"sombra-04",focus:"sombra",text:"En el bosque encuentras una máscara que se parece demasiado a tu rostro, aunque nunca la habías visto. ¿Qué haces con ella?",answers:[
      {text:"Me la pruebo.",w:{sombra:2,nino:1,umbral:1},tags:["open_unknown"]},
      {text:"La observo sin ponérmela.",w:{sabio:2,sombra:1},tags:["observe_first"]},
      {text:"Quiero saber quién la talló.",w:{artesano:2,sabio:1},tags:["verify"]},
      {text:"La dejo donde estaba.",w:{sombra:2,umbral:1},tags:["protect_boundary"]}
    ]},
    {id:"sombra-05",focus:"sombra",text:"Una persona que te irrita hace algo admirable delante de ti. ¿Qué te resulta más natural?",answers:[
      {text:"Reconocerlo aunque no cambie mi opinión sobre ella.",w:{sombra:2,sabio:1},tags:["integrate"]},
      {text:"Sospechar de sus motivos.",w:{sombra:2,sabio:1},tags:["verify"]},
      {text:"Preguntarme qué parte de mi rechazo estaba simplificando demasiado.",w:{sombra:3,umbral:1},tags:["change_belief"]},
      {text:"Disfrutar la contradicción.",w:{trickster:2,sombra:1},tags:["accept_ambiguity"]}
    ]},
    {id:"sombra-06",focus:"sombra",text:"Tu reflejo sonríe un instante antes que tú. Nadie más lo ve. ¿Qué haces?",answers:[
      {text:"Me acerco al espejo.",w:{sombra:2,umbral:2},tags:["open_unknown"]},
      {text:"Compruebo si hay una explicación física.",w:{sabio:2,artesano:1},tags:["verify"]},
      {text:"Me alejo. No necesito seguir todo misterio.",w:{sombra:2,umbral:1},tags:["protect_boundary"]},
      {text:"Le sonrío de vuelta.",w:{trickster:2,nino:1,sombra:1},tags:["play_rules"]}
    ]},

    // TRICKSTER
    {id:"trickster-01",focus:"trickster",text:"Un cartel en mitad del sendero dice al mismo tiempo «NO PASE» y «POR AQUÍ». ¿Qué haces?",answers:[
      {text:"Cruzo para descubrir cuál de las dos órdenes era la trampa.",w:{trickster:3,umbral:1},tags:["question_rules"]},
      {text:"Busco quién colocó el cartel.",w:{sabio:2,trickster:1},tags:["verify"]},
      {text:"Busco otro camino.",w:{umbral:2,sombra:1},tags:["protect_boundary"]},
      {text:"Le agrego una tercera indicación.",w:{trickster:3,nino:1},tags:["play_rules"]}
    ]},
    {id:"trickster-02",focus:"trickster",text:"Te entregan un mapa perfecto del bosque, pero al primer paso descubres un camino que no figura en él.",answers:[
      {text:"Sigo el camino que el mapa desconoce.",w:{trickster:2,nino:1,umbral:1},tags:["open_unknown"]},
      {text:"Marco el nuevo camino en el mapa.",w:{artesano:2,sabio:1},tags:["repair"]},
      {text:"Empiezo a desconfiar de todo el mapa.",w:{trickster:2,sombra:1},tags:["question_rules"]},
      {text:"Compruebo primero si realmente estoy donde creo estar.",w:{sabio:2},tags:["verify"]}
    ]},
    {id:"trickster-03",focus:"trickster",text:"Durante un ritual muy serio, el duende se pone tu sombrero al revés y espera tu reacción.",answers:[
      {text:"Me río con él.",w:{trickster:3,nino:1},tags:["play_rules"]},
      {text:"Le pido que respete el momento.",w:{umbral:1,sombra:1},tags:["protect_boundary"]},
      {text:"Me pregunto qué intenta revelar con la interrupción.",w:{sabio:2,trickster:1},tags:["seek_inward"]},
      {text:"Hago algo todavía más absurdo.",w:{trickster:3,nino:2},tags:["play_rules"]}
    ]},
    {id:"trickster-04",focus:"trickster",text:"Una regla sólo existe porque «siempre se hizo así». ¿Qué respuesta te atrae más?",answers:[
      {text:"Entonces ya es hora de probar otra cosa.",w:{trickster:3,umbral:1},tags:["question_rules"]},
      {text:"Quiero saber qué problema resolvía originalmente.",w:{sabio:2,artesano:1},tags:["verify"]},
      {text:"La mantengo mientras funcione.",w:{artesano:1,umbral:1},tags:["protect_boundary"]},
      {text:"La obedezco una vez de forma literalmente absurda para mostrar su contradicción.",w:{trickster:3,sabio:1},tags:["play_rules"]}
    ]},
    {id:"trickster-05",focus:"trickster",text:"El duende promete responder una pregunta, pero sólo si le haces una que no tenga respuesta. ¿Qué haces?",answers:[
      {text:"Acepto el juego.",w:{trickster:3,nino:1},tags:["play_rules"]},
      {text:"Le pregunto quién decide qué preguntas tienen respuesta.",w:{trickster:2,sabio:2},tags:["question_rules"]},
      {text:"No participo: la condición está hecha para que pierda.",w:{sombra:1,sabio:1},tags:["protect_boundary"]},
      {text:"Invento una pregunta imposible en ese mismo instante.",w:{nino:2,trickster:2},tags:["invent"]}
    ]},
    {id:"trickster-06",focus:"trickster",text:"Descubres que una equivocación tuya produjo algo mejor que lo que habías planeado.",answers:[
      {text:"Conservo el accidente como parte del método.",w:{trickster:2,artesano:2},tags:["accept_trace"]},
      {text:"Intento entender por qué funcionó.",w:{sabio:2,artesano:1},tags:["verify"]},
      {text:"Me alegra, pero vuelvo al plan original.",w:{artesano:1,umbral:1},tags:["need_structure"]},
      {text:"Empiezo a provocar nuevos accidentes deliberadamente.",w:{trickster:3,nino:1},tags:["question_rules"]}
    ]},

    // NIÑO
    {id:"nino-01",focus:"nino",text:"Encuentras una pequeña luz flotando entre los árboles. No parece peligrosa ni explicable. ¿Qué haces?",answers:[
      {text:"La sigo.",w:{nino:3,umbral:1},tags:["open_unknown"]},
      {text:"La observo desde donde estoy.",w:{sabio:2,nino:1},tags:["observe_first"]},
      {text:"Intento fotografiarla o registrar cómo se mueve.",w:{artesano:1,sabio:2},tags:["make_visible"]},
      {text:"La dejo pasar sin perseguirla.",w:{nino:1,umbral:1},tags:["accept_ambiguity"]}
    ]},
    {id:"nino-02",focus:"nino",text:"Un niño te pregunta: «¿Dónde van las cosas cuando dejamos de imaginarlas?». ¿Qué respondes?",answers:[
      {text:"Invento una respuesta con él.",w:{nino:3,trickster:1},tags:["invent"]},
      {text:"Le digo que no lo sé y seguimos pensando.",w:{nino:2,sabio:2},tags:["accept_ambiguity"]},
      {text:"Intento explicarle cómo funciona la memoria.",w:{sabio:2},tags:["need_structure"]},
      {text:"Le devuelvo la pregunta: «¿Tú dónde crees?».",w:{nino:2,trickster:1},tags:["play_rules"]}
    ]},
    {id:"nino-03",focus:"nino",text:"Vuelves a un lugar donde jugabas de pequeño y ahora parece mucho más pequeño de lo que recordabas.",answers:[
      {text:"Intento mirarlo otra vez desde la altura de aquel niño.",w:{nino:3,sombra:1},tags:["recover_past"]},
      {text:"Acepto que mi memoria lo agrandó.",w:{sabio:2,nino:1},tags:["integrate"]},
      {text:"Busco algo que haya permanecido exactamente igual.",w:{artesano:1,sombra:1},tags:["recover_past"]},
      {text:"Me gusta que ambos lugares —el recordado y el real— puedan existir juntos.",w:{nino:2,sabio:1},tags:["accept_ambiguity"]}
    ]},
    {id:"nino-04",focus:"nino",text:"Te regalan una caja vacía y te dicen que contiene exactamente lo que necesitas imaginar.",answers:[
      {text:"La abro como si realmente pudiera haber algo.",w:{nino:3},tags:["open_unknown"]},
      {text:"Pregunto quién decidió que estaba vacía.",w:{trickster:2,nino:1},tags:["question_rules"]},
      {text:"La convierto en otra cosa con mis manos.",w:{artesano:2,nino:1},tags:["make_visible"]},
      {text:"Prefiero un objeto que ya tenga una función.",w:{artesano:1,sombra:1},tags:["need_structure"]}
    ]},
    {id:"nino-05",focus:"nino",text:"Una melodía que no escuchabas desde hace décadas aparece de pronto en el bosque.",answers:[
      {text:"La sigo para encontrar de dónde viene.",w:{nino:2,umbral:1,sombra:1},tags:["recover_past"]},
      {text:"Me quedo quieto y dejo que vuelva el recuerdo.",w:{nino:2,sombra:2},tags:["recover_past"]},
      {text:"Intento identificarla con precisión.",w:{sabio:2},tags:["verify"]},
      {text:"Invento una letra nueva sobre la melodía antigua.",w:{nino:2,trickster:2},tags:["invent"]}
    ]},
    {id:"nino-06",focus:"nino",text:"Tienes una tarde completa sin obligaciones, sin teléfono y sin nadie esperando nada de ti.",answers:[
      {text:"Exploro sin decidir de antemano qué voy a hacer.",w:{nino:3,umbral:1},tags:["open_unknown"]},
      {text:"Construyo o creo algo sólo por gusto.",w:{artesano:2,nino:2},tags:["make_visible"]},
      {text:"Me costaría no convertirla en tiempo productivo.",w:{artesano:1,sombra:1},tags:["need_control"]},
      {text:"Busco una pregunta que nunca tengo tiempo de pensar.",w:{sabio:2,nino:1},tags:["seek_inward"]}
    ]},

    // SABIO
    {id:"sabio-01",focus:"sabio",text:"Dos personas confiables te cuentan versiones incompatibles del mismo hecho. ¿Qué haces?",answers:[
      {text:"Busco evidencias fuera de ambas versiones.",w:{sabio:3},tags:["verify"]},
      {text:"Acepto que quizá ninguna tenga el cuadro completo.",w:{sabio:2,sombra:1},tags:["accept_ambiguity"]},
      {text:"Me fijo en qué cambia para cada una según su relato.",w:{sabio:2,sombra:1},tags:["seek_inward"]},
      {text:"Imagino una tercera versión que las obligue a dialogar.",w:{trickster:1,sabio:1,nino:1},tags:["integrate"]}
    ]},
    {id:"sabio-02",focus:"sabio",text:"Encuentras un libro al que le faltan exactamente las páginas que explicarían su misterio principal.",answers:[
      {text:"Busco otras copias del libro.",w:{sabio:3},tags:["verify"]},
      {text:"Estudio las huellas que dejaron las páginas arrancadas.",w:{sabio:2,artesano:1},tags:["accept_trace"]},
      {text:"Imagino qué pudo haber allí, sabiendo que es una hipótesis.",w:{nino:1,sabio:2},tags:["invent"]},
      {text:"Acepto que la ausencia puede ser parte del libro.",w:{sabio:2,sombra:1},tags:["accept_ambiguity"]}
    ]},
    {id:"sabio-03",focus:"sabio",text:"Una evidencia sólida contradice una historia que te encanta contar. ¿Qué haces?",answers:[
      {text:"Cambio la historia.",w:{sabio:3,umbral:1},tags:["change_belief"]},
      {text:"Distingo qué parte es simbólica y qué parte es factual.",w:{sabio:3,artesano:1},tags:["integrate"]},
      {text:"Busco si la evidencia admite otra interpretación.",w:{sabio:2},tags:["verify"]},
      {text:"Me cuesta soltarla aunque sepa que no es exacta.",w:{sombra:2,sabio:1},tags:["delay_change"]}
    ]},
    {id:"sabio-04",focus:"sabio",text:"Un mapa del bosque no muestra lugares: sólo contiene preguntas escritas en distintos puntos.",answers:[
      {text:"Elijo la pregunta que más me incomoda.",w:{sabio:2,sombra:2},tags:["seek_inward"]},
      {text:"Empiezo por la pregunta que puedo comprobar.",w:{sabio:3},tags:["verify"]},
      {text:"Voy hacia la que no entiendo.",w:{sabio:2,umbral:1},tags:["open_unknown"]},
      {text:"Escribo mi propia pregunta en el mapa.",w:{trickster:1,sabio:2},tags:["question_rules"]}
    ]},
    {id:"sabio-05",focus:"sabio",text:"Obtienes por fin una respuesta que buscaste durante años, pero esa respuesta abre tres preguntas nuevas.",answers:[
      {text:"Eso me entusiasma.",w:{sabio:3,nino:1},tags:["open_unknown"]},
      {text:"Quiero cerrar primero la pregunta original.",w:{sabio:2,artesano:1},tags:["need_structure"]},
      {text:"Me pregunto si alguna respuesta termina realmente algo.",w:{sabio:2,trickster:1},tags:["accept_ambiguity"]},
      {text:"Necesito un descanso antes de seguir buscando.",w:{umbral:1,sombra:1},tags:["protect_boundary"]}
    ]},
    {id:"sabio-06",focus:"sabio",text:"Puedes conocer la explicación exacta de un misterio que amas, pero después nunca volverá a parecerte misterioso.",answers:[
      {text:"Quiero saberla de todos modos.",w:{sabio:3},tags:["seek_truth"]},
      {text:"Prefiero conservar una parte sin explicar.",w:{nino:2,sabio:1},tags:["accept_ambiguity"]},
      {text:"Quiero saber cómo se llegó a esa explicación, no sólo la respuesta.",w:{sabio:2,artesano:1},tags:["need_structure"]},
      {text:"Desconfío de una explicación que promete eliminar por completo el misterio.",w:{trickster:1,sabio:2},tags:["question_rules"]}
    ]},

    // ARTESANO
    {id:"artesano-01",focus:"artesano",text:"Una taza reparada conserva una grieta visible. Puedes ocultarla por completo o dejar la cicatriz a la vista.",answers:[
      {text:"Dejo la reparación visible.",w:{artesano:2,sombra:2},tags:["accept_trace"]},
      {text:"La oculto si puedo hacerlo bien.",w:{artesano:2},tags:["repair"]},
      {text:"Decido según la historia de la pieza.",w:{artesano:2,sabio:1},tags:["integrate"]},
      {text:"Convierto la grieta en el centro del diseño.",w:{artesano:2,trickster:1},tags:["make_visible"]}
    ]},
    {id:"artesano-02",focus:"artesano",text:"Te entregan una herramienta antigua cuyo uso nadie recuerda. ¿Qué haces?",answers:[
      {text:"La pruebo con distintos materiales hasta entenderla.",w:{artesano:3,nino:1},tags:["make_visible"]},
      {text:"Investigo primero quién la usaba y para qué.",w:{sabio:2,artesano:1},tags:["verify"]},
      {text:"La transformo en una herramienta nueva.",w:{artesano:2,trickster:1},tags:["repair"]},
      {text:"La conservo sin forzarle una función.",w:{artesano:1,sombra:1},tags:["accept_trace"]}
    ]},
    {id:"artesano-03",focus:"artesano",text:"Una obra en la que trabajaste mucho empieza a pedir una forma distinta de la que habías planeado.",answers:[
      {text:"Cambio el plan y sigo lo que apareció.",w:{artesano:3,umbral:1},tags:["change_belief"]},
      {text:"Intento mantener el diseño original.",w:{artesano:2},tags:["need_structure"]},
      {text:"Hago una segunda versión para probar ambas posibilidades.",w:{artesano:3,sabio:1},tags:["integrate"]},
      {text:"Rompo una parte para obligarme a encontrar otra solución.",w:{artesano:2,trickster:2},tags:["question_rules"]}
    ]},
    {id:"artesano-04",focus:"artesano",text:"Tienes que elegir entre una pieza perfectamente idéntica a cien anteriores y otra con una pequeña irregularidad hecha a mano.",answers:[
      {text:"Elijo la irregular.",w:{artesano:3,sombra:1},tags:["accept_trace"]},
      {text:"Depende de para qué debe servir.",w:{artesano:2,sabio:1},tags:["need_structure"]},
      {text:"Elijo la perfecta si la precisión es parte de la obra.",w:{artesano:2},tags:["verify"]},
      {text:"Quiero saber cuál de las dos cuenta mejor cómo fue hecha.",w:{artesano:2,sabio:1},tags:["seek_truth"]}
    ]},
    {id:"artesano-05",focus:"artesano",text:"Un material se resiste una y otra vez a convertirse en lo que habías imaginado.",answers:[
      {text:"Cambio mi idea para escuchar lo que el material permite.",w:{artesano:3,umbral:1},tags:["integrate"]},
      {text:"Insisto hasta dominar la técnica.",w:{artesano:3,sabio:1},tags:["need_control"]},
      {text:"Lo dejo y vuelvo más tarde.",w:{artesano:1,umbral:1},tags:["protect_boundary"]},
      {text:"Uso el fracaso como parte visible de la pieza.",w:{artesano:2,trickster:2},tags:["accept_trace"]}
    ]},
    {id:"artesano-06",focus:"artesano",text:"Alguien quiere aprender tu oficio y te pide la regla más importante. ¿Qué le dices?",answers:[
      {text:"Primero aprende la técnica; después sabrás cuándo romperla.",w:{artesano:3,trickster:1},tags:["integrate"]},
      {text:"Mira el material antes de imponerle una idea.",w:{artesano:3,sabio:1},tags:["observe_first"]},
      {text:"Equivócate mucho, pero observa cada error.",w:{artesano:2,trickster:1,sabio:1},tags:["accept_trace"]},
      {text:"No hay una única regla que sirva para todos.",w:{trickster:2,artesano:1},tags:["question_rules"]}
    ]},

    // UMBRAL
    {id:"umbral-01",focus:"umbral",text:"Un tren se detiene frente a ti. No muestra destino y sólo permanecerá un minuto.",answers:[
      {text:"Subo.",w:{umbral:3,nino:1},tags:["open_unknown"]},
      {text:"Pregunto al conductor antes de decidir.",w:{sabio:2,umbral:1},tags:["verify"]},
      {text:"No subo sin saber adónde va.",w:{umbral:1,sombra:1},tags:["protect_boundary"]},
      {text:"Miro quiénes bajaron de él antes de decidir.",w:{sabio:1,umbral:2},tags:["observe_first"]}
    ]},
    {id:"umbral-02",focus:"umbral",text:"Para entrar a un nuevo lugar debes dejar un objeto tuyo en la puerta. No sabes si podrás recuperarlo.",answers:[
      {text:"Dejo algo y entro.",w:{umbral:3,sombra:1},tags:["open_unknown"]},
      {text:"Elijo cuidadosamente qué puedo soltar.",w:{umbral:2,sabio:1},tags:["protect_boundary"]},
      {text:"No entro si la condición es irreversible.",w:{sombra:2,umbral:1},tags:["protect_boundary"]},
      {text:"Pregunto por qué el lugar necesita que deje algo.",w:{sabio:2,trickster:1},tags:["question_rules"]}
    ]},
    {id:"umbral-03",focus:"umbral",text:"Una oportunidad importante exige abandonar una forma de vida que ya conoces bien.",answers:[
      {text:"El cambio me atrae aunque no pueda prever todo.",w:{umbral:3,nino:1},tags:["open_unknown"]},
      {text:"Necesito saber qué pierdo y qué gano.",w:{sabio:2,umbral:1},tags:["need_structure"]},
      {text:"Me cuesta dejar algo que todavía funciona.",w:{sombra:2,umbral:1},tags:["delay_change"]},
      {text:"Intento construir una transición, no un corte brusco.",w:{artesano:2,umbral:2},tags:["repair"]}
    ]},
    {id:"umbral-04",focus:"umbral",text:"Llegas a un puente cubierto de niebla. Sólo puedes ver los primeros tres pasos.",answers:[
      {text:"Doy esos tres pasos y veo qué aparece después.",w:{umbral:3,nino:1},tags:["open_unknown"]},
      {text:"Espero a que la niebla cambie.",w:{sabio:1,umbral:1},tags:["observe_first"]},
      {text:"Busco otra manera de comprobar si el puente continúa.",w:{sabio:2,artesano:1},tags:["verify"]},
      {text:"No cruzo si no puedo ver el otro lado.",w:{sombra:2,umbral:1},tags:["need_control"]}
    ]},
    {id:"umbral-05",focus:"umbral",text:"Recibes una carta dirigida a la persona que eras hace diez años. La carta dice: «ya puedes dejarme ir». ¿Qué haces?",answers:[
      {text:"La leo completa y la guardo.",w:{umbral:2,sombra:2},tags:["recover_past"]},
      {text:"La quemo después de leerla.",w:{umbral:3,sombra:1},tags:["change_belief"]},
      {text:"Escribo una respuesta.",w:{artesano:1,sombra:2,umbral:1},tags:["integrate"]},
      {text:"No estoy seguro de querer abrirla.",w:{sombra:2,umbral:1},tags:["avoid_past"]}
    ]},
    {id:"umbral-06",focus:"umbral",text:"Sabes que una decisión transformará tu recorrido, pero ninguna opción es claramente correcta.",answers:[
      {text:"Elijo y acepto que parte del sentido aparecerá después.",w:{umbral:3,sabio:1},tags:["accept_ambiguity"]},
      {text:"Busco más información hasta reducir la incertidumbre.",w:{sabio:3,umbral:1},tags:["verify"]},
      {text:"Construyo una prueba pequeña antes de comprometerme.",w:{artesano:2,umbral:2},tags:["repair"]},
      {text:"Espero mientras ninguna opción me obligue a elegir.",w:{sombra:2,umbral:1},tags:["delay_change"]}
    ]}
  ];

  const CLARIFIER_BANK = {
    sombra:[
      {id:"clar-sombra-01",text:"Una persona desconocida señala una parte de ti que nunca habías nombrado. ¿Qué necesitarías para escucharla?",answers:[
        {text:"Reconocer algo de verdad en lo que dice.",w:{sombra:3,sabio:1}},
        {text:"Entender primero de dónde sacó esa impresión.",w:{sabio:2,sombra:1}},
        {text:"Que no intente definirme por completo.",w:{sombra:2,umbral:1}},
        {text:"Poder responderle con la misma libertad.",w:{trickster:1,sombra:2}}
      ]},
      {id:"clar-sombra-02",text:"Si pudieras conversar diez minutos con una parte de ti que normalmente ocultas, ¿qué preferirías preguntarle?",answers:[
        {text:"¿Qué estás intentando proteger?",w:{sombra:3,sabio:1}},
        {text:"¿Desde cuándo estás aquí?",w:{sombra:2,sabio:2}},
        {text:"¿Qué pasaría si te dejara hablar más seguido?",w:{sombra:2,umbral:2}},
        {text:"¿De qué te ríes cuando yo me pongo demasiado serio?",w:{sombra:2,trickster:2}}
      ]},
      {id:"clar-sombra-03",text:"Ves una sombra que imita todos tus movimientos excepto uno. ¿Qué te interesa más?",answers:[
        {text:"El único movimiento diferente.",w:{sombra:3,sabio:1}},
        {text:"Saber si la sombra me imita o yo la imito a ella.",w:{sombra:2,trickster:1,sabio:1}},
        {text:"Acercarme hasta ver dónde deja de parecerse a mí.",w:{sombra:2,umbral:2}},
        {text:"Mantener distancia y observar el patrón.",w:{sabio:2,sombra:1}}
      ]}
    ],
    trickster:[
      {id:"clar-trickster-01",text:"El duende cambia las reglas justo cuando estabas a punto de ganar. ¿Qué haces?",answers:[
        {text:"Cambio yo también las reglas.",w:{trickster:3}},
        {text:"Le pregunto qué intenta probar.",w:{trickster:1,sabio:2}},
        {text:"Dejo de jugar.",w:{sombra:1,umbral:1}},
        {text:"Me río y sigo si el juego todavía tiene sentido.",w:{trickster:2,nino:2}}
      ]},
      {id:"clar-trickster-02",text:"Una broma revela algo verdadero que nadie quería decir en serio. ¿Qué pesa más para ti?",answers:[
        {text:"La verdad que reveló.",w:{trickster:2,sabio:2}},
        {text:"A quién pudo herir.",w:{sombra:1,umbral:1}},
        {text:"Que sólo haya podido decirse mediante humor.",w:{trickster:3,sombra:1}},
        {text:"La posibilidad de hablar después sin esconderse en la broma.",w:{trickster:2,umbral:1}}
      ]},
      {id:"clar-trickster-03",text:"Si una contradicción no puede resolverse, ¿qué haces con ella?",answers:[
        {text:"La dejo trabajar sin obligarla a cerrarse.",w:{trickster:2,sabio:2}},
        {text:"Busco desde qué supuesto nació.",w:{sabio:3,trickster:1}},
        {text:"Juego con ambas respuestas.",w:{trickster:3,nino:1}},
        {text:"Elijo la que me permita avanzar.",w:{umbral:2,trickster:1}}
      ]}
    ],
    nino:[
      {id:"clar-nino-01",text:"¿Qué tendría que ocurrir para que algo cotidiano volviera a sorprenderte?",answers:[
        {text:"Mirarlo como si nunca lo hubiera visto.",w:{nino:3,sabio:1}},
        {text:"Cambiar su uso por completo.",w:{nino:2,trickster:2}},
        {text:"Descubrir cómo fue hecho.",w:{nino:1,artesano:2}},
        {text:"Compartirlo con alguien que lo ve por primera vez.",w:{nino:3}}
      ]},
      {id:"clar-nino-02",text:"Encuentras un escondite que construiste de niño y aún contiene un objeto. ¿Qué haces primero?",answers:[
        {text:"Lo tomo antes de pensar demasiado.",w:{nino:3,sombra:1}},
        {text:"Intento recordar por qué lo escondí.",w:{nino:2,sombra:2}},
        {text:"Observo cómo está hecho el escondite.",w:{artesano:2,nino:1}},
        {text:"Dejo el objeto allí y vuelvo otro día.",w:{umbral:1,nino:1}}
      ]},
      {id:"clar-nino-03",text:"Si nadie pudiera juzgar lo que haces durante una hora, ¿qué capacidad dejarías jugar?",answers:[
        {text:"La de inventar sin utilidad.",w:{nino:3}},
        {text:"La de hacer algo con mis manos.",w:{nino:2,artesano:2}},
        {text:"La de preguntar cosas absurdas.",w:{nino:2,trickster:2}},
        {text:"La de volver a algo que abandoné hace años.",w:{nino:2,sombra:1}}
      ]}
    ],
    sabio:[
      {id:"clar-sabio-01",text:"¿Qué te parece más peligroso: una pregunta sin respuesta o una respuesta que nadie cuestiona?",answers:[
        {text:"La respuesta que nadie cuestiona.",w:{sabio:3,trickster:1}},
        {text:"La pregunta sin respuesta si obliga a actuar igual.",w:{sabio:2,umbral:1}},
        {text:"Depende de quién tenga poder para imponer la respuesta.",w:{sabio:3}},
        {text:"Ninguna: el peligro está en dejar de mirar.",w:{sabio:3,sombra:1}}
      ]},
      {id:"clar-sabio-02",text:"Una explicación es hermosa, coherente y falsa. Otra es incompleta, incómoda y verificable. ¿Cuál conservas?",answers:[
        {text:"La verificable.",w:{sabio:3,sombra:1}},
        {text:"La hermosa como relato, pero no como hecho.",w:{sabio:2,nino:1}},
        {text:"Ambas, separando claramente qué es cada una.",w:{sabio:3,artesano:1}},
        {text:"Quiero saber por qué la falsa resultaba tan convincente.",w:{sabio:3,sombra:1}}
      ]},
      {id:"clar-sabio-03",text:"Llegas al final de una investigación y la conclusión es «no sabemos». ¿Qué significa para ti?",answers:[
        {text:"Un resultado válido si se llegó con rigor.",w:{sabio:3}},
        {text:"El comienzo de una pregunta mejor.",w:{sabio:3,nino:1}},
        {text:"Una invitación a construir otra forma de observar.",w:{sabio:2,artesano:1}},
        {text:"Algo difícil de aceptar si esperaba una respuesta definitiva.",w:{sabio:1,sombra:2}}
      ]}
    ],
    artesano:[
      {id:"clar-artesano-01",text:"¿Cuándo sabes que una obra está terminada?",answers:[
        {text:"Cuando ya no necesita que yo la siga corrigiendo.",w:{artesano:3}},
        {text:"Cuando puedo ver también sus imperfecciones sin querer ocultarlas.",w:{artesano:2,sombra:2}},
        {text:"Cuando empieza a decir algo que no planeé.",w:{artesano:2,trickster:1}},
        {text:"Nunca del todo; sólo decido dejarla ir.",w:{artesano:2,umbral:2}}
      ]},
      {id:"clar-artesano-02",text:"Una reparación perfecta borra toda huella de la rotura. ¿Eso siempre es mejor?",answers:[
        {text:"No. A veces la huella forma parte de la historia.",w:{artesano:3,sombra:1}},
        {text:"Sí, si la función exige integridad.",w:{artesano:3}},
        {text:"Depende de qué queremos conservar: objeto, uso o memoria.",w:{artesano:2,sabio:2}},
        {text:"Prefiero transformar la rotura en algo nuevo.",w:{artesano:2,trickster:2}}
      ]},
      {id:"clar-artesano-03",text:"Si tus manos saben hacer algo que aún no puedes explicar, ¿qué haces con ese conocimiento?",answers:[
        {text:"Sigo practicándolo y observo.",w:{artesano:3,sabio:1}},
        {text:"Intento encontrar palabras para transmitirlo.",w:{artesano:2,sabio:2}},
        {text:"Acepto que una parte del oficio puede ser tácita.",w:{artesano:3}},
        {text:"Lo enseño haciendo, no explicando.",w:{artesano:3,nino:1}}
      ]}
    ],
    umbral:[
      {id:"clar-umbral-01",text:"¿Qué te ayuda más a cruzar una etapa que ya terminó?",answers:[
        {text:"Entender por qué terminó.",w:{umbral:2,sabio:2}},
        {text:"Hacer un gesto concreto de despedida.",w:{umbral:3,artesano:1}},
        {text:"Tener curiosidad por lo que viene.",w:{umbral:3,nino:1}},
        {text:"Reconocer lo que todavía me cuesta soltar.",w:{umbral:2,sombra:2}}
      ]},
      {id:"clar-umbral-02",text:"Una puerta sólo se abre después de cerrarse otra detrás de ti. ¿Qué miras antes de cruzar?",answers:[
        {text:"Lo que dejo atrás.",w:{umbral:2,sombra:2}},
        {text:"Lo poco que puedo ver adelante.",w:{umbral:3,nino:1}},
        {text:"El mecanismo de la puerta.",w:{umbral:1,artesano:2}},
        {text:"Quién decidió que no puede permanecer abierta.",w:{umbral:1,trickster:2}}
      ]},
      {id:"clar-umbral-03",text:"¿Qué diferencia un cambio verdadero de una simple novedad?",answers:[
        {text:"Que modifica algo que ya no puede volver exactamente a ser igual.",w:{umbral:3,sombra:1}},
        {text:"Que exige una decisión sostenida, no sólo entusiasmo.",w:{umbral:3,artesano:1}},
        {text:"Que cambia también la forma de comprender lo anterior.",w:{umbral:2,sabio:2}},
        {text:"Que abre posibilidades que antes ni siquiera veía.",w:{umbral:3,nino:1}}
      ]}
    ]
  };

  return {QUESTION_BANK, CLARIFIER_BANK};
})();
