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
<table style={{ borderCollapse: 'collapse', width: '100%', textAlign: 'center', marginTop: '10px' }}>
  <thead>
    <tr>
      <th style={{ border: '1px solid #ccc', padding: '8px' }}>Rok</th>
      <th style={{ border: '1px solid #ccc', padding: '8px' }}>Miasto</th>
      <th style={{ border: '1px solid #ccc', padding: '8px' }}>Złote 🥇</th>
      <th style={{ border: '1px solid #ccc', padding: '8px' }}>Srebrne 🥈</th>
      <th style={{ border: '1px solid #ccc', padding: '8px' }}>Brązowe 🥉</th>
      <th style={{ border: '1px solid #ccc', padding: '8px' }}>Razem</th>
    </tr>
  </thead>
  <tbody>
    {kraj.summerGames
      .filter(game => game.gold + game.silver + game.bronze > 0)
      .map((game) => (
        <tr key={game.year}>
          <td style={{ border: '1px solid #ccc', padding: '8px' }}>{game.year}</td>
          <td style={{ border: '1px solid #ccc', padding: '8px' }}>{game.city || '-'}</td>
          <td style={{ border: '1px solid #ccc', padding: '8px' }}>{game.gold}</td>
          <td style={{ border: '1px solid #ccc', padding: '8px' }}>{game.silver}</td>
          <td style={{ border: '1px solid #ccc', padding: '8px' }}>{game.bronze}</td>
          <td style={{ border: '1px solid #ccc', padding: '8px' }}>
            {game.gold + game.silver + game.bronze}
          </td>
        </tr>
      ))}
  </tbody>
</table>
    </div>
  );
}

export default Country;
