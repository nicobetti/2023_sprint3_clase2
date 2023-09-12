//importamos componente Head
import Head from 'next/head'

//importamos componente Link
import Link from 'next/link'

//importamos componente Layout
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Primer Posteo</title>
      </Head>
      <h1>Primer Posteo</h1>
      <h2>
        <Link href="/">Regresar al sitio principal </Link>
      </h2>
    </Layout>
  )
}
