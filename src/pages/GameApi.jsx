export const GameApi = () => {
  const PokeData = async () => {
    /*fetching data from Pokemon API
you'll need async to invoke await keyword
Functions running in parallel with other functions are called asynchronous
Async functions return a promise*/

    try {
      /*declaring url variable with the endpoint as it's value
    await will wait for the settlement from fetch(url) which can be either fulfilled or rejected
    converting the res data to json using json()
    both fetch and json returns a promise and needs await keyword*/
      const endpoint = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1500';
      const response = await fetch(endpoint);
      const data = await response.json();
      return data;
    } catch (err) {
      // will handle rejection or any error while fetching the data from the endpoint
      console.error(err);
    }
  };
  //invoking the function. Since PokeData() is an async function and returns a promise, we need to use .then to get the actual json response
  //passing the data as an argument to then()
  PokeData();
  return (
    <section className='text-center'>
      <div>Pokemon Names</div>
      <div id='pokemonContent'></div>
    </section>
  );
};
