import { Product } from '../../../../contexts/ProductsProvider';
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
