window.ESPEJO_DATA = (() => {

  const DIMENSIONS = {
    sombra: {
      label: "La Sombra",
      essence: "lo que incomoda, se evita o todavía no ha sido integrado"
    },
    trickster: {
      label: "El Trickster",
      essence: "la ruptura, la paradoja, el humor y aquello que desordena certezas"
    },
    nino: {
      label: "El Niño",
      essence: "el asombro, el juego y la posibilidad de mirar sin saber de antemano"
    },
    sabio: {
      label: "El Sabio",
      essence: "la búsqueda de sentido, observación y comprensión"
    },
    artesano: {
      label: "El Artesano",
      essence: "la transformación paciente de la materia y de la experiencia"
    },
    umbral: {
      label: "El Umbral",
      essence: "la transición, la decisión y el paso entre una forma conocida y otra posible"
    }
  };

  const CORE = [
    {
      text: "Encuentras una puerta en medio del bosque. Ayer no estaba allí. Nadie más parece verla. ¿Qué haces?",
      answers: [
        {text:"La abro antes de pensarlo demasiado.", w:{nino:2,umbral:2}, tags:["open_unknown"]},
        {text:"La observo hasta entender qué puede ser.", w:{sabio:2,umbral:1}, tags:["observe_first"]},
        {text:"Busco marcas: quién la hizo, con qué, para qué.", w:{artesano:2,sabio:1}, tags:["need_structure"]},
        {text:"No la abro. Que exista no significa que deba cruzarla.", w:{sombra:2,umbral:1}, tags:["protect_boundary"]}
      ]
    },
    {
      text: "Un duende te dice: «Sé algo de ti que tú todavía no sabes». ¿Qué respuesta se parece más a la tuya?",
      answers: [
        {text:"Entonces dímelo.", w:{sombra:1,umbral:2}, tags:["seek_truth"]},
        {text:"Primero quiero saber cómo podrías saberlo.", w:{sabio:2,artesano:1}, tags:["verify"]},
        {text:"Le respondería con otra pregunta para desconcertarlo.", w:{trickster:2,sabio:1}, tags:["play_rules"]},
        {text:"Me reiría. Tal vez él tampoco sabe tanto como cree.", w:{trickster:2,nino:1}, tags:["play_rules"]}
      ]
    },
    {
      text: "Te devuelve un objeto que perdiste hace muchos años. No recordabas cuánto te importaba. ¿Qué haces primero?",
      answers: [
        {text:"Lo tomo. Quiero sentir otra vez lo que significaba.", w:{nino:2,sombra:1}, tags:["recover_past"]},
        {text:"Le pregunto dónde lo encontró.", w:{sabio:2}, tags:["verify"]},
        {text:"Miro si sigue siendo el mismo objeto o si fue reparado.", w:{artesano:2,sabio:1}, tags:["need_structure"]},
        {text:"Dudo en aceptarlo. Algunas cosas quizá se pierden por una razón.", w:{sombra:2,umbral:1}, tags:["protect_boundary"]}
      ]
    },
    {
      text: "El sendero se divide. Un camino tiene señales; el otro parece no haber sido recorrido nunca.",
      answers: [
        {text:"Voy por donde no hay señales.", w:{nino:2,umbral:2}, tags:["open_unknown"]},
        {text:"Leo todas las señales antes de decidir.", w:{sabio:2}, tags:["observe_first"]},
        {text:"Busco huellas reales, no señales.", w:{artesano:1,sabio:1}, tags:["verify"]},
        {text:"Me pregunto quién decidió que uno de los caminos era el correcto.", w:{trickster:2,umbral:1}, tags:["question_rules"]}
      ]
    },
    {
      text: "Escuchas una risa detrás de ti. Cuando te das vuelta, no hay nadie.",
      answers: [
        {text:"Me río también.", w:{trickster:2,nino:1}, tags:["play_rules"]},
        {text:"Quiero encontrar de dónde vino.", w:{sabio:1,nino:1}, tags:["open_unknown"]},
        {text:"Me inquieta más no poder explicarla que la risa misma.", w:{sombra:2,sabio:1}, tags:["need_control"]},
        {text:"Sigo caminando. No todo necesita una explicación.", w:{umbral:1,trickster:1}, tags:["accept_ambiguity"]}
      ]
    },
    {
      text: "Encuentras una figura rota. Nadie sabe quién la hizo ni por qué fue abandonada.",
      answers: [
        {text:"Intento repararla.", w:{artesano:3}, tags:["repair"]},
        {text:"La dejo como está. La fractura también cuenta algo.", w:{sombra:1,sabio:2}, tags:["accept_trace"]},
        {text:"Imagino una historia completamente nueva para ella.", w:{nino:2,trickster:1}, tags:["invent"]},
        {text:"Busco primero rastros de su origen.", w:{sabio:2,artesano:1}, tags:["verify"]}
      ]
    },
    {
      text: "Descubres algo verdadero que contradice una idea que has sostenido durante mucho tiempo.",
      answers: [
        {text:"La cambio, aunque me incomode.", w:{umbral:2,sombra:2}, tags:["seek_truth","change_belief"]},
        {text:"Necesito comprobarlo varias veces.", w:{sabio:2}, tags:["verify"]},
        {text:"Intento hacer convivir ambas ideas antes de descartar una.", w:{sabio:1,artesano:2}, tags:["integrate"]},
        {text:"Prefiero no decidir todavía.", w:{sombra:1,umbral:1}, tags:["delay_change"]}
      ]
    },
    {
      text: "Te encuentras con una versión de ti mismo cuando eras niño. Te mira, pero no dice nada.",
      answers: [
        {text:"Le pregunto qué recuerda de mí.", w:{nino:2,sombra:2}, tags:["recover_past"]},
        {text:"Juego con él sin preguntarle nada.", w:{nino:3}, tags:["play_rules"]},
        {text:"Quiero explicarle en quién se convertirá.", w:{sabio:1,artesano:1}, tags:["need_structure"]},
        {text:"Me costaría sostenerle la mirada.", w:{sombra:3}, tags:["avoid_past"]}
      ]
    },
    {
      text: "Una regla que todos obedecen deja de tener sentido para ti.",
      answers: [
        {text:"La rompo para ver qué ocurre.", w:{trickster:3}, tags:["question_rules"]},
        {text:"Pregunto por qué existe antes de obedecerla otra vez.", w:{sabio:2,trickster:1}, tags:["question_rules"]},
        {text:"Busco una forma mejor de hacer lo mismo.", w:{artesano:2,umbral:1}, tags:["repair"]},
        {text:"La sigo mientras decido si estoy dispuesto a asumir el costo de romperla.", w:{umbral:2,sombra:1}, tags:["protect_boundary"]}
      ]
    },
    {
      text: "Sueñas varias veces con el mismo lugar que nunca has visitado. ¿Qué haces con ese sueño?",
      answers: [
        {text:"Lo dibujo o construyo para poder verlo despierto.", w:{artesano:2,nino:1}, tags:["make_visible"]},
        {text:"Anoto cada detalle y busco patrones.", w:{sabio:2,sombra:1}, tags:["observe_first"]},
        {text:"Intento volver allí en el siguiente sueño.", w:{nino:2,umbral:1}, tags:["open_unknown"]},
        {text:"Me pregunto qué parte de mí insiste en llevarme allí.", w:{sombra:2,sabio:1}, tags:["seek_inward"]}
      ]
    }
  ];

  const CLARIFIERS = {
    sombra: {
      text:"Al final del bosque hay un espejo. Tu reflejo hace un gesto que tú no hiciste. ¿Qué te resulta más difícil aceptar?",
      answers:[
        {text:"Que el gesto también pueda pertenecerme.",w:{sombra:3,sabio:1}},
        {text:"No saber por qué ocurrió.",w:{sabio:2,sombra:1}},
        {text:"Que una parte de mí encuentre divertido asustarme.",w:{trickster:2,sombra:1}},
        {text:"Que quizá deba acercarme en lugar de alejarme.",w:{umbral:2,sombra:1}}
      ]
    },
    trickster: {
      text:"En medio de una ceremonia solemne, alguien se ríe y todo el mundo queda en silencio. ¿Qué ves en esa risa?",
      answers:[
        {text:"Una falta de respeto.",w:{sombra:1,umbral:1}},
        {text:"Una grieta que revela que la ceremonia también es un juego.",w:{trickster:3,sabio:1}},
        {text:"Una oportunidad para que todos vuelvan a ser humanos.",w:{trickster:2,nino:2}},
        {text:"Depende de quién ríe y de quién puede permitirse hacerlo.",w:{sabio:2,trickster:1}}
      ]
    },
    nino: {
      text:"Te entregan un objeto hermoso que no tiene ninguna utilidad. ¿Qué haces con él?",
      answers:[
        {text:"Juego hasta inventarle una.",w:{nino:3,trickster:1}},
        {text:"Lo conservo precisamente porque no sirve para nada.",w:{nino:2,sabio:1}},
        {text:"Intento descubrir cómo fue hecho.",w:{artesano:2,sabio:1}},
        {text:"Me cuesta darle valor si no cumple una función.",w:{artesano:1,sombra:1}}
      ]
    },
    sabio: {
      text:"En una biblioteca infinita existe un solo libro que no puedes leer. ¿Qué haces?",
      answers:[
        {text:"Aprendo el idioma.",w:{sabio:3,artesano:1}},
        {text:"Busco a alguien que pueda leerlo.",w:{sabio:2,umbral:1}},
        {text:"Acepto que quizá ese libro no esté hecho para ser entendido.",w:{sombra:1,umbral:2}},
        {text:"Empiezo a imaginar qué dice.",w:{nino:2,trickster:1}}
      ]
    },
    artesano: {
      text:"Te dan una materia que nunca has trabajado. Nadie puede enseñarte a usarla.",
      answers:[
        {text:"La pruebo con las manos hasta que responda.",w:{artesano:3,nino:1}},
        {text:"Primero observo cómo reacciona a cada cambio.",w:{artesano:2,sabio:2}},
        {text:"La rompo para saber de qué está hecha.",w:{artesano:2,trickster:1}},
        {text:"Dejo que su forma sugiera qué quiere convertirse.",w:{artesano:2,umbral:1}}
      ]
    },
    umbral: {
      text:"Cruzas un puente. Al mirar atrás, el puente ha desaparecido. ¿Qué pensamiento aparece primero?",
      answers:[
        {text:"Ahora tengo que descubrir qué hay adelante.",w:{umbral:3,nino:1}},
        {text:"¿Por qué desapareció?",w:{sabio:2,umbral:1}},
        {text:"Algo de mí sabía que no habría regreso.",w:{sombra:2,umbral:2}},
        {text:"Entonces construiré otro cuando sea necesario.",w:{artesano:2,umbral:1}}
      ]
    }
  };

  const PAIRS = {
    "artesano|sombra": {
      title:"El Artesano de la Sombra",
      copy:"Tu recorrido se acercó a lo desconocido intentando transformarlo, tocarlo o comprender cómo está hecho. Pero junto a esa necesidad apareció también aquello que no siempre se deja reparar. La materia puede cambiar en tus manos; no todo lo interior obedece de la misma manera.",
      question:"¿Qué haces cuando aquello que encuentras no puede ser arreglado, sólo reconocido?"
    },
    "nino|trickster": {
      title:"El Pequeño Embaucador",
      copy:"El juego y la ruptura caminaron juntos. Donde otros buscan una regla, tú pareciste encontrar una posibilidad de cambiarla. Esta figura recuerda que la imaginación puede abrir puertas, aunque también puede utilizar la risa para no permanecer demasiado tiempo frente a lo incómodo.",
      question:"¿Cuándo el juego te libera y cuándo te ayuda a escapar?"
    },
    "sabio|umbral": {
      title:"El Guardián del Umbral",
      copy:"No pareces cruzar por impulso: observas, preguntas y buscas sentido antes de pasar. Sin embargo, todo umbral termina exigiendo un momento en el que comprender deja de ser suficiente y hay que decidir.",
      question:"¿Cuánto necesitas saber antes de permitirte atravesar una puerta?"
    },
    "sombra|trickster": {
      title:"El Habitante del Revés",
      copy:"Lo incómodo y lo paradójico aparecieron cerca uno del otro. Esta figura habita donde una certeza se da vuelta y muestra su reverso. A veces la burla revela lo que una explicación demasiado ordenada intenta esconder.",
      question:"¿Qué verdad puede decir una risa que no te atreverías a formular seriamente?"
    },
    "artesano|nino": {
      title:"El Constructor de Imposibles",
      copy:"La imaginación apareció unida al deseo de convertirla en materia. No basta con fantasear: algo en tu recorrido quiso probar, construir, reparar o dar forma. El riesgo es creer que todo misterio necesita terminar convertido en objeto.",
      question:"¿Puedes conservar el asombro después de descubrir cómo está hecho?"
    },
    "sabio|sombra": {
      title:"El Viejo que Mira Hacia Adentro",
      copy:"La búsqueda de comprensión estuvo acompañada por una fuerte atención hacia aquello que permanece oculto. Esta figura no teme demasiado a las preguntas, pero sabe que explicar algo y aceptarlo son movimientos diferentes.",
      question:"¿Qué cambiaría si comprendieras perfectamente algo que todavía no quieres aceptar?"
    },
    "nino|umbral": {
      title:"El Caminante del Bosque",
      copy:"El asombro apareció cerca del movimiento. Hay una disposición a cruzar, explorar y dejar que lo desconocido modifique el recorrido. El desafío de esta figura es distinguir la curiosidad auténtica de la necesidad de estar siempre comenzando algo nuevo.",
      question:"¿Qué ocurre cuando el verdadero viaje consiste en quedarse?"
    },
    "artesano|sabio": {
      title:"El Maestro de las Manos Silenciosas",
      copy:"Comprender y hacer parecieron inseparables. Observas para intervenir e intervienes para comprender. Esta figura sabe que el conocimiento también puede residir en las manos, aunque a veces podría querer convertir toda incertidumbre en un mecanismo explicable.",
      question:"¿Qué sabes hacer que todavía no sabes explicar?"
    },
    "artesano|trickster": {
      title:"El Forjador de Accidentes",
      copy:"La transformación se encontró con la ruptura. Esta figura aprende alterando reglas, probando límites y permitiendo que el error produzca una forma inesperada. Su sombra aparece cuando romper se vuelve más atractivo que terminar.",
      question:"¿Qué parte de tus errores merece ser corregida y cuál merece convertirse en método?"
    },
    "artesano|umbral": {
      title:"El Constructor de Puertas",
      copy:"Tu recorrido relacionó el cambio con la capacidad de construir una salida, un método o una nueva forma. No esperas solamente a que aparezca un camino: existe una tendencia a fabricarlo. Pero no todo tránsito necesita una estructura previa.",
      question:"¿Podrías cruzar un umbral que todavía no sabes cómo construir?"
    },
    "nino|sabio": {
      title:"El Niño Antiguo",
      copy:"La curiosidad y la búsqueda de significado aparecieron juntas. Preguntar no anuló el asombro; pareció alimentarlo. Esta figura recuerda que saber más no necesariamente vuelve al mundo menos misterioso.",
      question:"¿Qué pregunta conservarías incluso si pudieras obtener su respuesta?"
    },
    "nino|sombra": {
      title:"El Niño de la Cueva",
      copy:"El asombro se acercó a recuerdos, incomodidades y lugares que no siempre se miran de frente. Esta figura sugiere que algunas partes olvidadas no regresan para que volvamos al pasado, sino para recuperar posibilidades que quedaron allí.",
      question:"¿Qué parte de tu capacidad de asombro aprendiste a esconder para poder crecer?"
    },
    "sabio|trickster": {
      title:"El Sabio Burlón",
      copy:"La necesidad de comprender no estuvo reñida con cuestionar las propias reglas. Esta figura sospecha de las respuestas demasiado perfectas y utiliza la paradoja para comprobar si una certeza resiste ser mirada desde otro ángulo.",
      question:"¿Qué idea importante para ti debería soportar que te rías de ella?"
    },
    "trickster|umbral": {
      title:"El Guardián del Revés",
      copy:"El cambio apareció acompañado por una inclinación a romper el orden esperado. Esta figura no siempre abre la puerta correcta: a veces descubre que la puerta era precisamente aquello que todos daban por sentado.",
      question:"¿Qué regla tendrías que desobedecer para descubrir si realmente era necesaria?"
    },
    "sombra|umbral": {
      title:"El Custodio de la Noche",
      copy:"El tránsito y aquello que incomoda caminaron muy cerca. Esta figura aparece cuando avanzar exige dejar de evitar una parte de la experiencia. No promete que cruzar elimine el miedo; propone que el miedo también puede cruzar contigo.",
      question:"¿Qué puerta sigues llamando peligrosa porque todavía no estás dispuesto a atravesarla?"
    }
  };

  const GENERIC_REACTIONS = [
    "Mmm… esa elección deja una huella.",
    "Curioso. No es lo mismo mirar que acercarse.",
    "Ya veo… aunque todavía no sé si te creo del todo.",
    "Interesante. A veces elegimos antes de saber por qué.",
    "Eso cambia un poco el sendero.",
    "No hay respuesta correcta aquí. Sólo rastros.",
    "Bien. Guardaré eso sin ponerle nombre todavía."
  ];

  const TENSIONS = [
    {a:"seek_truth",b:"delay_change",text:"Dijiste acercarte a la verdad, pero también apareció el impulso de aplazar el cambio cuando esa verdad altera una certeza."},
    {a:"open_unknown",b:"need_control",text:"La curiosidad hacia lo desconocido convivió con la necesidad de comprenderlo o controlarlo antes de sentirte seguro."},
    {a:"open_unknown",b:"protect_boundary",text:"Aparecieron al mismo tiempo el deseo de cruzar y la necesidad de proteger el límite. Esa tensión puede ser más interesante que elegir uno de los dos lados."},
    {a:"play_rules",b:"need_structure",text:"El juego y la estructura se alternaron: una parte quiere mover las reglas y otra necesita saber cómo están construidas."},
    {a:"recover_past",b:"avoid_past",text:"El pasado apareció como algo que atrae y, al mismo tiempo, puede resultar difícil de sostener de frente."},
    {a:"question_rules",b:"protect_boundary",text:"Cuestionar reglas no significó necesariamente querer romper todos los límites. Algo distingue para ti entre una norma impuesta y un límite necesario."}
  ];

  const fallbackPair = {
    title:"El Duende del Espejo",
    copy:"Dos figuras quedaron muy próximas durante el recorrido. Más que una categoría, apareció una tensión: una manera de acercarte a lo desconocido y otra que la acompaña, la discute o la compensa.",
    question:"¿Qué parte de lo que acabas de elegir te sorprendió más?"
  };


  return {DIMENSIONS,CORE,CLARIFIERS,PAIRS,GENERIC_REACTIONS,TENSIONS,fallbackPair};
})();
