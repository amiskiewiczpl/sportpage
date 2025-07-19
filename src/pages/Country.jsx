// src/pages/Country.jsx

import { useParams } from 'react-router-dom';
import countries from '../data/countries';

function findCountryById(id) {
  const normalized = id.toLowerCase();
  return Object.values(countries).find(country =>
    country.aliases.includes(normalized)
  );
}

function Country() {
  const { id } = useParams();
  const country = findCountryById(id);

  if (!country) {
    return <div>Nie znaleziono kraju: {id}</div>;
  }

  return (
    <div>
      <h1>{country.name}</h1>
      <p>🥇 Złote: {country.medals.gold}</p>
      <p>🥈 Srebrne: {country.medals.silver}</p>
      <p>🥉 Brązowe: {country.medals.bronze}</p>

      <h2>Medale na Letnich Igrzyskach</h2>
      <table>
        <thead>
          <tr>
            <th>Rok</th>
            <th>Złote</th>
            <th>Srebrne</th>
            <th>Brązowe</th>
          </tr>
        </thead>
        <tbody>
          {country.summerGames.map((game) => (
            <tr key={game.year}>
              <td>{game.year}</td>
              <td>{game.gold}</td>
              <td>{game.silver}</td>
              <td>{game.bronze}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Country;
