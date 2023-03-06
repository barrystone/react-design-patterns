import { FC } from 'react';

interface NumberredListProps {
  items: Array<object>;
  resourceName: string;
  itemComponent: FC;
}

const NumberredList = ({
  items,
  resourceName,
  itemComponent: ItemComponent
}: NumberredListProps) => {
  return (
    <>
      {items.map((item, idx) => (
        <>
          <h3>{idx + 1}</h3>
          <ItemComponent key={idx} {...{ [resourceName]: item }} />
        </>
      ))}
    </>
  );
};

export default NumberredList;
