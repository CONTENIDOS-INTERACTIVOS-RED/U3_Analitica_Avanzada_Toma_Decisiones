<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Construcción de estrategias de negocio basadas en analítica avanzada'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .bg-color-8.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") En la era digital, las estrategias empresariales exitosas dependen cada vez más de la #[strong analítica avanzada], entendida como el uso de técnicas estadísticas, algoritmos de machine learning e inteligencia artificial (IA) para anticiparse a las necesidades del mercado y optimizar decisiones. Según Davenport y Harris (2017), la analítica avanzada transforma datos en conocimiento estratégico, permitiendo a las empresas personalizar productos, prever tendencias y adaptarse con agilidad a los cambios del entorno.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/1.png', alt='')
      
  
      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Segmentación de clientes y personalización de productos mediante analítica avanzada

      p La #[strong segmentación de clientes] y la #[strong personalización de productos] son estrategias centrales para mejorar la experiencia del consumidor y aumentar la rentabilidad. Gracias al machine learning y al análisis predictivo, las organizaciones pueden descubrir patrones ocultos y generar ofertas ajustadas a las necesidades individuales. Los métodos de segmentación son:


      .bg-full-width-2.bg-fondo-5
        .px-4.px-md-5.py-4     


          .row.justify-content-start.align-items-stretch.mb-4
            .col-lg-4
              .bg-color-6.p-4(data-aos="fade-left").h-100
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema2/2.svg", style="max-width: 85px").mx-auto
                  .col-lg
                    h5.mb-2 Demográfica
                    p Basada en edad, género, ingresos, nivel educativo, etc.
          
            .col-lg-4
              .bg-color-6.p-4(data-aos="fade-left").h-100
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema2/3.svg", style="max-width: 85px").mx-auto
                  .col-lg
                    h5.mb-2 Psicográfica
                    p Centrada en estilos de vida, valores, intereses y actitudes
          
            .col-lg-4
              .bg-color-6.p-4(data-aos="fade-left").h-100
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema2/4.svg", style="max-width: 85px").mx-auto
                  .col-lg
                    h5.mb-2 Conductual
                    p Considera hábitos de compra, frecuencia, fidelidad y uso del producto


          .row.justify-content-start.align-items-stretch.mb-4
            .col-lg-4
              .bg-color-6.p-4(data-aos="fade-left").h-100
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema2/5.svg", style="max-width: 85px").mx-auto
                  .col-lg
                    h5.mb-2 Geográfica
                    p Determinada por la localización del cliente y su contexto regional o cultural
          
            .col-lg-4
              .bg-color-6.p-4(data-aos="fade-left").h-100
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema2/6.svg", style="max-width: 85px").mx-auto
                  .col-lg
                    h5.mb-2 Basada en IA
                    p Utiliza algoritmos de #[em machine learning] para detectar patrones no evidentes


          p Los casos empresariales son: 



          .row.justify-content-center.align-items-stretch
            .col-lg-3.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/7.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Amazon
                  p.mb-0 Recomendaciones personalizadas según historial de navegación y compras.
            .col-lg-3.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/8.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Netflix
                  p.mb-0 Sugerencias de contenido según comportamiento del usuario.
            .col-lg-3.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/9.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Spotify
                  p.mb-0 Generación de listas personalizadas mediante análisis de gustos musicales.
            .col-lg-3.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/10.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Nike
                  p.mb-0 Campañas dirigidas basadas en datos conductuales.


      .bg-full-width.bg-color-3.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/11.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La personalización impulsada por analítica avanzada mejora la #[strong retención de clientes] y optimiza el #[strong retorno sobre la inversión] en marketing.


      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Modelos predictivos para la identificación de oportunidades de mercado

      p Los #[strong modelos predictivos] permiten anticipar tendencias de consumo, cambios en la demanda y riesgos potenciales, facilitando decisiones estratégicas más precisas y oportunas. Según Davenport y Harris (2017), estos modelos se apoyan tanto en datos históricos como en datos en tiempo real. Los tipos de modelos predictivos son: 


      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/12.png", alt="").mb-4.mb-lg-0
        .col-lg-8

      
          AcordionA(tipo="b")
            .div(titulo="Regresión Lineal / Logística")
              p Predicción de relaciones entre variables (ventas, precios, etc.)
      
            .div(titulo="Árboles de decisión")
              p Clasificación de perfiles de clientes y predicción de preferencias
      
            .div(titulo="Redes Neuronales Artificiales")
              p Identificación de patrones complejos en grandes volúmenes de datos
      
            .div(titulo="Máquinas de Soporte Vectorial (SVM)")
              p Clasificación de tendencias y segmentación con alta precisión
      
      
      
      p Las aplicaciones empresariales son: 

      TabsC.color-acento-contenido.mb-5
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Zara" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Zara
              p Anticipa la demanda para evitar sobreproducción y ajustar el diseño de colecciones.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/tab-1.png', alt='')
      
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Amazon" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Amazon
              p Optimiza el inventario y la logística mediante modelos de predicción.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/tab-2.png', alt='')
      
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Citibank" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Citibank
              p Predice el desempeño energético de sus baterías.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/tab-3.png', alt='')
      
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Tesla" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Tesla
              p Predice el desempeño energético de sus baterías.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/tab-4.png', alt='')
      
        .tabs-content.border.px-4.p-md-5.py-3(titulo="IBM Watson" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 IBM Watson
              p Mejora diagnósticos médicos con análisis predictivo en salud.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/tab-5.png', alt='')
      

      p.mb-5 Los modelos predictivos permiten a las organizaciones #[strong minimizar riesgos], identificar oportunidades emergentes y mejorar la planificación estratégica.

      #t_2_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.3] Uso de la inteligencia artificial en la formulación de estrategias empresariales


      p En un entorno de negocios dinámico y competitivo, la inteligencia artificial se posiciona como una herramienta clave para transformar la manera en que las organizaciones diseñan y ejecutan sus estrategias. Gracias a su capacidad para analizar datos en gran escala, aprender de ellos y generar recomendaciones precisas, la IA impulsa la toma de decisiones más ágiles, informadas y alineadas con los objetivos corporativos.


      .bg-full-width.bg-fondo-6
        .px-4.px-md-5.py-4

          .row.justify-content-center.align-items-center
            
            .col-lg
              
              TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                texto="Inteligencia artificial y estrategia empresarial"
                tiempo
                :audio="require('../../assets/curso/podcast/podcast1.mp3')"
              )

            .col-lg-auto
              figure
                img(src="@/assets/curso/tema2/13.svg", data-aos="zoom-in", style="max-width: 600px").mx-auto
        
      .bg-full-width.bg-color-3
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/14.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La combinación de #[strong segmentación inteligente], #[strong modelos predictivos] y #[strong tecnologías de inteligencia artificial] representa una evolución radical en la formulación de estrategias empresariales. Al integrar estas herramientas, las organizaciones no solo optimizan sus operaciones, sino que también logran anticiparse al mercado, personalizar su oferta y construir ventajas competitivas sostenibles.
      



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
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
