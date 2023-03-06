import { FC } from 'react';
import { PeopleInterface } from '../../data/people';

interface SmallPersonListItemProps {
  person?: PeopleInterface;
}

const LargePersonListItem: FC<SmallPersonListItemProps> = ({ person }) => {
  const { name, age, hairColor, hobbies } = person ?? {};
  return (
    <div>
      <h3>
        <span style={{ fontSize: '1rem', fontWeight: 'initial' }}>Name:</span>{' '}
        {name}
      </h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <p>Hobbies:</p>
      <ul>
        {hobbies?.map((hobby, idx) => (
          <li key={idx}>{hobby}</li>
        ))}
      </ul>
      <br />
    </div>
  );
};

export default LargePersonListItem;
