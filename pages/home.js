import Head from 'next/head'

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>{`Home / Jenfs`}</title>
      </Head>
      <header className="themed">
        <h1>Hi</h1>
        <p>Sup</p>
      </header>
      <style jsx>{`
        header {
          max-width: 38em;
          margin: auto;
          padding: 0 13px;
        }
      `}</style>
    </div>
  )
}
