<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Uso de herramientas de optimización en inteligencia de negocios'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-4.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La optimización se ha convertido en un componente esencial de la inteligencia de negocios moderna, al permitir transformar grandes volúmenes de datos en decisiones estratégicas de alto impacto. En un entorno empresarial marcado por la volatilidad, incertidumbre y la necesidad de respuestas ágiles, las organizaciones requieren mucho más que reportes históricos o proyecciones genéricas. Necesitan identificar, entre múltiples alternativas, las soluciones que maximicen beneficios y minimicen riesgos o costos operativos.
    
        p(data-aos="fade-left").mb-4 En este contexto, las herramientas de optimización ofrecen una solución flexible, precisa y poderosa para enfrentar los retos de análisis de datos y la toma de decisiones complejas.
    

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Algoritmos de optimización y su aplicación en la toma de decisiones empresariales


    p En un entorno empresarial cada vez más dinámico y complejo, los algoritmos de optimización juegan un papel clave. Estas herramientas permiten:

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4
        .bg-color-6.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Mejorar la eficiencia operativa
    
      .col-lg-4
        .bg-color-6.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Reducir costos
    
      .col-lg-4
        .bg-color-6.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Maximizar el rendimiento en distintas áreas de negocio

    p.mb-5 Según Hillier y Lieberman (2021), la optimización en business intelligence se basa en modelos matemáticos y técnicas computacionales para encontrar soluciones óptimas a problemas complejos.

    h2 Tipos de algoritmos de optimización

    p A continuación se presenta una tabla comparativa con los algoritmos más utilizados en el ámbito empresarial:

    .row.align-items-start.mb-5
      .col-lg-8
    
        AcordionA(tipo="b")#Acordion1
          .div(titulo="Programación Lineal (PL)")
            p Planificación de producción y distribución con variables lineales

          .div(titulo="Algoritmos Genéticos (AG)")
            p Optimización de rutas logísticas y asignación de recursos basada en evolución biológica

          .div(titulo="Redes Neuronales Artificiales (RNA)")
            p Predicción de tendencias y toma de decisiones estratégicas

          .div(titulo="Optimización por Colonia de Hormigas (OCH)")
            p Ruteo y planificación de tareas con múltiples variables

          .div(titulo="Algoritmos de Enjambre de Partículas (PSO)")
            p Optimización de diseños industriales y estrategias de mercado
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/6.png", alt="").mb-4.mb-lg-0
    

    h2 Aplicaciones prácticas en la toma de decisiones empresariales

    p Los algoritmos de optimización tienen un impacto significativo en la inteligencia de negocios, facilitando decisiones informadas y eficientes. Algunos casos representativos:


    .bg-full-width-2.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center
            
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/7.png', alt='')
    
          .col-lg-8
    
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app.bordes
                img(src='@/assets/curso/tema1/8.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Cadena de suministro
                p.text-center Amazon emplea programación lineal y aprendizaje automático para optimizar inventarios y distribución.
              .bg-color-white.p-4.h-100.shadow-app.bordes
                img(src='@/assets/curso/tema1/9.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Gestión de precios y promociones
                p.text-center Walmart ajusta precios en tiempo real según demanda y competencia con modelos de optimización.
              .bg-color-white.p-4.h-100.shadow-app.bordes
                img(src='@/assets/curso/tema1/10.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Producción
                p.text-center General Motors usa optimización combinatoria para reducir costos en fabricación.
              .bg-color-white.p-4.h-100.shadow-app.bordes
                img(src='@/assets/curso/tema1/11.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Marketing digital
                p.text-center Google Ads implementa machine learning para distribuir presupuestos publicitarios y segmentar audiencias.
              .bg-color-white.p-4.h-100.shadow-app.bordes
                img(src='@/assets/curso/tema1/12.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Sector financiero
                p.text-center JPMorgan aplica redes neuronales para predecir riesgos crediticios y maximizar retornos de inversión.


        h2.mb-4 Modelo general de aplicación de algoritmos de optimización

        p El desarrollo de una solución de optimización en inteligencia de negocios suele seguir estas fases:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-1.png")
            .col-lg-7.order-lg-1
              h4 Definición del problema
              p Identificación del objetivo principal, como maximizar beneficios o minimizar costos. Esta etapa guía todo el proceso de modelado.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-2.png")
            .col-lg-7.order-lg-1
              h4 Diseño del modelo matemático
              p Selección de variables, restricciones y formulación de la función objetivo que representa el problema a resolver.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-3.png")
            .col-lg-7.order-lg-1
              h4 Selección del algoritmo
              p Elección de la técnica de optimización más adecuada (PL, AG, PSO, etc.) según el tipo y complejidad del problema.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-4.png")
            .col-lg-7.order-lg-1
              h4 Implementación y prueba
              p Desarrollo y validación del modelo usando software especializado como Python, R o MATLAB.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-5.png")
            .col-lg-7.order-lg-1
              h4 Análisis de resultados
              p Evaluación del desempeño del modelo, análisis de resultados obtenidos y ajustes para mejorar la solución si es necesario.

    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/13.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 empresariales, aportando eficiencia, reducción de costos y mejora en la competitividad. Tal como se observa en diversos sectores —desde la manufactura hasta el marketing digital— estas herramientas son clave para enfrentar los desafíos actuales. A futuro, su integración con inteligencia artificial y big data ampliará aún más su impacto en la gestión empresarial.
    

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Análisis de datos en tiempo real para la optimización de procesos

    
    .bg-full-width-2.bg-fondo-3
      .px-4.px-md-5.py-4
   
        .row.mb-5
          .col-lg-4
            figure
              img(src="@/assets/curso/tema1/14.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-3.p-4(data-aos="fade-left").mb-4
              p.mb-0 El análisis de datos en tiempo real se ha consolidado como una estrategia fundamental en la optimización de procesos empresariales, ya que permite tomar decisiones con base en información actualizada y precisa. Según Hillier y Lieberman (2021), estas técnicas mejoran la eficiencia operativa y permiten a las empresas responder con agilidad a los cambios del mercado y la demanda.
        
            p(data-aos="fade-left").mb-4 Los beneficios clave del análisis en tiempo real son: 


        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/15.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Toma de decisiones instantánea
              p.mb-0.text-center Reacción rápida ante cambios en la producción, la demanda o el comportamiento del consumidor.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/16.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Optimización de recursos
              p.mb-0.text-center Distribución eficiente de insumos y personal, reduciendo desperdicios y mejorando la rentabilidad.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/17.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Reducción de errores
              p.mb-0.text-center Detección oportuna de anomalías antes de que generen impactos negativos.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/18.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Mayor competitividad
              p.mb-0.text-center Anticipación a tendencias del mercado y adaptación ágil a los cambios.
    
    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Walmart" :icon="require('@/assets/bullets/icon-tab-c-1.svg')")
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Walmart
            p Gestión de inventarios mediante sensores y <em>analytics</em> en tiempo real para evitar <b>desabastecimientos o sobrestock</b>.
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-1.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Toyota" :icon="require('@/assets/bullets/icon-tab-c-1.svg')")
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Toyota
            p Optimización de <b>líneas de ensamblaje</b> usando modelos de análisis continuo para reducir <b>tiempos muertos</b>.
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-2.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="BBVA" :icon="require('@/assets/bullets/icon-tab-c-1.svg')")
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 BBVA
            p Monitoreo en tiempo real para <b>prevenir fraudes</b> y ofrecer una <b>atención personalizada</b> al cliente.
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-3.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Facebook Ads" :icon="require('@/assets/bullets/icon-tab-c-1.svg')")
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Facebook Ads
            p Ajuste dinámico de <b>campañas publicitarias</b> según el <b>comportamiento en tiempo real</b> de los usuarios.
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-4.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="DHL" :icon="require('@/assets/bullets/icon-tab-c-1.svg')")
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 DHL
            p Mejora de <b>rutas de entrega</b> mediante análisis <b>geoespacial</b> y procesamiento de datos en tiempo real.
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-5.png', alt='')
    

    p Las tecnologías y modelos utilizados son: 


    .bg-full-width.bg-color-info
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/info1.png', alt='', style="max-width: 681px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="46%" y="65%" numero="1")
                h5 Machine Learning
                p Predicción de patrones y automatización de decisiones
    
              .bg-color-white.box-shadow.p-3(x="39%" y="42%" numero="2")
                h5 Big Data Analytics
                p Procesamiento eficiente de grandes volúmenes de datos
    
              .bg-color-white.box-shadow.p-3(x="68%" y="25%" numero="3")
                h5 Sistemas ERP
                p Integración de datos operativos en una única plataforma de gestión
    
              .bg-color-white.box-shadow.p-3(x="60%" y="61%" numero="4")
                h5 Internet of Things (IoT)
                p Recopilación continua de datos desde dispositivos conectados
        
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/19.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 El análisis en tiempo real potencia la #[strong eficiencia operativa] y la #[strong capacidad de adaptación], lo que se traduce en #[strong ventajas competitivas sostenibles].
    
    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Modelos de optimización en la gestión de la cadena de suministro


    p La #[strong cadena de suministro] es uno de los ejes estratégicos de la competitividad empresarial. La aplicación de modelos de optimización permite mejorar la #[strong rentabilidad], reducir costos logísticos y garantizar una operación #[strong ágil y eficiente]. Según Hillier y Lieberman (2021), su integración mejora el servicio al cliente y permite a las empresas responder con mayor precisión a las exigencias del mercado. Las principales áreas de optimización son:

    .bg-full-width.bg-fondo-4
      .px-4.px-md-5.py-4

        .row.align-items-start.mb-5
          .col-lg-8
        
            AcordionA(tipo="b")
              .div(titulo="Gestión de proveedores")
                p Evaluación y selección de proveedores óptimos para asegurar calidad y minimizar costos de adquisición.

              .div(titulo="Optimización de inventarios")
                p Aplicación de modelos como EOQ (Economic Order Quantity) y JIT (Just In Time) para minimizar almacenamiento y garantizar disponibilidad.
        
              .div(titulo="Distribución y transporte")
                p Uso de algoritmos de optimización de ruteo (Vehicle Routing Problem, VRP) para reducir tiempos y costos de entrega.
        
              .div(titulo="Carga y cross-docking")
                p Estrategias de tránsito directo de productos desde recepción hasta distribución, reduciendo tiempos de almacenamiento.
        
          .col-lg-4
            figure
              img(src="@/assets/curso/tema1/20.png", alt="").mb-4.mb-lg-0
        

        p Los ejemplos empresariales relevantes son: 


        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/21.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Amazon
                p.mb-0 Utiliza aprendizaje automático para predecir demanda y optimizar inventarios y rutas de entrega.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/22.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center FedEx
                p.mb-0 Emplea modelos VRP para maximizar la eficiencia en la logística de última milla.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/23.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Zara
                p.mb-0 Implementa el modelo JIT para minimizar inventario y responder rápidamente a cambios en las preferencias del consumidor.
        

    .bg-full-width.bg-color-4
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/24.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La optimización de la cadena de suministro no solo mejora la #[strong eficiencia operativa], sino que también fortalece la #[strong resiliencia] y la #[strong adaptabilidad]  ante escenarios inciertos.
    
    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
