import axios from 'axios';

export async function getAllStarwarsPeople() {
  try {
    let people: any[] = [];

    // First page
    const firstPageResponse = await axios.get('https://swapi.co/api/people/');
    people = firstPageResponse.data.results;

    // Total count of people
    const count = firstPageResponse.data.count;

    // Exclude the first request
    const numberOfPagesLeft = Math.ceil((count - 1) / 10);
    let promises: Promise<any>[] = [];

    // Start at 2 as you already queried the first page
    for (let i = 2; i <= numberOfPagesLeft; i++) {
      promises.push(axios.get(`https://swapi.co/api/people?page=${i}`));
    }

    // Get the rest records - pages 2 through n.
    const responses = await Promise.all(promises);
    people = responses.reduce((acc, data) => [...acc, ...data.data.results], people);

    return people;
  } catch (error) {
    console.log('Properly handle your exception here:', error);
    throw error; // Propagate the error if needed
  }
};