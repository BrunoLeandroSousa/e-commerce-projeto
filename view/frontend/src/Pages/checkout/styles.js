import styled from 'styled-components';


export const Checkout = styled.section`
  
  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    height: 100%;
    width: 100%;
    background-color: white;
    height: 29rem;
  }

  footer{
    button{
      margin-bottom: 4.1rem;
    }
  }
`;

export const Products = styled.div`
  border: 3px solid #f4f4f4;
`;

export const ProductTable = styled.table`
  width: 52%;
  border: 2px solid #D0D0D0;
  border-radius: 5px;
  padding: 1rem 1rem 2rem 1rem;

  thead th{
    color: #999;
    text-align: left;
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    color:rgb(51, 51, 51);
    font-size: 14px;
  }

  thead th + th{
    text-align: center;
  }
  
  tbody{
    transform: translateY(1rem);

    tr{
      margin-top: 1rem;
    }
    
    .products{
      display: flex;
      align-items: center;
      color: #0088cc;
      padding: 0rem 0rem 1rem 0rem;
      img{
        width: 3rem;
      }
      p{
        padding: 0rem 0rem 0rem 0.6rem;
        font-family: 'Lato';
      }
    }

    .delivery{
      text-align: center;
      font-family: 'Lato';
      padding: 0rem 0rem 1rem 0rem;
    }

    .Prices{
      text-align: center;
      font-family: 'Lato';
      padding: 0rem 0rem 1rem 0rem;
    }

    .qtd{
      text-align: center;
      font-family: 'Lato';
      padding: 0rem 0rem 1rem 0rem;
      input{
        width: 2rem;
        transform: translateY(-0.53rem);
        margin-left: 0.4rem;
        margin-right: 0.5rem;
        border: 2px solid grey;
        border-radius: 3px;
      }
    }

    .Total{
      padding: 0rem 0rem 1rem 0rem;
      text-align: center;
      font-family: 'Lato';
    }

    .Delete{
      transform: translateY(-0.3rem);
    }
  }
`;

export const CheckoutOptions = styled.section`
  display: flex;
  justify-content: space-between;
  width: 52%;
  background-color: white;
  position: relative;
  top: -4rem;
  margin: 0 auto;
  padding: 0rem 1rem 0rem 2rem;
`;

export const Delivery = styled.section`
  background-color: white;
  .deliveryTitle{
    font-family: 'Lato';
    color: rgb(0,0,0,0.6);
    font-size: 1.6rem;
    font-weight: 400;
  }
  .optionsDelivery{
    font-family: 'Lato';
    font-size: 18px;
    margin-top: 1rem;
    strong{

    }
    span{
      color: rgb(54,141,247);
    }
  }
`;

export const Total = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .addcupom{
    padding: 0rem 0rem 1.4rem 0rem;
    font-family: 'Lato';
    color: rgb(54,141,247);
  }
  .subtotal{
    padding: 0rem 0rem 1.4rem 0rem;
    font-family: 'Lato';
    font-size: 14px;
    span{
      font-size: 16px;
      padding: 0rem 0rem 0rem 1.5rem;
    }
  }
  .entrega{
    padding: 0rem 0rem 1.4rem 0rem;
    font-family: 'Lato';
    font-size: 14px;
    span{
      font-size: 16px;
      padding: 0rem 0rem 0rem 1.5rem;
    }
  }
  .total{
    padding: 0rem 0rem 1.4rem 0rem;
    font-family: 'Lato';
    font-size: 21px;
    span{
      padding: 0rem 0rem 0rem 0.8rem;
    }
  }
 
`;

export const FinishOrder = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  a{
    text-decoration: none;
    padding: 0rem 2rem 0rem 0rem;
    text-decoration: none;
    font-family: 'Lato';
    color: rgb(54,141,247);
  }

  button{
    height: 3rem;
    padding: 0rem 1.5rem 0rem 1.5rem;
    font-family: 'Lato';
    color: whitesmoke;
    background-color: #51a351;
    border-radius: 6px;
    border: 2px solid #5ab45a;
    font-size: 18px;
  }
`;

