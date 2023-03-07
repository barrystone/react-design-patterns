import { FC } from 'react';

interface RegularListProps {
  items: Array<object>;
  resourceName: string;
  itemComponent: FC;
}

const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent
}: RegularListProps) => {
  return (
    <>
      {items.map((item, idx) => (
        <ItemComponent key={idx} {...{ [resourceName]: item }} />
      ))}
    </>
  );
};

export default RegularList;
