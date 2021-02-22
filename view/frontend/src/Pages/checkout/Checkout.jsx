import React, { useState, useEffect } from 'react';
import Reactotron from 'reactotron-react-js';
import { Checkout, ProductTable, CheckoutOptions, Delivery, Total, FinishOrder} from './styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { HiMinusCircle } from "react-icons/hi";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../utils/format';

function CheckoutPayment() {

  const [tamanhopinto, setTamanhopinto] = useState([]) 
  const checkout = document.getElementsByClassName(".checkout");
  if(checkout){
    let body = document.querySelector("body");
    body.style.backgroundImage = 'unset';
  }
  
  const itemsCart = useSelector(state=>state.cart.map(product=>({
    ...product,
    subtotal: product.Amount*product.Price
  })));
  
  let subtotal = 0;
  let total = 0
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  if(itemsCart.length>0){
    subtotal = itemsCart.map(item=>{
      return item.subtotal;
    });
    total = subtotal.reduce(reducer);
  }

  const dispatch = useDispatch();

  function removeFromCart(item){
    dispatch({
      type: '@cart/REMOVE_FROM_CART',
      id: item._id
    });
  }

  function increment(item){
    dispatch({
      type: '@cart/UPDATE_AMOUNT',
      id: item._id,
      amount: item.Amount+1
    });
  }

  function decrement(item){
    dispatch({
      type: '@cart/UPDATE_AMOUNT',
      id: item._id,
      amount: item.Amount-1,
      subtotal:item.Amount * item.Price
    });
  }

  return (
      <>
        <Checkout>
          <div>
            <ProductTable>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Entrega</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
              {itemsCart.map((item)=>(
                <tr key={item._id}>
                  <td className="products">
                    <img src={item.Pathimg} alt="produto imagem"/>
                    <p>{item.Name}</p>
                  </td> 
                  <td className="delivery">4 dias atras</td>
                  <td className="Prices">{formatPrice(item.Price)}</td>
                  <td className="qtd">
                    <HiMinusCircle size={26} style={{color: "grey", cursor: "pointer"}}
                      onClick={()=>{decrement(item)}}
                    />
                      <input type="number" readOnly value={item.Amount}>
                      </input>
                    <AddCircleIcon size={27} style={{color: "grey", cursor: "pointer"}}
                      onClick={()=>{increment(item)}}
                    />
                  </td>
                  <td className="Total">{formatPrice(item.subtotal)}</td>
                  <td className="Delete"><RiDeleteBack2Fill style={{color: "black"}} onClick={()=>removeFromCart(item)}/></td>
                </tr>
              ))}
              </tbody>
            </ProductTable>
          </div>

          <CheckoutOptions>
            <Delivery>
              <h3 className="deliveryTitle">Entrega</h3>
              <p className="optionsDelivery"><strong>Receber</strong> 2 itens em <span>18055-056</span></p> 
            </Delivery>
            <Total>
              <p className="addcupom">Adicionar cupom de desconto</p>
              <p className="subtotal">Subtotal <span>R$ 109,80</span> </p>
              <p className="entrega">Entrega  <span>R$ 13,08</span> </p>
              <p className="total">Total  {formatPrice(total)}<span></span> </p>
              <FinishOrder>
                <a href="">Escolher mais produtos</a>
                <Link to="/finish">
                  <button onClick={()=>{setTamanhopinto('2cm')}}>finalizar compra</button>
                </Link>
              </FinishOrder>
            </Total>
          </CheckoutOptions>
        </Checkout>
      </>
  );
}

export default (CheckoutPayment);