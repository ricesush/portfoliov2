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
      <h5>Starting the Serverside</h5>
      <div>Server Side Dependecies:</div>
      <ul>
        {dependecies.map((dependency) => {
          return <li key={dependency.id}>{dependency.tech}</li>;
        })}
      </ul>
      <p></p>
    </section>
  );
}
