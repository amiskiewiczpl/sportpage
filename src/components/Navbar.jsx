import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex gap-4">
      <Link to="/">🏠 Strona Główna</Link>
      <Link to="/medals">🥇 Tabela medalowa</Link>
      <Link to="/ranking">📈 Ranking formy</Link>
      <Link to="/hopes">🌟 Nadzieje olimpijskie</Link>
      <Link to="/history">📜 Historia</Link>
    </nav>
  )
}
