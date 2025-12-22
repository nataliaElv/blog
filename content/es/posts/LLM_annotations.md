---
title: ¿Anotaciones para productos basados en LLM?
draft: false
tags:
  - annotation
  - evaluations
  - LLMs
  - AI-product
  - es
date:
---
 
"Estoy usando LLMs en mi proyecto y puedo confiar en que harán un buen trabajo. No necesito ninguna ronda de anotaciones."

Algunos equipos piensan que no necesitan anotaciones porque solo están usando LLMs en sus proyectos y pueden confiar en que harán un buen trabajo, pero este es un pensamiento engañoso. Incluso si crees que los modelos de OpenAI harán un buen trabajo generando respuestas para tus usuarios, en algún momento, si realmente quieres un producto listo para producción, necesitarás datos anotados para diferentes etapas de tu proyecto.

## La ilusión del "suficientemente bueno"

Cuando pruebas un LLM en desarrollo, normalmente estás mirando ejemplos seleccionados o interacciones a pequeña escala. El modelo te impresiona con su razonamiento, creatividad y capacidades generales. Esto crea un bucle de retroalimentación peligroso: ves principalmente casos de éxito, por lo que asumes que la tasa de éxito es más alta de lo que realmente es.

Pero en producción es diferente:

- Los casos _extremos_ son más comunes de lo que piensas
- Los fallos se acumulan a través de tu sistema
- Los usuarios encuentran todas las formas posibles de romper tus suposiciones
- "Normalmente correcto" significa "falla regularmente a escala"

Sin anotación sistemática, no tienes una forma fiable de medir con qué frecuencia tu LLM está realmente cumpliendo tus requisitos.

## Dónde necesitas realmente datos anotados

Veamos el ciclo de vida típico de un proyecto con LLM y dónde la anotación se vuelve crítica:

### 1. **Evaluación y benchmarking**

No puedes mejorar lo que no mides. ¿Cómo sabes si tus cambios de prompt realmente mejoraron la calidad del output? ¿Cómo comparas GPT-4 vs Claude vs Gemini para _tu caso de uso específico_?

Necesitas un conjunto de evaluación estándar de oro—ejemplos con outputs "correctos" anotados por humanos o clasificaciones de calidad. Sin esto, estás volando a ciegas, haciendo cambios basados en intuiciones.

### 2. **Fine-tuning (sí, incluso para sistemas RAG)**

¿Crees que puedes saltarte el fine-tuning? Quizás. Pero si te tomas en serio el rendimiento, el coste o la latencia, eventualmente querrás un modelo más pequeño y especializado. Y el fine-tuning requiere datos de entrenamiento anotados—muchos.

Incluso si "solo estás haciendo RAG," podrías hacer fine-tuning para:

- Mejor reformulación de consultas
- Juicios de relevancia más precisos
- Generación de citas mejorada
- Patrones de razonamiento específicos del dominio o estándares profesionales

### 3. **Guardrails y seguridad**

Los LLMs alucinan. Generan outputs sesgados. Ocasionalmente producen respuestas completamente sin sentido. Si estás construyendo un sistema de producción, necesitas:

- Ejemplos anotados de alucinaciones en tu dominio
- Datasets de violaciones de seguridad específicos para tu caso de uso
- Límites de calidad que definan outputs "aceptables" vs "inaceptables"

Los datasets de seguridad genéricos no son suficientes. Tus usuarios, tu dominio y tus modos de fallo son únicos.

### 4. **Monitorización y detección de drift**

Los modelos cambian. Las APIs se actualizan. El comportamiento de los usuarios evoluciona. ¿Cómo sabes si la calidad de tu sistema se está degradando con el tiempo?

Necesitas anotación continua—ya sea de muestras aleatorias o de casos extremos marcados por tu sistema—para monitorizar:

- Drift de calidad después de actualizaciones del modelo
- Patrones de fallo emergentes
- Brechas en tu cobertura a medida que las necesidades de los usuarios evolucionan

## Los costes ocultos de saltarse la anotación

"¡Pero la anotación es cara!" Sí. También lo es:

- **Pérdida de confianza del usuario** cuando tu sistema presenta con confianza información incorrecta
- **Tickets de soporte** de usuarios confundidos lidiando con casos extremos
- **Tiempo de ingeniería** debugeando problemas que no puedes reproducir porque no tienes testing sistemático
- **Coste de oportunidad** de no saber qué mejoras realmente moverían la aguja

Podrías pasar semanas optimizando prompts y cambiando entre modelos, solo para descubrir a través de una evaluación adecuada que las "mejoras" empeoraron las cosas. La anotación no es solo un gasto—es cómo evitas desperdiciar todo lo demás.

## Empieza poco a poco

No necesitas 10.000 ejemplos anotados desde el primer día. Empieza de forma pragmática:

1. **Crea un pequeño set de evaluación** (50-100 ejemplos) cubriendo tus casos de uso principales y modos de fallo conocidos
2. **Anota sistemáticamente** a medida que encuentras bugs—convierte cada problema de producción en un caso de prueba
3. **Construye un pipeline de anotación continua** para muestreo aleatorio de outputs de producción
4. **Involucra a expertos del dominio** temprano, especialmente para campos especializados donde los errores de LLM son sutiles
5. **Automatiza lo que puedas** si hay algo que se puede hacer con una función de testing en lugar de anotaciones

El objetivo no es la perfección. Es la visibilidad. Necesitas ver qué está pasando realmente con tu sistema, no lo que esperas que esté pasando.

## La pregunta real

La pregunta no es "¿Necesito anotación?" Es "¿Cuánta anotación necesito y qué partes de mi pipeline debería cubrir?"

Si estás construyendo un proyecto de fin de semana o explorando ideas, claro, sáltalo. Pero si estás construyendo algo de lo que los usuarios dependerán, algo que mantendrás con el tiempo, algo que necesita funcionar de verdad—la anotación no es opcional.

Tu LLM es poderoso. No es mágico. Y la diferencia entre una demo impresionante y un producto fiable es la evaluación sistemática, que requiere datos de ground truth.
