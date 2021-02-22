import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import { Bannerbox, Topsellers, Topsellers2, TopsellersP } from './styles';
import Celebration from '../../assets/img/Banners/banner1.png';
import Redlabel from '../../assets/img/Banners/red2.png';
import Goldlabel from '../../assets/img/Banners/gold2.png';
import Bluelabel from '../../assets/img/Banners/blue2.png';
import Blacklabel from '../../assets/img/Banners/black2.png';
import Tequila from '../../assets/img/Banners/tequila.jpg';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../utils/format';

function Home() {

  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(()=>{
    api.get('listproduct').then(response =>{
      setProducts(response.data);
    })
  },[products]);

  function handleAddProduct(product){
    dispatch({
      type: '@cart/ADD_TO_CART',
      product,
    }); 
  };

  return (
    <>
      <Bannerbox>
        <img src={Celebration} alt=""/>
      </Bannerbox>
      <Topsellers>
        <div className="walker">
          <div className="whisk">
            <img src={Redlabel} alt=""/>
          </div>
          <div className="whisk">
            <img src={Goldlabel} alt=""/>
          </div>
          <div className="whisk">
            <img src={Bluelabel} alt=""/>
          </div>
          <div className="whisk">
            <img src={Blacklabel} alt=""/>
          </div>
        </div>
        <a href="http://www.freepik.com">Designed by kjpargeter / Freepik</a>
        <a href='https://www.freepik.com/vectors/wave'>Wave vector created by brgfx - www.freepik.com</a>
        <a href="https://www.freepik.com/vectors/abstract">Abstract vector created by rawpixel.com - www.freepik.com</a>
      </Topsellers>

      <TopsellersP> <p>MAIS VENDIDOS</p> </TopsellersP>

      <Topsellers2>
        {products.map(product=>(
          <div className="product" key={product._id}>
            <img src={product.Pathimg} alt=""/>
              <div>
                <p id="name">{product.Name}</p>
                <p id="type">{product.Typedrink}</p>
                <p id="category">{product.Category}</p>
                <p id="price">{formatPrice(product.Price)}</p>
              </div>  
            <button type="button" onClick={()=> handleAddProduct(product)}> <ShoppingBasketIcon/> COMPRAR</button>
          </div>
        ))}
      </Topsellers2>
    </>
  );
}

export default (Home);