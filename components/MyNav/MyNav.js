import Link from 'next/link'
import React from 'react'
import { navItems } from './navItems'

export default function MyNav() {
  return (
    <nav>
      <ul>
        <li className="primary">
          <Link href="/">
            <img src="/static/logo.svg" alt="Jenfs" />
          </Link>
        </li>
        {navItems.map(({ title, path }) => (
          <li key={path}>
            <Link href={path}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        li {
          list-style-type: none;
          text-align: center;
          align-self: center;
        }
        a {
          font-size: 1.2em;
        }
        @media all and (max-width: 699px) {
          ul {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: 50px 50px;
          }
          li.primary {
            grid-row: 1 / span 2;
          }
        }
        @media all and (min-width: 700px) {
          ul {
            display: flex;
          }
          li {
            flex: 1 auto;
          }
        }
      `}</style>
    </nav>
  )
}
