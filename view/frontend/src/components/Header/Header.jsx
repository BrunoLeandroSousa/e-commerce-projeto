import React from 'react';
import { Headermenu, Menu} from './styles';
import Dinglogo from '../../assets/img/newding.png';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import SearchIcon from '@material-ui/icons/Search';
import ContactsIcon from '@material-ui/icons/Contacts';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


function Header({ cartSize, cart }){
  return (
      <>
        <Headermenu>
          <div className="headeruser">
            
            <Link to="/">
              <img src={Dinglogo} alt="logodindigo"/>
            </Link>
            <div className="search">
              <div className="input">
                <SearchIcon style={{color: 'grey', fontSize: '1.6rem'}} />
              </div>
              <input type="search"/>
              <div className="searchmessage">
                <button type="submit">BUSCAR</button>
              </div>
            </div>
          
            <div className="IconsMenu">
              <div>
                <ContactsIcon style={{color: 'white', fontSize: '2.6rem', marginRight: '1rem'}} />
                <p className="contacts">bruno.lendro2000@gmail.com
                </p>
              </div>
              <div>
                <WhatsAppIcon style={{color: 'white', fontSize: '2.6rem', marginRight: '1rem'}}/>
                <p className="contacts">15 99820-4926</p>
              </div>
              <div>
                <AccountBoxIcon style={{color: 'white', fontSize: '2.6rem', marginRight: '1rem'}}/>
                <p style={{color: 'white'}}>{cartSize}</p>
                <p style={{color: 'white'}}></p>
                <Link to="/checkout">
                  <ShoppingBasketIcon style={{color: 'white', fontSize: '3.6rem', marginRight: '10rem', marginTop: '-0.7rem'}} />
                </Link>
              </div>
            </div>
          </div>

          <Menu>
            <div className="Collections">
              <p>
                TODAS <br/>
                <strong>
                  COLEÇÕES
                </strong>
              </p>  
              <ArrowDropDownCircleIcon className="icon"/>
            </div>

            <a href="">
              WHISKY
            </a>
            <a href="">       
              VODKA
            </a>

            <a href="">
              CACHACINHA
            </a>

            <a href="">
              VINHOS
            </a>

            <a href="">
              TEQUILAS
            </a>

            <a href="">
              ESPECIARIAS DO DINDIGO
            </a>

            <a href="">
              KITS DE DINDIGO
            </a>
          </Menu>
        </Headermenu>
    </>
  );
}

export default connect( state => ({
  cartSize: state.cart.length,
  cart: state.cart
}))(Header);