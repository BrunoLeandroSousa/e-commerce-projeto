import React, { useEffect, useState } from 'react';

import { Container , Listagem } from './styles';

import api from '../../services/api';

function Orders() {
  const [ orders , setOrders ] = useState([]);
  const [ editOrder, setOrderEdit ] = useState(false);
  
  //fields to update
  const [ owner, setOwner ] = useState();
  const [ creditNumber, setCreditNumber ] = useState();
  const [ total, setTotal ] = useState();
  
  const body = {
    Owner: owner,
    NumberCreditCard: creditNumber,
    Total: parseInt(total)
  }

  useEffect(()=>{
    api.get('listorder').then(response=>{
        setOrders(response.data);
    })
  },[orders]);

  const inputOwner = (e)=>{
    setOwner(e.target.value);
  }

  const inputCreditNumber = (e)=>{
    setCreditNumber(e.target.value);
  }

  const inputTotal = (e)=>{
    setTotal(e.target.value);
  }

  function updateOrder (id){
    api.put(`/updateorder/${id}`, body).then(res=>console.log(res.data));
    console.log(id);
    console.log(body);
  }

  function deleteOrder (id){
    api.delete(`deleteorder/${id}`).then(res=>console.log(res.data));
  }
  
  function list(order){
    if(editOrder===order._id){
      return(
        <>
          <div>
            <p>Owner</p>
            <input type="text" onChange={(e)=>inputOwner(e)}/>
          </div>
          <div>
            <p>CreditNumber</p>
            <input type="text" onChange={(e)=>inputCreditNumber(e)}/>
          </div>
          <div>
            <p>Total</p>
            <input type="text" onChange={(e)=>inputTotal(e)}/>
          </div>
        </>
      )
    }

    else{
      return(
        <>
          <p>Id:<span>{order._id}</span></p>
          <p>Owner:<span>{order.Owner}</span></p>
          <p>CreditNumber:<span>{order.NumberCreditCard}</span></p>
          <p>Total:<span>{order.Total}</span></p>
        </>
      )
    }  
  }

  return (
    <>
      <Container>
          <Listagem>
              {orders.map((order)=>(
                <li key={order._id}>
                  {list(order)}
                  <button className="excluir" onClick={()=>deleteOrder(order._id)}>EXCLUIR</button>
                  <button className="editar" onClick={()=>{
                    setOrderEdit(order._id);
                    setOwner('');
                    setCreditNumber('');
                    setTotal('');
                    }}>EDITAR
                  </button>
                  <button style={{background: 'green', color: 'white'}} onClick={()=>updateOrder(order._id)}>
                    salvar
                  </button>
                  <button onClick={()=>{console.log(order._id)}}>Testar</button>
                </li>
              ))}
          </Listagem>
      </Container>
    </>
  );
}

export default Orders;