import Head from 'next/head'

export default function HomePage() {
  return (
    <main className="themed">
      <Head>
        <title>{`Home / Jenfs`}</title>
      </Head>
      <h1>Hi</h1>
      <p>Sup</p>
      <style jsx>{`
        main {
          max-width: 38em;
          margin: auto;
          padding: 0 13px;
        }
      `}</style>
    </main>
  )
}
