---
title: Escribir guías de anotación en la era de los LLMs
draft: false
tags:
  - annotation
  - AI
  - guidelines
  - es
date:
---
"¿Acaso necesitamos todavía guías de anotación? ¿No podemos simplemente usar LLMs?"

La respuesta corta: **Sí, por supuesto que todavía necesitas buenas guías de anotación.**

Algunos equipos pueden tener la sensación de que las anotaciones ya no son necesarias, que los LLMs simplemente pueden hacer el trabajo pesado. Es cierto que los LLMs han cambiado la forma en que se hacen las anotaciones y han acelerado el proceso, pero ellos también necesitan guías para completar las tareas como se espera. Esto significa que la forma en que normalmente escribirías y probarías las guías puede haber cambiado, pero la necesidad de guías buenas y claras que puedan seguirse de forma independiente es mayor que nunca.

## Por qué la anotación sigue importando

Incluso hoy, con LLMs potentes por todas partes, todavía necesitas datos anotados de alta calidad para:

**Evaluación.** ¿Cómo sabes que tu sistema de IA está funcionando como esperas? Necesitas dataset(s) de referencia para medir el rendimiento. Los LLMs pueden formar parte de la creación de ese dataset, pero necesitas guías claras para asegurar la consistencia—ya sean humanos, IAs o ambos los que estén haciendo la anotación.

**Experiencia de dominio.** Muchos problemas requieren expertos en la materia (SMEs) para evaluar correctamente. Textos médicos, documentos legales, análisis financieros—estos necesitan juicio humano basado en experiencia profesional. Tus guías de anotación son básicas para transferir esa experiencia a etiquetados consistentes.

**Datos de entrenamiento para modelos fine-tuned.** Si estás construyendo algo más allá de un simple _wrapper_ de otro proveedor, necesitas datos de entrenamiento de calidad. Y para ello se requieren guías claras que se puedan testear.

¿La diferencia ahora? Tus guías necesitan funcionar tanto para anotadores humanos como de IA.

## Las guías como prompts

He aquí el cambio de mentalidad: **piensa en tus guías de anotación como prompts.**

Las guías tradicionales se escribían solo para humanos, asumiendo que podían manejar la ambigüedad, hacer preguntas aclaratorias y aplicar sentido común. Los anotadores de IA no pueden hacer eso. Necesitan instrucciones explícitas, definiciones claras y buenos ejemplos—exactamente lo que hace un buen prompt.

Resulta que esto también mejora las guías para humanos. Definiciones más claras, mejores ejemplos, menos ambigüedad—esto ayuda a todos, no solo a los LLMs.

Así que cuando escribes guías ahora, realmente estás escribiendo un documento de doble propósito: instrucciones para humanos y un prompt para IA.

## Mi workflow: iterando con LLMs

Así es como desarrollo guías de anotación ahora. El proceso es mucho más rápido que los enfoques tradicionales, y detecta problemas temprano.

### Paso 1: Recopilar ejemplos reales

Comienza con unos cuantos ejemplos de tus datos reales. Estos deben cubrir todas las etiquetas y representar la variedad que encontrarás: casos fáciles, casos extremos, situaciones ambiguas, etc.

Si trabajas con datos que necesitan permanecer privados, crea unos ejemplos realistas en su lugar. La clave es que se sientan como tus datos reales, con complejidad y ambigüedad similares.

### Paso 2: Redactar tus guías

Escribe tus guías iniciales como lo harías normalmente, pero presta atención extra a:

- **Definiciones de etiquetas:** ¿Puedes explicar cada etiqueta sin ambigüedad?
- **Ejemplos:** ¿Demuestran claramente la distinción entre etiquetas?
- **Manejo de casos raros:** ¿Qué pasa con los casos _borderline_?

### Paso 3: Probar con múltiples LLMs

Aquí es donde sucede la iteración. Yo uso [el playground de Groq](https://console.groq.com/playground) porque puedo probar rápidamente el mismo prompt en múltiples modelos, pero cualquier herramienta similar servirá.

**Configuración:**

- Pega tus guías en el **system prompt**
- Pega el texto que quieres anotar en el **user prompt**
- A veces agregar una breve instrucción justo encima del texto ayuda: "Anota el siguiente texto según las guías." Experimenta con esto.

Si tu herramienta no tiene un system prompt separado, pegar tanto las guías como el texto en el mismo prompt debería funcionar también.

**Advertencia importante:** Los humanos pueden usar herramientas de anotación más sofisticadas que el texto plano (resaltado, interfaces multi-etiqueta, formularios estructurados). Esto significa que la descripción de la metodología usada para la anotación puede no ser la misma para los LLMs que para los humanos, pero asegúrate de que tus definiciones de etiquetas y ejemplos sean los mismos, para que puedas probar si conducen a anotaciones consistentes y correctas.

### Paso 4: Iterar sobre los fallos

Cuando la anotación del LLM no coincide con lo que esperabas, resiste la tentación de culpar al modelo. En su lugar, pregunta: **¿hay algo en mis guías que no esté claro?**

Problemas comunes que encuentro:

- **Definiciones vagas:** "Información relevante" significa cosas diferentes para diferentes personas (y modelos)
- **Suposiciones implícitas:** Tú sabes qué cuenta como una "queja" vs una "pregunta", ¿pero realmente lo definiste?
- **Ejemplos pobres:** Todos tus ejemplos muestran casos claros, pero la mayoría de los datos reales son más confusos
- **Falta de contexto:** El modelo (y los humanos) necesitan saber qué hacer con casos extremos

Cada anotación fallida es un regalo: te está mostrando dónde mejorar tu guía.

### Paso 5: Probar múltiples modelos

Diferentes LLMs se comportan de manera diferente. Yo pruebo con al menos 3 modelos porque:

- Si **todos los modelos** se equivocan de la misma manera → tu definición probablemente no está clara
- Si **todos los modelos** lo hacen bien → tu guía es sólida
- Si **los modelos no están de acuerdo** → has encontrado un caso ambiguo que necesita manejo explícito

Esto es mucho más rápido que iterar sobre tus guías con anotadores humanos. A veces puedes necesitar la ayuda inicial de SMEs para crear ejemplos y entender cómo deberían etiquetarse, pero lo que solía tomar semanas y varias rondas de anotaciones, ahora puedes hacerlo en unos pocos días.

> [!warning]
>
>Aunque hayas hecho todos los pasos para iterar en tus guías con LLMs, haz alguna ronda de anotaciones para calcular el acuerdo entre anotadores. Este paso es importante para asegurarse de que el equipo de anotadores entiende las guías tan bien como un LLM.

## La conclusión

La anotación no ha muerto, ha evolucionado. Los fundamentos todavía importan: definiciones claras, buenos ejemplos, manejo de casos extremos. Pero ahora tienes nuevas herramientas para probar e iterar sobre tus guías antes de comprometerte a una anotación a gran escala.

Los LLMs no han reemplazado la anotación. Han hecho posible escribir mejores guías, más rápido.

Empieza a pensar en tus guías de anotación como prompts, pruébalas con múltiples modelos, y usa sus fallos para mejorar tus definiciones. Tus anotadores humanos (y tu modelo) te lo agradecerán.
