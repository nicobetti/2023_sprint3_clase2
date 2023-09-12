
//importamos el componente Header
import Head from 'next/head'

//importamos el componente layout junto con la variable siteTitle
import Layout, { siteTitle } from '../components/layout'

//importamos el archivo con los estilos
import utilStyles from '../styles/utils.module.css'

//funcion principal
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Soy un fullstack developer todoterreno. Puedo trabajar tanto en el Front como en el Back. 
          Tengo conocimientos de diseño y accesibilidad, pero tambien de bases de dato e integración.
        </p>
        <p>
          (Sitio web parte de Fullstack Developer{' '}
          <a href="https://nextjs.org/">para aprender más</a>.)
        </p>
      </section>
    </Layout>
  )
}
