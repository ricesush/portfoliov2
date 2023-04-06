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
          <tr>
            <th scope='row'>4</th>
            <td>
              npm i{' '}
              <small className='text-secondary fst-italic'>
                **dependecies**
              </small>
            </td>
            <td>installing dependecies</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td></td>
            <td>
              under package.json, define "scripts" object and add "dev":
              "nodemon server.js" / "start": "nodemon server.js"
            </td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>echo >> server.js </td>
            <td>create server.js as your entrypointe</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>echo >> .env </td>
            <td>create .env file</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>touch .gitignore</td>
            <td>create .ignore file</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td></td>
            <td>
              under .env file, define the PORT and the String
              Connection/DB_DATABASE
            </td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td></td>
            <td>
              under .gitignore file, add the .env file to be ignored when
              pushing to repository
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
