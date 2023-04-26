function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${getRandomNumber()}}`;
const options = {
    method: 'GET'
};
async function getBestPokemon(url) {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

function getColorType(type) {
    console.log(type);
    let color = '';
    switch (type) {
        case 'electric':
            color = 'bg-yellow-300';
            break;
        case 'grass':
            color = 'bg-green-500';
            break;
        case 'ground':
            color = 'bg-yellow-800';
            break;

        case 'poison':
            color = 'bg-indigo-600';
            break;

        case 'normal':
            color = 'bg-pink-500';
            break;

        case 'fighting':
            color = 'bg-red-800';
            break;
        default:
            color = 'bg-gray-50';
    }
    return color;
}

(async () => {
    try {
        const data = await getBestPokemon(url);
        let templateView = '';

        for (const element of data.results) {
            const detail = await getBestPokemon(element.url);
            console.log(detail);
            let types = detail.types;
            let abilities = detail.abilities;

            templateView += `
                <div class="${this.getColorType(types[0].type.name)} rounded-lg p-4">
                    <h1 class="text-white text-4xl font-bold text-center mb-4"> ${detail.name.charAt(0).toUpperCase() + detail.name.slice(1)}</h1>
                    <img src="${detail.sprites.front_default}"
                        alt="Charmander" class="w-1/2 mx-auto mb-4">
                    <div class="bg-white rounded-lg p-4">
                        <p class="text-gray-800 text-lg font-medium mb-2">Tipo:</p>
                        <ul class="list-disc ml-6 mb-4">
                            ${types.map((type) => `
                                <li>${type.type.name}</li>
                            `).join('')}
                        </ul>
                        <div class="flex justify-between">
                            <p class="text-gray-800 text-lg font-medium">Altura:</p>
                            <p class="text-gray-600">${detail.height} m</p>
                        </div>
                        <div class="flex justify-between">
                            <p class="text-gray-800 text-lg font-medium">Peso:</p>
                            <p class="text-gray-600">${detail.weight} kg</p>
                        </div>
                        <div class="flex justify-between">
                            <p class="text-gray-800 text-lg font-medium">Habilidades:</p>
                            <ul class="list-disc ml-6 mb-4 text-gray-600">
                            ${abilities.map((ability) => `
                                <li>${ability.ability.name}</li>
                            `).join('')}
                        </ul>
                        </div>
                    </div>
                </div>
            `;
        }

        document.getElementById("content").innerHTML = templateView;


    } catch (error) {
        console.error(error);
    }
})();