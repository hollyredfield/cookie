# GTA Mod Toolkit — Manual de supervivencia (versión sarcástica)

![](https://img.shields.io/badge/stable-1.0.0-brightgreen) ![](https://img.shields.io/badge/typescript-ES2020-blue)  
(Logotipo provisional: no me llores ⚙️)

Introducción
-----------
Proyecto diseñado para crear, gestionar y testear mods para GTA.  
Advertencia: no responsabilizar por resultados épicos, fallos divertidos, ni lágrimas en consola.

Contenido esencial
------------------
- Código fuente: [src/](src)  
- CLI principal: [src/cli/index.ts](src/cli/index.ts)  
- Cargar metadatos: [`loadModInfo`](src/core/mod.ts) — [src/core/mod.ts](src/core/mod.ts)  
- Validar metadatos: [`validateModInfo`](src/core/mod.ts) — [src/core/mod.ts](src/core/mod.ts)  
- IO JSON ligero: [`readJson`](src/utils/fs.ts) — [src/utils/fs.ts](src/utils/fs.ts)  
- Ejemplo de mod: [mods/example-mod/modinfo.json](mods/example-mod/modinfo.json)  
- Configuración TypeScript: [tsconfig.json](tsconfig.json)  
- Scripts npm: [package.json](package.json)

Instalación rápida (sin manuales largos)
---------------------------------------
- Instalar dependencias: `npm install`  
- Desarrollo rápido: `npm run dev`  
- Compilar: `npm run build`  
- Ejecutar ayuda: `npm run test` (sí, hace build y luego muestra ayuda; ironía incluida)

Uso del CLI
-----------
- Info del mod: `node dist/cli/index.js info <modDir>`  
- Validar mod: `node dist/cli/index.js validate <modDir>`  
Ejemplos en código: revisar [src/cli/index.ts](src/cli/index.ts).

API y funciones relevantes
--------------------------
- [`loadModInfo`](src/core/mod.ts): leer `modinfo.json` desde carpeta indicada.  
- [`validateModInfo`](src/core/mod.ts): reglas básicas, devolver lista de errores.  
- [`readJson`](src/utils/fs.ts): helper promisificado para parsear JSON.

Integración y automatización (badges, APIs, memes)
--------------------------------------------------
- Generar badge dinámico: usar Shields.io API:  
  - Ejemplo: `https://img.shields.io/badge/build-pasado-brightgreen`  
- Webhook simple (ejemplo conceptual): llamar endpoint propio desde CI para desplegar ejemplos.  
- Meme (opcional): insertar imagen con markdown:
  - `![meme gracioso](https://i.imgflip.com/30b1gx.jpg)` (uso ilustrativo, revisar licencias)
- Vídeo de demostración (embed YouTube):  
  - `https://www.youtube.com/watch?v=dQw4w9WgXcQ` (doble check antes de reproducir en presentación)

Secciones técnicas (resumen)
-----------------------------
- Estructura de módulos: revisar [src/core/mod.ts](src/core/mod.ts) para entender esquema `ModInfo`.  
- Funciones utilitarias de FS: [src/utils/fs.ts](src/utils/fs.ts).  
- Entrada CLI: [src/cli/index.ts](src/cli/index.ts).

Notas de validación
-------------------
- Reglas principales: `name` obligatorio y tipo `string`, `version` opcional tipo `string`.  
- Ejemplo correcto: [mods/example-mod/modinfo.json](mods/example-mod/modinfo.json).

Comandos útiles (lista rápida)
------------------------------
- `npm run dev` — iniciar en modo desarrollo (ts-node).  
- `npm run build` — compilar TypeScript a `dist/`.  
- `npm run start` — ejecutar binario desde `dist/`.  
- `npm run test` — compilación + ayuda (yeah).

Pequeña fórmula de felicidad
$$
2 + 2 = 4
$$

Sección interactiva (sugerencias)
---------------------------------
- Crear badge personalizado: `https://img.shields.io/badge/gta--mod-toolkit-ready-blue`  
- Generar JSON a partir del CLI: `node dist/cli/index.js info ./mods/example-mod`  
- Integrar con herramientas externas: llamar `readJson` desde script propio, función disponible en [`readJson`](src/utils/fs.ts).

Contribuir (modo práctico)
--------------------------
- Fork, branch, PR.  
- Tests aún por definir (ubicación: [tests/](tests)).  
- Código principal: [src/](src).

Créditos y licencia
-------------------
- Información de package: [package.json](package.json).  
- Licencia: MIT (ver `package.json`).

Notas finales (sarcasmo moderado)
---------------------------------
- Documentación extensa no garantiza proyectos terminados.  
- Si objetivo: aprender, abrir [src/cli/index.ts](src/cli/index.ts) y jugar.  
- Si objetivo: publicar, leer `modinfo.json` correcto en [mods/example-mod/modinfo.json](mods/example-mod/modinfo.json).


