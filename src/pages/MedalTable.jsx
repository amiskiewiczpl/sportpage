import { Link } from 'react-router-dom'

const countries = [
  { rank: 1, name: 'USA', code: 'USA', gold: 39, silver: 41, bronze: 33 },
  { rank: 2, name: 'Chiny', code: 'CHN', gold: 38, silver: 32, bronze: 18 },
  { rank: 3, name: 'Japonia', code: 'JPN', gold: 27, silver: 14, bronze: 17 },
  { rank: 4, name: 'Wielka Brytania', code: 'GBR', gold: 22, silver: 21, bronze: 22 },
  { rank: 5, name: 'Rosyjski Komitet Olimpijski', code: 'ROC', gold: 20, silver: 28, bronze: 23 },
  { rank: 6, name: 'Australia', code: 'AUS', gold: 17, silver: 7, bronze: 22 },
  { rank: 7, name: 'Holandia', code: 'NED', gold: 10, silver: 12, bronze: 14 },
  { rank: 8, name: 'Francja', code: 'FRA', gold: 10, silver: 12, bronze: 11 },
  { rank: 9, name: 'Polska', code: 'POL', gold: 8, silver: 6, bronze: 10 },
  { rank: 10, name: 'Włochy', code: 'ITA', gold: 10, silver: 10, bronze: 20 },
]

export default function MedalTable() {
  return (
    <div>
      <h2>🥇 Tabela medalowa – Letnie Igrzyska</h2>
      <table>
        <thead>
          <tr>
            <th>Miejsce</th>
            <th>Kraj</th>
            <th>🥇</th>
            <th>🥈</th>
            <th>🥉</th>
            <th>Razem</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr key={country.code}>
              <td>{country.rank}</td>
              <td>
                <Link to={`/country/${country.code}`}>{country.name}</Link>
              </td>
              <td>{country.gold}</td>
              <td>{country.silver}</td>
              <td>{country.bronze}</td>
              <td>{country.gold + country.silver + country.bronze}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
