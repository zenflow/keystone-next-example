import Link from 'next/link'
import React from 'react'

const navItems = [
  ['Home', '/'],
  ['Pinturas', '/pinturas'],
  ['Fotografias', '/fotografias'],
  ['Desenhos', '/desenhos'],
  ['Curriculo', '/curriculo'],
  ['Contato', '/contato'],
]

export default function Nav() {
  return (
    <nav>
      <div className="primary">
        <Link href="/">
          <img src="/static/logo.svg" alt="Jenfs Logo" />
        </Link>
      </div>
      {navItems.map(([title, path]) => (
        <div key={path}>
          <Link href={path}>
            <a>{title}</a>
          </Link>
        </div>
      ))}
      <style jsx>{`
        nav {
          margin: 10px;
          font-size: 24px;
        }
        nav > div {
          text-align: center;
          align-self: center;
        }
        @media all and (min-width: 850px) {
          nav {
            display: flex;
          }
          nav > div {
            flex: auto;
          }
        }
        @media all and (max-width: 849px) and (min-width: 550px) {
          nav {
            display: grid;
            grid-template-columns: 3fr 2fr 2fr 2fr;
            grid-template-rows: 50px 50px;
          }
          nav > div.primary {
            grid-row: 1 / span 2;
          }
        }
        @media all and (max-width: 549px) {
          nav {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 50px 50px 50px;
          }
          nav > div.primary {
            grid-column: 1 / span 3;
          }
        }
      `}</style>
    </nav>
  )
}