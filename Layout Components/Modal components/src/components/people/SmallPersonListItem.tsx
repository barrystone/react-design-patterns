import { PeopleInterface } from '../../data/people';

export interface SmallPersonListitemProps {
  person?: PeopleInterface;
}

const SmallPersonListitem = ({ person }: SmallPersonListitemProps) => {
  const { name, age } = person ?? {};
  return (
    <div>
      <p>
        Name: {name}, Age: {age} years
      </p>
    </div>
  );
};

export default SmallPersonListitem;
