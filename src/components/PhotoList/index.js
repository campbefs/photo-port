import React, { useState } from 'react';
// import Modal from '../Modal';

import commercial_0 from '../../assets/small/commercial/0.jpg';
import commercial_1 from '../../assets/small/commercial/1.jpg';
import commercial_2 from '../../assets/small/commercial/2.jpg';
import commercial_3 from '../../assets/small/commercial/3.jpg';
import commercial_4 from '../../assets/small/commercial/4.jpg';

import food_0 from '../../assets/small/food/0.jpg';
import food_1 from '../../assets/small/food/1.jpg';
import food_2 from '../../assets/small/food/2.jpg';
import food_3 from '../../assets/small/food/3.jpg';
import food_4 from '../../assets/small/food/4.jpg';

import landscape_0 from '../../assets/small/landscape/0.jpg';
import landscape_1 from '../../assets/small/landscape/1.jpg';
import landscape_2 from '../../assets/small/landscape/2.jpg';
import landscape_3 from '../../assets/small/landscape/3.jpg';
import landscape_4 from '../../assets/small/landscape/4.jpg';

import portraits_0 from '../../assets/small/portraits/0.jpg';
import portraits_1 from '../../assets/small/portraits/1.jpg';
import portraits_2 from '../../assets/small/portraits/2.jpg';
import portraits_3 from '../../assets/small/portraits/3.jpg';

const album = {
  commercial_0,
  commercial_1,
  commercial_2,
  commercial_3,
  commercial_4,
  
  food_0,
  food_1,
  food_2,
  food_3,
  food_4,
  
  landscape_0,
  landscape_1,
  landscape_2,
  landscape_3,
  landscape_4,
  
  portraits_0,
  portraits_1,
  portraits_2,
  portraits_3
}


const PhotoList = ({ category }) => {

  const [photos] = useState([
    {
      name: 'Grocery aisle',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Grocery booth',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Building exterior',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Restaurant table',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Cafe interior',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Cat green eyes',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Green parrot',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Yellow macaw',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Pug smile',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Pancakes',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Burrito',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Scallop pasta',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Burger',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fruit bowl',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Green river',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Docks',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Panoramic village by sea',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Domestic landscape',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Park bench',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={album[`${category}_${i}`]}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;