window.ESPEJO_SIMPLE = (() => {
  const COPY = {
  "Encuentras una puerta en medio del bosque. Ayer no estaba allí. Nadie más parece verla. ¿Qué haces?": {
    "text": "Encuentras una puerta en medio del bosque. Ayer no estaba ahí. ¿Qué haces?",
    "answers": [
      "La abro.",
      "Primero la miro bien.",
      "Busco alguna pista.",
      "Prefiero no entrar."
    ]
  },
  "Un duende te dice: «Sé algo de ti que tú todavía no sabes». ¿Qué respuesta se parece más a la tuya?": {
    "text": "Un duende te dice: «Sé algo de ti que todavía no sabes». ¿Qué le respondes?",
    "answers": [
      "Entonces dímelo.",
      "¿Y cómo lo sabes?",
      "Le respondo con otra pregunta.",
      "Me río. Tal vez no sabe tanto."
    ]
  },
  "Te devuelve un objeto que perdiste hace muchos años. No recordabas cuánto te importaba. ¿Qué haces primero?": {
    "text": "El duende te devuelve algo que perdiste hace años. ¿Qué haces primero?",
    "answers": [
      "Lo tomo. Quiero volver a sentirlo.",
      "Le pregunto dónde lo encontró.",
      "Miro si cambió o fue reparado.",
      "Dudo en aceptarlo."
    ]
  },
  "El sendero se divide. Un camino tiene señales; el otro parece no haber sido recorrido nunca.": {
    "text": "El camino se divide: uno tiene señales y el otro parece nuevo. ¿Cuál eliges?",
    "answers": [
      "Voy por el camino sin señales.",
      "Leo las señales antes de decidir.",
      "Busco huellas para orientarme.",
      "Me pregunto quién decidió cuál era el correcto."
    ]
  },
  "Escuchas una risa detrás de ti. Cuando te das vuelta, no hay nadie.": {
    "text": "Escuchas una risa detrás de ti. Te das vuelta y no hay nadie. ¿Qué haces?",
    "answers": [
      "Me río también.",
      "Busco de dónde vino.",
      "Me inquieta no poder explicarlo.",
      "Sigo caminando."
    ]
  },
  "Encuentras una figura rota. Nadie sabe quién la hizo ni por qué fue abandonada.": {
    "text": "Encuentras una figura rota y nadie sabe de quién era. ¿Qué haces?",
    "answers": [
      "Intento repararla.",
      "La dejo como está.",
      "Le invento una historia nueva.",
      "Busco pistas sobre su origen."
    ]
  },
  "Descubres algo verdadero que contradice una idea que has sostenido durante mucho tiempo.": {
    "text": "Descubres que algo que creías cierto quizá no lo era. ¿Qué haces?",
    "answers": [
      "Cambio de opinión, aunque me cueste.",
      "Necesito comprobarlo bien.",
      "Intento entender las dos versiones.",
      "Prefiero pensarlo un poco más."
    ]
  },
  "Te encuentras con una versión de ti mismo cuando eras niño. Te mira, pero no dice nada.": {
    "text": "Te encuentras con tu versión de niño. Te mira en silencio. ¿Qué haces?",
    "answers": [
      "Le pregunto qué recuerda de mí.",
      "Juego con él.",
      "Le cuento en quién se convertirá.",
      "Me costaría mirarlo a los ojos."
    ]
  },
  "Una regla que todos obedecen deja de tener sentido para ti.": {
    "text": "Todos siguen una regla, pero a ti ya no te parece lógica. ¿Qué haces?",
    "answers": [
      "La rompo y veo qué pasa.",
      "Pregunto por qué existe.",
      "Busco una forma mejor de hacerlo.",
      "La sigo por ahora, hasta estar seguro."
    ]
  },
  "Sueñas varias veces con el mismo lugar que nunca has visitado. ¿Qué haces con ese sueño?": {
    "text": "Sueñas varias veces con un lugar que nunca visitaste. ¿Qué haces?",
    "answers": [
      "Lo dibujo o intento construirlo.",
      "Anoto los detalles.",
      "Intento volver en el próximo sueño.",
      "Me pregunto por qué sigo soñando con ese lugar."
    ]
  },
  "Al final del bosque hay un espejo. Tu reflejo hace un gesto que tú no hiciste. ¿Qué te resulta más difícil aceptar?": {
    "text": "Tu reflejo hace un gesto que tú no hiciste. ¿Qué te cuesta más?",
    "answers": [
      "Pensar que ese gesto también puede ser mío.",
      "No saber por qué pasó.",
      "Que una parte de mí lo encuentre divertido.",
      "Tener que acercarme para entender."
    ]
  },
  "En medio de una ceremonia solemne, alguien se ríe y todo el mundo queda en silencio. ¿Qué ves en esa risa?": {
    "text": "En un momento muy serio, alguien se ríe y todos quedan en silencio. ¿Qué ves ahí?",
    "answers": [
      "Una falta de respeto.",
      "Algo que rompe la seriedad.",
      "Una forma de volver todo más humano.",
      "Depende de quién se ríe y por qué."
    ]
  },
  "Te entregan un objeto hermoso que no tiene ninguna utilidad. ¿Qué haces con él?": {
    "text": "Te dan un objeto hermoso que no sirve para nada. ¿Qué haces?",
    "answers": [
      "Juego hasta encontrarle un uso.",
      "Lo guardo porque me gusta.",
      "Intento saber cómo fue hecho.",
      "Me cuesta darle valor si no sirve."
    ]
  },
  "En una biblioteca infinita existe un solo libro que no puedes leer. ¿Qué haces?": {
    "text": "En una biblioteca enorme hay un solo libro que no puedes leer. ¿Qué haces?",
    "answers": [
      "Aprendo el idioma.",
      "Busco a alguien que pueda leerlo.",
      "Acepto que quizá no pueda entenderlo.",
      "Imagino qué dice."
    ]
  },
  "Te dan una materia que nunca has trabajado. Nadie puede enseñarte a usarla.": {
    "text": "Te dan un material que nunca usaste y nadie puede enseñarte. ¿Qué haces?",
    "answers": [
      "Pruebo con las manos hasta entenderlo.",
      "Observo cómo responde.",
      "Lo rompo para ver de qué está hecho.",
      "Dejo que el material me sugiera qué hacer."
    ]
  },
  "Cruzas un puente. Al mirar atrás, el puente ha desaparecido. ¿Qué pensamiento aparece primero?": {
    "text": "Cruzas un puente y, al mirar atrás, ya no está. ¿Qué piensas primero?",
    "answers": [
      "Ahora toca ver qué hay adelante.",
      "¿Por qué desapareció?",
      "Algo de mí sabía que no habría vuelta atrás.",
      "Ya construiré otro si hace falta."
    ]
  },
  "sombra-01": {
    "text": "Alguien te dice que tienes un defecto que tú notas mucho en otras personas. ¿Qué haces?",
    "answers": [
      "Lo niego si no me representa.",
      "Me pregunto por qué me molesta tanto.",
      "Le pido ejemplos.",
      "Hago una broma para quitarle peso."
    ]
  },
  "sombra-02": {
    "text": "En tu casa hay una habitación cerrada y no recuerdas haberla cerrado. ¿Qué haces?",
    "answers": [
      "Busco la llave y entro.",
      "Intento recordar por qué la cerré.",
      "La dejo cerrada por ahora.",
      "Miro bien la puerta antes de decidir."
    ]
  },
  "sombra-03": {
    "text": "Escuchas una grabación vieja tuya diciendo algo que hoy te avergüenza. ¿Qué sientes primero?",
    "answers": [
      "Quisiera borrarla.",
      "Intento recordar quién era entonces.",
      "Me sorprende cuánto cambié.",
      "Me río de esa versión de mí."
    ]
  },
  "sombra-04": {
    "text": "Encuentras una máscara que se parece mucho a tu cara. ¿Qué haces?",
    "answers": [
      "Me la pruebo.",
      "La miro sin ponérmela.",
      "Quiero saber quién la hizo.",
      "La dejo donde estaba."
    ]
  },
  "sombra-05": {
    "text": "Alguien que te cae mal hace algo admirable. ¿Qué haces?",
    "answers": [
      "Lo reconozco aunque siga sin caerme bien.",
      "Desconfío de sus motivos.",
      "Me pregunto si lo estaba juzgando demasiado.",
      "Disfruto la contradicción."
    ]
  },
  "sombra-06": {
    "text": "Tu reflejo sonríe un segundo antes que tú. ¿Qué haces?",
    "answers": [
      "Me acerco al espejo.",
      "Busco una explicación.",
      "Me alejo.",
      "Le sonrío de vuelta."
    ]
  },
  "trickster-01": {
    "text": "Un cartel dice al mismo tiempo «NO PASE» y «POR AQUÍ». ¿Qué haces?",
    "answers": [
      "Paso para ver qué ocurre.",
      "Busco quién puso el cartel.",
      "Busco otro camino.",
      "Le agrego otra indicación."
    ]
  },
  "trickster-02": {
    "text": "Tienes un mapa perfecto, pero aparece un camino que no está dibujado. ¿Qué haces?",
    "answers": [
      "Sigo el camino nuevo.",
      "Lo agrego al mapa.",
      "Empiezo a desconfiar del mapa.",
      "Compruebo si estoy donde creo estar."
    ]
  },
  "trickster-03": {
    "text": "En un momento muy serio, el duende se pone tu sombrero al revés. ¿Qué haces?",
    "answers": [
      "Me río con él.",
      "Le pido que pare.",
      "Me pregunto qué quiere mostrarme.",
      "Hago algo todavía más absurdo."
    ]
  },
  "trickster-04": {
    "text": "Una regla existe sólo porque «siempre se hizo así». ¿Qué haces?",
    "answers": [
      "Pruebo otra manera.",
      "Pregunto para qué se creó.",
      "La mantengo mientras funcione.",
      "La sigo de una forma absurda para mostrar el problema."
    ]
  },
  "trickster-05": {
    "text": "El duende te promete una respuesta si le haces una pregunta que no tenga respuesta. ¿Qué haces?",
    "answers": [
      "Acepto el juego.",
      "Le pregunto quién decide qué tiene respuesta.",
      "No juego.",
      "Invento una pregunta imposible."
    ]
  },
  "trickster-06": {
    "text": "Un error tuyo termina dando un resultado mejor que el plan original. ¿Qué haces?",
    "answers": [
      "Me quedo con ese error.",
      "Intento entender por qué funcionó.",
      "Vuelvo al plan original.",
      "Pruebo a equivocarme de nuevo a propósito."
    ]
  },
  "nino-01": {
    "text": "Ves una pequeña luz flotando entre los árboles. ¿Qué haces?",
    "answers": [
      "La sigo.",
      "La miro desde donde estoy.",
      "Intento grabarla o fotografiarla.",
      "La dejo pasar."
    ]
  },
  "nino-02": {
    "text": "Un niño te pregunta: «¿Dónde van las cosas cuando dejamos de imaginarlas?». ¿Qué respondes?",
    "answers": [
      "Inventamos una respuesta juntos.",
      "Le digo que no sé.",
      "Intento explicarle cómo funciona la memoria.",
      "Le pregunto qué cree él."
    ]
  },
  "nino-03": {
    "text": "Vuelves a un lugar donde jugabas de niño y ahora parece mucho más pequeño. ¿Qué haces?",
    "answers": [
      "Intento verlo como cuando era niño.",
      "Acepto que lo recordaba más grande.",
      "Busco algo que siga igual.",
      "Me gusta que el recuerdo y el lugar real sean distintos."
    ]
  },
  "nino-04": {
    "text": "Te regalan una caja vacía y te dicen que dentro está lo que quieras imaginar. ¿Qué haces?",
    "answers": [
      "La abro como si pudiera haber algo.",
      "Pregunto quién dice que está vacía.",
      "La convierto en otra cosa.",
      "Prefiero algo que ya tenga un uso."
    ]
  },
  "nino-05": {
    "text": "En el bosque suena una canción que no escuchabas desde hace años. ¿Qué haces?",
    "answers": [
      "La sigo.",
      "Me quedo quieto y recuerdo.",
      "Intento reconocer cuál es.",
      "Le invento una letra nueva."
    ]
  },
  "nino-06": {
    "text": "Tienes una tarde libre, sin teléfono y sin obligaciones. ¿Qué haces?",
    "answers": [
      "Veo qué me dan ganas de hacer.",
      "Creo algo sólo por gusto.",
      "Me costaría no hacer algo útil.",
      "Pienso en algo que nunca tengo tiempo de pensar."
    ]
  },
  "sabio-01": {
    "text": "Dos personas de confianza te cuentan versiones muy distintas de lo mismo. ¿Qué haces?",
    "answers": [
      "Busco pruebas fuera de sus versiones.",
      "Pienso que quizá ninguna sabe todo.",
      "Miro qué cambia en cada relato.",
      "Imagino una tercera posibilidad."
    ]
  },
  "sabio-02": {
    "text": "Encuentras un libro al que le faltan justo las páginas que explicarían el misterio. ¿Qué haces?",
    "answers": [
      "Busco otra copia.",
      "Miro las huellas de las páginas arrancadas.",
      "Imagino qué decía, sabiendo que puedo equivocarme.",
      "Acepto que quizá nunca lo sepa."
    ]
  },
  "sabio-03": {
    "text": "Una prueba sólida contradice una historia que te encanta contar. ¿Qué haces?",
    "answers": [
      "Cambio la historia.",
      "Separo lo simbólico de lo que realmente pasó.",
      "Busco si hay otra explicación posible.",
      "Me cuesta soltar esa historia."
    ]
  },
  "sabio-04": {
    "text": "Un mapa del bosque no muestra lugares: sólo preguntas. ¿Por cuál empiezas?",
    "answers": [
      "Por la que más me incomoda.",
      "Por la que puedo comprobar.",
      "Por la que no entiendo.",
      "Escribo mi propia pregunta."
    ]
  },
  "sabio-05": {
    "text": "Por fin encuentras una respuesta, pero aparecen tres preguntas nuevas. ¿Qué sientes?",
    "answers": [
      "Me entusiasma.",
      "Primero quiero cerrar la pregunta original.",
      "Me pregunto si alguna respuesta termina algo.",
      "Necesito descansar antes de seguir."
    ]
  },
  "sabio-06": {
    "text": "Puedes conocer la explicación de un misterio que amas, pero quizá deje de parecerte misterioso. ¿Qué haces?",
    "answers": [
      "Quiero saberla igual.",
      "Prefiero dejar una parte sin explicar.",
      "Quiero saber cómo llegaron a esa explicación.",
      "Desconfío de una explicación que dice resolverlo todo."
    ]
  },
  "artesano-01": {
    "text": "Una taza reparada conserva una grieta visible. ¿Qué prefieres?",
    "answers": [
      "Dejar la reparación visible.",
      "Ocultarla si puedo hacerlo bien.",
      "Decidir según la historia de la taza.",
      "Convertir la grieta en parte del diseño."
    ]
  },
  "artesano-02": {
    "text": "Te dan una herramienta antigua y nadie recuerda para qué servía. ¿Qué haces?",
    "answers": [
      "La pruebo hasta entenderla.",
      "Investigo quién la usaba.",
      "La convierto en otra herramienta.",
      "La guardo sin darle un uso."
    ]
  },
  "artesano-03": {
    "text": "Algo que estás creando empieza a pedir una forma distinta a la que planeaste. ¿Qué haces?",
    "answers": [
      "Cambio el plan.",
      "Mantengo la idea original.",
      "Hago dos versiones.",
      "Rompo una parte para buscar otra solución."
    ]
  },
  "artesano-04": {
    "text": "Puedes elegir entre una pieza perfecta y otra con una pequeña marca hecha a mano. ¿Cuál eliges?",
    "answers": [
      "La que tiene la marca.",
      "Depende de para qué sirve.",
      "La perfecta si necesita precisión.",
      "La que mejor muestre cómo fue hecha."
    ]
  },
  "artesano-05": {
    "text": "Un material no quiere tomar la forma que imaginaste. ¿Qué haces?",
    "answers": [
      "Cambio mi idea.",
      "Insisto hasta aprender a manejarlo.",
      "Lo dejo y vuelvo después.",
      "Uso ese problema como parte de la pieza."
    ]
  },
  "artesano-06": {
    "text": "Alguien quiere aprender tu oficio y te pide un consejo. ¿Qué le dices?",
    "answers": [
      "Aprende la técnica y luego sabrás cuándo romperla.",
      "Mira el material antes de decidir.",
      "Equivócate y observa cada error.",
      "No existe una sola regla para todos."
    ]
  },
  "umbral-01": {
    "text": "Llega un tren sin destino escrito y sólo espera un minuto. ¿Qué haces?",
    "answers": [
      "Subo.",
      "Pregunto adónde va.",
      "No subo sin saber.",
      "Miro quiénes bajaron antes de decidir."
    ]
  },
  "umbral-02": {
    "text": "Para entrar a un lugar nuevo tienes que dejar algo tuyo en la puerta. ¿Qué haces?",
    "answers": [
      "Dejo algo y entro.",
      "Elijo con cuidado qué dejar.",
      "No entro si no puedo recuperarlo.",
      "Pregunto por qué tengo que dejar algo."
    ]
  },
  "umbral-03": {
    "text": "Una oportunidad importante te obliga a dejar una vida que ya conoces. ¿Qué haces?",
    "answers": [
      "El cambio me atrae.",
      "Quiero saber qué pierdo y qué gano.",
      "Me cuesta dejar algo que todavía funciona.",
      "Intento cambiar de a poco."
    ]
  },
  "umbral-04": {
    "text": "Llegas a un puente cubierto de niebla y sólo ves los primeros pasos. ¿Qué haces?",
    "answers": [
      "Doy esos pasos.",
      "Espero un poco.",
      "Busco otra forma de saber si el puente sigue.",
      "No cruzo sin ver el otro lado."
    ]
  },
  "umbral-05": {
    "text": "Recibes una carta para la persona que eras hace diez años. Dice: «ya puedes dejarme ir». ¿Qué haces?",
    "answers": [
      "La leo y la guardo.",
      "La leo y después la quemo.",
      "Escribo una respuesta.",
      "No sé si quiero abrirla."
    ]
  },
  "umbral-06": {
    "text": "Tienes que tomar una decisión importante y ninguna opción parece claramente correcta. ¿Qué haces?",
    "answers": [
      "Elijo y confío en entender más después.",
      "Busco más información.",
      "Hago una prueba pequeña antes de decidir.",
      "Espero mientras pueda."
    ]
  },
  "clar-sombra-01": {
    "text": "Alguien que no conoces te dice algo sobre ti que nunca habías pensado. ¿Qué necesitarías para escucharlo?",
    "answers": [
      "Notar que algo de razón tiene.",
      "Entender por qué piensa eso.",
      "Que no intente decirme quién soy por completo.",
      "Poder responder con la misma libertad."
    ]
  },
  "clar-sombra-02": {
    "text": "Si pudieras hablar diez minutos con una parte de ti que normalmente escondes, ¿qué le preguntarías?",
    "answers": [
      "¿Qué estás tratando de proteger?",
      "¿Desde cuándo estás aquí?",
      "¿Qué pasaría si te escuchara más?",
      "¿De qué te ríes cuando me pongo demasiado serio?"
    ]
  },
  "clar-sombra-03": {
    "text": "Ves una sombra que copia todos tus movimientos menos uno. ¿Qué te interesa más?",
    "answers": [
      "El único movimiento distinto.",
      "Saber quién está copiando a quién.",
      "Acercarme para ver mejor.",
      "Mirar desde lejos y observar."
    ]
  },
  "clar-trickster-01": {
    "text": "El duende cambia las reglas justo cuando ibas a ganar. ¿Qué haces?",
    "answers": [
      "Cambio las reglas también.",
      "Le pregunto qué quiere probar.",
      "Dejo de jugar.",
      "Me río y sigo si todavía es divertido."
    ]
  },
  "clar-trickster-02": {
    "text": "Una broma dice algo verdadero que nadie se animaba a decir. ¿Qué importa más?",
    "answers": [
      "La verdad que mostró.",
      "Si pudo herir a alguien.",
      "Que sólo se pudiera decir como broma.",
      "Poder hablar después sin esconderse en el chiste."
    ]
  },
  "clar-trickster-03": {
    "text": "Hay dos ideas que chocan y ninguna termina de ganar. ¿Qué haces?",
    "answers": [
      "Las dejo ahí un tiempo.",
      "Busco de dónde viene el problema.",
      "Juego con las dos posibilidades.",
      "Elijo la que me permita avanzar."
    ]
  },
  "clar-nino-01": {
    "text": "¿Qué podría hacer que algo de todos los días vuelva a sorprenderte?",
    "answers": [
      "Mirarlo como si fuera la primera vez.",
      "Usarlo de una forma nueva.",
      "Descubrir cómo está hecho.",
      "Verlo con alguien que nunca lo vio."
    ]
  },
  "clar-nino-02": {
    "text": "Encuentras un escondite que hiciste de niño y todavía hay algo dentro. ¿Qué haces primero?",
    "answers": [
      "Lo tomo.",
      "Intento recordar por qué lo escondí.",
      "Miro cómo hice el escondite.",
      "Lo dejo ahí y vuelvo otro día."
    ]
  },
  "clar-nino-03": {
    "text": "Si durante una hora nadie pudiera juzgarte, ¿qué harías?",
    "answers": [
      "Inventaría algo sin pensar si sirve.",
      "Haría algo con mis manos.",
      "Haría preguntas absurdas.",
      "Volvería a algo que dejé hace años."
    ]
  },
  "clar-sabio-01": {
    "text": "¿Qué te preocupa más: una pregunta sin respuesta o una respuesta que nadie cuestiona?",
    "answers": [
      "La respuesta que nadie cuestiona.",
      "La pregunta sin respuesta si igual tengo que actuar.",
      "Depende de quién imponga la respuesta.",
      "Dejar de mirar y preguntar."
    ]
  },
  "clar-sabio-02": {
    "text": "Una explicación es hermosa pero falsa. Otra es incómoda pero se puede comprobar. ¿Cuál eliges?",
    "answers": [
      "La que se puede comprobar.",
      "La hermosa como historia, no como hecho.",
      "Las dos, dejando claro qué es cada una.",
      "Quiero saber por qué la falsa parecía tan creíble."
    ]
  },
  "clar-sabio-03": {
    "text": "Investigas mucho algo y al final la respuesta es «no sabemos». ¿Qué significa para ti?",
    "answers": [
      "Que también es una respuesta válida.",
      "Que apareció una pregunta mejor.",
      "Que hay que mirar de otra manera.",
      "Que me cuesta aceptarlo."
    ]
  },
  "clar-artesano-01": {
    "text": "¿Cuándo sientes que algo que hiciste está terminado?",
    "answers": [
      "Cuando ya no necesita más correcciones.",
      "Cuando puedo ver sus fallas sin esconderlas.",
      "Cuando empieza a mostrar algo que no planeé.",
      "Nunca del todo; simplemente decido soltarlo."
    ]
  },
  "clar-artesano-02": {
    "text": "Una reparación puede borrar por completo una rotura. ¿Siempre es mejor?",
    "answers": [
      "No. A veces la marca cuenta la historia.",
      "Sí, si necesita quedar como nuevo.",
      "Depende de qué queremos conservar.",
      "Prefiero convertir la rotura en algo nuevo."
    ]
  },
  "clar-artesano-03": {
    "text": "Tus manos saben hacer algo que todavía no sabes explicar. ¿Qué haces?",
    "answers": [
      "Sigo practicando y observando.",
      "Intento encontrar palabras para enseñarlo.",
      "Acepto que no todo se puede explicar.",
      "Lo enseño haciéndolo."
    ]
  },
  "clar-umbral-01": {
    "text": "¿Qué te ayuda más a cerrar una etapa?",
    "answers": [
      "Entender por qué terminó.",
      "Hacer algo concreto para despedirme.",
      "Sentir curiosidad por lo que viene.",
      "Aceptar lo que todavía me cuesta soltar."
    ]
  },
  "clar-umbral-02": {
    "text": "Una puerta sólo se abre cuando otra se cierra detrás de ti. ¿Qué miras antes de pasar?",
    "answers": [
      "Lo que dejo atrás.",
      "Lo poco que veo adelante.",
      "Cómo funciona la puerta.",
      "Quién decidió que no puede quedar abierta."
    ]
  },
  "clar-umbral-03": {
    "text": "¿Cuándo sientes que un cambio es de verdad y no sólo algo nuevo?",
    "answers": [
      "Cuando ya no puedes volver exactamente a lo de antes.",
      "Cuando exige mantener una decisión.",
      "Cuando también cambia cómo ves el pasado.",
      "Cuando aparecen posibilidades que antes no veías."
    ]
  }
};

  const REACTIONS = [
    "Mmm… interesante.",
    "Eso no me lo esperaba.",
    "Ya veo por dónde vas.",
    "Curioso… sigamos.",
    "Ahí apareció algo.",
    "Bien. Veamos qué pasa después.",
    "Me lo guardo. Sigamos.",
    "Puede que después volvamos a esto."
  ];

  function simplify(question){
    if(!question) return question;
    const copy = COPY[question.id] || COPY[question.text];
    if(!copy) return question;
    const answers = (question.answers || []).map((answer,index) => ({
      ...answer,
      text: copy.answers?.[index] || answer.text
    }));
    return {...question, text:copy.text || question.text, answers};
  }

  function simplifyBank(bank){
    if(!bank) return bank;
    return {
      ...bank,
      QUESTION_BANK:(bank.QUESTION_BANK || []).map(simplify),
      CLARIFIER_BANK:Object.fromEntries(
        Object.entries(bank.CLARIFIER_BANK || {}).map(([key,list]) => [key,(list || []).map(simplify)])
      )
    };
  }

  if(window.ESPEJO_DATA){
    window.ESPEJO_DATA.CORE = (window.ESPEJO_DATA.CORE || []).map(simplify);
    window.ESPEJO_DATA.CLARIFIERS = Object.fromEntries(
      Object.entries(window.ESPEJO_DATA.CLARIFIERS || {}).map(([key,q]) => [key,simplify(q)])
    );
    window.ESPEJO_DATA.GENERIC_REACTIONS = REACTIONS;
  }

  if(window.ESPEJO_BANK){
    window.ESPEJO_BANK = simplifyBank(window.ESPEJO_BANK);
  }else{
    Object.defineProperty(window,"ESPEJO_BANK",{
      configurable:true,
      get(){ return undefined; },
      set(value){
        Object.defineProperty(window,"ESPEJO_BANK",{
          configurable:true,
          enumerable:true,
          writable:true,
          value:simplifyBank(value)
        });
      }
    });
  }

  return {simplify, simplifyBank, REACTIONS};
})();
