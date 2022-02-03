const { Shoe } = require('../models');

// Types of shoes 
const shoedata = [
  {
    name: 'AIR JORDAN 1 RETRO HIGH OG BRED PATENT',
    brand: 'JORDAN',
    category: 'LIFESTYLE',
    store_id: 1,
    filename: '01-blossoming-apricot.jpg',
    price:'$250',
  },
  {
    name: 'Cosmos Flowers',
    brand: 'WStudio',
    exhibition_date: 'May 05, 2017',
    shoe_id: 1,
    filename: '02-cosmos-flowers.jpg',
    price: 'Pink cosmos flowers against a blue sky.',
  },
  {
    name: 'Sand + Sea = Summer',
    brand: 'S_Photo',
    exhibition_date: 'June 10, 2019',
    shoe_id: 2,
    filename: '03-sand-sea-summer.jpg',
    price: 'Sandy beach with the blue sea and sky in the background.',
  },
  {
    name: 'Beach Chairs',
    brand: 'icemanphotos',
    exhibition_date: 'July 4, 2020',
    shoe_id: 2,
    filename: '04-beach-chairs.jpg',
    price: 'Two beach chairs under a beach umbrella on the beach.',
  },
  {
    name: 'Beach Sunrise',
    brand: 'VRstudio',
    exhibition_date: 'August 14, 2016',
    shoe_id: 2,
    filename: '05-beach-sunrise.jpg',
    price: 'Sun setting in the horizon with waves lapping the shore.',
  },
  {
    name: 'Fall Colors',
    brand: 'DrivingJack',
    exhibition_date: 'October 15, 2018',
    shoe_id: 3,
    filename: '06-fall-colors.jpg',
    price:
      'Trees with red, orange, yellow leaves reflected on a still lake.',
  },
  {
    name: 'Autumn Mountains',
    brand: 'Vitalii_Mamchuk',
    exhibition_date: 'November 3, 2016',
    shoe_id: 3,
    filename: '07-autumn-mountains.jpg',
    price:
      'Mountains with red and yellow leaves against a background of hazy rolling hills.',
  },
  {
    name: 'Frozen River',
    brand: 'Vlad Sokolovsky',
    exhibition_date: 'December 24, 2020',
    shoe_id: 4,
    filename: '08-frozen-river.jpg',
    price:
      'Trees with white frozen branches reflected on a frozen river against a light pink sky.',
  },
  {
    name: 'Winter Home',
    brand: 'Smit',
    exhibition_date: 'January 20, 2018',
    shoe_id: 4,
    filename: '09-winter-home.jpg',
    price:
      'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
  },
];

const seedShoes = () => Shoe.bulkCreate(paintingdata);

module.exports = seedPaintings;
