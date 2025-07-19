import { Link } from 'react-router-dom'
import countries from '../data/countries';
import { useState } from 'react';

export default function MedalTable() {
  const [sortConfig, setSortConfig] = useState({ key: 'gold', direction: 'desc' });

const handleSort = (key) => {
  setSortConfig((prev) => ({
    key,
    direction: prev.key === key && prev.direction === 'desc' ? 'asc' : 'desc',
  }));
};

const sortedCountries = [...Object.values(countries)].sort((a, b) => {
  const getValue = (country) => {
  if (sortConfig.key === 'total') {
    return country.medals.gold + country.medals.silver + country.medals.bronze;
  } else if (sortConfig.key === 'name') {
    return country.name.toLowerCase();
  } else {
    return country.medals[sortConfig.key];
  }
};
  const valA = getValue(a);
  const valB = getValue(b);

  if (typeof valA === 'string' && typeof valB === 'string') {
  return sortConfig.direction === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
}
return sortConfig.direction === 'asc' ? valA - valB : valB - valA;

});

  return (
    <div>
      <h2>🥇 Tabela medalowa – Letnie Igrzyska</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%', textAlign: 'center' }}>
        <thead>
  <tr>
    <th style={{ cursor: 'pointer' }} onClick={() => handleSort('name')}>Kraj 🌍</th>
    <th style={{ cursor: 'pointer' }} onClick={() => handleSort('gold')}>Złote 🥇</th>
    <th style={{ cursor: 'pointer' }} onClick={() => handleSort('silver')}>Srebrne 🥈</th>
    <th style={{ cursor: 'pointer' }} onClick={() => handleSort('bronze')}>Brązowe 🥉</th>
    <th style={{ cursor: 'pointer' }} onClick={() => handleSort('total')}>Razem</th>
  </tr>
</thead>
        <tbody>
  {sortedCountries.map((country, index) => (
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
