import React from 'react';

const Pokemon = ({ id, name, image }) => {
    return (
        <div className="pokemon">
            <h3>{name}</h3>
            <img src={image} alt={name} />
        </div>
    );
};

export default Pokemon;
