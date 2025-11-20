---
title: Algunas reflexiones sobre ALIA y el Foro de IA Pública
draft: false
# banner: /images/growtika-nGoCBxiaRO0-unsplash.jpg
tags:
  - IA
  - ingeniería de IA
  - despliegues de IA
  - IA pública
  - ALIA
  - EuroHPC
  - The Newsroom
  - es
---
<img src="/images/growtika-nGoCBxiaRO0-unsplash.jpg" alt="Imagen de cabecera del artículo" width="800" height="400" style="max-width: 100%; height: auto;">

*Foto de [Growtika](https://unsplash.com/es/@growtika?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) en [Unsplash](https://unsplash.com/es/fotos/una-imagen-abstracta-de-una-esfera-con-puntos-y-lineas-nGoCBxiaRO0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

La semana pasada asistí al Foro de IA Pública de ALIA organizado por el Barcelona Supercomputing Center (BSC), donde investigadores, empresas e instituciones se reunieron para discutir el ambicioso proyecto de infraestructura pública de IA de España. El evento fue breve pero estimulante, con muchos puntos destacados sobre los desafíos en el espacio de la IA y especialmente en Europa.

Primero, por si no lo conoces, [ALIA](https://alia.gob.es/) es una familia de modelos desarrollada públicamente por el BSC para promover el desarrollo de IA en todas las lenguas oficiales y cooficiales de España. Son 100% open-source (pesos abiertos, código abierto Y datos abiertos) y cubren múltiples modalidades (texto, voz, traducción y multimodal).

Tener estos recursos disponibles para cualquiera es definitivamente un gran paso adelante para tener IA pública y europea. Sin embargo, los comentarios de los asistentes sacaron a la luz muchos de los desafíos que las empresas enfrentan cuando se trata de adoptar estos modelos en lugar de depender de los grandes proveedores de IA estadounidenses. De hecho, yo misma he enfrentado estos mismos desafíos.

## El Problema de la Inferencia: El Asesino Silencioso de los Negocios de IA

Esto es lo que captó mi atención durante el foro: **los despliegues de modelos son ahora el principal cuello de botella para cualquiera que ofrezca IA a escala**, especialmente cuando estamos lidiando con inferencia síncrona.

La infraestructura pública de IA se ha centrado en la fase de entrenamiento, ofreciendo miles de horas-nodo en sus supercomputadores a través de su programa [EuroHPC JU](https://www.eurohpc-ju.europa.eu/index_en), que permite a investigadores y empresas entrenar y ajustar modelos enormes y también procesar grandes cantidades de datos. Yo misma he podido usar los supercomputadores portugués e italiano gracias a esta iniciativa, como parte de mi trabajo en [The Newsroom](https://www.thenewsroom.ai/en).

Pero eso es solo la mitad de la historia. Si quieres construir un servicio encima de tu modelo, necesitarás desplegarlo, ya sea en un servidor local o en la nube, para que los usuarios puedan realmente usarlo sin necesidad de enviar trabajos batch asíncronos. Aquí es donde empiezan a acumularse las dificultades técnicas y los costes enormes.

Por supuesto, siempre está el problema de que la mayoría de los proyectos que piden IA y LLMs no los necesitan en absoluto y podrían arreglarse con metodologías o modelos mucho más simples que podrían ejecutarse en infraestructura mucho más barata, pero para aquellos que sí los necesitan, parece que en el BSC están trabajando para ofrecer servicios de inferencia en el futuro. No dieron demasiados detalles sobre cómo funcionarían o cuándo planean tener esto disponible, así que tendremos que estar atentos para descubrir más sobre esto.

## El Monopolio de las Big Tech y la Ventaja de los Datos

Hay una dimensión estratégica aquí que rara vez se discute abiertamente. Los principales proveedores de IA tienen todos los incentivos para hacer que el auto-alojamiento sea más difícil. Hacer que los LLMs cada vez más grandes (tanto en términos de capacidades como de tamaño) sean la nueva normalidad solo acelera la necesidad de requisitos masivos de infraestructura para poder ponerse al día con los grandes jugadores.

Los enormes costes y la complejidad técnica de tener una alternativa competitiva es lo que hace que los precios de esos proveedores parezcan razonables, al menos inicialmente. Sin embargo, a largo plazo nadie está seguro de si el aumento de los precios de esos proveedores podría matar a sus empresas.

Pero hay una ventaja aún más insidiosa que tienen los grandes proveedores: **los datos de usuario**.

Cada vez que envías un prompt a OpenAI, Anthropic o Google, potencialmente estás contribuyendo a su próxima ejecución de entrenamiento. Sí, hay opciones de exclusión enterradas en la configuración. Pero seamos honestos: muchos usuarios no lo hacen o todavía usan versiones gratuitas que no tienen estas opciones.

Esto crea una ventaja compuesta: **los grandes proveedores obtienen millones de interacciones del mundo real diariamente y mejoran continuamente los modelos usando esas conversaciones**.

Sin mencionar que muchos de los modelos de código cerrado fueron entrenados con contenido con derechos de autor sin permiso. Su ventaja no es solo técnica—está construida sobre fundamentos éticamente cuestionables.

Los modelos públicos como ALIA juegan con reglas diferentes. Usan datos curados, con licencias adecuadas. Respetan los derechos de autor y los datos de usuario. Esto significa que no tienen acceso a las cantidades de datos que tienen los grandes proveedores y que **la brecha de capacidades puede ampliarse muy rápidamente** con el tiempo.

## La Alternativa: Soberanía de IA Europea

Durante el foro, algunos oradores enfatizaron: **"ALIA somos todos"**—haciendo eco del lema de la agencia tributaria española "Hacienda somos todos."

¿El mensaje? La infraestructura pública de IA solo funciona si hay una colaboración genuina entre las instituciones que la construyen y los usuarios que la despliegan.

A diferencia de las big tech, donde estás excluido del ciclo de mejora, los modelos públicos necesitan retroalimentación activa de:

- Empresas usándolos en producción
- Investigadores encontrando casos límite
- Instituciones desplegándolos para servicios públicos

Esto no es una debilidad—es un modelo diferente. Uno donde los usuarios no son solo consumidores, sino participantes en mejorar la infraestructura de la que dependen.

Parece que, por ahora, la mayoría de las empresas no ven a ALIA y sus modelos como una alternativa competitiva real, al menos dada la complejidad técnica y los costes de infraestructura. Pero el foro enfatizó que esto no debería ser solo un problema técnico, sino también estratégico: ¿Puede Europa construir capacidades de IA que compitan genuinamente con los gigantes tecnológicos estadounidenses? ¿Las empresas se comprometerán con las iniciativas públicas de IA? ¿O tomarán el camino fácil de llamar a una API de big tech y esperar que el lock-in y los costes crecientes no les muerdan más tarde?

Esto no se trata de nacionalismo. Se trata de:

- **Gobernanza**: ¿Quién controla los sistemas de IA que cada vez más impulsan infraestructura crítica?

- **Soberanía**: ¿Pueden las empresas y gobiernos europeos tomar decisiones independientes sobre su estrategia de IA?

- **Sostenibilidad**: Tanto ambiental (costes de inferencia = costes de energía) como económica (modelos de negocio sostenibles).

- **Representación cultural**: Modelos entrenados en y optimizados para lenguas, contextos y valores europeos.

## Mi Opinión

Salí del Foro de IA Pública de ALIA con sentimientos encontrados sobre el futuro de la IA pública en Europa. Hay esfuerzos reales para hacer esto realidad y gente muy capaz está trabajando en ello. Sin embargo, hay mucho trabajo por hacer para que los modelos e infraestructura pública puedan resolver las necesidades reales de instituciones y empresas, y empiezan con desventaja.

Creo que todos en esa sala y el público en general no tendrían dudas sobre usar IA pública en lugar de tener que quedarse con los grandes proveedores y los riesgos que conllevan, como costes crecientes y preocupaciones sobre privacidad de datos. Pero la conveniencia de estos proveedores y sus enormes capacidades hacen difícil ir con la alternativa pública en este momento.

Aún así, si estás trabajando en productos de IA—especialmente en Europa—vale la pena prestar atención a lo que el BSC está construyendo. No solo los modelos en sí, sino toda la pila de infraestructura que hace posibles los despliegues de IA independientes y éticos.

Y antes de subirte al carro de la IA, haz la pregunta difícil: ¿realmente necesitas IA? ¿O necesitas mejor gestión de datos, requisitos más claros y soluciones más simples que no requieran costes constantes de inferencia?

A veces la mejor estrategia de IA es no usar IA en absoluto.
