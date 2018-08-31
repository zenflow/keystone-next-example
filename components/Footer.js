export default function Footer() {
  return (
    <footer>
      <span>&copy; {new Date().getFullYear()} Jennifer D Martins</span>
      <style jsx>{`
        footer {
          text-align: center;
          margin: 2em 0;
        }
        span {
          padding: 6px;
          opacity: 0.6;
          color: white;
          background: black;
          border-radius: 4px;
        }
      `}</style>
    </footer>
  )
}
