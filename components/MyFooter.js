import React from 'react'

export default function MyFooter() {
  return (
    <footer>
      <span>Made with &lt;3 by Jenfs and Fart-hero</span>
      <style jsx>{`
        footer {
          text-align: center;
          padding: 8px;
        }
        span {
          padding: 6px;
          border-radius: 4px;
          background: darkred;
          opacity: 0.6;
        }
      `}</style>
    </footer>
  )
}
