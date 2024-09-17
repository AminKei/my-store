import { Button, Table } from "react-bootstrap";
import "./Cart.css";
const Cart = () => {
  return (
    <div>
      <div className="root-cart">
        <div>
          <h3>Your Items:</h3>
          <div className="item">
            <img
              src="https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/overtime-group-plp.png"
              alt=""
              width={130}
            />
            <h5>Product name</h5>
            <h4>price: $22</h4>
            <Button>+</Button>
            <h3> 2</h3>
            <Button>-</Button>
            <Button>Remove</Button>
          </div>
        </div>
        <div>
          <h3>Checkout:</h3>
          <div className="checkout">
            <Table bordered>
              <thead>
                <tr>
                  <th>total</th>
                  <th>$34.00</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Discount:</td>
                  <td>$12.00</td>
                </tr>
                <tr>
                  <td>Delivery:</td>
                  <td>$4</td>
                </tr>
                <tr>
                  <td>Total Payment:</td>
                  <td>$26.00</td>
                </tr>
              </tbody>
            </Table>
            <Button>Payment</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
