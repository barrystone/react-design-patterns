import { FC } from 'react';
import { ProductsInterface } from '../../data/products';

interface SmallProductListitemProps {
  product?: ProductsInterface;
}

const SmallProductListItem: FC<SmallProductListitemProps> = ({ product }) => {
  const { name, price } = product ?? {};
  return (
    <h3>
      {name} - {price}
    </h3>
  );
};

export default SmallProductListItem;
