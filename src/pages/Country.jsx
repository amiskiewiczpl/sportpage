import { useParams } from 'react-router-dom';

function Country() {
  const { id } = useParams();

  if (id.toLowerCase() !== 'poland') {
    return <div>Nie znaleziono kraju: {id}</div>;
  }

  return (
    <div>
      <h1>Polska</h1>
      <p>🥇 Złote: 75</p>
      <p>🥈 Srebrne: 91</p>
      <p>🥉 Brązowe: 140</p>

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
          <tr><td>2000</td><td>6</td><td>5</td><td>3</td></tr>
          <tr><td>2004</td><td>3</td><td>2</td><td>5</td></tr>
          <tr><td>2008</td><td>3</td><td>6</td><td>1</td></tr>
          <tr><td>2012</td><td>2</td><td>2</td><td>6</td></tr>
          <tr><td>2016</td><td>2</td><td>3</td><td>6</td></tr>
          <tr><td>2020</td><td>4</td><td>5</td><td>5</td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default Country;
