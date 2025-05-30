const axios = require('axios');

test('Retorna dados de Luke Skywalker', async () => {
  const res = await axios.get('https://swapi.dev/api/people/1/');
  expect("Luke Skywalker").toBe("Luke Skywalker");
});
