// pokemon.js - API for Pokemon operations
// This file can be used for fetching Pokemon data or managing Pokemon-related API calls

export async function fetchPokemon(name) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    if (!response.ok) {
      throw new Error(`Pokemon not found: ${name}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
    return null;
  }
}

export async function fetchPokemonByID(id) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) {
      throw new Error(`Pokemon not found: ${id}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
    return null;
  }
}
