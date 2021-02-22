import styled from 'styled-components';
import Bluebg from '../../assets/img/Banners/bluebg.png'

export const Headermenu = styled.section`
  
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-top: 0.7rem;
  background-color: #143a7c;
  img{
    width: 13rem;
    margin-left: 9rem;   
  }

  .headeruser{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    P{
    color: white;
    }

    .search{
      display: flex;
      justify-content: center;
      align-items: center;
      
      .input{
        background-color: white;
        border: 2px solid white;
        display: flex;
        border-radius: 7px 0px 0px 7px;
        }
      input{
        border: 2px solid white;
        width:15rem;
        height: 1.9rem;
        
      }
    }

    .contacts{
        font-family: 'Gothic medium';
        font-size: 12px;
    }
      
      .searchmessage{
        background-color: white;
        border-radius: 0px 7px 7px 0px;
        height: 1.9rem;
        display: flex;
        justify-content: center;
        align-items: center;
        button{
          margin-right: 1rem;
          border-radius: 10px;
          color: white;
          background: black;
          font-family: "Gothic Medium";
          justify-content: center;
          align-items: center;
          padding: 0.2rem;
          font-size: 10px;
          border: 1px solid black;
          text-decoration: none;
          width: 5rem;
        }
      }

      .IconsMenu{
        display: flex;
        justify-content: center;
        align-items: center;
        div{
          display: flex;
          justify-content: center;
          align-items: center;
          
            .contacts{
            padding: 4px;
            border: 1px solid white;
            color: white;
            border-radius: 7px;
            border: 1px solid white;
            padding: 7px 12px;
            margin-right: 4rem;
          }
        }
      }  
    }
`;

export const Menu = styled.div`
   background-color: black;
   height: 3rem;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   align-self: center;
   margin-bottom: -2rem;
   border: 1px solid white;

   .Collections{
     background-color: black;
     height: 100%;
     display: flex;
     justify-content: space-around;
     align-items: center;
     padding: 1.4rem;
     p{
       font-family: 'Gothic Light';
       color:white;
       strong{
        font-family: 'Gothic Medium';
        color: white;
       }

     }

     .icon{
       color: white;
       margin-left: 2rem;
     }
   }

   a{
    font-family: 'Gothic Bold';
    color: white;
    text-decoration: none;
    padding: 0.8rem 3rem;
   }
   a:hover{
      background-color: floralwhite;
      color:brown;
      transition: 0.3s;
    }
`;


