import fetch from 'node-fetch';  // Import fetch using ES module syntax
import fs from 'fs';             // fs module can still be imported using CommonJS

async function fetchData() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
        const data = await response.json();

        // Create a write stream to save the fetched data into a JSON file
        const writeStream = fs.createWriteStream('data.json');
        writeStream.write(JSON.stringify(data, null, 2));
        writeStream.end();

        console.log('Data written to data.json successfully!');
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();