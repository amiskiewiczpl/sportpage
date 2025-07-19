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
  const kraj = findCountryById(id);

  if (!kraj) {
    return <div>Nie znaleziono kraju: {id}</div>;
  }

  const displayName = kraj.namePL || kraj.name;

  return (
    <div>
      <h1>
        {kraj.flagUrl && (
          <img
            src={kraj.flagUrl}
            alt={`Flaga ${displayName}`}
            style={{ width: '32px', height: '20px', marginRight: '10px', verticalAlign: 'middle' }}
          />
        )}
        {displayName}
      </h1>
      <p>🥇 Złote: {kraj.medals.gold}</p>
      <p>🥈 Srebrne: {kraj.medals.silver}</p>
      <p>🥉 Brązowe: {kraj.medals.bronze}</p>

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
          {kraj.summerGames.map((game) => (
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
