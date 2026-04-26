# Landing MVP - Sweden & Martina x Climadent

MVP estático de una landing-calculadora para partners de Sweden & Martina.

## Qué incluye

- landing premium orientada a partner, no a paciente final
- simulador guiado con 10 preguntas de negocio dental
- motor de cálculo basado en lógica de embudo
- resultados con KPIs, embudo visual, comparativa actual vs optimizado e insights comerciales

## Archivos principales

- [index.html](C:\Users\light\Documents\New project\index.html)
- [styles.css](C:\Users\light\Documents\New project\styles.css)
- [app.js](C:\Users\light\Documents\New project\app.js)
- [propuesta_calculadora_partner_sweden_martina.md](C:\Users\light\Documents\New project\propuesta_calculadora_partner_sweden_martina.md)

## Cómo abrirlo

Opción rápida:

1. abrir `index.html` directamente en el navegador

Opción recomendada:

1. desde esta carpeta, ejecutar:

```powershell
python -m http.server 4173
```

2. abrir:

```text
http://127.0.0.1:4173
```

Opción más cómoda:

1. ejecutar [serve-local.bat](C:\Users\light\Documents\New%20project\serve-local.bat)
2. se abrirá automáticamente:

```text
http://127.0.0.1:8000
```

Opción recomendada para iterar:

1. ejecutar [start-dev.bat](C:\Users\light\Documents\New%20project\start-dev.bat)
2. abrir:

```text
http://127.0.0.1:5173
```

Esta versión está pensada para desarrollo:

- sirve la landing en `localhost`
- recarga automáticamente al guardar cambios en HTML, CSS o JS
- no depende de instalar Vite ni paquetes externos

## Siguiente iteración recomendada

- convertir el motor de reglas a JSON editable
- incorporar branding definitivo y assets oficiales de Sweden & Martina
- conectar CTA con CRM o formulario real
- permitir presets por tipo de clínica
- añadir panel admin para modificar multiplicadores sin tocar código
