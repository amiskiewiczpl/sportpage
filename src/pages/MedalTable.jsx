import { Link } from 'react-router-dom'
import countries from '../data/countries';

export default function MedalTable() {
  const countryList = Object.values(countries);
  return (
    <div>
      <h2>🥇 Tabela medalowa – Letnie Igrzyska</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%', textAlign: 'center' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Miejsce</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Złote 🥇</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Srebrne 🥈</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Brązowe 🥉</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Razem</th>
          </tr>
        </thead>
        <tbody>
  {countryList.map((country, index) => (
    <tr key={index}>
      <td style={{ border: '1px solid #ccc', padding: '8px' }}>
        <a href={`#/country/${country.aliases[0]}`} style={{ textDecoration: 'none', color: 'black' }}>
          <img
            src={country.flagUrl}
            alt={`Flaga ${country.name}`}
            style={{
              width: '24px',
             height: '16px',
            objectFit: 'cover',
            display: 'inline-block',
           marginRight: '8px',
           verticalAlign: 'middle'
  }}
/>
          {country.name}
        </a>
      </td>
      <td style={{ border: '1px solid #ccc', padding: '8px' }}>{country.medals.gold}</td>
      <td style={{ border: '1px solid #ccc', padding: '8px' }}>{country.medals.silver}</td>
      <td style={{ border: '1px solid #ccc', padding: '8px' }}>{country.medals.bronze}</td>
      <td style={{ border: '1px solid #ccc', padding: '8px' }}>{country.medals.gold + country.medals.silver + country.medals.bronze}</td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
  )
}
