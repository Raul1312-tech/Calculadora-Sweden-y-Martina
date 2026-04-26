const questions = [
  {
    id: "location",
    category: "Entorno",
    title: "¿Dónde compite la clínica?",
    helper:
      "Clasificamos la clínica según el tipo de entorno en el que está ubicada: área metropolitana, capital relevante, ciudad mediana o población pequeña.",
    impactNote:
      "Esta clasificación territorial nos ayuda a ubicar la clínica en un tier geográfico real antes de valorar su potencial.",
    options: [
      {
        value: "metro",
        label: "Madrid o Barcelona",
        description: "Las dos grandes áreas metropolitanas principales.",
        scoreLabel: "Tier 1",
      },
      {
        value: "capital",
        label: "Capital de provincia relevante",
        description: "Valencia, Sevilla, Málaga, Zaragoza, Bilbao o Alicante.",
        scoreLabel: "Tier 2",
      },
      {
        value: "city",
        label: "Ciudad mediana",
        description: "Vigo, Santander, Valladolid, A Coruña o similares.",
        scoreLabel: "Tier 3",
      },
      {
        value: "rural",
        label: "Población pequeña o entorno rural",
        description: "Municipios pequeños, cabeceras de comarca o zonas rurales.",
        scoreLabel: "Tier 4",
      },
    ],
  },
  {
    id: "cabinets",
    category: "Capacidad",
    title: "¿Cuántos gabinetes operativos tiene la clínica?",
    helper:
      "Usamos este dato para estimar el techo operativo real: inversión aconsejable, primeras visitas asumibles y potencial mensual de producción.",
    impactNote:
      "El número de gabinetes no mejora por sí solo la conversión, pero sí condiciona cuánto crecimiento puede absorber la clínica sin tensionar agenda y atención.",
    options: [
      {
        value: "1-2",
        label: "1-2 gabinetes",
        description: "Clínica compacta, con potencial controlado y necesidad de captar con precisión.",
        scoreLabel: "Escala base",
      },
      {
        value: "3-4",
        label: "3-4 gabinetes",
        description: "Tamaño óptimo para convertir bien si la estructura comercial acompaña.",
        scoreLabel: "Escala media",
      },
      {
        value: "5-6",
        label: "5-6 gabinetes",
        description: "Capacidad clara para sostener más visitas, diagnósticos y cierres mensuales.",
        scoreLabel: "Escala alta",
      },
      {
        value: "7+",
        label: "7 o más gabinetes",
        description: "Operación con techo alto, ideal para escenarios de crecimiento estructurado.",
        scoreLabel: "Escala premium",
      },
    ],
  },
  {
    id: "tac",
    category: "Diagnóstico",
    title: "¿La clínica dispone de TAC interno?",
    helper:
      "El TAC interno reduce fricción diagnóstica, eleva percepción de solvencia y suele mejorar la tasa de aceptación del plan de tratamiento.",
    impactNote:
      "Su principal efecto está en la fase de cierre: facilita diagnóstico, autoridad clínica y velocidad en la propuesta.",
    options: [
      {
        value: "yes",
        label: "Sí, TAC interno disponible",
        description: "La clínica puede hacer diagnóstico y propuesta con una experiencia más completa.",
        scoreLabel: "Mayor cierre",
      },
      {
        value: "no",
        label: "No, depende de derivación externa",
        description: "Más fricción clínica y más riesgo de fuga entre visita, diagnóstico y aceptación.",
        scoreLabel: "Más fricción",
      },
    ],
  },
  {
    id: "advisor",
    category: "Cierre",
    title: "¿Cuenta con asesor comercial o figura específica de cierre?",
    helper:
      "No es lo mismo que el doctor presente el caso sin apoyo que contar con una persona entrenada en financiación, objeciones y acompañamiento al cierre.",
    impactNote:
      "Afecta directamente a la conversión visita a tratamiento y al aprovechamiento del tráfico generado.",
    options: [
      {
        value: "yes",
        label: "Sí, hay asesor comercial",
        description: "La clínica tiene una figura clara para ordenar objeciones, financiación y decisión.",
        scoreLabel: "Cierre sólido",
      },
      {
        value: "no",
        label: "No, el cierre recae en clínica o doctor",
        description: "El potencial existe, pero suele cerrarse peor por falta de proceso comercial.",
        scoreLabel: "Cierre irregular",
      },
    ],
  },
  {
    id: "visitPrice",
    category: "Entrada",
    title: "¿Cómo gestionan la primera visita?",
    helper:
      "El nivel de fricción de entrada cambia mucho según si la primera visita es gratuita, simbólica o se cobra completa desde el inicio.",
    impactNote:
      "Esta variable influye sobre cita y asistencia, porque cambia la predisposición inicial del paciente a reservar y acudir.",
    options: [
      {
        value: "free",
        label: "Gratuita",
        description: "Reduce la barrera inicial y facilita convertir interés en primera visita.",
        scoreLabel: "Menor fricción",
      },
      {
        value: "partial",
        label: "Precio simbólico o parcial",
        description: "Equilibrio entre percepción de valor y facilidad de entrada.",
        scoreLabel: "Fricción media",
      },
      {
        value: "paid",
        label: "Se cobra completa",
        description: "Filtra más, pero hace el agendado más exigente si no hay fuerte autoridad y recepción.",
        scoreLabel: "Mayor fricción",
      },
    ],
  },
  {
    id: "digital",
    category: "Marca",
    title: "¿Qué nivel de presencia digital tiene la clínica?",
    helper:
      "Aquí valoramos si la clínica transmite confianza previa en redes sociales, Google, web y reputación pública.",
    impactNote:
      "Una presencia digital robusta aumenta la facilidad de contacto y reduce no-shows porque mejora la confianza antes de acudir.",
    options: [
      {
        value: "strong",
        label: "Robusta en redes y Google",
        description: "Marca viva, autoridad visible y activos digitales que respaldan la decisión del paciente.",
        scoreLabel: "Autoridad alta",
      },
      {
        value: "average",
        label: "Correcta pero mejorable",
        description: "La clínica transmite cierta seguridad, aunque todavía no capitaliza todo su potencial.",
        scoreLabel: "Autoridad media",
      },
      {
        value: "weak",
        label: "Débil o poco trabajada",
        description: "La falta de presencia digital añade fricción al contacto y a la asistencia.",
        scoreLabel: "Autoridad baja",
      },
    ],
  },
  {
    id: "protocol",
    category: "Proceso",
    title: "¿Existe un protocolo claro de primera visita y presentación del tratamiento?",
    helper:
      "No preguntamos solo si atienden bien, sino si existe un proceso repetible de diagnóstico, presentación y avance hacia cierre.",
    impactNote:
      "Es una de las grandes palancas del cierre en tratamientos de valor como implantología.",
    options: [
      {
        value: "structured",
        label: "Sí, bien estructurado",
        description: "La clínica tiene un flujo consistente para convertir confianza en aceptación.",
        scoreLabel: "Proceso fuerte",
      },
      {
        value: "partial",
        label: "Parcial o dependiente de la persona",
        description: "Hay buenas prácticas, pero no una sistemática estable y replicable.",
        scoreLabel: "Proceso medio",
      },
      {
        value: "none",
        label: "No, cada caso se gestiona distinto",
        description: "Eso suele generar pérdida silenciosa de cierres y decisiones aplazadas.",
        scoreLabel: "Proceso débil",
      },
    ],
  },
  {
    id: "reception",
    category: "Recepción",
    title: "¿Cómo está organizada la recepción?",
    helper:
      "La conversión telefónica y el agendado dependen mucho de si existe una recepción enfocada o si la atención está dispersa entre varias tareas.",
    impactNote:
      "Afecta sobre todo a contacto y cita: menos multitarea suele traducirse en más conversaciones útiles y más agendas cerradas.",
    options: [
      {
        value: "dedicated",
        label: "Recepción exclusiva",
        description: "Hay equipo dedicado a atender, responder, ordenar agenda y sostener seguimiento.",
        scoreLabel: "Alta conversión",
      },
      {
        value: "shared",
        label: "Apoyo compartido",
        description: "La función existe, pero compite con otras tareas operativas del día a día.",
        scoreLabel: "Conversión media",
      },
      {
        value: "multitask",
        label: "Higienistas o personal multitarea",
        description: "La recepción no tiene foco y suele perder velocidad, calidad de llamada y consistencia.",
        scoreLabel: "Conversión baja",
      },
    ],
  },
  {
    id: "speed",
    category: "Velocidad",
    title: "¿Con qué rapidez suelen contactar los nuevos leads?",
    helper:
      "La velocidad de contacto es una variable crítica. Un mismo lead vale mucho menos cuando se atiende tarde o sin sistemática.",
    impactNote:
      "Es una de las variables más directas sobre el porcentaje de contacto real y condiciona el resto del embudo.",
    options: [
      {
        value: "sameDay",
        label: "En el mismo día",
        description: "La clínica responde rápido y captura mejor la intención caliente del paciente.",
        scoreLabel: "Contacto alto",
      },
      {
        value: "nextDay",
        label: "Dentro de 24 horas",
        description: "Sigue siendo razonable, aunque ya se pierde parte de la inercia inicial.",
        scoreLabel: "Contacto medio",
      },
      {
        value: "late",
        label: "Más tarde o de forma irregular",
        description: "Aquí suele aparecer una fuga importante de oportunidades antes incluso del agendado.",
        scoreLabel: "Contacto bajo",
      },
    ],
  },
  {
    id: "financing",
    category: "Financiación",
    title: "¿La financiación está integrada de forma clara en la venta?",
    helper:
      "No basta con que exista en teoría. Lo relevante es si se utiliza con seguridad, rapidez y naturalidad para desbloquear cierres.",
    impactNote:
      "La financiación correcta impacta de forma muy clara sobre aceptación de tratamiento y consumo de implantes.",
    options: [
      {
        value: "strong",
        label: "Sí, bien integrada",
        description: "La clínica usa financiación como herramienta real de cierre y acceso al tratamiento.",
        scoreLabel: "Mayor cierre",
      },
      {
        value: "limited",
        label: "Existe, pero con uso limitado",
        description: "Ayuda en algunos casos, aunque todavía no está incorporada al proceso de forma natural.",
        scoreLabel: "Impacto medio",
      },
      {
        value: "none",
        label: "No está integrada",
        description: "Esto frena cierres y empeora la aceptación en tratamientos de ticket elevado.",
        scoreLabel: "Impacto bajo",
      },
    ],
  },
];

const locationVisuals = {
  metro: {
    caption: "Grandes áreas metropolitanas principales del país.",
    zones: [
      { cx: 146, cy: 157, rx: 34, ry: 34, rotate: 0 },
      { cx: 244, cy: 104, rx: 32, ry: 28, rotate: -12 },
    ],
  },
  capital: {
    caption: "Capitales provinciales relevantes y polos urbanos secundarios.",
    zones: [
      { cx: 223, cy: 183, rx: 48, ry: 36, rotate: 20 },
      { cx: 179, cy: 122, rx: 34, ry: 26, rotate: -6 },
      { cx: 126, cy: 233, rx: 44, ry: 34, rotate: -18 },
      { cx: 177, cy: 74, rx: 30, ry: 20, rotate: 8 },
    ],
  },
  city: {
    caption: "Ciudades intermedias con peso regional y tamaño medio.",
    zones: [
      { cx: 93, cy: 100, rx: 40, ry: 34, rotate: -28 },
      { cx: 139, cy: 112, rx: 44, ry: 28, rotate: -8 },
      { cx: 188, cy: 245, rx: 36, ry: 28, rotate: 12 },
      { cx: 119, cy: 74, rx: 34, ry: 18, rotate: 0 },
    ],
  },
  rural: {
    caption: "Cabeceras de comarca, poblaciones pequeñas y entorno rural disperso.",
    zones: [
      { cx: 102, cy: 206, rx: 42, ry: 34, rotate: -12 },
      { cx: 170, cy: 173, rx: 58, ry: 42, rotate: 6 },
      { cx: 181, cy: 230, rx: 40, ry: 30, rotate: 14 },
      { cx: 93, cy: 68, rx: 28, ry: 20, rotate: -20 },
    ],
  },
};

Object.assign(locationVisuals, {
  metro: {
    caption: "Grandes areas metropolitanas principales del pais.",
    regions: [
      {
        d: "M150 134c12-11 31-14 44-6c12 8 14 24 4 36c-12 13-33 15-47 5c-11-8-12-24-1-35z",
        cx: 173,
        cy: 147,
        r: 17,
      },
      {
        d: "M256 94c10-10 28-12 40-4c12 8 14 23 4 34c-11 12-30 14-42 5c-11-8-12-23-2-35z",
        cx: 278,
        cy: 108,
        r: 16,
      },
    ],
  },
  capital: {
    caption: "Capitales relevantes y polos urbanos secundarios de alta actividad.",
    regions: [
      {
        d: "M111 228c16-14 42-18 60-10c16 8 22 26 12 42c-13 18-41 24-62 15c-18-8-24-30-10-47z",
        cx: 142,
        cy: 250,
        r: 19,
      },
      {
        d: "M211 86c12-10 31-13 44-7c12 7 15 22 7 33c-10 13-30 18-45 11c-14-7-17-24-6-37z",
        cx: 234,
        cy: 103,
        r: 15,
      },
      {
        d: "M239 167c15-13 39-17 56-9c16 8 20 25 10 40c-13 18-40 24-59 14c-18-9-21-29-7-45z",
        cx: 270,
        cy: 191,
        r: 18,
      },
      {
        d: "M167 112c11-10 27-13 39-7c11 6 15 18 10 28c-8 13-24 19-38 15c-14-4-20-20-11-36z",
        cx: 187,
        cy: 127,
        r: 14,
      },
    ],
  },
  city: {
    caption: "Ciudades intermedias con peso regional y traccion de mercado medio.",
    regions: [
      {
        d: "M58 65c13-12 35-18 52-13c15 5 21 19 17 34c-6 19-27 31-49 28c-21-2-32-24-20-49z",
        cx: 85,
        cy: 86,
        r: 18,
      },
      {
        d: "M105 92c17-13 43-18 60-11c15 7 20 21 15 36c-7 18-31 28-56 24c-23-3-34-26-19-49z",
        cx: 138,
        cy: 112,
        r: 19,
      },
      {
        d: "M144 150c17-14 44-19 63-11c17 7 23 24 16 41c-10 22-38 33-64 27c-24-5-34-30-15-57z",
        cx: 177,
        cy: 177,
        r: 20,
      },
      {
        d: "M164 233c14-12 35-16 49-10c13 6 18 18 13 30c-8 16-28 24-47 21c-18-4-27-22-15-41z",
        cx: 190,
        cy: 248,
        r: 16,
      },
    ],
  },
  rural: {
    caption: "Cabeceras de comarca, poblaciones pequenas y entorno rural disperso.",
    regions: [
      {
        d: "M72 86c29-24 79-31 114-16c30 13 43 41 30 69c-15 33-60 52-108 48c-44-4-69-42-54-101z",
        cx: 128,
        cy: 130,
        r: 24,
      },
      {
        d: "M97 191c24-20 64-28 94-20c27 8 39 30 34 57c-7 32-41 56-84 60c-42 4-72-18-75-53c-2-18 9-33 31-44z",
        cx: 155,
        cy: 224,
        r: 23,
      },
      {
        d: "M201 164c20-15 52-19 74-11c20 8 29 25 25 44c-6 28-34 48-71 50c-37 2-61-16-61-44c0-17 10-29 33-39z",
        cx: 239,
        cy: 194,
        r: 21,
      },
    ],
  },
});

const config = {
  mediaBudget: 450,
  serviceFee: 800,
  location: {
    metro: { cpl: 12.6, competition: "Alta", budgetFactor: 1.15, driver: "Mercado Tier 1 con presión publicitaria superior" },
    capital: { cpl: 7.4, competition: "Media-alta", contact: 0.0 },
    city: { cpl: 5.6, competition: "Media", contact: 0.02 },
    rural: { cpl: 4.7, competition: "Baja", contact: 0.03 },
  },
  cabinets: {
    "1-2": { budget: 900, capacityVisits: 20, implantsPerPatient: 2.2, scaleLabel: "Estructura compacta" },
    "3-4": { budget: 1450, capacityVisits: 34, implantsPerPatient: 2.6, scaleLabel: "Clínica en expansión" },
    "5-6": { budget: 2200, capacityVisits: 52, implantsPerPatient: 2.9, scaleLabel: "Operación consolidada" },
    "7+": { budget: 3200, capacityVisits: 72, implantsPerPatient: 3.2, scaleLabel: "Clínica de alta capacidad" },
  },
  tac: {
    yes: { close: 0.05 },
    no: { close: -0.03 },
  },
  advisor: {
    yes: { close: 0.04 },
    no: { close: 0.0 },
  },
  visitPrice: {
    free: { appointment: 0.08, attendance: 0.05 },
    partial: { appointment: 0.03, attendance: 0.02 },
    paid: { appointment: -0.03, attendance: -0.05 },
  },
  digital: {
    strong: { contact: 0.06, attendance: 0.06, close: 0.02, label: "Autoridad robusta" },
    average: { contact: 0.02, attendance: 0.02, close: 0.005, label: "Marca correcta" },
    weak: { contact: 0.0, attendance: 0.0, close: 0.0, label: "Marca débil" },
  },
  protocol: {
    structured: { close: 0.08, appointment: 0.02 },
    partial: { close: 0.03, appointment: 0.01 },
    none: { close: 0.0, appointment: 0.0 },
  },
  reception: {
    dedicated: { contact: 0.1, appointment: 0.09, label: "Recepción enfocada" },
    shared: { contact: 0.0, appointment: 0.04, label: "Recepción mixta" },
    multitask: { contact: -0.08, appointment: 0.0, label: "Recepción dispersa" },
  },
  speed: {
    sameDay: { contact: 0.09 },
    nextDay: { contact: 0.01 },
    late: { contact: -0.05 },
  },
  financing: {
    strong: { close: 0.06 },
    limited: { close: 0.03 },
    none: { close: 0.0 },
  },
};

const baseMetrics = {
  contactRate: 0.5,
  appointmentRate: 0.49,
  attendanceRate: 0.43,
  closeRate: 0.2,
  ticket: 2900,
};

Object.assign(config.location, {
  metro: {
    ...config.location.metro,
    cpl: 7.5,
    budgetFactor: 1.0,
  },
  capital: {
    ...config.location.capital,
    cpl: 6.0,
  },
  city: {
    ...config.location.city,
    cpl: 5.2,
  },
  rural: {
    ...config.location.rural,
    cpl: 4.6,
  },
});

Object.keys(config.cabinets).forEach((key) => {
  config.cabinets[key].implantsPerPatient = 3;
});

const optimizedTargets = {
  digital: "strong",
  protocol: "structured",
  reception: "dedicated",
  speed: "sameDay",
  financing: "strong",
  tac: "yes",
  advisor: "yes",
  visitPrice: "free",
};

const state = {
  currentStep: 0,
  answers: {},
  isCalculating: false,
  loadingTimer: null,
};

const elements = {
  questionContainer: document.getElementById("questionContainer"),
  stepLabel: document.getElementById("stepLabel"),
  stepCategory: document.getElementById("stepCategory"),
  progressBar: document.getElementById("progressBar"),
  prevButton: document.getElementById("prevButton"),
  nextButton: document.getElementById("nextButton"),
  profileHeadline: document.getElementById("profileHeadline"),
  profileSummary: document.getElementById("profileSummary"),
  currentSummary: document.getElementById("currentSummary"),
  impactNote: document.getElementById("impactNote"),
  resultsSection: document.getElementById("results"),
  kpiCards: document.getElementById("kpiCards"),
  funnelChart: document.getElementById("funnelChart"),
  comparisonChart: document.getElementById("comparisonChart"),
  resultsTable: document.getElementById("resultsTable"),
  resetButton: document.getElementById("resetButton"),
  restartScenarioLink: document.getElementById("restartScenarioLink"),
  primaryInsightTitle: document.getElementById("primaryInsightTitle"),
  primaryInsightBody: document.getElementById("primaryInsightBody"),
  insightList: document.getElementById("insightList"),
};

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function round(value, decimals = 0) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

function formatNumber(value) {
  return new Intl.NumberFormat("es-ES", { maximumFractionDigits: 0 }).format(Math.round(value));
}

function formatPercent(value) {
  return `${round(value * 100, 0)}%`;
}

function formatCurrency(value) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function getOption(questionId, value) {
  return questions.find((question) => question.id === questionId)?.options.find((option) => option.value === value);
}

function getSelectedLabel(questionId) {
  const answer = state.answers[questionId];
  return answer ? getOption(questionId, answer)?.label || "—" : "—";
}

function renderLocationMap(selectedTier) {
  const activeTier = selectedTier && locationVisuals[selectedTier] ? selectedTier : "metro";
  const zonesMarkup = locationVisuals[activeTier].zones
    .map(
      (zone, index) => `
        <g class="map-zone zone-${index + 1}" style="--delay:${index * 0.28}s">
          <ellipse class="map-zone-glow" cx="${zone.cx}" cy="${zone.cy}" rx="${zone.rx}" ry="${zone.ry}" transform="rotate(${zone.rotate} ${zone.cx} ${zone.cy})"></ellipse>
          <ellipse class="map-zone-core" cx="${zone.cx}" cy="${zone.cy}" rx="${zone.rx * 0.62}" ry="${zone.ry * 0.62}" transform="rotate(${zone.rotate} ${zone.cx} ${zone.cy})"></ellipse>
          <ellipse class="map-zone-ring" cx="${zone.cx}" cy="${zone.cy}" rx="${zone.rx * 0.82}" ry="${zone.ry * 0.82}" transform="rotate(${zone.rotate} ${zone.cx} ${zone.cy})"></ellipse>
        </g>
      `
    )
    .join("");

  return `
    <div class="location-visual">
      <div class="location-map-card">
        <div class="location-map-copy">
          <p class="mini-label">Mapa territorial</p>
          <strong>${getOption("location", activeTier)?.label || "Tier geográfico"}</strong>
          <span>${locationVisuals[activeTier].caption}</span>
        </div>
        <svg viewBox="0 0 320 300" class="spain-map" aria-hidden="true">
          <defs>
            <clipPath id="spain-clip">
              <path
                d="M41 72
                L69 52 L120 39 L161 37 L205 42 L244 57 L274 76
                L285 107 L281 139 L272 170 L286 198 L270 224
                L261 252 L232 274 L193 292 L168 277 L148 292
                L113 279 L89 257 L65 229 L44 211 L31 176
                L28 145 L31 118 Z"
              ></path>
            </clipPath>
          </defs>
          <g clip-path="url(#spain-clip)">
            <rect x="0" y="0" width="320" height="300" class="spain-map-fill"></rect>
            ${zonesMarkup}
          </g>
          <path
            class="spain-map-shape"
            d="M41 72
            L69 52 L120 39 L161 37 L205 42 L244 57 L274 76
            L285 107 L281 139 L272 170 L286 198 L270 224
            L261 252 L232 274 L193 292 L168 277 L148 292
            L113 279 L89 257 L65 229 L44 211 L31 176
            L28 145 L31 118 Z"
          ></path>
          <path class="spain-map-island canary-left" d="M28 262 q8 -5 16 0 q-8 7 -16 0z"></path>
          <path class="spain-map-island canary-right" d="M49 267 q7 -4 13 0 q-6 6 -13 0z"></path>
          <path class="spain-map-island balearic-main" d="M274 160 q8 -4 16 0 q-7 6 -16 0z"></path>
          <path class="spain-map-island balearic-small" d="M292 150 q4 -2 8 0 q-3 4 -8 0z"></path>
        </svg>
      </div>
    </div>
  `;
}

function renderLocationMap(selectedTier) {
  const activeTier = selectedTier && locationVisuals[selectedTier] ? selectedTier : "metro";
  const regionsMarkup = (locationVisuals[activeTier].regions || [])
    .map(
      (region, index) => `
        <g class="map-zone zone-${index + 1}" style="--delay:${index * 0.28}s">
          <path class="map-zone-area" d="${region.d}"></path>
          <path class="map-zone-glow" d="${region.d}"></path>
          <circle class="map-zone-core" cx="${region.cx}" cy="${region.cy}" r="${region.r}"></circle>
          <circle class="map-zone-ring" cx="${region.cx}" cy="${region.cy}" r="${region.r * 0.92}"></circle>
        </g>
      `
    )
    .join("");

  return `
    <div class="location-visual">
      <div class="location-map-card">
        <div class="location-map-copy">
          <p class="mini-label">Mapa territorial</p>
          <strong>${getOption("location", activeTier)?.label || "Tier geografico"}</strong>
          <span>${locationVisuals[activeTier].caption}</span>
        </div>
        <svg viewBox="0 0 370 330" class="spain-map" aria-hidden="true">
          <defs>
            <clipPath id="spain-clip">
              <path
                d="M41 122
                L47 97 L55 79 L60 62 L70 48 L84 39 L96 28
                L118 22 L145 14 L180 11 L217 13 L250 21
                L280 34 L306 48 L329 66 L344 87 L350 111
                L349 132 L344 153 L338 175 L333 193 L338 205
                L331 220 L323 237 L318 257 L304 275 L285 291
                L260 305 L234 314 L210 322 L190 308 L171 318
                L145 323 L120 317 L99 304 L84 289 L73 270
                L64 252 L53 240 L43 222 L37 199 L33 174
                L33 150 L35 135 Z"
              ></path>
            </clipPath>
          </defs>
          <g clip-path="url(#spain-clip)">
            <rect x="0" y="0" width="370" height="330" class="spain-map-fill"></rect>
            <path class="spain-map-grid" d="M62 84 C119 57 191 47 267 65 C301 73 326 88 343 106"></path>
            <path class="spain-map-grid" d="M49 150 C115 132 187 128 258 138 C301 145 327 160 343 179"></path>
            <path class="spain-map-grid" d="M61 219 C121 200 186 198 245 207 C281 213 308 227 325 244"></path>
            <rect class="spain-map-scan" x="-150" y="0" width="110" height="330"></rect>
            ${regionsMarkup}
          </g>
          <path
            class="spain-map-shape"
            d="M41 122
            L47 97 L55 79 L60 62 L70 48 L84 39 L96 28
            L118 22 L145 14 L180 11 L217 13 L250 21
            L280 34 L306 48 L329 66 L344 87 L350 111
            L349 132 L344 153 L338 175 L333 193 L338 205
            L331 220 L323 237 L318 257 L304 275 L285 291
            L260 305 L234 314 L210 322 L190 308 L171 318
            L145 323 L120 317 L99 304 L84 289 L73 270
            L64 252 L53 240 L43 222 L37 199 L33 174
            L33 150 L35 135 Z"
          ></path>
          <path class="spain-map-island canary-left" d="M50 292 q11 -6 22 0 q-10 9 -22 0z"></path>
          <path class="spain-map-island canary-right" d="M82 299 q9 -5 17 0 q-8 7 -17 0z"></path>
          <path class="spain-map-island balearic-main" d="M325 181 q12 -6 24 0 q-11 9 -24 0z"></path>
          <path class="spain-map-island balearic-small" d="M343 168 q6 -3 12 0 q-5 6 -12 0z"></path>
        </svg>
      </div>
    </div>
  `;
}

function renderQuestion() {
  if (state.isCalculating) {
    return;
  }

  const question = questions[state.currentStep];
  const answer = state.answers[question.id];

  elements.stepLabel.textContent = `Paso ${state.currentStep + 1} de ${questions.length}`;
  elements.stepCategory.textContent = question.category;
  elements.progressBar.style.width = `${((state.currentStep + 1) / questions.length) * 100}%`;

  const optionsMarkup = question.options
    .map(
      (option) => `
        <button class="option-card ${answer === option.value ? "selected" : ""}" type="button" data-option-value="${option.value}" aria-pressed="${answer === option.value}">
          <span>
            <strong>${option.label}</strong>
            <span class="option-description">${option.description}</span>
          </span>
          <span class="option-score">${option.scoreLabel}</span>
        </button>
      `
    )
    .join("");

  elements.questionContainer.innerHTML = `
    <div class="question-category">${question.category}</div>
    <h3 class="question-title">${question.title}</h3>
    <p class="question-helper">${question.helper}</p>
    <div class="options-grid">${optionsMarkup}</div>
  `;

  elements.questionContainer.querySelectorAll("[data-option-value]").forEach((button) => {
    button.addEventListener("click", () => {
      state.answers[question.id] = button.dataset.optionValue;
      updateProfileCard();
      renderQuestion();
      if (isComplete()) {
        startResultsLoading();
      }
    });
  });

  elements.prevButton.disabled = state.currentStep === 0;
  elements.nextButton.disabled = !answer;
  elements.nextButton.textContent = state.currentStep === questions.length - 1 ? "Ver resultado" : "Siguiente";
  elements.impactNote.innerHTML =
    question.id === "location"
      ? `
        <p class="mini-label">Qué cambia aquí</p>
        <p>${question.impactNote}</p>
        ${renderLocationMap(answer)}
      `
      : `
        <p class="mini-label">Qué cambia aquí</p>
        <p>${question.impactNote}</p>
      `;
}

function updateProfileCard() {
  const locationLabel = getSelectedLabel("location");
  const cabinetsLabel = getSelectedLabel("cabinets");
  const receptionLabel = getSelectedLabel("reception");
  const digitalLabel = getSelectedLabel("digital");
  const protocolLabel = getSelectedLabel("protocol");
  const advisorLabel = getSelectedLabel("advisor");

  const answeredCount = Object.keys(state.answers).length;

  let headline = "Clínica aún sin definir";
  let summary =
    "Selecciona las variables clave para ver una lectura ejecutiva del caso.";

  if (answeredCount >= 3) {
    headline = `${locationLabel !== "—" ? locationLabel : "Clínica"} · ${cabinetsLabel !== "—" ? cabinetsLabel : "estructura por definir"}`;
    summary = `Caso con ${receptionLabel !== "—" ? receptionLabel.toLowerCase() : "recepción sin definir"}, presencia digital ${
      digitalLabel !== "—" ? digitalLabel.toLowerCase() : "sin evaluar"
    } y protocolo ${protocolLabel !== "—" ? protocolLabel.toLowerCase() : "no evaluado"}.`;
  }

  elements.profileHeadline.textContent = headline;
  elements.profileSummary.textContent = summary;

  elements.currentSummary.innerHTML = `
    <article>
      <span>Entorno</span>
      <strong>${locationLabel}</strong>
    </article>
    <article>
      <span>Estructura</span>
      <strong>${cabinetsLabel}</strong>
    </article>
    <article>
      <span>Conversión</span>
      <strong>${advisorLabel}</strong>
    </article>
    <article>
      <span>Madurez digital</span>
      <strong>${digitalLabel}</strong>
    </article>
  `;
}

function renderQuestion() {
  if (state.isCalculating) {
    return;
  }

  const question = questions[state.currentStep];
  const answer = state.answers[question.id];

  elements.stepLabel.textContent = `Paso ${state.currentStep + 1} de ${questions.length}`;
  elements.stepCategory.textContent = question.category;
  elements.progressBar.style.width = `${((state.currentStep + 1) / questions.length) * 100}%`;

  const optionsMarkup = question.options
    .map(
      (option) => `
        <button class="option-card ${answer === option.value ? "selected" : ""}" type="button" data-option-value="${option.value}" aria-pressed="${answer === option.value}">
          <span>
            <strong>${option.label}</strong>
            <span class="option-description">${option.description}</span>
          </span>
          <span class="option-score">${option.scoreLabel}</span>
        </button>
      `
    )
    .join("");

  elements.questionContainer.innerHTML = `
    <div class="question-category">${question.category}</div>
    <h3 class="question-title">${question.title}</h3>
    <p class="question-helper">${question.helper}</p>
    <div class="options-grid">${optionsMarkup}</div>
  `;

  elements.questionContainer.querySelectorAll("[data-option-value]").forEach((button) => {
    button.addEventListener("click", () => {
      state.answers[question.id] = button.dataset.optionValue;
      updateProfileCard();
      renderQuestion();
      if (isComplete()) {
        startResultsLoading();
      }
    });
  });

  elements.prevButton.disabled = state.currentStep === 0;
  elements.nextButton.disabled = !answer;
  elements.nextButton.textContent = state.currentStep === questions.length - 1 ? "Ver resultado" : "Siguiente";
  elements.impactNote.innerHTML = `
    <p class="mini-label">Que cambia aqui</p>
    <p>${question.impactNote}</p>
  `;
}

function renderLoadingState() {
  const currentQuestion = questions[state.currentStep];

  elements.stepLabel.textContent = `Paso ${questions.length} de ${questions.length}`;
  elements.stepCategory.textContent = "Calculando";
  elements.progressBar.style.width = "100%";

  elements.questionContainer.innerHTML = `
    <div class="loading-state" aria-live="polite">
      <div class="loading-core" aria-hidden="true">
        <span class="loading-ring loading-ring-one"></span>
        <span class="loading-ring loading-ring-two"></span>
        <span class="loading-ring loading-ring-three"></span>
      </div>
      <p class="mini-label">Procesando escenario</p>
      <h3 class="loading-title">Calculando la proyección de la clínica</h3>
      <p class="loading-helper">
        Estamos cruzando captación, contacto, asistencia y cierre para estimar un escenario realista con una campaña tipo de Climadent.
      </p>
    </div>
  `;

  elements.prevButton.disabled = true;
  elements.nextButton.disabled = true;
  elements.nextButton.textContent = "Calculando...";
  elements.impactNote.innerHTML = `
    <p class="mini-label">Lectura en curso</p>
    <p>${currentQuestion.impactNote}</p>
  `;
}

function startResultsLoading() {
  if (state.isCalculating) {
    return;
  }

  state.isCalculating = true;
  clearTimeout(state.loadingTimer);
  renderLoadingState();

  state.loadingTimer = setTimeout(() => {
    state.isCalculating = false;
    state.loadingTimer = null;
    renderQuestion();
    renderResults();
  }, 2000);
}

function isComplete() {
  return questions.every((question) => Boolean(state.answers[question.id]));
}

function getScenarioAnswers(mode = "current") {
  if (mode === "current") {
    return { ...state.answers };
  }

  const optimized = { ...state.answers };
  Object.entries(optimizedTargets).forEach(([key, value]) => {
    optimized[key] = value;
  });
  return optimized;
}

function calculateScenario(inputAnswers) {
  const location = config.location[inputAnswers.location];
  const cabinets = config.cabinets[inputAnswers.cabinets];
  const visitPrice = config.visitPrice[inputAnswers.visitPrice];
  const digital = config.digital[inputAnswers.digital];
  const protocol = config.protocol[inputAnswers.protocol];
  const reception = config.reception[inputAnswers.reception];
  const speed = config.speed[inputAnswers.speed];
  const financing = config.financing[inputAnswers.financing];
  const tac = config.tac[inputAnswers.tac];
  const advisor = config.advisor[inputAnswers.advisor];

  const recommendedBudget = config.mediaBudget;
  const cpl = round(location.cpl, 1);
  const rawLeads = recommendedBudget / cpl;
  const leads = round(rawLeads, 1);

  const contactRate = clamp(
    baseMetrics.contactRate +
      (location.contact ?? 0) +
      (digital.contact ?? 0) +
      (reception.contact ?? 0) +
      (speed.contact ?? 0),
    0.4,
    0.92
  );

  const appointmentRate = clamp(
    baseMetrics.appointmentRate +
      (visitPrice.appointment ?? 0) +
      (reception.appointment ?? 0) +
      (protocol.appointment ?? 0),
    0.35,
    0.88
  );

  const attendanceRate = clamp(
    baseMetrics.attendanceRate + (visitPrice.attendance ?? 0) + (digital.attendance ?? 0),
    0.38,
    0.55
  );

  const closeRate = clamp(
    baseMetrics.closeRate +
      (digital.close ?? 0) +
      (protocol.close ?? 0) +
      (financing.close ?? 0) +
      (tac.close ?? 0) +
      (advisor.close ?? 0),
    0.14,
    0.45
  );

  const contactLeads = leads * contactRate;
  const appointments = contactLeads * appointmentRate;
  const visits = Math.min(appointments * attendanceRate, cabinets.capacityVisits);
  const closedPatients = visits * closeRate;
  const implants = closedPatients * cabinets.implantsPerPatient;
  const revenue = closedPatients * baseMetrics.ticket;
  const totalCampaignCost = recommendedBudget + config.serviceFee;
  const cac = closedPatients > 0 ? totalCampaignCost / closedPatients : 0;
  const costPerVisit = visits > 0 ? totalCampaignCost / visits : 0;
  const roi = totalCampaignCost > 0 ? revenue / totalCampaignCost : 0;

  return {
    recommendedBudget,
    cpl,
    leads,
    contactRate,
    contactLeads,
    appointmentRate,
    appointments,
    attendanceRate,
    visits,
    closeRate,
    closedPatients,
    implants,
    revenue,
    totalCampaignCost,
    cac,
    costPerVisit,
    roi,
    competition: location.competition,
    scaleLabel: cabinets.scaleLabel,
  };
}

function getPhaseDiagnostics(currentScenario, optimizedScenario) {
  const deltas = [
    {
      key: "contactRate",
      label: "contacto",
      current: currentScenario.contactRate,
      optimized: optimizedScenario.contactRate,
    },
    {
      key: "appointmentRate",
      label: "agendado",
      current: currentScenario.appointmentRate,
      optimized: optimizedScenario.appointmentRate,
    },
    {
      key: "attendanceRate",
      label: "asistencia",
      current: currentScenario.attendanceRate,
      optimized: optimizedScenario.attendanceRate,
    },
    {
      key: "closeRate",
      label: "cierre",
      current: currentScenario.closeRate,
      optimized: optimizedScenario.closeRate,
    },
  ];

  const weakest = deltas.reduce((lowest, item) => (item.current < lowest.current ? item : lowest), deltas[0]);
  const biggestLift = deltas.reduce(
    (largest, item) => (item.optimized - item.current > largest.optimized - largest.current ? item : largest),
    deltas[0]
  );

  return { weakest, biggestLift };
}

function buildInsights(currentScenario, optimizedScenario) {
  const diagnostics = getPhaseDiagnostics(currentScenario, optimizedScenario);
  const currentAnswers = state.answers;

  const title = `La mayor fuga está en ${diagnostics.weakest.label}`;
  const body = `Con la configuración actual, la clínica está desaprovechando una parte relevante del valor generado antes de llegar a tratamiento. El mayor salto potencial aparece al reforzar ${diagnostics.biggestLift.label}.`;

  const insights = [];

  if (currentAnswers.reception === "multitask" || currentAnswers.speed === "late") {
    insights.push(
      "Recepción y velocidad de contacto apuntan a una pérdida temprana de oportunidades antes incluso del agendado."
    );
  }

  if (currentAnswers.protocol !== "structured" || currentAnswers.advisor !== "yes") {
    insights.push(
      "La clínica parece tener más recorrido en cierre que en volumen: profesionalizar primera visita y cierre puede multiplicar mejor el tráfico actual."
    );
  }

  if (currentAnswers.digital === "weak") {
    insights.push(
      "La autoridad digital débil añade fricción tanto al contacto como a la asistencia; la clínica no convierte con toda la confianza que podría."
    );
  }

  if (currentAnswers.tac === "no" || currentAnswers.financing === "none") {
    insights.push(
      "El diagnóstico y la financiación están limitando la aceptación del tratamiento, especialmente en implantología de ticket alto."
    );
  }

  if (insights.length < 3) {
    insights.push(
      "La estructura general es razonable, pero todavía existe margen claro para traducir mejor la demanda en visitas realizadas y cierres."
    );
  }

  const incrementalImplants = optimizedScenario.implants - currentScenario.implants;
  insights.push(
    `En escenario optimizado, el partner podría activar aproximadamente ${formatNumber(incrementalImplants)} implantes mensuales adicionales con la misma base clínica.`
  );

  return { title, body, insights: insights.slice(0, 4) };
}

function renderResults() {
  if (!isComplete()) {
    return;
  }

  const currentScenario = calculateScenario(getScenarioAnswers("current"));
  const optimizedScenario = calculateScenario(getScenarioAnswers("optimized"));
  const insights = buildInsights(currentScenario, optimizedScenario);

  elements.resultsSection.classList.remove("hidden");

  elements.kpiCards.innerHTML = `
    <article class="kpi-card">
      <p class="mini-label">Pacientes extra cerrados</p>
      <strong>${formatNumber(currentScenario.closedPatients)}</strong>
      <span>Proyección mensual realista de pacientes extra captados y cerrados con una campaña tipo de Climadent.</span>
    </article>
    <article class="kpi-card">
      <p class="mini-label">Implantes extra proyectados</p>
      <strong>${formatNumber(currentScenario.implants)}</strong>
      <span>Volumen mensual realista de implantes extra asociado a ese escenario de campaña y conversión.</span>
    </article>
    <article class="kpi-card">
      <p class="mini-label">Ingresos extra proyectados</p>
      <strong>${formatCurrency(currentScenario.revenue)}</strong>
      <span>Producción mensual extra estimada de forma realista con ticket medio constante.</span>
    </article>
    <article class="kpi-card">
      <p class="mini-label">Coste por primera visita</p>
      <strong>${formatCurrency(currentScenario.costPerVisit)}</strong>
      <span>Coste medio estimado por cada primera visita generada con una campaña tipo.</span>
    </article>
  `;

  const funnelMax = Math.max(
    currentScenario.leads,
    currentScenario.contactLeads,
    currentScenario.appointments,
    currentScenario.visits,
    currentScenario.closedPatients
  );

  const funnelRows = [
    { label: "Leads estimados", value: currentScenario.leads, note: `${formatCurrency(currentScenario.cpl)} CPL` },
    { label: "Leads contactados", value: currentScenario.contactLeads, note: formatPercent(currentScenario.contactRate) },
    { label: "Citas agendadas", value: currentScenario.appointments, note: formatPercent(currentScenario.appointmentRate) },
    { label: "Primeras visitas", value: currentScenario.visits, note: formatPercent(currentScenario.attendanceRate) },
    { label: "Pacientes cerrados", value: currentScenario.closedPatients, note: formatPercent(currentScenario.closeRate) },
  ];

  elements.funnelChart.innerHTML = funnelRows
    .map(
      (row) => `
        <div class="funnel-row">
          <div class="chart-labels">
            <span>${row.label}</span>
            <strong>${formatNumber(row.value)} · ${row.note}</strong>
          </div>
          <div class="funnel-bar-shell">
            <div class="funnel-bar" style="width:${(row.value / funnelMax) * 100}%"></div>
          </div>
        </div>
      `
    )
    .join("");

  const comparisonItems = [
    {
      label: "Leads estimados",
      current: currentScenario.leads,
      optimized: optimizedScenario.leads,
      formatter: formatNumber,
    },
    {
      label: "% contacto",
      current: currentScenario.contactRate,
      optimized: optimizedScenario.contactRate,
      formatter: formatPercent,
      scaleMax: 1,
    },
    {
      label: "Ingresos clínicos",
      current: currentScenario.appointmentRate,
      optimized: optimizedScenario.appointmentRate,
      formatter: formatPercent,
      scaleMax: 1,
    },
    {
      label: "ROI captación",
      current: currentScenario.roi,
      optimized: optimizedScenario.roi,
      formatter: (value) => `${round(value, 1)}x`,
    },
  ];

  const comparisonKpiItems = [
    {
      label: "Leads estimados",
      current: currentScenario.leads,
      optimized: optimizedScenario.leads,
      formatter: formatNumber,
    },
    {
      label: "% contacto",
      current: currentScenario.contactRate,
      optimized: optimizedScenario.contactRate,
      formatter: formatPercent,
      scaleMax: 1,
    },
    {
      label: "% cita / contacto",
      current: currentScenario.appointmentRate,
      optimized: optimizedScenario.appointmentRate,
      formatter: formatPercent,
      scaleMax: 1,
    },
    {
      label: "% asistencia",
      current: currentScenario.attendanceRate,
      optimized: optimizedScenario.attendanceRate,
      formatter: formatPercent,
      scaleMax: 0.55,
    },
    {
      label: "% cierre / visita",
      current: currentScenario.closeRate,
      optimized: optimizedScenario.closeRate,
      formatter: formatPercent,
      scaleMax: 0.45,
    },
  ];

  const comparisonScales = comparisonKpiItems.map((item) => ({
    ...item,
    rowMax: item.scaleMax || Math.max(item.current, item.optimized, 1),
  }));

  elements.comparisonChart.innerHTML = comparisonScales
    .map(
      (item) => `
        <div class="comparison-row">
          <div class="chart-labels">
            <span>${item.label}</span>
            <strong>${item.formatter(item.current)} → ${item.formatter(item.optimized)}</strong>
          </div>
          <div class="comparison-shell">
            <div class="comparison-bar-shell">
              <div class="comparison-bar-current" style="width:${(item.current / item.rowMax) * 100}%"></div>
            </div>
            <div class="comparison-bar-shell">
              <div class="comparison-bar-optimized" style="width:${(item.optimized / item.rowMax) * 100}%"></div>
            </div>
          </div>
        </div>
      `
    )
    .join("");

  const tableRows = [
    {
      label: "Inversión recomendada",
      current: formatCurrency(currentScenario.recommendedBudget),
      optimized: formatCurrency(optimizedScenario.recommendedBudget),
      note: "Se ajusta al tamaño operativo estimado por número de gabinetes.",
    },
    {
      label: "CPL estimado",
      current: formatCurrency(currentScenario.cpl),
      optimized: formatCurrency(optimizedScenario.cpl),
      note: `Presión competitiva ${currentScenario.competition.toLowerCase()} según entorno.`,
    },
    {
      label: "% contacto",
      current: formatPercent(currentScenario.contactRate),
      optimized: formatPercent(optimizedScenario.contactRate),
      note: "Impactado por velocidad de contacto, recepción y autoridad digital.",
    },
    {
      label: "% cita/contacto",
      current: formatPercent(currentScenario.appointmentRate),
      optimized: formatPercent(optimizedScenario.appointmentRate),
      note: "La fricción de primera visita y el equipo de recepción mueven esta fase.",
    },
    {
      label: "% asistencia",
      current: formatPercent(currentScenario.attendanceRate),
      optimized: formatPercent(optimizedScenario.attendanceRate),
      note: "La marca y la facilidad de entrada sostienen la asistencia real.",
    },
    {
      label: "% cierre/visita",
      current: formatPercent(currentScenario.closeRate),
      optimized: formatPercent(optimizedScenario.closeRate),
      note: "Diagnóstico, financiación, asesor y protocolo explican la diferencia.",
    },
    {
      label: "Pacientes cerrados",
      current: formatNumber(currentScenario.closedPatients),
      optimized: `<span class="value-positive">${formatNumber(optimizedScenario.closedPatients)}</span>`,
      note: "Conversión clínica mensual estimada en implantología.",
    },
    {
      label: "Implantes estimados",
      current: formatNumber(currentScenario.implants),
      optimized: `<span class="value-positive">${formatNumber(optimizedScenario.implants)}</span>`,
      note: "KPI directo de valor para Sweden & Martina.",
    },
    {
      label: "Ingresos clínica",
      current: formatCurrency(currentScenario.revenue),
      optimized: `<span class="value-positive">${formatCurrency(optimizedScenario.revenue)}</span>`,
      note: "Producción económica estimada sobre ticket medio constante.",
    },
    {
      label: "CAC por paciente",
      current: formatCurrency(currentScenario.cac),
      optimized: formatCurrency(optimizedScenario.cac),
      note: "Coste de adquisición estimado según el rendimiento del embudo.",
    },
  ];

  elements.resultsTable.innerHTML = tableRows
    .map(
      (row) => `
        <tr>
          <td><strong>${row.label}</strong></td>
          <td>${row.current}</td>
          <td>${row.optimized}</td>
          <td>${row.note}</td>
        </tr>
      `
    )
    .join("");

  elements.primaryInsightTitle.textContent = insights.title;
  elements.primaryInsightBody.textContent = insights.body;
  elements.insightList.innerHTML = insights.insights
    .map((item) => `<div class="insight-pill">${item}</div>`)
    .join("");

  elements.resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function goToNext() {
  if (state.isCalculating) {
    return;
  }

  const currentQuestion = questions[state.currentStep];
  if (!state.answers[currentQuestion.id]) {
    return;
  }

  if (state.currentStep === questions.length - 1) {
    startResultsLoading();
    return;
  }

  state.currentStep += 1;
  renderQuestion();
}

function goToPrevious() {
  if (state.currentStep === 0) {
    return;
  }

  state.currentStep -= 1;
  renderQuestion();
}

function resetSimulation() {
  clearTimeout(state.loadingTimer);
  state.isCalculating = false;
  state.loadingTimer = null;
  state.currentStep = 0;
  state.answers = {};
  elements.resultsSection.classList.add("hidden");
  updateProfileCard();
  renderQuestion();
  document.getElementById("simulador").scrollIntoView({ behavior: "smooth", block: "start" });
}

elements.nextButton.addEventListener("click", goToNext);
elements.prevButton.addEventListener("click", goToPrevious);
elements.resetButton.addEventListener("click", resetSimulation);
elements.restartScenarioLink?.addEventListener("click", (event) => {
  event.preventDefault();
  resetSimulation();
});

renderQuestion();
updateProfileCard();
