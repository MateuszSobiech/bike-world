import { useCartContext } from '../../../contexts/CartProvider';
import { products } from '../../../data/products';

export const Cart = () => {
  const { cartEntities } = useCartContext();

  return (
    <div>
      {cartEntities.map((entity) => {
        const product = products.find((product) => product.id === entity.productId)!;

        return (
          <div>
            Mam {product.name} w ilości {entity.amount}
            <br />
            Cena: {(product.price - product.saleAmount) * entity.amount} zł
          </div>
        );
      })}

      <button>Przejdz do płatności</button>
    </div>
  );
};
