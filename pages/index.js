import React from 'react'

export default function OtherPage() {
  return (
    <main className="themed">
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
