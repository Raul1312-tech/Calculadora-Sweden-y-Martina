const i18n = {
  es: {
    locale: "es-ES",
    metaTitle: "Sweden & Martina | Calculadora de Potencial de Clínica",
    metaDescription:
      "Landing interactiva para estimar el potencial de rentabilidad, captación y consumo de implantes de clínicas dentales para partners de Sweden & Martina.",
    static: {
      brandSubtitle: "Partner Opportunity Calculator",
      brandCollabLabel: "Desarrollado por",
      navStartSimulation: "Iniciar simulación",
      heroEyebrow: "Herramienta de venta consultiva para partner",
      heroTitle:
        'Descubre como puede aumentarse hasta un 50% el volumen de pacientes de implantes <span>Sweden & Martina, en cualquier clínica dental</span>',
      heroText:
        "Simula la estructura real de una clínica, detecta sus cuellos de botella y traduce esa realidad en pacientes, producción e implantes potenciales. Pensado para ayudar al partner a priorizar oportunidades y argumentar valor con números.",
      heroSignatureLabel: "Motor desarrollado por",
      heroPrimaryCtaDesktop: "Jugar con escenarios",
      heroPrimaryCtaMobile: "Calcular potencial de cualquier clínica dental con Climadent",
      heroSecondaryCta: "Ver metodología",
      heroMetricOne: "variables de negocio dental",
      heroMetricTwo: "fases del embudo interpretables",
      heroMetricThree: "escenarios comparados: actual y con campaña",
      productMiniLabel: "Motor de oportunidad",
      productTitle: "Rentabilidad clínica, cierre y consumo de implantes",
      productBody:
        "Un modelo interno para traducir estructura, marketing y conversión clínica en una lectura comercial clara para Sweden & Martina.",
      heroPanelCalcLabel: "Qué calcula",
      heroPanelCalcItemOne: "Potencial de captación mensual",
      heroPanelCalcItemTwo: "Capacidad de primeras visitas",
      heroPanelCalcItemThree: "Conversión clínica estimada",
      heroPanelCalcItemFour: "Consumo incremental de implantes",
      heroAudienceLabel: "Para quién está pensado",
      heroAudienceBody:
        "Delegados, distribuidores y partners que necesitan ordenar qué clínicas tienen más recorrido y cómo argumentar esa oportunidad con números.",
      pillarOneTitle: "No es una calculadora genérica",
      pillarOneBody:
        "Traduce señales reales del negocio dental a un modelo de rentabilidad y consumo de implantes.",
      pillarTwoTitle: "Explica por qué sucede",
      pillarTwoBody:
        "Cada respuesta solo impacta en su fase real del embudo: captación, contacto, agendado, asistencia o cierre.",
      pillarThreeTitle: "Ayuda a vender mejor",
      pillarThreeBody:
        "El resultado no es solo un número: es un relato comercial sobre potencial, restricciones y mejora estructural.",
      simulatorEyebrow: "Simulador guiado",
      simulatorTitle:
        "Calcula el potencial de cualquier clínica dental con el sistema de captación Climadent en un mes con una campaña de implantes",
      simulatorBody:
        "Cada paso describe una realidad operativa. El motor convierte esas respuestas en una proyección mensual utilizable en conversación comercial.",
      profileEyebrow: "Perfil en construcción",
      resultsEyebrow: "Resultado estratégico",
      resultsTitle: "Lectura mensual del potencial de la clínica",
      resultsBody:
        "Una comparación entre la situación actual de la clínica y el escenario realista al que podría llegar en un mes con una campaña activa de Climadent.",
      insightEyebrow: "Lectura comercial",
      funnelEyebrow: "Embudo estimado",
      funnelTitle: "Conversión por fases",
      funnelChip: "Mensual",
      comparisonEyebrow: "Comparativa",
      comparisonTitle: "Actual vs con campaña",
      comparisonChip: "Salto realista",
      impactEyebrow: "Mapa de impacto",
      impactTitle: "Qué está moviendo este resultado",
      impactChip: "Por fases",
      tableEyebrow: "Detalle de KPIs",
      tableTitle: "Tabla ejecutiva",
      closingEyebrow: "Próximo paso",
      closingTitle: "Usa este escenario como argumento de conversación, no como dato aislado",
      closingBody:
        "El valor de la herramienta está en detectar qué clínicas tienen más recorrido y qué palancas justifican una intervención estructurada para hacer crecer su consumo de implantes.",
      reviewMethodologyLink: "Revisar metodología",
      tableHeaders: ["KPI", "Resultados esperables", "Lectura"],
      buttons: {
        reset: "Reiniciar simulación",
        previous: "Anterior",
        next: "Siguiente",
        viewResults: "Ver resultado",
        restartScenario: "Explorar otro escenario",
        calculating: "Calculando...",
      },
      profile: {
        defaultHeadline: "Clínica aún sin definir",
        defaultSummary: "Selecciona las variables clave para ver una lectura ejecutiva del caso.",
        clinicFallback: "Clínica",
        structureFallback: "estructura por definir",
        receptionFallback: "recepción sin definir",
        digitalFallback: "sin evaluar",
        protocolFallback: "no evaluado",
        pendingAnswer: "Sin responder",
        baselineSummary: "Base actual declarada: {visits} primeras visitas y {implants} implantes al mes.",
        summaryTemplate:
          "Caso con {reception}, presencia digital {digital} y protocolo {protocol}.",
      },
      loading: {
        stepLabel: "Paso {current} de {total}",
        category: "Calculando",
        miniLabel: "Procesando escenario",
        title: "Calculando la proyección de la clínica",
        helper:
          "Estamos cruzando captación, contacto, asistencia y cierre para estimar un escenario realista con una campaña tipo de Climadent.",
        impactLabel: "Lectura en curso",
      },
      questionUi: {
        impactLabel: "Qué cambia aquí",
      },
      diagnostics: {
        contact: "contacto",
        appointments: "agendado",
        attendance: "asistencia",
        close: "cierre",
      },
      insights: {
        title: "La mayor fuga está en {phase}",
        body:
          "Con la configuración actual, la clínica está desaprovechando una parte relevante del valor generado antes de llegar a tratamiento. El mayor salto potencial aparece al reforzar {lift}.",
        scoreLabel: "Nivel de optimización",
        scoreCaption:
          "Puntuación estimada sobre cuánto de estructurada está la clínica para convertir demanda en pacientes de implantes de forma consistente.",
        earlyLeak:
          "Recepción y velocidad de contacto apuntan a una pérdida temprana de oportunidades antes incluso del agendado.",
        closeOpportunity:
          "La clínica parece tener más recorrido en cierre que en volumen: profesionalizar primera visita y cierre puede multiplicar mejor el tráfico actual.",
        weakDigital:
          "La autoridad digital débil añade fricción tanto al contacto como a la asistencia; la clínica no convierte con toda la confianza que podría.",
        tacFinance:
          "El diagnóstico y la financiación están limitando la aceptación del tratamiento, especialmente en implantología de ticket alto.",
        generic:
          "La estructura general es razonable, pero todavía existe margen claro para traducir mejor la demanda en visitas realizadas y cierres.",
        implantsLift:
          "Si además la clínica optimizara al máximo su estructura, el partner podría activar aproximadamente {value} implantes adicionales al mes con la misma base clínica.",
        cards: {
          contactTitle: "Refuerzo de contacto y recepción",
          contactBody:
            "La prioridad es reducir fuga en las primeras horas. Una recepción enfocada, guiones claros y seguimiento inmediato suelen mover el embudo antes que cualquier cambio publicitario.",
          closeTitle: "Protocolo de visita y cierre",
          closeBody:
            "La clínica ya genera interés, pero necesita una primera visita más guiada: diagnóstico más claro, más autoridad en la propuesta y un camino de decisión más simple para el paciente.",
          trustTitle: "Marca y confianza previa",
          trustBody:
            "Antes de acudir, el paciente necesita más seguridad. Una presencia digital más sólida y una experiencia de entrada más clara ayudan a que el tráfico no se enfríe entre lead y visita.",
          financeTitle: "Financiación y accesibilidad",
          financeBody:
            "Cuando la financiación no forma parte real de la venta, se pierde aceptación incluso con casos bien indicados. Integrarla mejor suele elevar la conversión sin exigir más inversión.",
          operationsTitle: "Capacidad operativa y consistencia",
          operationsBody:
            "La oportunidad no está solo en captar más, sino en sostener mejor el flujo. Ordenar agenda, recepción y seguimiento permite crecer con menos fricción y más previsibilidad.",
          impactTitle: "Impacto potencial mensual",
          impactBody:
            "Si además la clínica optimizara al máximo sus procesos internos, todavía podría capturar más valor con la misma campaña y convertir una mayor parte del interés actual en tratamientos cerrados.",
          impactTail: "Eso abriría un margen aproximado de {implants} implantes extra y {revenue} de facturación mensual adicional.",
        },
      },
      results: {
        kpis: {
          patientsTitle: "Pacientes de implantes extra cerrados al mes",
          patientsBody:
            "Proyección mensual de pacientes extra captados y cerrados con una campaña tipo de Climadent.",
          implantsTitle: "Implantes extra proyectados al mes",
          implantsBody:
            "Volumen mensual de implantes extra colocados por la clínica",
          revenueTitle: "Facturación implantológica extra al mes",
          revenueBody: "Facturación mensual extra conseguida por la clínica con una campaña de un mes de implantes",
          costTitle: "ROI de campaña de implantes",
          costBody: "Retorno estimado de una campaña de implantes con una inversión mensual de 450 € en Meta.",
        },
        funnel: {
          leads: "Leads estimados para implantes",
          contacted: "Leads contactados de implantes",
          appointments: "Citas agendadas para implantes",
          visits: "Primeras visitas de implantes al mes de la clínica",
          closed: "Pacientes cerrados de implantes de la clínica",
        },
        comparison: {
          leads: "Leads estimados",
          contact: "% contacto",
          appointment: "% cita / contacto",
          attendance: "% asistencia",
          close: "% cierre / visita",
        },
        table: {
          budget: "Inversión mensual de campaña",
          budgetNote: "En esta versión trabajamos con una inversión fija de 450 € al mes en Meta.",
          cpl: "CPL estimado",
          cplNote: "Presión competitiva {competition} según entorno.",
          contact: "% contacto",
          contactNote: "Impactado por velocidad de contacto, recepción y autoridad digital.",
          appointment: "% cita/contacto",
          appointmentNote: "La fricción de primera visita y el equipo de recepción mueven esta fase.",
          attendance: "% asistencia",
          attendanceNote: "La marca y la facilidad de entrada sostienen la asistencia real.",
          close: "% cierre/visita",
          closeNote: "Diagnóstico, financiación, asesor y protocolo explican la diferencia.",
          patients: "Pacientes cerrados extra de implantes",
          patientsNote: "Conversión clínica mensual estimada en valoración implantológica.",
          implants: "Implantes mensuales extra colocados por la clínica",
          implantsNote: "KPI directo de valor para Sweden & Martina.",
          revenue: "Facturación extra en implantología",
          revenueNote: "Facturación estimada asociada a implantología sobre el ticket medio indicado.",
          cac: "CAC por paciente",
          cacNote: "Coste de adquisición estimado según el rendimiento del embudo.",
        },
        competition: {
          high: "alta",
          mediumHigh: "media-alta",
          medium: "media",
          low: "baja",
        },
      },
      questions: {
        location: {
          category: "Entorno",
          title: "¿Dónde compite la clínica?",
          helper:
            "Clasificamos la clínica según el tipo de entorno en el que está ubicada: área metropolitana, capital relevante, ciudad mediana o población pequeña.",
          impactNote:
            "Esta clasificación territorial nos ayuda a ubicar la clínica en un tier geográfico real antes de valorar su potencial.",
          options: [
            {
              label: "Madrid o Barcelona",
              description: "Las dos grandes áreas metropolitanas principales.",
              scoreLabel: "Tier 1",
            },
            {
              label: "Capital de provincia relevante",
              description: "Valencia, Sevilla, Málaga, Zaragoza, Bilbao o Alicante.",
              scoreLabel: "Tier 2",
            },
            {
              label: "Ciudad mediana",
              description: "Vigo, Santander, Valladolid, A Coruña o similares.",
              scoreLabel: "Tier 3",
            },
            {
              label: "Población pequeña o entorno rural",
              description: "Municipios pequeños, cabeceras de comarca o zonas rurales.",
              scoreLabel: "Tier 4",
            },
          ],
        },
        cabinets: {
          category: "Capacidad",
          title: "¿Cuántos gabinetes operativos tiene la clínica?",
          helper:
            "Usamos este dato para estimar el techo operativo real: inversión aconsejable, primeras visitas asumibles y potencial mensual de producción.",
          impactNote:
            "El número de gabinetes no mejora por sí solo la conversión, pero sí condiciona cuánto crecimiento puede absorber la clínica sin tensionar agenda y atención.",
          options: [
            { label: "1-2 gabinetes", description: "Clínica compacta, con potencial controlado y necesidad de captar con precisión.", scoreLabel: "Escala base" },
            { label: "3-4 gabinetes", description: "Tamaño óptimo para convertir bien si la estructura comercial acompaña.", scoreLabel: "Escala media" },
            { label: "5-6 gabinetes", description: "Capacidad clara para sostener más visitas, diagnósticos y cierres mensuales.", scoreLabel: "Escala alta" },
            { label: "7 o más gabinetes", description: "Operación con techo alto, ideal para escenarios de crecimiento estructurado.", scoreLabel: "Escala premium" },
          ],
        },
        tac: {
          category: "Diagnóstico",
          title: "¿Cómo está resuelta la parte de pruebas diagnósticas en implantología?",
          helper:
            "Queremos entender si la clínica puede diagnosticar y avanzar con comodidad dentro de su propio flujo o si depende demasiado de derivaciones externas.",
          impactNote:
            "Cuanta más autonomía diagnóstica tenga la clínica, más fácil es sostener autoridad, velocidad y conversión en implantología.",
          options: [
            { label: "TAC interno y escáner intraoral", description: "La clínica resuelve el diagnóstico completo dentro de su propia experiencia clínica.", scoreLabel: "Mayor cierre" },
            { label: "Escáner intraoral y TAC con derivación externa", description: "Existe una base diagnóstica sólida, aunque parte del proceso depende de un tercero.", scoreLabel: "Fricción media" },
            { label: "Todo depende de derivación externa", description: "La experiencia diagnóstica queda fuera del flujo propio de la clínica y eso penaliza el cierre.", scoreLabel: "Mayor fricción" },
          ],
        },
        advisor: {
          category: "Cierre",
          title: "¿Cuenta con asesor comercial o figura específica de cierre?",
          helper:
            "No es lo mismo que el doctor presente el caso sin apoyo que contar con una persona entrenada en financiación, objeciones y acompañamiento al cierre.",
          impactNote:
            "Afecta directamente a la conversión visita a tratamiento y al aprovechamiento del tráfico generado.",
          options: [
            { label: "Sí, hay asesor comercial", description: "La clínica tiene una figura clara para ordenar objeciones, financiación y decisión.", scoreLabel: "Cierre sólido" },
            { label: "No, el cierre recae en clínica o doctor", description: "El potencial existe, pero suele cerrarse peor por falta de proceso comercial.", scoreLabel: "Cierre irregular" },
          ],
        },
        visitPrice: {
          category: "Entrada",
          title: "¿Cómo gestionan la primera visita?",
          helper:
            "El nivel de fricción de entrada cambia mucho según si la primera visita es gratuita, simbólica o se cobra completa desde el inicio.",
          impactNote:
            "Esta variable influye sobre cita y asistencia, porque cambia la predisposición inicial del paciente a reservar y acudir.",
          options: [
            { label: "Gratuita", description: "Reduce la barrera inicial y facilita convertir interés en primera visita.", scoreLabel: "Menor fricción" },
            { label: "Precio simbólico o parcial", description: "Equilibrio entre percepción de valor y facilidad de entrada.", scoreLabel: "Fricción media" },
            { label: "Se cobra completa", description: "Filtra más, pero hace el agendado más exigente si no hay fuerte autoridad y recepción.", scoreLabel: "Mayor fricción" },
          ],
        },
        digital: {
          category: "Marca",
          title: "¿Qué nivel de presencia digital tiene la clínica?",
          helper:
            "Aquí valoramos si la clínica transmite confianza previa en redes sociales, Google, web y reputación pública.",
          impactNote:
            "Una presencia digital robusta aumenta la facilidad de contacto y reduce no-shows porque mejora la confianza antes de acudir.",
          options: [
            { label: "Robusta en redes y Google", description: "Marca viva, autoridad visible y activos digitales que respaldan la decisión del paciente.", scoreLabel: "Autoridad alta" },
            { label: "Correcta pero mejorable", description: "La clínica transmite cierta seguridad, aunque todavía no capitaliza todo su potencial.", scoreLabel: "Autoridad media" },
            { label: "Débil o poco trabajada", description: "La falta de presencia digital añade fricción al contacto y a la asistencia.", scoreLabel: "Autoridad baja" },
          ],
        },
        protocol: {
          category: "Proceso",
          title: "¿Existe un protocolo claro de primera visita y presentación del tratamiento?",
          helper:
            "No preguntamos solo si atienden bien, sino si existe un proceso repetible de diagnóstico, presentación y avance hacia cierre.",
          impactNote: "Es una de las grandes palancas del cierre en tratamientos de valor como implantología.",
          options: [
            { label: "Sí, bien estructurado", description: "La clínica tiene un flujo consistente para convertir confianza en aceptación.", scoreLabel: "Proceso fuerte" },
            { label: "Parcial o dependiente de la persona", description: "Hay buenas prácticas, pero no una sistemática estable y replicable.", scoreLabel: "Proceso medio" },
            { label: "No, cada caso se gestiona distinto", description: "Eso suele generar pérdida silenciosa de cierres y decisiones aplazadas.", scoreLabel: "Proceso débil" },
          ],
        },
        reception: {
          category: "Recepción",
          title: "¿Cómo está organizada la recepción?",
          helper:
            "La conversión telefónica y el agendado dependen mucho de si existe una recepción enfocada o si la atención está dispersa entre varias tareas.",
          impactNote:
            "Afecta sobre todo a contacto y cita: menos multitarea suele traducirse en más conversaciones útiles y más agendas cerradas.",
          options: [
            { label: "Recepción exclusiva", description: "Hay equipo dedicado a atender, responder, ordenar agenda y sostener seguimiento.", scoreLabel: "Alta conversión" },
            { label: "Apoyo compartido", description: "La función existe, pero compite con otras tareas operativas del día a día.", scoreLabel: "Conversión media" },
            { label: "Higienistas o personal multitarea", description: "La recepción no tiene foco y suele perder velocidad, calidad de llamada y consistencia.", scoreLabel: "Conversión baja" },
          ],
        },
        speed: {
          category: "Velocidad",
          title: "¿Con qué rapidez suelen contactar los nuevos leads?",
          helper:
            "La velocidad de contacto es una variable crítica. Un mismo lead vale mucho menos cuando se atiende tarde o sin sistemática.",
          impactNote:
            "Es una de las variables más directas sobre el porcentaje de contacto real y condiciona el resto del embudo.",
          options: [
            { label: "En el mismo día", description: "La clínica responde rápido y captura mejor la intención caliente del paciente.", scoreLabel: "Contacto alto" },
            { label: "Dentro de 24 horas", description: "Sigue siendo razonable, aunque ya se pierde parte de la inercia inicial.", scoreLabel: "Contacto medio" },
            { label: "Más tarde o de forma irregular", description: "Aquí suele aparecer una fuga importante de oportunidades antes incluso del agendado.", scoreLabel: "Contacto bajo" },
          ],
        },
        financing: {
          category: "Financiación",
          title: "¿La financiación está integrada de forma clara en la venta?",
          helper:
            "No basta con que exista en teoría. Lo relevante es si se utiliza con seguridad, rapidez y naturalidad para desbloquear cierres.",
          impactNote:
            "La financiación correcta impacta de forma muy clara sobre aceptación de tratamiento y consumo de implantes.",
          options: [
            { label: "Sí, bien integrada", description: "La clínica usa financiación como herramienta real de cierre y acceso al tratamiento.", scoreLabel: "Mayor cierre" },
            { label: "Existe, pero con uso limitado", description: "Ayuda en algunos casos, aunque todavía no está incorporada al proceso de forma natural.", scoreLabel: "Impacto medio" },
            { label: "No está integrada", description: "Esto frena cierres y empeora la aceptación en tratamientos de ticket elevado.", scoreLabel: "Impacto bajo" },
          ],
        },
        actualVisits: {
          category: "Base actual",
          title: "¿Cuántas primeras visitas de implantes tiene actualmente la clínica al mes?",
          helper:
            "Queremos entender el punto de partida real de la clínica antes de estimar el salto que podría dar con una campaña activa.",
          impactNote:
            "Este dato nos sirve para construir el escenario actual y compararlo con el crecimiento realista que podría conseguir la clínica.",
          inputLabel: "Media mensual de primeras visitas aproximada",
          placeholder: "Ejemplo: 15",
        },
        actualImplants: {
          category: "Base actual",
          title: "¿Cuántos implantes coloca actualmente la clínica al mes de media?",
          helper:
            "Este volumen nos ayuda a estimar la producción actual de implantología y a medir el crecimiento incremental sobre una base real.",
          impactNote:
            "Con este dato calculamos el punto de partida actual de la clínica en pacientes cerrados, implantes e ingresos mensuales.",
          inputLabel: "Media aproximada de implantes mensuales colocados",
          placeholder: "Ejemplo: 9",
        },
        averageTicket: {
          category: "Base actual",
          title: "¿Cuál es el ticket medio por paciente de implantología de la clínica?",
          helper:
            "Este dato nos ayuda a traducir el volumen de pacientes e implantes a una facturación realista asociada a implantología.",
          impactNote:
            "Con este ticket medio calculamos la facturación actual y la facturación potencial asociada al crecimiento implantológico.",
          inputLabel: "Ticket medio por paciente de implantología",
          placeholder: "Ejemplo: 2900",
        },
      },
    },
  },
  en: {
    locale: "en-GB",
    metaTitle: "Sweden & Martina | Clinic Potential Calculator",
    metaDescription:
      "Interactive landing page to estimate profitability, lead generation, and implant consumption potential for dental clinics partnering with Sweden & Martina.",
    static: {
      brandSubtitle: "Partner Opportunity Calculator",
      brandCollabLabel: "Developed by",
      navStartSimulation: "Start simulation",
      heroEyebrow: "Consultative sales tool for partners",
      heroTitle:
        'Discover how implant patient volume could increase by up to 50% for <span>Sweden & Martina in any dental clinic</span>',
      heroText:
        "Simulate the real structure of a clinic, detect its bottlenecks, and turn that reality into patients, production, and potential implant volume. Built to help partners prioritize opportunities and support the conversation with numbers.",
      heroSignatureLabel: "Engine developed by",
      heroPrimaryCtaDesktop: "Play with scenarios",
      heroPrimaryCtaMobile: "Calculate the potential of any dental clinic with Climadent",
      heroSecondaryCta: "View methodology",
      heroMetricOne: "dental business variables",
      heroMetricTwo: "interpretable funnel stages",
      heroMetricThree: "compared scenarios: current and with campaign",
      productMiniLabel: "Opportunity Engine",
      productTitle: "Clinical profitability, conversion, and implant consumption",
      productBody:
        "An internal model designed to translate structure, marketing, and clinical conversion into a clear commercial reading for Sweden & Martina.",
      heroPanelCalcLabel: "What it calculates",
      heroPanelCalcItemOne: "Monthly lead generation potential",
      heroPanelCalcItemTwo: "Capacity for first visits",
      heroPanelCalcItemThree: "Estimated clinical conversion",
      heroPanelCalcItemFour: "Incremental implant consumption",
      heroAudienceLabel: "Who it is for",
      heroAudienceBody:
        "Sales reps, distributors, and partners who need to identify which clinics have the most room to grow and how to argue that opportunity with numbers.",
      pillarOneTitle: "Not a generic calculator",
      pillarOneBody:
        "It translates real dental business signals into a profitability and implant consumption model.",
      pillarTwoTitle: "Explains why it happens",
      pillarTwoBody:
        "Each answer only impacts its real funnel stage: acquisition, contact, booking, attendance, or closing.",
      pillarThreeTitle: "Helps sell better",
      pillarThreeBody:
        "The result is not just a number: it is a commercial narrative about potential, constraints, and structural improvement.",
      simulatorEyebrow: "Guided simulator",
      simulatorTitle:
        "Calculate the potential of any dental clinic with the Climadent acquisition system in one month with an implant campaign",
      simulatorBody:
        "Each step describes an operational reality. The engine turns those answers into a monthly projection that can be used in a commercial conversation.",
      profileEyebrow: "Profile in progress",
      resultsEyebrow: "Strategic result",
      resultsTitle: "Monthly reading of the clinic's potential",
      resultsBody:
        "A comparison between the clinic's current situation and the realistic scenario it could reach in one month with an active Climadent campaign.",
      insightEyebrow: "Commercial reading",
      funnelEyebrow: "Estimated funnel",
      funnelTitle: "Conversion by stage",
      funnelChip: "Monthly",
      comparisonEyebrow: "Comparison",
      comparisonTitle: "Current vs with campaign",
      comparisonChip: "Realistic uplift",
      impactEyebrow: "Impact map",
      impactTitle: "What is driving this result",
      impactChip: "By stage",
      tableEyebrow: "KPI detail",
      tableTitle: "Executive table",
      closingEyebrow: "Next step",
      closingTitle: "Use this scenario as a conversation tool, not as an isolated data point",
      closingBody:
        "The value of the tool lies in identifying which clinics have the most room to grow and which levers justify a structured intervention to increase implant consumption.",
      reviewMethodologyLink: "Review methodology",
      tableHeaders: ["KPI", "Expected results", "Reading"],
      buttons: {
        reset: "Reset simulation",
        previous: "Previous",
        next: "Next",
        viewResults: "View results",
        restartScenario: "Explore another scenario",
        calculating: "Calculating...",
      },
      profile: {
        defaultHeadline: "Clinic not defined yet",
        defaultSummary: "Select the key variables to see an executive reading of the case.",
        clinicFallback: "Clinic",
        structureFallback: "structure to be defined",
        receptionFallback: "reception not defined",
        digitalFallback: "not assessed",
        protocolFallback: "not evaluated",
        pendingAnswer: "Not answered",
        baselineSummary: "Declared current baseline: {visits} first visits and {implants} implants per month.",
        summaryTemplate:
          "Profile with {reception}, digital presence {digital}, and protocol {protocol}.",
      },
      loading: {
        stepLabel: "Step {current} of {total}",
        category: "Calculating",
        miniLabel: "Processing scenario",
        title: "Calculating the clinic projection",
        helper:
          "We are combining acquisition, contact, attendance, and closing to estimate a realistic one-month implant campaign scenario with Climadent.",
        impactLabel: "Reading in progress",
      },
      questionUi: {
        impactLabel: "What changes here",
      },
      diagnostics: {
        contact: "contact",
        appointments: "booking",
        attendance: "attendance",
        close: "closing",
      },
      insights: {
        title: "The biggest leak is in {phase}",
        body:
          "With the current configuration, the clinic is losing a meaningful share of the value created before treatment. The greatest potential jump appears when strengthening {lift}.",
        scoreLabel: "Optimization level",
        scoreCaption:
          "Estimated score for how structured the clinic is to turn demand into implant patients consistently.",
        earlyLeak:
          "Reception and contact speed suggest an early loss of opportunities before the booking stage even starts.",
        closeOpportunity:
          "The clinic seems to have more room to grow in closing than in volume: professionalizing the first visit and closing process can multiply the current traffic more effectively.",
        weakDigital:
          "Weak digital authority adds friction both to contact and attendance; the clinic is not converting with the level of trust it could build.",
        tacFinance:
          "Diagnostics and financing are limiting treatment acceptance, especially in high-ticket implantology.",
        generic:
          "The overall structure is reasonable, but there is still clear room to turn demand into attended visits and closed cases more efficiently.",
        implantsLift:
          "If the clinic also optimized its structure to the maximum, the partner could activate approximately {value} additional implants per month with the same clinic base.",
        cards: {
          contactTitle: "Contact and reception reinforcement",
          contactBody:
            "The first priority is to reduce leakage in the first hours. Focused reception, clear call scripts, and immediate follow-up usually move the funnel more than extra media spend.",
          closeTitle: "First-visit and closing protocol",
          closeBody:
            "The clinic already creates interest, but it needs a more guided first visit: clearer diagnosis, stronger authority in the proposal, and a simpler decision path for the patient.",
          trustTitle: "Brand and pre-visit trust",
          trustBody:
            "Before attending, the patient needs more confidence. A stronger digital presence and a clearer entry experience help prevent traffic from cooling down between lead and visit.",
          financeTitle: "Financing and accessibility",
          financeBody:
            "When financing is not a real part of the sales process, treatment acceptance is lost even in well-indicated cases. Integrating it better usually lifts conversion without more spend.",
          operationsTitle: "Operational capacity and consistency",
          operationsBody:
            "The opportunity is not only about attracting more demand, but about sustaining it better. Organizing scheduling, reception, and follow-up enables growth with less friction and more predictability.",
          impactTitle: "Potential monthly impact",
          impactBody:
            "If the clinic also optimized its internal processes to the maximum, it could still capture more value from the same campaign and convert a larger share of current demand into closed treatments.",
          impactTail: "That would open an additional margin of around {implants} extra implants and {revenue} in additional monthly revenue.",
        },
      },
      results: {
        kpis: {
          patientsTitle: "Extra implant patients closed per month",
          patientsBody:
            "Monthly projection of extra patients acquired and closed with a typical Climadent campaign.",
          implantsTitle: "Extra implants projected per month",
          implantsBody:
            "Monthly volume of extra implants placed by the clinic",
          revenueTitle: "Extra implant revenue per month",
          revenueBody: "Extra monthly revenue achieved by the clinic with a one-month implant campaign",
          costTitle: "Implant campaign ROI",
          costBody: "Estimated return from an implant campaign with a monthly Meta investment of €450.",
        },
        funnel: {
          leads: "Estimated implant leads",
          contacted: "Contacted implant leads",
          appointments: "Implant appointments booked",
          visits: "Monthly implant first visits at the clinic",
          closed: "Implant patients closed by the clinic",
        },
        comparison: {
          leads: "Estimated leads",
          contact: "% contact",
          appointment: "% booking / contact",
          attendance: "% attendance",
          close: "% close / visit",
        },
        table: {
          budget: "Monthly campaign investment",
          budgetNote: "This version uses a fixed Meta investment of €450 per month.",
          cpl: "Estimated CPL",
          cplNote: "{competition} competitive pressure according to environment.",
          contact: "% contact",
          contactNote: "Driven by contact speed, reception, and digital authority.",
          appointment: "% booking/contact",
          appointmentNote: "First-visit friction and the reception team move this stage.",
          attendance: "% attendance",
          attendanceNote: "Brand and ease of entry support real attendance.",
          close: "% close/visit",
          closeNote: "Diagnostics, financing, advisor, and protocol explain the difference.",
          patients: "Extra implant patients closed",
          patientsNote: "Estimated monthly clinical conversion in implant assessment.",
          implants: "Extra monthly implants placed by the clinic",
          implantsNote: "Direct value KPI for Sweden & Martina.",
          revenue: "Extra implantology revenue",
          revenueNote: "Estimated implant-related revenue based on the declared average ticket.",
          cac: "CAC per patient",
          cacNote: "Estimated acquisition cost according to funnel performance.",
        },
        competition: {
          high: "high",
          mediumHigh: "medium-high",
          medium: "medium",
          low: "low",
        },
      },
      questions: {
        location: {
          category: "Environment",
          title: "Where does the clinic compete?",
          helper:
            "We classify the clinic based on the environment where it operates: metropolitan area, relevant provincial capital, medium city, or small town.",
          impactNote:
            "This territorial classification helps place the clinic in a real geographic tier before estimating potential.",
          options: [
            { label: "Madrid or Barcelona", description: "The two main metropolitan areas.", scoreLabel: "Tier 1" },
            { label: "Relevant provincial capital", description: "Valencia, Seville, Málaga, Zaragoza, Bilbao, or Alicante.", scoreLabel: "Tier 2" },
            { label: "Medium-sized city", description: "Vigo, Santander, Valladolid, A Coruña, or similar.", scoreLabel: "Tier 3" },
            { label: "Small town or rural area", description: "Small municipalities, county capitals, or rural areas.", scoreLabel: "Tier 4" },
          ],
        },
        cabinets: {
          category: "Capacity",
          title: "How many operating surgeries does the clinic have?",
          helper:
            "We use this to estimate the real operational ceiling: suggested investment, manageable first visits, and monthly production potential.",
          impactNote:
            "The number of surgeries does not improve conversion on its own, but it does condition how much growth the clinic can absorb without stressing agenda and care.",
          options: [
            { label: "1-2 surgeries", description: "Compact clinic with controlled potential and need for precise acquisition.", scoreLabel: "Base scale" },
            { label: "3-4 surgeries", description: "Optimal size to convert well if the commercial structure supports it.", scoreLabel: "Medium scale" },
            { label: "5-6 surgeries", description: "Clear capacity to sustain more visits, diagnostics, and monthly closes.", scoreLabel: "High scale" },
            { label: "7 or more surgeries", description: "High-ceiling operation, ideal for structured growth scenarios.", scoreLabel: "Premium scale" },
          ],
        },
        tac: {
          category: "Diagnostics",
          title: "How is implant diagnostic testing handled in the clinic?",
          helper:
            "We want to understand whether the clinic can diagnose and move forward comfortably within its own flow or whether it depends too much on external referrals.",
          impactNote:
            "The more diagnostic autonomy the clinic has, the easier it is to sustain authority, speed, and conversion in implantology.",
          options: [
            { label: "In-house CBCT and intraoral scanner", description: "The clinic can resolve the full diagnostic process within its own clinical experience.", scoreLabel: "Higher close rate" },
            { label: "Intraoral scanner and external CBCT referral", description: "There is a solid diagnostic base, although part of the process depends on a third party.", scoreLabel: "Medium friction" },
            { label: "Everything depends on external referral", description: "The diagnostic experience sits outside the clinic's own flow and that penalizes closing.", scoreLabel: "Highest friction" },
          ],
        },
        advisor: {
          category: "Closing",
          title: "Is there a sales advisor or dedicated closing role?",
          helper:
            "It is not the same for the doctor to present the case alone as having someone trained in financing, objections, and support through closing.",
          impactNote:
            "It directly affects visit-to-treatment conversion and the ability to capitalize on generated traffic.",
          options: [
            { label: "Yes, there is a sales advisor", description: "The clinic has a clear figure to manage objections, financing, and decision-making.", scoreLabel: "Strong closing" },
            { label: "No, closing depends on clinic or doctor", description: "Potential exists, but it usually closes worse due to lack of a commercial process.", scoreLabel: "Irregular closing" },
          ],
        },
        visitPrice: {
          category: "Entry",
          title: "How is the first visit handled?",
          helper:
            "Entry friction changes a lot depending on whether the first visit is free, symbolic, or fully paid from the start.",
          impactNote:
            "This variable influences booking and attendance because it changes the patient's initial willingness to reserve and attend.",
          options: [
            { label: "Free", description: "Reduces the initial barrier and makes it easier to turn interest into a first visit.", scoreLabel: "Lower friction" },
            { label: "Symbolic or partial fee", description: "Balance between perceived value and ease of entry.", scoreLabel: "Medium friction" },
            { label: "Fully charged", description: "Filters more, but makes booking more demanding without strong authority and reception.", scoreLabel: "Higher friction" },
          ],
        },
        digital: {
          category: "Brand",
          title: "What level of digital presence does the clinic have?",
          helper:
            "Here we evaluate whether the clinic conveys prior trust through social media, Google, website, and public reputation.",
          impactNote:
            "A strong digital presence increases ease of contact and reduces no-shows because it builds trust before the visit.",
          options: [
            { label: "Strong on social media and Google", description: "Active brand, visible authority, and digital assets that support the patient's decision.", scoreLabel: "High authority" },
            { label: "Good but improvable", description: "The clinic conveys some confidence, although it still does not capitalize on its full potential.", scoreLabel: "Medium authority" },
            { label: "Weak or poorly developed", description: "Lack of digital presence adds friction to contact and attendance.", scoreLabel: "Low authority" },
          ],
        },
        protocol: {
          category: "Process",
          title: "Is there a clear first-visit and treatment presentation protocol?",
          helper:
            "We are not only asking whether they treat patients well, but whether there is a repeatable process for diagnosis, presentation, and advancing toward closing.",
          impactNote:
            "This is one of the biggest closing levers in high-value treatments such as implantology.",
          options: [
            { label: "Yes, well structured", description: "The clinic has a consistent flow to turn trust into acceptance.", scoreLabel: "Strong process" },
            { label: "Partial or person-dependent", description: "There are good practices, but not a stable and repeatable system.", scoreLabel: "Medium process" },
            { label: "No, each case is handled differently", description: "This usually creates silent losses in closes and postponed decisions.", scoreLabel: "Weak process" },
          ],
        },
        reception: {
          category: "Reception",
          title: "How is reception organized?",
          helper:
            "Phone conversion and booking depend a lot on whether there is a focused reception team or whether attention is spread across several tasks.",
          impactNote:
            "It mainly affects contact and booking: less multitasking usually means more useful conversations and more filled agendas.",
          options: [
            { label: "Dedicated reception", description: "There is a team dedicated to answering, organizing schedules, and maintaining follow-up.", scoreLabel: "High conversion" },
            { label: "Shared support", description: "The function exists, but it competes with other day-to-day operational tasks.", scoreLabel: "Medium conversion" },
            { label: "Hygienists or multitasking staff", description: "Reception lacks focus and usually loses speed, call quality, and consistency.", scoreLabel: "Low conversion" },
          ],
        },
        speed: {
          category: "Speed",
          title: "How quickly are new leads usually contacted?",
          helper:
            "Contact speed is a critical variable. The same lead is worth much less when it is handled late or without a system.",
          impactNote:
            "It is one of the most direct variables affecting the real contact rate and conditions the rest of the funnel.",
          options: [
            { label: "Same day", description: "The clinic responds quickly and captures the patient's hot intent better.", scoreLabel: "High contact" },
            { label: "Within 24 hours", description: "Still reasonable, although some of the initial momentum is already lost.", scoreLabel: "Medium contact" },
            { label: "Later or irregularly", description: "This is where a major leak often appears before the booking stage even starts.", scoreLabel: "Low contact" },
          ],
        },
        financing: {
          category: "Financing",
          title: "Is financing clearly integrated into the sales process?",
          helper:
            "It is not enough for it to exist in theory. What matters is whether it is used confidently, quickly, and naturally to unlock closes.",
          impactNote:
            "Proper financing has a very clear impact on treatment acceptance and implant consumption.",
          options: [
            { label: "Yes, well integrated", description: "The clinic uses financing as a real tool for closing and treatment access.", scoreLabel: "Higher close rate" },
            { label: "It exists, but usage is limited", description: "It helps in some cases, although it is not yet naturally integrated into the process.", scoreLabel: "Medium impact" },
            { label: "It is not integrated", description: "This slows closes and worsens acceptance in high-ticket treatments.", scoreLabel: "Low impact" },
          ],
        },
        actualVisits: {
          category: "Current baseline",
          title: "How many implant first visits does the clinic currently have per month?",
          helper:
            "We want to understand the clinic's real starting point before estimating the uplift it could achieve with an active campaign.",
          impactNote:
            "This lets us build the current scenario and compare it with the realistic growth the clinic could achieve.",
          inputLabel: "Approximate monthly average of first visits",
          placeholder: "Example: 15",
        },
        actualImplants: {
          category: "Current baseline",
          title: "How many implants does the clinic currently place on average per month?",
          helper:
            "This volume helps us estimate the current implant production and measure incremental growth on a real baseline.",
          impactNote:
            "With this input we calculate the clinic's current starting point in closed patients, implants, and monthly revenue.",
          inputLabel: "Average monthly implants placed",
          placeholder: "Example: 9",
        },
        averageTicket: {
          category: "Current baseline",
          title: "What is the clinic's average ticket per implantology patient?",
          helper:
            "This helps us translate patient and implant volume into realistic revenue linked to implantology.",
          impactNote:
            "With this average ticket we calculate the current revenue and the potential revenue associated with implant growth.",
          inputLabel: "Average ticket per implantology patient",
          placeholder: "Example: 2900",
        },
      },
    },
  },
  it: {
    locale: "it-IT",
    metaTitle: "Sweden & Martina | Calcolatore del potenziale della clinica",
    metaDescription:
      "Landing interattiva per stimare il potenziale di redditività, acquisizione e consumo di impianti delle cliniche dentali per i partner di Sweden & Martina.",
    static: {
      brandSubtitle: "Partner Opportunity Calculator",
      brandCollabLabel: "Sviluppato da",
      navStartSimulation: "Avvia simulazione",
      heroEyebrow: "Strumento di vendita consulenziale per partner",
      heroTitle:
        'Scopri come il volume di pazienti implantari può aumentare fino al 50% per <span>Sweden & Martina in qualsiasi clinica dentale</span>',
      heroText:
        "Simula la struttura reale di una clinica, individua i suoi colli di bottiglia e traduce questa realtà in pazienti, produzione e potenziale di impianti. Pensato per aiutare il partner a dare priorità alle opportunità e sostenere la conversazione con numeri concreti.",
      heroSignatureLabel: "Motore sviluppato da",
      heroPrimaryCtaDesktop: "Esplora gli scenari",
      heroPrimaryCtaMobile: "Calcola il potenziale di qualsiasi clinica dentale con Climadent",
      heroSecondaryCta: "Vedi metodologia",
      heroMetricOne: "variabili del business dentale",
      heroMetricTwo: "fasi del funnel interpretabili",
      heroMetricThree: "scenari confrontati: attuale e con campagna",
      productMiniLabel: "Opportunity Engine",
      productTitle: "Redditività clinica, chiusura e consumo di impianti",
      productBody:
        "Un modello interno progettato per tradurre struttura, marketing e conversione clinica in una lettura commerciale chiara per Sweden & Martina.",
      heroPanelCalcLabel: "Cosa calcola",
      heroPanelCalcItemOne: "Potenziale mensile di acquisizione",
      heroPanelCalcItemTwo: "Capacità di prime visite",
      heroPanelCalcItemThree: "Conversione clinica stimata",
      heroPanelCalcItemFour: "Consumo incrementale di impianti",
      heroAudienceLabel: "Per chi è pensato",
      heroAudienceBody:
        "Agenti, distributori e partner che devono capire quali cliniche hanno più margine di crescita e come argomentare questa opportunità con i numeri.",
      pillarOneTitle: "Non è un calcolatore generico",
      pillarOneBody:
        "Traduce segnali reali del business dentale in un modello di redditività e consumo di impianti.",
      pillarTwoTitle: "Spiega perché succede",
      pillarTwoBody:
        "Ogni risposta impatta solo la sua fase reale del funnel: acquisizione, contatto, prenotazione, presenza o chiusura.",
      pillarThreeTitle: "Aiuta a vendere meglio",
      pillarThreeBody:
        "Il risultato non è solo un numero: è una narrazione commerciale su potenziale, limiti e miglioramento strutturale.",
      simulatorEyebrow: "Simulatore guidato",
      simulatorTitle:
        "Calcola il potenziale di qualsiasi clinica dentale con il sistema Climadent in un mese con una campagna implantare",
      simulatorBody:
        "Ogni passaggio descrive una realtà operativa. Il motore trasforma queste risposte in una proiezione mensile utilizzabile in una conversazione commerciale.",
      profileEyebrow: "Profilo in costruzione",
      resultsEyebrow: "Risultato strategico",
      resultsTitle: "Lettura mensile del potenziale della clinica",
      resultsBody:
        "Un confronto tra la situazione attuale della clinica e lo scenario realistico che potrebbe raggiungere in un mese con una campagna attiva di Climadent.",
      insightEyebrow: "Lettura commerciale",
      funnelEyebrow: "Funnel stimato",
      funnelTitle: "Conversione per fase",
      funnelChip: "Mensile",
      comparisonEyebrow: "Confronto",
      comparisonTitle: "Attuale vs con campagna",
      comparisonChip: "Crescita realistica",
      impactEyebrow: "Mappa dell'impatto",
      impactTitle: "Cosa sta muovendo questo risultato",
      impactChip: "Per fase",
      tableEyebrow: "Dettaglio KPI",
      tableTitle: "Tabella esecutiva",
      closingEyebrow: "Prossimo passo",
      closingTitle: "Usa questo scenario come argomento di conversazione, non come dato isolato",
      closingBody:
        "Il valore dello strumento sta nell'identificare quali cliniche hanno più margine di crescita e quali leve giustificano un intervento strutturato per aumentare il consumo di impianti.",
      reviewMethodologyLink: "Rivedi metodologia",
      tableHeaders: ["KPI", "Risultati attesi", "Lettura"],
      buttons: {
        reset: "Reimposta simulazione",
        previous: "Precedente",
        next: "Successivo",
        viewResults: "Vedi risultati",
        restartScenario: "Esplora un altro scenario",
        calculating: "Calcolo...",
      },
      profile: {
        defaultHeadline: "Clinica non ancora definita",
        defaultSummary: "Seleziona le variabili chiave per vedere una lettura esecutiva del caso.",
        clinicFallback: "Clinica",
        structureFallback: "struttura da definire",
        receptionFallback: "reception non definita",
        digitalFallback: "non valutata",
        protocolFallback: "non valutato",
        pendingAnswer: "Non risposto",
        baselineSummary: "Base attuale dichiarata: {visits} prime visite e {implants} impianti al mese.",
        summaryTemplate:
          "Scenario con {reception}, presenza digitale {digital} e protocollo {protocol}.",
      },
      loading: {
        stepLabel: "Passo {current} di {total}",
        category: "Calcolo",
        miniLabel: "Elaborazione scenario",
        title: "Calcolo della proiezione della clinica",
        helper:
          "Stiamo incrociando acquisizione, contatto, presenza e chiusura per stimare uno scenario realistico di un mese con una campagna tipo Climadent.",
        impactLabel: "Lettura in corso",
      },
      questionUi: {
        impactLabel: "Cosa cambia qui",
      },
      diagnostics: {
        contact: "contatto",
        appointments: "prenotazione",
        attendance: "presenza",
        close: "chiusura",
      },
      insights: {
        title: "La perdita maggiore è in {phase}",
        body:
          "Con la configurazione attuale, la clinica sta perdendo una parte rilevante del valore generato prima del trattamento. Il maggiore salto potenziale appare rafforzando {lift}.",
        scoreLabel: "Livello di ottimizzazione",
        scoreCaption:
          "Punteggio stimato su quanto la clinica sia strutturata per trasformare la domanda in pazienti implantari in modo costante.",
        earlyLeak:
          "Reception e velocità di contatto indicano una perdita precoce di opportunità ancora prima della prenotazione.",
        closeOpportunity:
          "La clinica sembra avere più margine nella chiusura che nel volume: professionalizzare prima visita e chiusura può moltiplicare meglio il traffico attuale.",
        weakDigital:
          "Una debole autorità digitale aggiunge attrito sia al contatto sia alla presenza; la clinica non converte con il livello di fiducia che potrebbe generare.",
        tacFinance:
          "Diagnostica e finanziamento stanno limitando l'accettazione del trattamento, soprattutto nell'implantologia ad alto ticket.",
        generic:
          "La struttura generale è ragionevole, ma esiste ancora un chiaro margine per trasformare meglio la domanda in visite effettuate e casi chiusi.",
        implantsLift:
          "Se la clinica ottimizzasse al massimo anche la propria struttura, il partner potrebbe attivare circa {value} impianti aggiuntivi al mese con la stessa base clinica.",
        cards: {
          contactTitle: "Rinforzo di contatto e reception",
          contactBody:
            "La priorità è ridurre la dispersione nelle prime ore. Una reception focalizzata, script chiari e follow-up immediato spostano il funnel prima ancora di aumentare il budget media.",
          closeTitle: "Protocollo di prima visita e chiusura",
          closeBody:
            "La clinica genera già interesse, ma ha bisogno di una prima visita più guidata: diagnosi più chiara, più autorevolezza nella proposta e un percorso decisionale più semplice.",
          trustTitle: "Brand e fiducia prima della visita",
          trustBody:
            "Prima di presentarsi, il paziente ha bisogno di più sicurezza. Una presenza digitale più forte e un'esperienza di ingresso più chiara evitano che il traffico si raffreddi tra lead e visita.",
          financeTitle: "Finanziamento e accessibilità",
          financeBody:
            "Quando il finanziamento non fa realmente parte del processo di vendita, si perde accettazione anche su casi ben indicati. Integrarlo meglio alza spesso la conversione senza più spesa.",
          operationsTitle: "Capacità operativa e costanza",
          operationsBody:
            "L'opportunità non è solo acquisire di più, ma sostenere meglio il flusso. Ordinare agenda, reception e follow-up permette di crescere con meno attrito e più prevedibilità.",
          impactTitle: "Impatto potenziale mensile",
          impactBody:
            "Se la clinica ottimizzasse anche al massimo i propri processi interni, potrebbe catturare ancora più valore dalla stessa campagna e trasformare una quota maggiore della domanda attuale in trattamenti chiusi.",
          impactTail: "Questo aprirebbe un margine aggiuntivo di circa {implants} impianti extra e {revenue} di fatturato mensile aggiuntivo.",
        },
      },
      results: {
        kpis: {
          patientsTitle: "Pazienti implantari extra chiusi al mese",
          patientsBody:
            "Proiezione mensile di pazienti extra acquisiti e chiusi con una campagna tipo di Climadent.",
          implantsTitle: "Impianti extra previsti al mese",
          implantsBody:
            "Volume mensile di impianti extra posizionati dalla clinica",
          revenueTitle: "Fatturato implantare extra al mese",
          revenueBody: "Fatturato mensile extra ottenuto dalla clinica con una campagna implantare di un mese",
          costTitle: "ROI campagna implantare",
          costBody: "Rendimento stimato di una campagna implantare con un investimento mensile di 450 € su Meta.",
        },
        funnel: {
          leads: "Lead implantari stimati",
          contacted: "Lead implantari contattati",
          appointments: "Appuntamenti implantari fissati",
          visits: "Prime visite implantari mensili della clinica",
          closed: "Pazienti implantari chiusi dalla clinica",
        },
        comparison: {
          leads: "Lead stimati",
          contact: "% contatto",
          appointment: "% prenotazione / contatto",
          attendance: "% presenza",
          close: "% chiusura / visita",
        },
        table: {
          budget: "Investimento mensile in campagna",
          budgetNote: "In questa versione lavoriamo con un investimento fisso di 450 € al mese su Meta.",
          cpl: "CPL stimato",
          cplNote: "Pressione competitiva {competition} in base al contesto.",
          contact: "% contatto",
          contactNote: "Guidato da velocità di contatto, reception e autorità digitale.",
          appointment: "% prenotazione/contatto",
          appointmentNote: "L'attrito della prima visita e il team di reception muovono questa fase.",
          attendance: "% presenza",
          attendanceNote: "Brand e facilità di accesso sostengono la presenza reale.",
          close: "% chiusura/visita",
          closeNote: "Diagnostica, finanziamento, consulente e protocollo spiegano la differenza.",
          patients: "Pazienti implantari extra chiusi",
          patientsNote: "Conversione clinica mensile stimata in valutazione implantare.",
          implants: "Impianti mensili extra posizionati dalla clinica",
          implantsNote: "KPI diretto di valore per Sweden & Martina.",
          revenue: "Fatturato extra in implantologia",
          revenueNote: "Fatturato stimato associato all'implantologia sul ticket medio indicato.",
          cac: "CAC per paziente",
          cacNote: "Costo di acquisizione stimato in base al rendimento del funnel.",
        },
        competition: {
          high: "alta",
          mediumHigh: "medio-alta",
          medium: "media",
          low: "bassa",
        },
      },
      questions: {
        location: {
          category: "Contesto",
          title: "Dove compete la clinica?",
          helper:
            "Classifichiamo la clinica in base al contesto in cui opera: area metropolitana, capoluogo rilevante, città media o piccolo centro.",
          impactNote:
            "Questa classificazione territoriale ci aiuta a collocare la clinica in un tier geografico reale prima di stimarne il potenziale.",
          options: [
            { label: "Madrid o Barcellona", description: "Le due principali aree metropolitane.", scoreLabel: "Tier 1" },
            { label: "Capoluogo di provincia rilevante", description: "Valencia, Siviglia, Málaga, Saragozza, Bilbao o Alicante.", scoreLabel: "Tier 2" },
            { label: "Città media", description: "Vigo, Santander, Valladolid, A Coruña o simili.", scoreLabel: "Tier 3" },
            { label: "Piccolo centro o area rurale", description: "Piccoli comuni, capoluoghi di zona o aree rurali.", scoreLabel: "Tier 4" },
          ],
        },
        cabinets: {
          category: "Capacità",
          title: "Quante sale operative ha la clinica?",
          helper:
            "Usiamo questo dato per stimare il tetto operativo reale: investimento consigliato, prime visite gestibili e potenziale mensile di produzione.",
          impactNote:
            "Il numero di sale non migliora da solo la conversione, ma condiziona quanta crescita la clinica può assorbire senza stressare agenda e attenzione.",
          options: [
            { label: "1-2 sale", description: "Clinica compatta, con potenziale controllato e bisogno di acquisizione precisa.", scoreLabel: "Scala base" },
            { label: "3-4 sale", description: "Dimensione ottimale per convertire bene se la struttura commerciale accompagna.", scoreLabel: "Scala media" },
            { label: "5-6 sale", description: "Chiara capacità di sostenere più visite, diagnosi e chiusure mensili.", scoreLabel: "Scala alta" },
            { label: "7 o più sale", description: "Operazione con tetto alto, ideale per scenari di crescita strutturata.", scoreLabel: "Scala premium" },
          ],
        },
        tac: {
          category: "Diagnostica",
          title: "Come è gestita la parte di diagnostica implantare nella clinica?",
          helper:
            "Vogliamo capire se la clinica può diagnosticare e procedere comodamente nel proprio flusso o se dipende troppo da rinvii esterni.",
          impactNote:
            "Più autonomia diagnostica ha la clinica, più è facile sostenere autorevolezza, velocità e conversione in implantologia.",
          options: [
            { label: "TAC interna e scanner intraorale", description: "La clinica gestisce l'intero percorso diagnostico all'interno della propria esperienza clinica.", scoreLabel: "Maggiore chiusura" },
            { label: "Scanner intraorale e TAC con rinvio esterno", description: "Esiste una buona base diagnostica, anche se parte del processo dipende da terzi.", scoreLabel: "Attrito medio" },
            { label: "Tutto dipende da rinvio esterno", description: "L'esperienza diagnostica resta fuori dal flusso della clinica e questo penalizza la chiusura.", scoreLabel: "Massimo attrito" },
          ],
        },
        advisor: {
          category: "Chiusura",
          title: "C'è un consulente commerciale o una figura dedicata alla chiusura?",
          helper:
            "Non è lo stesso che il medico presenti il caso da solo rispetto ad avere una persona formata su finanziamento, obiezioni e accompagnamento alla chiusura.",
          impactNote:
            "Influisce direttamente sulla conversione visita-trattamento e sulla capacità di sfruttare il traffico generato.",
          options: [
            { label: "Sì, c'è un consulente commerciale", description: "La clinica ha una figura chiara per gestire obiezioni, finanziamento e decisione.", scoreLabel: "Chiusura solida" },
            { label: "No, la chiusura dipende da clinica o medico", description: "Il potenziale esiste, ma di solito si chiude peggio per mancanza di un processo commerciale.", scoreLabel: "Chiusura irregolare" },
          ],
        },
        visitPrice: {
          category: "Ingresso",
          title: "Come viene gestita la prima visita?",
          helper:
            "L'attrito in ingresso cambia molto a seconda che la prima visita sia gratuita, simbolica o completamente a pagamento fin dall'inizio.",
          impactNote:
            "Questa variabile influisce su prenotazione e presenza perché cambia la disponibilità iniziale del paziente a prenotare e presentarsi.",
          options: [
            { label: "Gratuita", description: "Riduce la barriera iniziale e facilita la trasformazione dell'interesse in prima visita.", scoreLabel: "Minore attrito" },
            { label: "Prezzo simbolico o parziale", description: "Equilibrio tra percezione di valore e facilità di ingresso.", scoreLabel: "Attrito medio" },
            { label: "Completamente a pagamento", description: "Filtra di più, ma rende la prenotazione più difficile senza forte autorità e reception.", scoreLabel: "Maggiore attrito" },
          ],
        },
        digital: {
          category: "Brand",
          title: "Qual è il livello di presenza digitale della clinica?",
          helper:
            "Qui valutiamo se la clinica trasmette fiducia preventiva attraverso social media, Google, sito web e reputazione pubblica.",
          impactNote:
            "Una presenza digitale forte aumenta la facilità di contatto e riduce i no-show perché migliora la fiducia prima della visita.",
          options: [
            { label: "Forte su social e Google", description: "Brand attivo, autorità visibile e asset digitali che sostengono la decisione del paziente.", scoreLabel: "Alta autorità" },
            { label: "Buona ma migliorabile", description: "La clinica trasmette una certa sicurezza, anche se non sfrutta ancora tutto il suo potenziale.", scoreLabel: "Autorità media" },
            { label: "Debole o poco sviluppata", description: "La mancanza di presenza digitale aggiunge attrito al contatto e alla presenza.", scoreLabel: "Bassa autorità" },
          ],
        },
        protocol: {
          category: "Processo",
          title: "Esiste un protocollo chiaro per la prima visita e la presentazione del trattamento?",
          helper:
            "Non chiediamo solo se il paziente viene trattato bene, ma se esiste un processo ripetibile di diagnosi, presentazione e avanzamento verso la chiusura.",
          impactNote: "È una delle grandi leve di chiusura nei trattamenti di valore come l'implantologia.",
          options: [
            { label: "Sì, ben strutturato", description: "La clinica ha un flusso coerente per trasformare la fiducia in accettazione.", scoreLabel: "Processo forte" },
            { label: "Parziale o dipendente dalla persona", description: "Ci sono buone pratiche, ma non un sistema stabile e replicabile.", scoreLabel: "Processo medio" },
            { label: "No, ogni caso è gestito in modo diverso", description: "Questo di solito genera perdite silenziose nelle chiusure e decisioni rimandate.", scoreLabel: "Processo debole" },
          ],
        },
        reception: {
          category: "Reception",
          title: "Come è organizzata la reception?",
          helper:
            "La conversione telefonica e la prenotazione dipendono molto dal fatto che esista una reception focalizzata o che l'attenzione sia dispersa tra varie attività.",
          impactNote:
            "Influisce soprattutto su contatto e prenotazione: meno multitasking di solito significa più conversazioni utili e più agende piene.",
          options: [
            { label: "Reception dedicata", description: "C'è un team dedicato a rispondere, organizzare agenda e mantenere il follow-up.", scoreLabel: "Alta conversione" },
            { label: "Supporto condiviso", description: "La funzione esiste, ma compete con altre attività operative quotidiane.", scoreLabel: "Conversione media" },
            { label: "Igienisti o personale multitasking", description: "La reception manca di focus e di solito perde velocità, qualità delle chiamate e costanza.", scoreLabel: "Bassa conversione" },
          ],
        },
        speed: {
          category: "Velocità",
          title: "Con quale rapidità vengono contattati i nuovi lead?",
          helper:
            "La velocità di contatto è una variabile critica. Lo stesso lead vale molto meno quando viene gestito tardi o senza sistema.",
          impactNote:
            "È una delle variabili più dirette sul tasso reale di contatto e condiziona il resto del funnel.",
          options: [
            { label: "Nello stesso giorno", description: "La clinica risponde velocemente e intercetta meglio l'intenzione calda del paziente.", scoreLabel: "Contatto alto" },
            { label: "Entro 24 ore", description: "È ancora ragionevole, anche se una parte dell'inerzia iniziale è già persa.", scoreLabel: "Contatto medio" },
            { label: "Più tardi o in modo irregolare", description: "Qui spesso appare una perdita importante ancora prima della prenotazione.", scoreLabel: "Contatto basso" },
          ],
        },
        financing: {
          category: "Finanziamento",
          title: "Il finanziamento è integrato in modo chiaro nel processo di vendita?",
          helper:
            "Non basta che esista in teoria. Conta se viene usato con sicurezza, rapidità e naturalezza per sbloccare le chiusure.",
          impactNote:
            "Un buon finanziamento ha un impatto molto chiaro sull'accettazione del trattamento e sul consumo di impianti.",
          options: [
            { label: "Sì, ben integrato", description: "La clinica usa il finanziamento come vero strumento di chiusura e accesso al trattamento.", scoreLabel: "Maggiore chiusura" },
            { label: "Esiste, ma con uso limitato", description: "Aiuta in alcuni casi, ma non è ancora integrato in modo naturale nel processo.", scoreLabel: "Impatto medio" },
            { label: "Non è integrato", description: "Questo rallenta le chiusure e peggiora l'accettazione nei trattamenti di ticket elevato.", scoreLabel: "Impatto basso" },
          ],
        },
        actualVisits: {
          category: "Base attuale",
          title: "Quante prime visite implantari ha attualmente la clinica al mese?",
          helper:
            "Vogliamo capire il punto di partenza reale della clinica prima di stimare la crescita che potrebbe ottenere con una campagna attiva.",
          impactNote:
            "Questo dato ci permette di costruire lo scenario attuale e confrontarlo con la crescita realistica che la clinica potrebbe raggiungere.",
          inputLabel: "Media mensile approssimativa delle prime visite",
          placeholder: "Esempio: 15",
        },
        actualImplants: {
          category: "Base attuale",
          title: "Quanti impianti al mese colloca attualmente la clinica in media?",
          helper:
            "Questo volume ci aiuta a stimare la produzione implantare attuale e a misurare la crescita incrementale su una base reale.",
          impactNote:
            "Con questo dato calcoliamo il punto di partenza attuale della clinica in pazienti chiusi, impianti e ricavi mensili.",
          inputLabel: "Media di impianti mensili posizionati",
          placeholder: "Esempio: 9",
        },
        averageTicket: {
          category: "Base attuale",
          title: "Qual è il ticket medio per paziente di implantologia della clinica?",
          helper:
            "Questo dato ci aiuta a tradurre il volume di pazienti e impianti in un fatturato realistico associato all'implantologia.",
          impactNote:
            "Con questo ticket medio calcoliamo il fatturato attuale e il fatturato potenziale legato alla crescita implantare.",
          inputLabel: "Ticket medio per paziente di implantologia",
          placeholder: "Esempio: 2900",
        },
      },
    },
  },
};

const questionDefinitions = [
  { id: "location", type: "options", values: ["metro", "capital", "city", "rural"] },
  { id: "actualVisits", type: "number", min: 0, max: 60, step: 1, defaultValue: 15 },
  { id: "actualImplants", type: "number", min: 0, max: 80, step: 1, defaultValue: 9 },
  { id: "averageTicket", type: "number", min: 1000, max: 6000, step: 100, defaultValue: 2900, suffix: "€" },
  { id: "cabinets", type: "options", values: ["1-2", "3-4", "5-6", "7+"] },
  { id: "tac", type: "options", values: ["full", "scanExternal", "external"] },
  { id: "advisor", type: "options", values: ["yes", "no"] },
  { id: "visitPrice", type: "options", values: ["free", "partial", "paid"] },
  { id: "digital", type: "options", values: ["strong", "average", "weak"] },
  { id: "protocol", type: "options", values: ["structured", "partial", "none"] },
  { id: "reception", type: "options", values: ["dedicated", "shared", "multitask"] },
  { id: "speed", type: "options", values: ["sameDay", "nextDay", "late"] },
  { id: "financing", type: "options", values: ["strong", "limited", "none"] },
];

const questions = questionDefinitions.map((definition) => ({
  id: definition.id,
  type: definition.type,
  min: definition.min,
  max: definition.max,
  step: definition.step,
  defaultValue: definition.defaultValue,
  suffix: definition.suffix || "",
  category: "",
  title: "",
  helper: "",
  impactNote: "",
  inputLabel: "",
  placeholder: "",
  options:
    definition.type === "options"
      ? definition.values.map((value) => ({
          value,
          label: "",
          description: "",
          scoreLabel: "",
        }))
      : [],
}));

const optimizedTargets = {
  digital: "strong",
  protocol: "structured",
  reception: "dedicated",
  speed: "sameDay",
  financing: "strong",
  tac: "full",
  advisor: "yes",
  visitPrice: "free",
};

const config = {
  mediaBudget: 450,
  serviceFee: 800,
  location: {
    metro: { cpl: 7.5, competition: "high", contact: 0 },
    capital: { cpl: 6.0, competition: "mediumHigh", contact: 0.0 },
    city: { cpl: 5.2, competition: "medium", contact: 0.02 },
    rural: { cpl: 4.6, competition: "low", contact: 0.03 },
  },
  cabinets: {
    "1-2": { capacityVisits: 20, implantsPerPatient: 3 },
    "3-4": { capacityVisits: 34, implantsPerPatient: 3 },
    "5-6": { capacityVisits: 52, implantsPerPatient: 3 },
    "7+": { capacityVisits: 72, implantsPerPatient: 3 },
  },
  tac: {
    full: { close: 0.05 },
    scanExternal: { close: 0.01 },
    external: { close: -0.05 },
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
    strong: { contact: 0.06, attendance: 0.06, close: 0.02 },
    average: { contact: 0.02, attendance: 0.02, close: 0.005 },
    weak: { contact: 0.0, attendance: 0.0, close: 0.0 },
  },
  protocol: {
    structured: { close: 0.08, appointment: 0.02 },
    partial: { close: 0.03, appointment: 0.01 },
    none: { close: 0.0, appointment: 0.0 },
  },
  reception: {
    dedicated: { contact: 0.1, appointment: 0.09 },
    shared: { contact: 0.0, appointment: 0.04 },
    multitask: { contact: -0.08, appointment: 0.0 },
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

const state = {
  currentStep: 0,
  answers: {},
  isCalculating: false,
  loadingTimer: null,
  language: localStorage.getItem("calculatorLanguage") || "es",
  lastScenarioAnswers: null,
};

const elements = {
  pageDescription: document.getElementById("pageDescription"),
  brandSubtitle: document.getElementById("brandSubtitle"),
  brandCollabLabel: document.getElementById("brandCollabLabel"),
  navStartSimulation: document.getElementById("navStartSimulation"),
  heroEyebrow: document.getElementById("heroEyebrow"),
  heroTitle: document.getElementById("heroTitle"),
  heroText: document.getElementById("heroText"),
  heroSignatureLabel: document.getElementById("heroSignatureLabel"),
  heroPrimaryCtaDesktop: document.getElementById("heroPrimaryCtaDesktop"),
  heroPrimaryCtaMobile: document.getElementById("heroPrimaryCtaMobile"),
  heroSecondaryCta: document.getElementById("heroSecondaryCta"),
  heroMetricOne: document.getElementById("heroMetricOne"),
  heroMetricTwo: document.getElementById("heroMetricTwo"),
  heroMetricThree: document.getElementById("heroMetricThree"),
  productMiniLabel: document.getElementById("productMiniLabel"),
  productTitle: document.getElementById("productTitle"),
  productBody: document.getElementById("productBody"),
  heroPanelCalcLabel: document.getElementById("heroPanelCalcLabel"),
  heroPanelCalcItemOne: document.getElementById("heroPanelCalcItemOne"),
  heroPanelCalcItemTwo: document.getElementById("heroPanelCalcItemTwo"),
  heroPanelCalcItemThree: document.getElementById("heroPanelCalcItemThree"),
  heroPanelCalcItemFour: document.getElementById("heroPanelCalcItemFour"),
  heroAudienceLabel: document.getElementById("heroAudienceLabel"),
  heroAudienceBody: document.getElementById("heroAudienceBody"),
  pillarOneTitle: document.getElementById("pillarOneTitle"),
  pillarOneBody: document.getElementById("pillarOneBody"),
  pillarTwoTitle: document.getElementById("pillarTwoTitle"),
  pillarTwoBody: document.getElementById("pillarTwoBody"),
  pillarThreeTitle: document.getElementById("pillarThreeTitle"),
  pillarThreeBody: document.getElementById("pillarThreeBody"),
  simulatorEyebrow: document.getElementById("simulatorEyebrow"),
  simulatorTitle: document.getElementById("simulatorTitle"),
  simulatorBody: document.getElementById("simulatorBody"),
  profileEyebrow: document.getElementById("profileEyebrow"),
  stepLabel: document.getElementById("stepLabel"),
  stepCategory: document.getElementById("stepCategory"),
  progressBar: document.getElementById("progressBar"),
  questionContainer: document.getElementById("questionContainer"),
  prevButton: document.getElementById("prevButton"),
  nextButton: document.getElementById("nextButton"),
  profileHeadline: document.getElementById("profileHeadline"),
  profileSummary: document.getElementById("profileSummary"),
  currentSummary: document.getElementById("currentSummary"),
  impactNote: document.getElementById("impactNote"),
  resultsSection: document.getElementById("results"),
  resultsEyebrow: document.getElementById("resultsEyebrow"),
  resultsTitle: document.getElementById("resultsTitle"),
  resultsBody: document.getElementById("resultsBody"),
  insightEyebrow: document.getElementById("insightEyebrow"),
  primaryInsightTitle: document.getElementById("primaryInsightTitle"),
  primaryInsightBody: document.getElementById("primaryInsightBody"),
  insightList: document.getElementById("insightList"),
  kpiCards: document.getElementById("kpiCards"),
  funnelEyebrow: document.getElementById("funnelEyebrow"),
  funnelTitle: document.getElementById("funnelTitle"),
  funnelChip: document.getElementById("funnelChip"),
  funnelChart: document.getElementById("funnelChart"),
  comparisonEyebrow: document.getElementById("comparisonEyebrow"),
  comparisonTitle: document.getElementById("comparisonTitle"),
  comparisonChip: document.getElementById("comparisonChip"),
  comparisonChart: document.getElementById("comparisonChart"),
  impactEyebrow: document.getElementById("impactEyebrow"),
  impactTitle: document.getElementById("impactTitle"),
  impactChip: document.getElementById("impactChip"),
  impactMatrix: document.getElementById("impactMatrix"),
  tableEyebrow: document.getElementById("tableEyebrow"),
  tableTitle: document.getElementById("tableTitle"),
  resultsTable: document.getElementById("resultsTable"),
  resetButton: document.getElementById("resetButton"),
  closingEyebrow: document.getElementById("closingEyebrow"),
  closingTitle: document.getElementById("closingTitle"),
  closingBody: document.getElementById("closingBody"),
  restartScenarioLink: document.getElementById("restartScenarioLink"),
  reviewMethodologyLink: document.getElementById("reviewMethodologyLink"),
  tableHeaders: Array.from(document.querySelectorAll("thead th")),
  languageButtons: Array.from(document.querySelectorAll("[data-lang]")),
};

function getCopy() {
  return i18n[state.language].static;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function round(value, decimals = 0) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

function formatTemplate(template, replacements) {
  return Object.entries(replacements).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, value),
    template
  );
}

function formatNumber(value) {
  return new Intl.NumberFormat(i18n[state.language].locale, {
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

function formatPercent(value) {
  return `${round(value * 100, 0)}%`;
}

function formatCurrency(value) {
  return new Intl.NumberFormat(i18n[state.language].locale, {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 720px)").matches;
}

function syncQuestionsWithLanguage() {
  const localizedQuestions = i18n[state.language].static.questions;

  questions.forEach((question) => {
    const localized = localizedQuestions[question.id];
    question.category = localized.category;
    question.title = localized.title;
    question.helper = localized.helper;
    question.impactNote = localized.impactNote;
    question.inputLabel = localized.inputLabel || "";
    question.placeholder = localized.placeholder || "";

    if (question.type === "options") {
      question.options.forEach((option, index) => {
        const localizedOption = localized.options[index];
        option.label = localizedOption.label;
        option.description = localizedOption.description;
        option.scoreLabel = localizedOption.scoreLabel;
      });
    }
  });
}

function getQuestion(questionId) {
  return questions.find((question) => question.id === questionId);
}

function getOption(questionId, value) {
  return getQuestion(questionId)?.options.find((option) => option.value === value);
}

function getSelectedLabel(questionId) {
  const question = getQuestion(questionId);
  const answer = state.answers[questionId];

  if (question?.type === "number") {
    return Number.isFinite(answer) ? `${formatNumber(answer)}${question.suffix ? ` ${question.suffix}` : ""}` : "—";
  }

  return answer ? getOption(questionId, answer)?.label || "—" : "—";
}

function getLabelFromAnswers(questionId, answers) {
  const question = getQuestion(questionId);
  const answer = answers[questionId];

  if (question?.type === "number") {
    return Number.isFinite(answer) ? `${formatNumber(answer)}${question.suffix ? ` ${question.suffix}` : ""}` : "—";
  }

  return answer ? getOption(questionId, answer)?.label || "—" : "—";
}

function applyStaticTranslations() {
  const copy = getCopy();

  document.documentElement.lang = state.language;
  document.title = i18n[state.language].metaTitle;
  elements.pageDescription.setAttribute("content", i18n[state.language].metaDescription);

  elements.brandSubtitle.textContent = copy.brandSubtitle;
  elements.brandCollabLabel.textContent = copy.brandCollabLabel;
  elements.navStartSimulation.textContent = copy.navStartSimulation;
  elements.heroEyebrow.textContent = copy.heroEyebrow;
  elements.heroTitle.innerHTML = copy.heroTitle;
  elements.heroText.textContent = copy.heroText;
  elements.heroSignatureLabel.textContent = copy.heroSignatureLabel;
  elements.heroPrimaryCtaDesktop.textContent = copy.heroPrimaryCtaDesktop;
  elements.heroPrimaryCtaMobile.textContent = copy.heroPrimaryCtaMobile;
  elements.heroSecondaryCta.textContent = copy.heroSecondaryCta;
  elements.heroMetricOne.textContent = copy.heroMetricOne;
  elements.heroMetricTwo.textContent = copy.heroMetricTwo;
  elements.heroMetricThree.textContent = copy.heroMetricThree;
  elements.productMiniLabel.textContent = copy.productMiniLabel;
  elements.productTitle.textContent = copy.productTitle;
  elements.productBody.textContent = copy.productBody;
  elements.heroPanelCalcLabel.textContent = copy.heroPanelCalcLabel;
  elements.heroPanelCalcItemOne.textContent = copy.heroPanelCalcItemOne;
  elements.heroPanelCalcItemTwo.textContent = copy.heroPanelCalcItemTwo;
  elements.heroPanelCalcItemThree.textContent = copy.heroPanelCalcItemThree;
  elements.heroPanelCalcItemFour.textContent = copy.heroPanelCalcItemFour;
  elements.heroAudienceLabel.textContent = copy.heroAudienceLabel;
  elements.heroAudienceBody.textContent = copy.heroAudienceBody;
  elements.pillarOneTitle.textContent = copy.pillarOneTitle;
  elements.pillarOneBody.textContent = copy.pillarOneBody;
  elements.pillarTwoTitle.textContent = copy.pillarTwoTitle;
  elements.pillarTwoBody.textContent = copy.pillarTwoBody;
  elements.pillarThreeTitle.textContent = copy.pillarThreeTitle;
  elements.pillarThreeBody.textContent = copy.pillarThreeBody;
  elements.simulatorEyebrow.textContent = copy.simulatorEyebrow;
  elements.simulatorTitle.textContent = copy.simulatorTitle;
  elements.simulatorBody.textContent = copy.simulatorBody;
  elements.profileEyebrow.textContent = copy.profileEyebrow;
  elements.resultsEyebrow.textContent = copy.resultsEyebrow;
  elements.resultsTitle.textContent = copy.resultsTitle;
  elements.resultsBody.textContent = copy.resultsBody;
  elements.insightEyebrow.textContent = copy.insightEyebrow;
  elements.funnelEyebrow.textContent = copy.funnelEyebrow;
  elements.funnelTitle.textContent = copy.funnelTitle;
  elements.funnelChip.textContent = copy.funnelChip;
  elements.comparisonEyebrow.textContent = copy.comparisonEyebrow;
  elements.comparisonTitle.textContent = copy.comparisonTitle;
  elements.comparisonChip.textContent = copy.comparisonChip;
  elements.impactEyebrow.textContent = copy.impactEyebrow;
  elements.impactTitle.textContent = copy.impactTitle;
  elements.impactChip.textContent = copy.impactChip;
  elements.tableEyebrow.textContent = copy.tableEyebrow;
  elements.tableTitle.textContent = copy.tableTitle;
  elements.resetButton.textContent = copy.buttons.reset;
  elements.closingEyebrow.textContent = copy.closingEyebrow;
  elements.closingTitle.textContent = copy.closingTitle;
  elements.closingBody.textContent = copy.closingBody;
  elements.restartScenarioLink.textContent = copy.buttons.restartScenario;
  elements.reviewMethodologyLink.textContent = copy.reviewMethodologyLink;
  copy.tableHeaders.forEach((text, index) => {
    if (elements.tableHeaders[index]) {
      elements.tableHeaders[index].textContent = text;
    }
  });
}

function updateLanguageButtons() {
  elements.languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === state.language);
  });
}

function renderCurrentSummary() {
  const copy = getCopy();
  elements.currentSummary.innerHTML = `
    ${questions
      .map((question, index) => {
        const answerLabel = getSelectedLabel(question.id);
        const isAnswered = answerLabel !== "—";

        return `
          <button
            class="summary-card ${isAnswered ? "is-complete" : "is-pending"}"
            type="button"
            data-summary-index="${index}"
          >
            <span>${question.title}</span>
            <strong>${isAnswered ? answerLabel : copy.profile.pendingAnswer}</strong>
          </button>
        `;
      })
      .join("")}
  `;

  elements.currentSummary.querySelectorAll("[data-summary-index]").forEach((button) => {
    button.addEventListener("click", () => {
      jumpToQuestion(Number(button.dataset.summaryIndex));
    });
  });
}

function updateProfileCard() {
  const copy = getCopy();
  const locationLabel = getSelectedLabel("location");
  const cabinetsLabel = getSelectedLabel("cabinets");
  const receptionLabel = getSelectedLabel("reception");
  const digitalLabel = getSelectedLabel("digital");
  const protocolLabel = getSelectedLabel("protocol");
  const currentVisitsLabel = getSelectedLabel("actualVisits");
  const currentImplantsLabel = getSelectedLabel("actualImplants");
  const answeredCount = Object.keys(state.answers).length;

  let headline = copy.profile.defaultHeadline;
  let summary = copy.profile.defaultSummary;

  if (state.answers.location && state.answers.cabinets) {
    headline = `${locationLabel !== "—" ? locationLabel : copy.profile.clinicFallback} · ${
      cabinetsLabel !== "—" ? cabinetsLabel : copy.profile.structureFallback
    }`;

    summary = formatTemplate(copy.profile.summaryTemplate, {
      reception: receptionLabel !== "—" ? receptionLabel.toLowerCase() : copy.profile.receptionFallback,
      digital: digitalLabel !== "—" ? digitalLabel.toLowerCase() : copy.profile.digitalFallback,
      protocol: protocolLabel !== "—" ? protocolLabel.toLowerCase() : copy.profile.protocolFallback,
    });
  } else if (answeredCount >= 2 && currentVisitsLabel !== "—" && currentImplantsLabel !== "—") {
    summary = formatTemplate(copy.profile.baselineSummary, {
      visits: currentVisitsLabel,
      implants: currentImplantsLabel,
    });
  }

  elements.profileHeadline.textContent = headline;
  elements.profileSummary.textContent = summary;
  renderCurrentSummary();
}

function renderImpactNote(question) {
  const copy = getCopy();
  elements.impactNote.innerHTML = `
    <p class="mini-label">${copy.questionUi.impactLabel}</p>
    <p>${question.impactNote}</p>
  `;
}

function isQuestionAnswered(question) {
  const answer = state.answers[question.id];

  if (question.type === "number") {
    return Number.isFinite(answer);
  }

  return Boolean(answer);
}

function renderQuestion() {
  if (state.isCalculating) {
    return;
  }

  const copy = getCopy();
  const question = questions[state.currentStep];
  const answer = state.answers[question.id];

  elements.stepLabel.textContent = formatTemplate(copy.loading.stepLabel, {
    current: String(state.currentStep + 1),
    total: String(questions.length),
  });
  elements.stepCategory.textContent = question.category;
  elements.progressBar.style.width = `${((state.currentStep + 1) / questions.length) * 100}%`;

  if (question.type === "number") {
    const numericValue = Number.isFinite(answer) ? answer : question.defaultValue;
    elements.questionContainer.innerHTML = `
      <div class="question-category">${question.category}</div>
      <h3 class="question-title">${question.title}</h3>
      <p class="question-helper">${question.helper}</p>
      <div class="number-question-card">
        <label class="number-question-label" for="numericQuestionInput">${question.inputLabel}</label>
        <div class="number-input-shell">
          <input
            id="numericQuestionInput"
            class="number-question-input"
            type="number"
            min="${question.min}"
            max="${question.max}"
            step="${question.step}"
            value="${numericValue}"
            placeholder="${question.placeholder}"
          />
          ${question.suffix ? `<span class="number-question-suffix">${question.suffix}</span>` : ""}
        </div>
      </div>
    `;

    const input = document.getElementById("numericQuestionInput");
    const updateNumericAnswer = () => {
      const parsed = Number(input.value);
      state.answers[question.id] = Number.isFinite(parsed)
        ? clamp(parsed, question.min, question.max)
        : question.defaultValue;
      if (Number(input.value) !== state.answers[question.id]) {
        input.value = state.answers[question.id];
      }
      updateProfileCard();
      elements.nextButton.disabled = !isQuestionAnswered(question);
    };

    input.addEventListener("input", updateNumericAnswer);
    input.addEventListener("change", updateNumericAnswer);
    updateNumericAnswer();
  } else {
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

        if (isMobileViewport()) {
          if (state.currentStep === questions.length - 1 || isComplete()) {
            startResultsLoading();
            return;
          }

          state.currentStep += 1;
          renderQuestion();
          return;
        }

        renderQuestion();
        if (isComplete()) {
          startResultsLoading();
        }
      });
    });
  }

  elements.prevButton.disabled = state.currentStep === 0;
  elements.nextButton.disabled = !isQuestionAnswered(question);
  elements.prevButton.textContent = copy.buttons.previous;
  elements.nextButton.textContent =
    state.currentStep === questions.length - 1 ? copy.buttons.viewResults : copy.buttons.next;

  renderImpactNote(question);
}

function renderLoadingState() {
  const copy = getCopy();
  const currentQuestion = questions[state.currentStep];

  elements.stepLabel.textContent = formatTemplate(copy.loading.stepLabel, {
    current: String(questions.length),
    total: String(questions.length),
  });
  elements.stepCategory.textContent = copy.loading.category;
  elements.progressBar.style.width = "100%";

  elements.questionContainer.innerHTML = `
    <div class="loading-state" aria-live="polite">
      <div class="loading-core" aria-hidden="true">
        <span class="loading-ring loading-ring-one"></span>
        <span class="loading-ring loading-ring-two"></span>
        <span class="loading-ring loading-ring-three"></span>
      </div>
      <p class="mini-label">${copy.loading.miniLabel}</p>
      <h3 class="loading-title">${copy.loading.title}</h3>
      <p class="loading-helper">${copy.loading.helper}</p>
    </div>
  `;

  elements.prevButton.disabled = true;
  elements.nextButton.disabled = true;
  elements.prevButton.textContent = copy.buttons.previous;
  elements.nextButton.textContent = copy.buttons.calculating;
  elements.impactNote.innerHTML = `
    <p class="mini-label">${copy.loading.impactLabel}</p>
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
    state.lastScenarioAnswers = { ...state.answers };
    renderQuestion();
    renderResultsView(buildResultsData(state.lastScenarioAnswers));
  }, 2000);
}

function isComplete() {
  return questions.every((question) => isQuestionAnswered(question));
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

  const averageTicket = Math.max(Number(inputAnswers.averageTicket) || baseMetrics.ticket, 0);
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
  const revenue = closedPatients * averageTicket;
  const totalCampaignCost = recommendedBudget + config.serviceFee;
  const roi = recommendedBudget > 0 ? revenue / recommendedBudget : 0;
  const cac = closedPatients > 0 ? totalCampaignCost / closedPatients : 0;
  const costPerVisit = visits > 0 ? totalCampaignCost / visits : 0;

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
    roi,
    cac,
    costPerVisit,
    competition: location.competition,
  };
}

function calculateActualScenario(inputAnswers) {
  const projectedScenario = calculateScenario(inputAnswers);
  const currentVisits = Math.max(Number(inputAnswers.actualVisits) || 0, 0);
  const currentImplants = Math.max(Number(inputAnswers.actualImplants) || 0, 0);
  const averageTicket = Math.max(Number(inputAnswers.averageTicket) || baseMetrics.ticket, 0);
  const implantsPerPatient = config.cabinets[inputAnswers.cabinets].implantsPerPatient;
  const closedPatients = currentImplants / implantsPerPatient;
  const closeRate = currentVisits > 0 ? closedPatients / currentVisits : 0;
  const appointments = projectedScenario.attendanceRate > 0 ? currentVisits / projectedScenario.attendanceRate : 0;
  const contactLeads =
    projectedScenario.appointmentRate > 0 ? appointments / projectedScenario.appointmentRate : 0;
  const leads = projectedScenario.contactRate > 0 ? contactLeads / projectedScenario.contactRate : 0;
  const revenue = closedPatients * averageTicket;
  const cpl = leads > 0 ? projectedScenario.recommendedBudget / leads : 0;
  const roi = projectedScenario.recommendedBudget > 0 ? revenue / projectedScenario.recommendedBudget : 0;

  return {
    ...projectedScenario,
    cpl,
    leads,
    contactLeads,
    appointments,
    visits: currentVisits,
    closeRate,
    closedPatients,
    implants: currentImplants,
    revenue,
    roi,
    costPerVisit: currentVisits > 0 ? projectedScenario.totalCampaignCost / currentVisits : 0,
    cac: closedPatients > 0 ? projectedScenario.totalCampaignCost / closedPatients : 0,
  };
}

function getOptimizedAnswers(baseAnswers) {
  return {
    ...baseAnswers,
    ...optimizedTargets,
  };
}

function getPhaseDiagnostics(currentScenario, optimizedScenario) {
  const labels = getCopy().diagnostics;
  const deltas = [
    {
      label: labels.contact,
      current: currentScenario.contactRate,
      optimized: optimizedScenario.contactRate,
    },
    {
      label: labels.appointments,
      current: currentScenario.appointmentRate,
      optimized: optimizedScenario.appointmentRate,
    },
    {
      label: labels.attendance,
      current: currentScenario.attendanceRate,
      optimized: optimizedScenario.attendanceRate,
    },
    {
      label: labels.close,
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

function calculateOptimizationScore(currentScenario, optimizedScenario) {
  const weightedRatio =
    (currentScenario.contactRate / optimizedScenario.contactRate) * 0.28 +
    (currentScenario.appointmentRate / optimizedScenario.appointmentRate) * 0.16 +
    (currentScenario.attendanceRate / optimizedScenario.attendanceRate) * 0.18 +
    (currentScenario.closeRate / optimizedScenario.closeRate) * 0.38;

  return clamp(round(5 + weightedRatio * 5, 1), 5, 10);
}

function buildInsights(currentScenario, optimizedScenario, sourceAnswers) {
  const copy = getCopy().insights;
  const diagnostics = getPhaseDiagnostics(currentScenario, optimizedScenario);
  const insights = [];
  const recommendationCards = [];
  const score = calculateOptimizationScore(currentScenario, optimizedScenario);

  if (sourceAnswers.reception === "multitask" || sourceAnswers.speed === "late") {
    insights.push(copy.earlyLeak);
    recommendationCards.push({
      title: copy.cards.contactTitle,
      body: copy.cards.contactBody,
    });
  }

  if (sourceAnswers.protocol !== "structured" || sourceAnswers.advisor !== "yes") {
    insights.push(copy.closeOpportunity);
    recommendationCards.push({
      title: copy.cards.closeTitle,
      body: copy.cards.closeBody,
    });
  }

  if (sourceAnswers.digital === "weak") {
    insights.push(copy.weakDigital);
    recommendationCards.push({
      title: copy.cards.trustTitle,
      body: copy.cards.trustBody,
    });
  }

  if (sourceAnswers.tac === "external" || sourceAnswers.financing === "none") {
    insights.push(copy.tacFinance);
    recommendationCards.push({
      title: copy.cards.financeTitle,
      body: copy.cards.financeBody,
    });
  }

  if (insights.length < 3) {
    insights.push(copy.generic);
    recommendationCards.push({
      title: copy.cards.operationsTitle,
      body: copy.cards.operationsBody,
    });
  }

  const incrementalImplants = optimizedScenario.implants - currentScenario.implants;
  const extraOptimizedImplants = optimizedScenario.implants - currentScenario.implants;
  const extraOptimizedRevenue = optimizedScenario.revenue - currentScenario.revenue;
  insights.push(formatTemplate(copy.implantsLift, { value: formatNumber(incrementalImplants) }));
  recommendationCards.push({
    title: copy.cards.impactTitle,
    body: `${copy.cards.impactBody} ${formatTemplate(copy.cards.impactTail, {
      implants: formatNumber(extraOptimizedImplants),
      revenue: formatCurrency(extraOptimizedRevenue),
    })}`,
  });

  return {
    score,
    title: formatTemplate(copy.title, { phase: diagnostics.weakest.label }),
    body: formatTemplate(copy.body, { lift: diagnostics.biggestLift.label }),
    insights: insights.slice(0, 4),
    cards: recommendationCards.slice(0, 4),
  };
}

function buildResultsData(sourceAnswers) {
  const currentScenario = calculateActualScenario(sourceAnswers);
  const realisticScenario = calculateScenario(sourceAnswers);
  const optimizedScenario = calculateScenario(getOptimizedAnswers(sourceAnswers));
  const insights = buildInsights(realisticScenario, optimizedScenario, sourceAnswers);
  const combinedScenario = {
    visits: currentScenario.visits + realisticScenario.visits,
    closedPatients: currentScenario.closedPatients + realisticScenario.closedPatients,
    implants: currentScenario.implants + realisticScenario.implants,
    revenue: currentScenario.revenue + realisticScenario.revenue,
  };

  return { currentScenario, realisticScenario, optimizedScenario, combinedScenario, insights };
}

function renderImpactMatrix(sourceAnswers) {
  const columns = [
    {
      title: getCopy().questions.location.category,
      body: getQuestion("location").impactNote,
      items: [getLabelFromAnswers("location", sourceAnswers)],
    },
    {
      title: getCopy().questions.reception.category,
      body: getQuestion("reception").impactNote,
      items: [getLabelFromAnswers("reception", sourceAnswers), getLabelFromAnswers("speed", sourceAnswers)],
    },
    {
      title: getCopy().questions.visitPrice.category,
      body: getQuestion("visitPrice").impactNote,
      items: [getLabelFromAnswers("visitPrice", sourceAnswers), getLabelFromAnswers("digital", sourceAnswers)],
    },
    {
      title: getCopy().questions.protocol.category,
      body: getQuestion("protocol").impactNote,
      items: [
        getLabelFromAnswers("protocol", sourceAnswers),
        getLabelFromAnswers("advisor", sourceAnswers),
        getLabelFromAnswers("tac", sourceAnswers),
      ],
    },
    {
      title: getCopy().questions.financing.category,
      body: getQuestion("financing").impactNote,
      items: [getLabelFromAnswers("financing", sourceAnswers)],
    },
  ];

  elements.impactMatrix.innerHTML = columns
    .map(
      (column) => `
        <div class="impact-column">
          <h4>${column.title}</h4>
          <p>${column.body}</p>
          <div class="impact-list">
            ${column.items
              .filter((item) => item && item !== "—")
              .map(
                (item) => `
                  <div class="impact-item">
                    <strong>${item}</strong>
                  </div>
                `
              )
              .join("")}
          </div>
        </div>
      `
    )
    .join("");
}

function renderResultsView(data) {
  const copy = getCopy().results;
  const { currentScenario, realisticScenario, optimizedScenario, combinedScenario, insights } = data;

  elements.resultsSection.classList.remove("hidden");

  elements.kpiCards.innerHTML = `
    <article class="kpi-card">
      <p class="mini-label">${copy.kpis.patientsTitle}</p>
      <div class="kpi-card-value">
        <strong>${formatNumber(realisticScenario.closedPatients)}</strong>
      </div>
      <div class="kpi-card-content">
        <span>${copy.kpis.patientsBody}</span>
      </div>
    </article>
    <article class="kpi-card">
      <p class="mini-label">${copy.kpis.implantsTitle}</p>
      <div class="kpi-card-value">
        <strong>${formatNumber(realisticScenario.implants)}</strong>
      </div>
      <div class="kpi-card-content">
        <span>${copy.kpis.implantsBody}</span>
      </div>
    </article>
    <article class="kpi-card">
      <p class="mini-label">${copy.kpis.revenueTitle}</p>
      <div class="kpi-card-value">
        <strong>${formatCurrency(realisticScenario.revenue)}</strong>
      </div>
      <div class="kpi-card-content">
        <span>${copy.kpis.revenueBody}</span>
      </div>
    </article>
    <article class="kpi-card">
      <p class="mini-label">${copy.kpis.costTitle}</p>
      <div class="kpi-card-value">
        <strong>${round(realisticScenario.roi, 1)}x</strong>
      </div>
      <div class="kpi-card-content">
        <span>${copy.kpis.costBody}</span>
      </div>
    </article>
  `;

  const funnelMax = Math.max(
    realisticScenario.leads,
    realisticScenario.contactLeads,
    realisticScenario.appointments,
    realisticScenario.visits,
    realisticScenario.closedPatients
  );

  const funnelRows = [
    { label: copy.funnel.leads, value: realisticScenario.leads, note: `${formatCurrency(realisticScenario.cpl)} CPL` },
    { label: copy.funnel.contacted, value: realisticScenario.contactLeads, note: formatPercent(realisticScenario.contactRate) },
    { label: copy.funnel.appointments, value: realisticScenario.appointments, note: formatPercent(realisticScenario.appointmentRate) },
    { label: copy.funnel.visits, value: realisticScenario.visits, note: formatPercent(realisticScenario.attendanceRate) },
    { label: copy.funnel.closed, value: realisticScenario.closedPatients, note: formatPercent(realisticScenario.closeRate) },
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
    { label: copy.funnel.visits, current: currentScenario.visits, optimized: combinedScenario.visits, formatter: formatNumber },
    { label: copy.table.patients, current: currentScenario.closedPatients, optimized: combinedScenario.closedPatients, formatter: formatNumber },
    { label: copy.table.implants, current: currentScenario.implants, optimized: combinedScenario.implants, formatter: formatNumber },
    { label: copy.table.revenue, current: currentScenario.revenue, optimized: combinedScenario.revenue, formatter: formatCurrency },
  ];

  elements.comparisonChart.innerHTML = comparisonItems
    .map((item) => {
      const rowMax = item.scaleMax || Math.max(item.current, item.optimized, 1);
      return `
        <div class="comparison-row">
          <div class="chart-labels">
            <span>${item.label}</span>
            <strong>${item.formatter(item.current)} → ${item.formatter(item.optimized)}</strong>
          </div>
          <div class="comparison-shell">
            <div class="comparison-bar-shell">
              <div class="comparison-bar-current" style="width:${(item.current / rowMax) * 100}%"></div>
            </div>
            <div class="comparison-bar-shell">
              <div class="comparison-bar-optimized" style="width:${(item.optimized / rowMax) * 100}%"></div>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  const competitionLabel = copy.competition[currentScenario.competition];
  const tableRows = [
    { label: copy.table.budget, expected: formatCurrency(realisticScenario.recommendedBudget), note: copy.table.budgetNote },
    { label: copy.table.cpl, expected: formatCurrency(realisticScenario.cpl), note: formatTemplate(copy.table.cplNote, { competition: competitionLabel }) },
    { label: copy.table.contact, expected: formatPercent(realisticScenario.contactRate), note: copy.table.contactNote },
    { label: copy.table.appointment, expected: formatPercent(realisticScenario.appointmentRate), note: copy.table.appointmentNote },
    { label: copy.table.attendance, expected: formatPercent(realisticScenario.attendanceRate), note: copy.table.attendanceNote },
    { label: copy.table.close, expected: formatPercent(realisticScenario.closeRate), note: copy.table.closeNote },
    { label: copy.table.patients, expected: `<span class="value-positive">${formatNumber(realisticScenario.closedPatients)}</span>`, note: copy.table.patientsNote },
    { label: copy.table.implants, expected: `<span class="value-positive">${formatNumber(realisticScenario.implants)}</span>`, note: copy.table.implantsNote },
    { label: copy.table.revenue, expected: `<span class="value-positive">${formatCurrency(realisticScenario.revenue)}</span>`, note: copy.table.revenueNote },
  ];

  elements.resultsTable.innerHTML = tableRows
    .map(
      (row) => `
        <tr>
          <td><strong>${row.label}</strong></td>
          <td>${row.expected}</td>
          <td>${row.note}</td>
        </tr>
      `
    )
    .join("");

  elements.primaryInsightTitle.textContent = insights.title;
  elements.primaryInsightBody.textContent = insights.body;
  elements.insightList.innerHTML = `
    <div class="insight-score-block">
      <div class="insight-score-orbit" style="--score:${insights.score / 10}">
        <div class="insight-score-core">
          <strong>${insights.score.toFixed(1)}</strong>
          <span>/10</span>
        </div>
      </div>
      <div class="insight-score-copy">
        <p class="mini-label">${getCopy().insights.scoreLabel}</p>
        <p>${getCopy().insights.scoreCaption}</p>
      </div>
    </div>
    ${insights.cards
      .map(
        (item) => `
          <div class="insight-pill insight-recommendation">
            <strong>${item.title}</strong>
            <span>${item.body}</span>
          </div>
        `
      )
      .join("")}
  `;

  renderImpactMatrix(state.lastScenarioAnswers || {});
  elements.resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  resetSimulation({ preserveResults: true, scrollToSimulator: false });
}

function goToNext() {
  if (state.isCalculating) {
    return;
  }

  const currentQuestion = questions[state.currentStep];
  if (currentQuestion.type === "number" && !Number.isFinite(state.answers[currentQuestion.id])) {
    state.answers[currentQuestion.id] = currentQuestion.defaultValue;
    updateProfileCard();
  }

  if (!isQuestionAnswered(currentQuestion)) {
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

function jumpToQuestion(stepIndex) {
  if (state.isCalculating) {
    return;
  }

  state.currentStep = clamp(stepIndex, 0, questions.length - 1);
  renderQuestion();
  document.getElementById("simulador").scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetSimulation(options = {}) {
  const { preserveResults = false, scrollToSimulator = true } = options;

  clearTimeout(state.loadingTimer);
  state.isCalculating = false;
  state.loadingTimer = null;
  state.currentStep = 0;
  state.answers =
    preserveResults && state.lastScenarioAnswers ? { ...state.lastScenarioAnswers } : {};
  if (!preserveResults) {
    elements.resultsSection.classList.add("hidden");
    state.lastScenarioAnswers = null;
  }
  updateProfileCard();
  renderQuestion();
  if (scrollToSimulator) {
    document.getElementById("simulador").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function setLanguage(language) {
  if (!i18n[language]) {
    return;
  }

  state.language = language;
  localStorage.setItem("calculatorLanguage", language);
  syncQuestionsWithLanguage();
  applyStaticTranslations();
  updateLanguageButtons();
  updateProfileCard();

  if (state.isCalculating) {
    renderLoadingState();
  } else {
    renderQuestion();
  }

  if (!elements.resultsSection.classList.contains("hidden") && state.lastScenarioAnswers) {
    renderResultsView(buildResultsData(state.lastScenarioAnswers));
  }
}

elements.nextButton.addEventListener("click", goToNext);
elements.prevButton.addEventListener("click", goToPrevious);
elements.resetButton.addEventListener("click", () => resetSimulation());
elements.restartScenarioLink.addEventListener("click", (event) => {
  event.preventDefault();
  resetSimulation();
});

elements.languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

syncQuestionsWithLanguage();
applyStaticTranslations();
updateLanguageButtons();
renderQuestion();
updateProfileCard();

