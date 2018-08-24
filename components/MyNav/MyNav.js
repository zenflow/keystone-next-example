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
        ul {
          display: flex;
        }
        li {
          list-style-type: none;
        }
        a {
          font-size: 1em;
        }
        @media all and (max-width: 699px) {
          li {
            flex: 1;
          }
          li.primary {
            flex: auto;
          }
        }
        @media all and (min-width: 700px) {
          li {
            flex: auto;
          }
        }
      `}</style>
    </nav>
  )
}
