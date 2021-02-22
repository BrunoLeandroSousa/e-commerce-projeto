import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, CheckoutFinish, DataPayment, FinishPayment} from './styles';
import Teste from '../../assets/img/Banners/teste.jpg';
import icon from '../../assets/img/creditIcon.png';
import iconcredit from '../../assets/img/iconcredit.png';
import iconboleto from '../../assets/img/iconboleto.png';
import iconmercado from '../../assets/img/iconmercado.png';
import { formatPrice } from '../../utils/format';
import api from '../../services/api';

function Finish() {
  const checkout = document.getElementsByClassName(".checkout");
  if(checkout){
    let body = document.querySelector("body");
    body.style.backgroundImage = 'unset';
  }

  const [creditType, setCreditType] = useState();
  const [owner, setOwner] = useState();
  const [numbercredit, setNumberCreditcard] = useState();
  const [cvv, setCvv] = useState();
  const [installments, setInstallments] = useState(1);
  const [cpf, setCpf] = useState();
  const [validade, setValidade] = useState();

  const itemsCart = useSelector(state=>state.cart.map(product=>({
    ...product,
    subtotal: product.Amount*product.Price
  })));
  
  let subtotal = 0;
  let total = 0
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const products = itemsCart.map(product=>{
    return product._id  
  })

  const qtd = itemsCart.map(product=>{
    return product.Amount;
  })

  const body = {
    Products: products,
    Qtd: qtd,
    Owner: owner,
    CashPayment: false,
    Boleto: "teste",
    NumberCreditCard: numbercredit,
    typeCard: creditType,
    Cvv: cvv,
    QtdParcelas: installments,
    cpf: cpf,
    validade: validade
  }
  

  function handleSubmit(){
    api.post('createorder', body).then(res=>console.log(res.data))
  }

  if(itemsCart.length>0){
    subtotal = itemsCart.map(item=>{
      return item.subtotal;
    });
    total = subtotal.reduce(reducer);
  }

  const chooseCardType = (e) => {
    setCreditType(e.target.value);
  }

  const inputOwner = (e)=>{
    setOwner(e.target.value);
  }

  const inputCreditCard = (e)=>{
    setNumberCreditcard(e.target.value);
  }

  const chooseInstallments = (e) => {
    setInstallments(e.target.value);
  }

  const inputCpf = (e)=>{
    setCpf(e.target.value);
  }

  const inputCvv = (e)=>{
    setCvv(e.target.value);
  }

  const inputValidade = (e)=>{
    setValidade(e.target.value);
  }

  return <>
    <Container>
      <h1>Finalizar compra</h1>
      <CheckoutFinish>
        <DataPayment>
          <div className="personalData">
            <div className="personalInfo">
              <h2>Dados pessoais</h2>
              <p>Bruno.vieira17@fatec.sp.gov.br</p>
              <p>Bruno Leandro (13)1313-1313</p>
            </div>
            <div className="Delivery">
              <h2>Entrega</h2>
              <p>Rua Alameda dos joão de barro n90</p>
              <p>bairro pitangueiras-guarujá-sp</p>
              <p>12040-043</p>
              <p>Em até 6 dias úteis</p>
              <h3>Alterar opções de entrega</h3>
            </div>
          </div>



          <div className="paymentInfo">
            <h2> <img src={icon} alt=""/> Pagamento</h2>
            <div className="checkout-finish">
              <div className="payment-method">
                <p>Cartão de crédito <img src={iconcredit} alt=""/></p>
                <p>MercadoPago <img src={iconboleto} alt=""/></p>
                <p>Boleto bancário<img src={iconmercado} alt=""/></p>
              </div>
              <div className="info-payment-finish">
                <p>Numero do cartão</p>
                <input type="text" onChange={(e)=>inputCreditCard(e)}/>
                <div className="creditFlags">
                  <div>
                    visa
                    <input type="radio" value="visa" name="typecard" onClick={e=>chooseCardType(e)}/>
                    <img src="" alt=""/>
                  </div>
                  <div>
                    master card
                    <input type="radio" value="mastercard"name="typecard" onClick={e=>chooseCardType(e)}/>
                    <img src="" alt=""/>
                  </div>
                  <div>
                    elo
                    <input type="radio" value="elo"name="typecard" onClick={e=>chooseCardType(e)}/>
                    <img src="" alt=""/>
                  </div>
                  <div>
                    american express
                    <input type="radio" value="amex" name="typecard" onClick={e=>chooseCardType(e)}/>
                    <img src="" alt=""/>
                  </div>
                </div>
                <div className="installments">
                  <select name="" id="installments" value={ installments } onChange={e=>chooseInstallments(e)}>
                    <option value="1">
                       1 parcela
                    </option>
                    <option value="2">
                       2 parcela
                    </option>
                    <option value="3">
                       3 parcela
                    </option>
                    <option value="4">
                       4 parcela
                    </option>
                    <option value="5">
                       5 parcela
                    </option>
                    <option value="6">
                       6 parcela
                    </option>
                    <option value="7">
                       7 parcela
                    </option>
                    <option value="8">
                       8 parcela
                    </option>
                    <option value="9">
                       9 parcela
                    </option>
                    <option value="10">
                       10 parcela
                    </option>
                  </select>
                </div>
                <p>Nome impresso no cartão</p>
                <input type="text" onChange={(e)=>inputOwner(e)}/>
                <div className="validate">
                  <p>Validade</p>
                  <input type="text" onChange={(e)=>inputValidade(e)}/>
                </div>
                <div className="securityCode">
                  <p>Código de segurança</p>
                  <input type="text" onChange={(e)=>inputCvv(e)}/>
                </div>
                <p className="cpf">CPF do titular</p>
                <input type="text" className="inputcpf" onChange={(e)=>inputCpf(e)} />
              </div>
            </div>
          </div>
        </DataPayment>



        <FinishPayment>
          <h2>Resumo do pedido</h2>
          {itemsCart.map(product=>(
            <div className="products-cart" key={product._id}>
              <img src={product.Pathimg} alt=""/> 
              <div>
                <p>
                  {product.Name}
                </p>
                <p>
                  {formatPrice(product.subtotal)}
                </p>
              </div>
            </div>
          ))}
          <p>voltar para o carrinho</p>
          <p>Total <span>{formatPrice(total)}</span></p>
          <button onClick={()=>{handleSubmit()}}>Finalizar compra</button>
          {/* <button onClick={()=>console.log(products)}>teste</button> */}
        </FinishPayment>
      </CheckoutFinish>
    </Container>
  </>;
}

export default Finish;