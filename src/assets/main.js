const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=100';
const options = {
    method: 'GET'
};

// fetch(url, options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

async function getBestPokemon(url) {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

(async () => {
    const data = await getBestPokemon(url);
    console.log(data);

    try {
        const data = await getBestPokemon(url);
        console.log(data);
    } catch () {

    }
})();