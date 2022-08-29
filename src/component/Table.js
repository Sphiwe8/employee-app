import '../css/search.css'

function Table({ }) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
        </tr>
        {info.map((item) => (
          <tr key={item.id}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
  
  export default Table;