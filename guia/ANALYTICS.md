# Estadísticas de las audioguías

Las audioguías en español e inglés envían eventos a la propiedad de Google Analytics 4 `G-KY6MFZZ1SH` mediante `guia/audio-analytics.js`.

## Qué se registra

- apertura de una estación (`audio_guide_open`)
- primera reproducción (`audio_start`)
- reanudación (`audio_resume`)
- pausa (`audio_pause`)
- avance del 25 %, 50 % y 75 % (`audio_progress`)
- finalización (`audio_complete`)
- reinicio (`audio_restart`)
- desplazamiento manual en la barra (`audio_seek`)
- errores de reproducción (`audio_error`)
- segmentos reales de escucha (`audio_listen_segment`)

Cada evento incorpora:

- `guide_language`: `es` o `en`
- `station_id`
- `station_number`
- `station_title`
- `audio_position_seconds`
- `audio_duration_seconds`
- `progress_percent`, cuando corresponde
- `listen_seconds`, en los segmentos de escucha
- `listen_reason`, para indicar pausa, salida, finalización o control periódico

Google Analytics añade automáticamente dimensiones técnicas disponibles, como categoría del dispositivo, sistema operativo, navegador, resolución de pantalla y, cuando el navegador lo permite, marca o modelo del dispositivo.

## Definiciones personalizadas recomendadas en GA4

En **Administrar → Visualización de datos → Definiciones personalizadas**, crear dimensiones de evento para:

- `guide_language`
- `station_id`
- `station_title`
- `listen_reason`

Crear métricas personalizadas de evento para:

- `listen_seconds` — unidad: segundos
- `progress_percent` — unidad: estándar
- `audio_duration_seconds` — unidad: segundos

## Informes recomendados

En **Explorar → Formato libre**:

1. Oyentes: usuarios asociados al evento `audio_start`.
2. Tiempo escuchado: suma de `listen_seconds` para `audio_listen_segment`.
3. Estaciones más escuchadas: `station_title` por usuarios y eventos `audio_start`.
4. Finalización: comparación entre `audio_start` y `audio_complete`.
5. Idioma: `guide_language` por usuarios.
6. Dispositivo: categoría del dispositivo, sistema operativo, navegador y modelo disponible.

## Alcance y límites

La instrumentación no solicita nombre, correo, teléfono, micrófono ni ubicación GPS. Los bloqueadores de publicidad, restricciones del navegador y opciones de privacidad pueden impedir algunos registros. El modelo exacto del teléfono no siempre está disponible, especialmente en ciertos dispositivos y navegadores.
