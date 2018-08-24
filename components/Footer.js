import React from 'react'

export default function Footer() {
  return (
    <footer>
      <span>&lt;3 Jenfs &amp; Matt</span>
      <style jsx>{`
        footer {
          text-align: center;
          padding: 8px;
        }
        span {
          padding: 6px;
          opacity: 0.6;
          color: white;
        }
      `}</style>
    </footer>
  )
}
