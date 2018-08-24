import Link from 'next/link'

export default function MyNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/other">
            <a>Other</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
