import { Product } from '../../../../data/products';
import { Bike } from '../Bike/Bike';

interface Props {
  filtredProducts: Product[];
}

export const BikesList = ({ filtredProducts }: Props) => {
  return (
    <>
      {filtredProducts.map((product) => (
        <Bike key={product.id} product={product} />
      ))}
    </>
  );
};
