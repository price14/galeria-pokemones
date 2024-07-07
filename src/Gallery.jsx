import React from 'react';
import Pokemon from './Pokemon';
import pokemonData from './data';

const Gallery = () => {
    return (
        <div className="gallery">
            {pokemonData.map(pokemon => (
                <Pokemon key={pokemon.id} id={pokemon.id} name={pokemon.name} image={pokemon.image} />
            ))}
        </div>
    );
};

export default Gallery;
