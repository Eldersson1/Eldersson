import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const products = [
  { id: 1, name: 'Product 1', price: 19.99 },
  { id: 2, name: 'Product 2', price: 29.99 },
  { id: 3, name: 'Product 3', price: 39.99 }
];

export default function Store() {
  const [cart, setCart] = useState([]);
  const [confirmation, setConfirmation] = useState(null);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const checkoutCard = async () => {
    setConfirmation('Payment successful with Card. Thank you for your purchase!');
  };

  const checkoutPayPal = async () => {
    setConfirmation('Payment successful with PayPal. Thank you for your purchase!');
  };

  return (
    <div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-3">
      {!confirmation ? (
        <>
          {products.map((product) => (
            <Card key={product.id} className="p-4">
              <CardContent>
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p>${product.price}</p>
                <Button onClick={() => addToCart(product)}>Add to Cart</Button>
              </CardContent>
            </Card>
          ))}

          <div className="col-span-1 md:col-span-3 mt-4">
            <h2 className="text-2xl font-bold">Cart</h2>
            {cart.length > 0 ? (
              <>
                <ul className="list-disc list-inside">
                  {cart.map((item, index) => (
                    <li key={index}>{item.name} - ${item.price}</li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <Button onClick={checkoutCard}>Checkout with Card</Button>
                  <Button onClick={checkoutPayPal}>Checkout with PayPal</Button>
                </div>
              </>
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
        </>
      ) : (
        <div className="col-span-1 md:col-span-3 text-center">
          <h2>{confirmation}</h2>
          <Button onClick={() => { setCart([]); setConfirmation(null); }}>Continue Shopping</Button>
        </div>
      )}
    </div>
  );
}
