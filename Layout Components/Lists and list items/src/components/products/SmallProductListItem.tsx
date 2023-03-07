import { FC } from 'react';
import { ProductsInterface } from '../../data/products';

interface SmallProductListitemProps {
  products?: ProductsInterface;
}

const SmallProductListitem: FC<SmallProductListitemProps> = ({ products }) => {
  const { name, price } = products ?? {};
  return (
    <h3>
      {name} - {price}
    </h3>
  );
};

export default SmallProductListitem;
