import { useParams } from 'react-router-dom';

const countryData = {
  poland: {
    name: 'Polska',
    totalMedals: {
      gold: 75,
      silver: 91,
      bronze: 140,
    },
    olympics: [
      { year: 2020, city: 'Tokio', gold: 4, silver: 5, bronze: 5 },
      { year: 2016, city: 'Rio de Janeiro', gold: 2, silver: 3, bronze: 6 },
      { year: 2012, city: 'Londyn', gold: 2, silver: 2, bronze: 6 },
      { year: 2008, city: 'Pekin', gold: 3, silver: 6, bronze: 1 },
      // Dodaj więcej jeśli chcesz
    ],
  },
};

export default function Country() {
  const { id } = useParams();
  const country = countryData[id];

  if (!country) {
    return <h2>Kraj nie został znaleziony.</h2>;
  }

  return (
    <div>
      <h1>{country.name}</h1>
      <h3>🥇 Medale ogółem (Letnie Igrzyska Olimpijskie):</h3>
      <ul>
        <li>🥇 Złote: {country.totalMedals.gold}</li>
        <li>🥈 Srebrne: {country.totalMedals.silver}</li>
        <li>🥉 Brązowe: {country.totalMedals.bronze}</li>
      </ul>

      <h3>📅 Historia medalowa:</h3>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Rok</th>
            <th>Miasto</th>
            <th>Złote</th>
            <th>Srebrne</th>
            <th>Brązowe</th>
          </tr>
        </thead>
        <tbody>
          {country.olympics.map((event) => (
            <tr key={event.year}>
              <td>{event.year}</td>
              <td>{event.city}</td>
              <td>{event.gold}</td>
              <td>{event.silver}</td>
              <td>{event.bronze}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
