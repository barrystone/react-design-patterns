export interface usersInterface {
  id: string;
  name: string;
  age: number;
  hairColor: string;
  hobbies: Array<string>;
}

export interface ProductsInterface {
  id: string;
  name: string;
  price: string;
  description: string;
  rating: number;
}

const currentUser: usersInterface = {
  id: '1',
  name: 'Barry Stone',
  age: 30,
  hairColor: 'black',
  hobbies: ['coding', 'basketball', 'play music']
};

const users: Array<usersInterface> = [
  {
    id: '1',
    name: 'Barry Stone',
    age: 30,
    hairColor: 'black',
    hobbies: ['coding', 'basketball', 'play music']
  },
  {
    id: '2',
    name: 'Amy Ray',
    age: 15,
    hairColor: 'blown',
    hobbies: ['video game', 'dance']
  },
  {
    id: '3',
    name: 'Jack Doe',
    age: 25,
    hairColor: 'blown',
    hobbies: ['baseball', 'social', 'party', 'chess']
  }
];

const products: Array<ProductsInterface> = [
  {
    id: 'a',
    name: 'Keyboard',
    price: 'NT3790',
    description: 'This is the keyboard you always want to have.',
    rating: 4.9
  },
  {
    id: 'b',
    name: 'Mouse',
    price: 'NT200',
    description: 'Normal mouse. The cheapest on the market.',
    rating: 3
  },
  {
    id: 'c',
    name: 'Screen',
    price: 'NT4000',
    description: 'Is a big screen, but careful if you trying to moving it.',
    rating: 4.2
  }
];

export { currentUser, users, products };
