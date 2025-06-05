<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Evaluación del impacto de la analítica en la rentabilidad y el desempeño empresarial'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden



      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 La #[strong analítica avanzada] ha revolucionado la capacidad de las empresas para #[strong generar valor], #[strong tomar decisiones más precisas] y #[strong mejorar su rentabilidad]. Al integrar herramientas como machine learning, análisis predictivo y procesamiento en tiempo real, las organizaciones pueden evaluar con mayor exactitud el impacto de sus estrategias, optimizar recursos y detectar oportunidades de crecimiento.

      
          .bg-color-4.p-4(data-aos="fade-left").mb-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Empresas líderes como Google, Amazon y Microsoft han demostrado que el uso inteligente de datos permite automatizar procesos, personalizar productos y, sobre todo, incrementar márgenes de ganancia mediante decisiones estratégicas basadas en datos.
      
  
      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Indicadores clave de rendimiento (KPI) basados en analítica avanzada

      p Para evaluar el impacto de la analítica en los resultados empresariales, se utilizan #[strong Key Performance Indicators (KPI)], los cuales reflejan la efectividad de las estrategias basadas en datos. A continuación se presentan los KPI más relevantes en este contexto:


      .bg-full-width.bg-fondo-slider
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slide-1.png")
              .col-lg-7.order-lg-1
                h4 Retorno de la inversión (ROI)
                p Compara el beneficio económico generado con el costo de implementación analítica
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slide-2.png")
              .col-lg-7.order-lg-1
                h4 Costo de adquisición de clientes (CAC)
                p Evalúa la eficiencia de estrategias de captación impulsadas por analítica
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slide-3.png")
              .col-lg-7.order-lg-1
                h4 Tasa de conversión
                p Mide la eficacia de las acciones basadas en datos para generar resultados concretos
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slide-4.png")
              .col-lg-7.order-lg-1
                h4 Precisión de modelos predictivos
                p Evalúa la capacidad de los algoritmos para anticipar comportamientos de negocio
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slide-4.png")
              .col-lg-7.order-lg-1
                h4 Tiempo de respuesta
                p Refleja la agilidad de la organización para actuar ante cambios del entorno
      

      .bg-full-width.bg-color-2.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Estos indicadores permiten medir de forma tangible cómo la analítica contribuye al #[strong desempeño operativo y financiero].
      

      .bg-full-width-2.bg-fondo-7
        .px-4.px-md-5.py-4


          #t_3_2.titulo-segundo(data-aos="flip-up")
            h2 #[span 3.2] Análisis de costos y rentabilidad mediante #[strong #[em     machine learning]]

          p.mb-5 El uso de #[em machine learning] permite identificar #[strong patrones en costos operativos], #[strong prever gastos futuros] y #[strong optimizar la asignación de recursos]. Gracias a algoritmos entrenados, es posible detectar ineficiencias, ajustar márgenes y mejorar la rentabilidad. Las aplicaciones empresariales son:

          .row.justify-content-center.align-items-stretch
            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/4.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Amazon
                  p.mb-0 Predicción de costos logísticos, optimización de inventario y automatización de procesos
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/5.png" alt="")
                .custom-image-card__text.p-4  
                  h5.mb-2.text-center Tesla
                  p.mb-0 Análisis de costos de producción, mejora de eficiencia en cadena de suministro
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/6.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Citibank
                  p.mb-0 Evaluación de rentabilidad de clientes y personalización de servicios financieros


      p.mb-5 Los beneficios principales son los siguientes: 


      .bg-full-width.bg-color-4.mb-5
        .px-4.px-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure
                img(src="@/assets/curso/tema3/7.svg" alt="" style="max-width: 400px;").mx-auto.mb-4.mb-lg-0
            .col-lg-8
              ul.lista-ul--color
                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | #[strong Predicción precisa de costos] mediante series históricas y algoritmos de regresión.
                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | #[strong Identificación de ineficiencias] en procesos productivos o logísticos.
                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | #[strong Proyección de márgenes de ganancia] ajustados a condiciones dinámicas del mercado.
                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | #[strong Segmentación de clientes] según su potencial de rentabilidad.


      #t_3_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.3] Optimización financiera y reducción de riesgos a través del análisis de datos
      
      p La optimización financiera y la gestión de riesgos son áreas críticas para la sostenibilidad empresarial. El análisis de datos permite mejorar la asignación de recursos, prever eventos adversos y reaccionar ante ellos con rapidez. Las estrategias y tecnologías aplicadas:

      .row.align-items-start.mb-5
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="Predicción de flujos de caja")
              p Mejora la planificación financiera y evita crisis de liquidez
      
            .div(titulo="Scoring crediticio con ML")
              p Permite una evaluación más precisa del riesgo de impago
      
            .div(titulo="Detección de fraude en tiempo real")
              p Automatiza la respuesta ante comportamientos sospechosos
      
            .div(titulo="Coberturas de riesgo con análisis predictivo")
              p Anticipa variaciones en divisas, tasas de interés o precios de materias primas
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/8.png", alt="").mb-4.mb-lg-0


      p Los casos empresariales son: 

      .bg-full-width-2.bg-fondo-8
        .px-4.px-md-5.py-4

      
          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-3.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/9.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Netflix
                  p.mb-0 Utiliza análisis predictivo para planificar presupuestos de producción basados en la demanda esperada.
            .col-lg-3.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/10.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center JPMorgan
                  p.mb-0 Detecta fraudes financieros en tiempo real mediante algoritmos de machine learning.
            .col-lg-3.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/11.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Shell
                  p.mb-0 Gestiona riesgos por variaciones en el precio del petróleo usando modelos predictivos.
            .col-lg-3.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/12.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Walmart
                  p.mb-0 Ajusta decisiones logísticas y de inventario según análisis en tiempo real para evitar pérdidas.




      .bg-full-width.bg-color-4.mb-5
        .px-4.px-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure
                img(src="@/assets/curso/tema3/13.svg" alt="" style="max-width: 400px;").mx-auto.mb-4.mb-lg-0
            .col-lg-8
              h4 Ventajas del análisis en tiempo real
              ul.lista-ul--color
                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | Reacción inmediata a eventos de mercado inesperados.

                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | Reducción de pérdidas por volatilidad financiera.

                li.mb-3
                  i.fas.fa-arrow-circle-right
                  | Aumento de eficiencia operativa en decisiones de corto plazo.


      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 La analítica avanzada, y en particular el uso de machine learning, ha redefinido la forma en que las empresas gestionan sus costos, riesgos y recursos financieros. Las organizaciones que adoptan estas herramientas logran una mayor agilidad, eficiencia y competitividad en un entorno económico volátil.
      
          .bg-color-3.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/14.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Al implementar #[strong modelos predictivos], #[strong KPI inteligentes] y #[strong análisis en tiempo real], las empresas no solo optimizan su rentabilidad, sino que también desarrollan una cultura empresarial basada en datos que impulsa la innovación y sostenibilidad a largo plazo.
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/15.png", data-aos="zoom-in")


      .bg-full-width.bg-color-7
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/16.png', alt='')
      
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Presentación de casos de estudio y mejores prácticas en la industria
              p.mb-4(data-aos="fade-right") Se invita a leer el documento #[strong Presentación de casos de estudio y mejores prácticas en la industria], donde se aborda el impacto de la analítica avanzada en distintas industrias. 
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Presentación de casos de estudio y mejores prácticas en la industria
      
      



      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/270011" target="_blank" rel="noopener noreferrer") Rojas, P. (2019). Monetizagram: descubre cómo funciona el algoritmo de Instagram y #Monetizatucuenta: (1 ed.). LID Editorial España. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/_9CHbKO7LEk?si=sinw2Rwofz9puzaN" target="_blank" rel="noopener noreferrer") Andalucía Conectada (2019, 29 de abril) Webinar: La empresa orientada a datos, por Fernando Maldonado.  
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              'La empresa LogiTech enfrenta problemas con la asignación de recursos para la producción de sus dispositivos electrónicos. Para maximizar la rentabilidad, decide implementar un algoritmo de optimización que permita asignar de manera eficiente los insumos y tiempos de fabricación. ¿Qué tipo de algoritmo de optimización sería más adecuado para esta situación?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Algoritmos genéticos', esCorrecta: false },
              { id: 'b', texto: 'Programación lineal', esCorrecta: true },
              {
                id: 'c',
                texto: 'Redes neuronales profundas',
                esCorrecta: false,
              },
              { id: 'd', texto: 'Árboles de decisión', esCorrecta: false },
            ],
            mensaje_correcto:
              '¡Correcto! La programación lineal es ideal para la optimización de asignación de recursos bajo restricciones.',
            mensaje_incorrecto:
              'Incorrecto. Revisa la retroalimentación para identificar el algoritmo más adecuado.',
          },
          {
            id: 2,
            texto:
              'La cadena de supermercados FreshMart quiere reducir las pérdidas por productos perecederos. Para ello, ha decidido implementar una herramienta de análisis en tiempo real que le ayude a ajustar los niveles de inventario y prever la demanda con mayor precisión. ¿Cuál de las siguientes herramientas sería la mejor opción para este tipo de análisis?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Modelos de regresión logística',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Dashboards estáticos en Excel',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Sistemas de procesamiento de eventos en tiempo real',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Análisis de datos con tablas dinámicas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! Los sistemas de procesamiento de eventos en tiempo real permiten monitorear y ajustar inventarios de inmediato.',
            mensaje_incorrecto:
              'Incorrecto. Revisa la retroalimentación para identificar la herramienta más adecuada.',
          },
          {
            id: 3,
            texto:
              'Global Freight, una empresa de logística, busca minimizar los costos de transporte sin comprometer la eficiencia en la entrega de productos. Para ello, debe elegir un modelo de optimización adecuado que le permita determinar las rutas más eficientes para sus camiones de reparto. ¿Cuál de las siguientes técnicas es la más apropiada para este problema?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Algoritmo de Dijkstra', esCorrecta: true },
              { id: 'b', texto: 'Árboles de decisión', esCorrecta: false },
              { id: 'c', texto: 'K-means clustering', esCorrecta: false },
              { id: 'd', texto: 'Redes bayesianas', esCorrecta: false },
            ],
            mensaje_correcto:
              '¡Correcto! El algoritmo de Dijkstra es ideal para encontrar rutas óptimas en redes de transporte.',
            mensaje_incorrecto:
              'Incorrecto. Revisa la retroalimentación para identificar la técnica más adecuada.',
          },
          {
            id: 4,
            texto:
              'La empresa de manufactura TechParts enfrenta tiempos de producción irregulares debido a fallos en sus máquinas. Para anticiparse a estas fallas y optimizar el mantenimiento, ha decidido utilizar una solución basada en inteligencia artificial. ¿Qué enfoque de IA sería el más adecuado para esta aplicación?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Algoritmos de aprendizaje supervisado para mantenimiento predictivo',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Algoritmos de búsqueda aleatoria',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Árboles de clasificación para control de calidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Modelos de segmentación de clientes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! Los algoritmos de aprendizaje supervisado permiten predecir fallos y optimizar el mantenimiento.',
            mensaje_incorrecto:
              'Incorrecto. Revisa la retroalimentación para identificar el enfoque más adecuado.',
          },
          {
            id: 5,
            texto:
              'FinTech Global utiliza grandes volúmenes de datos para ofrecer asesoramiento financiero a sus clientes. Sin embargo, enfrenta dificultades en la velocidad de procesamiento y análisis de datos. La empresa busca implementar una solución de optimización para mejorar sus tiempos de respuesta en la toma de decisiones. ¿Qué estrategia sería la más efectiva en este caso?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Implementación de modelos de optimización basados en computación en la nube',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'Reducción del volumen de datos procesados sin análisis previo',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Eliminación de modelos predictivos y uso de reportes manuales',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Uso exclusivo de hojas de cálculo sin herramientas analíticas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! La computación en la nube permite escalar el procesamiento y análisis de datos de manera eficiente.',
            mensaje_incorrecto:
              'Incorrecto. Revisa la retroalimentación para identificar la estrategia más efectiva.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
