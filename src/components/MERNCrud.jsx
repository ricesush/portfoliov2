export function MernCrud() {
  const dependecies = [
    { tech: 'express', id: 1 },
    { tech: 'mongoose', id: 2 },
    { tech: 'dotenv', id: 3 },
    { tech: 'nodemon', id: 4 },
    { tech: 'jsontoken', id: 5 },
    { tech: 'bcrypt', id: 6 },
  ];

  return (
    <section className='px-4'>
      <div className='fw-bold'>Server Side Dependecies:</div>
      <ul>
        {dependecies.map((dependency) => {
          return <li key={dependency.id}>{dependency.tech}</li>;
        })}
      </ul>
      <div className='fw-bold'>Setting up the Server</div>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Steps</th>
            <th scope='col'>Command</th>
            <th scope='col'>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>mkdir server</td>
            <td>creating 'server' directory/folder name</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>cd server</td>
            <td>accessing the server folder</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>npm init</td>
            <td>creating package.json file</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
