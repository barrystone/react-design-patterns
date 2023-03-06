export interface PeopleInterface {
  name: string;
  age: number;
  hairColor: string;
  hobbies: Array<string>;
}

const people: Array<PeopleInterface> = [
  {
    name: 'Barry Stone',
    age: 30,
    hairColor: 'black',
    hobbies: ['coding', 'basketball', 'play music']
  },
  {
    name: 'Amy Ray',
    age: 15,
    hairColor: 'blown',
    hobbies: ['video game', 'dance']
  },
  {
    name: 'Jack Doe',
    age: 25,
    hairColor: 'blown',
    hobbies: ['baseball', 'social', 'party', 'chess']
  }
];

export default people;
