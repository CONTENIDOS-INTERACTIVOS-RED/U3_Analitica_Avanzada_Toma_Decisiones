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

    p Según Hillier y Lieberman (2021), la optimización en business intelligence se basa en modelos matemáticos y técnicas computacionales para encontrar soluciones óptimas a problemas complejos.

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
