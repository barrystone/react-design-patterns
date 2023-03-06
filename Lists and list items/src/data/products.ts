interface productsInterface {
  name: string;
  price: string;
  description: string;
  rating: number;
}

const products: Array<productsInterface> = [
  {
    name: 'Keyboard',
    price: 'NT3790',
    description: 'This is the keyboard you always want to have.',
    rating: 4.9
  },
  {
    name: 'Mouse',
    price: 'NT200',
    description: 'Normal mouse. The cheapest on the market.',
    rating: 3
  },
  {
    name: 'Screen',
    price: 'NT4000',
    description: 'Is a big screen, but careful if you trying to moving it.',
    rating: 4.2
  }
];

export default products;
