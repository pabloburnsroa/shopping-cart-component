import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { formatCurrency } from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';

export type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    removeFromCart,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          <span>{name}</span>
          <span>{formatCurrency(price)}</span>
        </Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Card.Text>
        <div>
          {quantity === 0 ? (
            <Button
              variant="outline-primary"
              className="w-100"
              onClick={() => increaseCartQuantity(id)}
            >
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: '.5rem' }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: '.5rem' }}
              >
                <Button size="sm" onClick={() => decreaseCartQuantity(id)}>
                  -
                </Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button size="sm" onClick={() => increaseCartQuantity(id)}>
                  +
                </Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div>

        {/* <Button variant="outline-primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}
