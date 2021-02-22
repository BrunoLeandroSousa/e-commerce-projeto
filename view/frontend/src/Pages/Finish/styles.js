import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1167px;
  margin: 3rem auto 0;
  flex-direction: column;

  h1{
    font-family: lato;
    color: #666666;
  }
`;

export const CheckoutFinish = styled.section`
  display: flex;
  padding: 1rem;
`;

export const DataPayment = styled.section`
  display: flex;  
  flex-direction: column;
  padding: 1rem;

  .personalData{
    display: flex;
    .personalInfo{
      border: 1px solid grey;
      padding: 1rem 8rem 1rem 1rem;
      font-family: 'lato';
      border-radius: 5px;
      max-height: 8.5rem;
      h2{
        color: #666666;
      }
      p:nth-child(2){
        color: #666666;
        margin-top: 0.3rem;
        font-size: 0.9rem;
      }
      
      p:nth-child(3){
        color: #666666;
        max-width: 9.1rem;
        margin-top: 1rem;
        font-size: 0.9rem;
      }
    }

    .Delivery{
      border: 1px solid grey;
      margin-left: 1rem;
      padding: 1rem 2rem;
      font-family: 'lato';
      color: #666666;
      border-radius: 5px;
      h2{

      }
      p:nth-child(2){
        margin-top: 1rem;
      } 
      p{
        font-size: 0.9rem;
      }
      p:nth-child(5){
        margin-top: 1rem;
      }
      h3{
        color: #357edd;
        border: 1px dashed #357edd;
        font-size: 13px;
        text-align: center;
        padding: 0.2rem;
        border-radius: 4px;
        margin-top: 1rem;
      }
    }
  }

  .paymentInfo{
    border: 1px solid grey;
    border-radius: 6px;
    font-family: 'lato';
    padding: 1rem;
    margin-top: 1rem;
    
    h2:nth-child(1){
      font-size: 22px;
      color: grey;
      display: flex;
      align-items: center;
      img{
        padding: 0rem 0.5rem 0rem 0rem;
      }
    }
    .checkout-finish{
      display: flex;
      border-radius: 6px;
      margin-top: 1rem;
      .payment-method{
        font-family: 'lato';
        color: #08c;
        font-size: 14px;
        padding-left: 1rem;
        p:nth-child(1){
          display: flex;
          justify-content: space-between;
          align-items: center;
          img{
            margin-left: 1rem;
          }
        }
        p+p{
          display: flex;
          align-items: center;
          padding-top: 1rem;
          justify-content: space-between;
          img{
            margin-left: 1rem;
          }
        } 
      }

      .info-payment-finish{
        font-size: 14px;
        color: grey;
        background-color: gainsboro;
        padding: 1rem 9rem 1rem 1rem;
        margin-left: 2rem;
        border-radius: 0.4rem;
        p:nth-child(1){

        }
        input:nth-child(2){
          padding: 0.3rem 0.7rem;
          margin-top: 0.2rem;
        }
        .creditFlags{
          display: flex;
          margin-top: 1rem;
          margin-bottom: 1rem;
          div{
            display:flex;
            flex-direction: column;
            margin-left: 2rem;
            input{

            }
            img{

            }
          }
        }

        .installments{
          select{
            padding: 0.2rem 6rem;
          }
        }

        p:nth-child(5) {
          padding-top: 0.4rem;
        }

        input:nth-child(6){
          padding: 0.3rem 2rem;
          margin-top: 0.3rem;
        }

        .validate{
          display: flex;
          padding-top: 0.9rem;
          align-items: center;
          p{
            text-align: center;
          }
          input{
            margin-left: 1.5rem;
            padding: 0.3rem 1rem;
            width: 3.5rem;
          }
        }

        .securityCode{
          display: flex;
          margin-top: 1rem;
          p{
            max-width: 4rem
          }
          input{
            margin-left: 0.8rem;
            width: 3.5rem;
          }
        }

        .cpf{
          margin-top: 1rem;
        }

        .inputcpf{
          margin-top: 0.2rem;
          height: 1.4rem;
          width: 9rem;
        }

      }
    }
  }
`;

export const FinishPayment = styled.section`
  display: flex;
  flex-direction: column;
  font-family: 'lato';
  color: #666666;
  margin-left: 1rem;
  h2{
    font-size: 17px;
    display: flex;
    align-self: flex-end;
  }
  .products-cart{
    display: flex;
    justify-content: space-between;
    border-top: 1px dashed grey;
    border-bottom: 0.6px dashed grey;
    padding: 0.5rem 0.2rem;
    margin-top: 1rem;
    margin-bottom: 0.8rem;
    font-family: 'lato';
    img{
      width: 5rem;
    } 

    div{
      display: flex;
      flex-direction: column;
      font-size: 14px;  
      
      p{

      }
    }
  }
  p:nth-child(3) {
    font-size: 12px;
    color: #08c;
    display: flex;
    align-self: flex-end;
    font-weight: 600;
  }
  p:nth-child(4) {
    font-size: 14px;
    margin-top: 0.4rem;
    display: flex;
    align-self: flex-end;
    padding-bottom: 0.6rem;
    padding-right: 0.3rem;
    padding-top: 0.2rem;
    span{
      margin-left: 3.1rem;
    }
  }
  p:nth-child(5) {
    display: flex;
    align-self: flex-end;
    font-size: 14px;
    font-weight: 800;
    color: green;
    padding-right: 0.3rem;
    span{
      margin-left: 3.1rem;
    }
  }
  button{
    background: #468847;
    border: 1px solid #468847;
    color: whitesmoke;
    padding: 0.8rem 4rem;
    border-radius: 4px;
    font-size: 18px;
    margin-top: 1rem;
    font-weight: 600;
  }
`;