import { FC } from 'react';
import { ProductsInterface } from '../../data/products';

interface LargeProductListitemProps {
  products?: ProductsInterface;
}

const LargeProductListitem: FC<LargeProductListitemProps> = ({ products }) => {
  const { name, price, description, rating } = products ?? {};
  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h4>Description:</h4>
      <p>{description}</p>
      <p>Average Rating: {rating}</p>
      <p>=====</p>
    </>
  );
};

export default LargeProductListitem;
