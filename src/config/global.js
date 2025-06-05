export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Aplicaciones prácticas de la analítica avanzada',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Uso de herramientas de optimización en inteligencia de negocios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Algoritmos de optimización y su aplicación en la toma de decisiones empresariales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Análisis de datos en tiempo real para la optimización de procesos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Modelos de optimización en la gestión de la cadena de suministro',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Construcción de estrategias de negocio basadas en analítica avanzada',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Segmentación de clientes y personalización de productos mediante analítica avanzada',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Modelos predictivos para la identificación de oportunidades de mercado',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Uso de la inteligencia artificial en la formulación de estrategias empresariales',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Evaluación del impacto de la analítica en la rentabilidad y el desempeño empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Indicadores clave de rendimiento (KPI) basados en analítica avanzad',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Análisis de costos y rentabilidad mediante machine learning',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Optimización financiera y reducción de riesgos a través del análisis de datos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Fuentes, A. (2021). Modelo integrado de inteligencia de negocios como soporte a la toma de decisiones en la gestión comercial de las mypes. [Tesis de doctorado publicada] Universidad de Sipán, Escuela de posgrados.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/228906',
    },
    {
      referencia:
        'Davenport, T. H., Harris, J. G., & Morison, R. (2010). Analytics at work: Smarter decisions, better results. Harvard Business Press.',
      link:
        'https://analytics.typepad.com/files/accenture_analytics_at_work.pdf',
    },
    {
      referencia:
        'Davenport, T. H., Harris, J. G., & Morison, R. (2010). Analytics at work: Smarter decisions, better results. Harvard Business Press.',
      link:
        'https://www.academia.edu/download/32499172/Analytics_at_Work_-_Smarter_Decisions_and_Better_Results.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Optimización financiera',
      significado:
        'uso de técnicas analíticas para maximizar la rentabilidad y minimizar los riesgos económicos en las organizaciones.',
    },
    {
      termino: 'Reducción de riesgos empresariales',
      significado:
        'estrategias basadas en datos para minimizar incertidumbres y amenazas en la toma de decisiones.',
    },
    {
      termino: 'Segmentación de clientes',
      significado:
        'técnica de clasificación de consumidores en grupos homogéneos con base en características similares para estrategias personalizadas.',
    },
    {
      termino: 'Tendencias en analítica avanzada',
      significado:
        'evolución y nuevas aplicaciones de la analítica de datos en diversos sectores industriales.',
    },
    {
      termino: 'Algoritmos de optimización',
      significado:
        'conjunto de reglas y procedimientos matemáticos utilizados para encontrar la mejor solución en un problema de negocio.',
    },
    {
      termino: 'Análisis de costos y rentabilidad',
      significado:
        'evaluación financiera que determina la viabilidad económica y la eficiencia de un negocio o proyecto.',
    },
    {
      termino: 'Análisis de datos en tiempo real',
      significado:
        'proceso de evaluación y procesamiento de información instantáneamente para la toma de decisiones rápidas y precisas.',
    },
    {
      termino: 'Analítica avanzada',
      significado:
        'uso de técnicas de inteligencia artificial, machine learning y estadística para extraer conocimiento de grandes volúmenes de datos.',
    },
    {
      termino: 'Automatización de decisiones',
      significado:
        'uso de sistemas inteligentes que aplican reglas y modelos analíticos para agilizar la toma de decisiones en las empresas.',
    },
    {
      termino: 'Big Data',
      significado:
        'conjunto masivo de datos que requieren herramientas especializadas para su almacenamiento, procesamiento y análisis.',
    },
    {
      termino: 'Cadena de suministro',
      significado:
        'conjunto de procesos logísticos y operacionales involucrados en la producción y distribución de bienes y servicios.',
    },
    {
      termino: 'Casos de éxito',
      significado:
        'ejemplos documentados de empresas que han implementado con éxito estrategias basadas en analítica avanzada.',
    },
    {
      termino: 'Dashboards empresariales',
      significado:
        'interfaces visuales que muestran datos clave en gráficos e informes para facilitar la toma de decisiones.',
    },
    {
      termino: 'Indicadores clave de rendimiento (KPI)',
      significado:
        'métricas utilizadas para medir el éxito y la eficiencia de los procesos organizacionales.',
    },
    {
      termino: 'Inteligencia artificial en negocios',
      significado:
        'aplicación de sistemas automatizados que aprenden y toman decisiones para mejorar la competitividad empresarial.',
    },
    {
      termino: 'Lecciones aprendidas',
      significado:
        'conocimientos adquiridos a partir de errores y aciertos en la implementación de proyectos de analítica de negocios.',
    },
    {
      termino: 'Machine learning',
      significado:
        'rama de la inteligencia artificial que permite a los sistemas aprender automáticamente a partir de datos sin ser programados explícitamente.',
    },
    {
      termino: 'Minerías de datos',
      significado:
        'proceso de exploración y análisis de grandes volúmenes de datos para descubrir patrones ocultos.',
    },
    {
      termino: 'Modelos de optimización',
      significado:
        'métodos matemáticos y computacionales utilizados para mejorar la eficiencia de los procesos empresariales.',
    },
    {
      termino: 'Modelos predictivos',
      significado:
        'algoritmos que analizan datos históricos para prever tendencias y comportamientos futuros en el mercado.',
    },
  ],
}
