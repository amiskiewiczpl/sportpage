import { Link } from 'react-router-dom'
import countries from '../data/countries';

export default function MedalTable() {
  const countryList = Object.values(countries);
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
  {countryList.map((country, index) => (
    <tr key={index}>
      <td>
        <a href={`#/country/${country.aliases[0]}`} style={{ textDecoration: 'none', color: 'black' }}>
          <img
            src={country.flagUrl}
            alt={`Flaga ${country.name}`}
            style={{ width: '24px', height: '16px', verticalAlign: 'middle', marginRight: '8px' }}
          />
          {country.name}
        </a>
      </td>
      <td>{country.medals.gold}</td>
      <td>{country.medals.silver}</td>
      <td>{country.medals.bronze}</td>
      <td>{country.medals.gold + country.medals.silver + country.medals.bronze}</td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
  )
}
