import { useParams } from 'react-router-dom'

export default function Country() {
  const { code } = useParams()

  const countryData = {
    POL: {
      name: 'Polska',
      gold: 8,
      silver: 6,
      bronze: 10,
      total: 24,
      rank: 9,
    },
    // Możesz dodać kolejne kraje tutaj
  }

  const country = countryData[code.toUpperCase()]

  if (!country) return <h2>Nie znaleziono kraju</h2>

  return (
    <div>
      <h2>{country.name}</h2>
      <p>Miejsce w rankingu: {country.rank}</p>
      <ul>
        <li>🥇 Złote: {country.gold}</li>
        <li>🥈 Srebrne: {country.silver}</li>
        <li>🥉 Brązowe: {country.bronze}</li>
        <li>🏅 Razem: {country.total}</li>
      </ul>
    </div>
  )
}
