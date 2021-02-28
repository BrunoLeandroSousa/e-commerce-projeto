
import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
    width: 20rem;
    height: 20rem;
    margin: 6rem auto;
`;

export const Listagem = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    list-style: none;

    li{
        background-color: white;
        border: 1px solid black;
        padding: 1rem;
        width: 20rem;
        display: flex;
        flex-direction: column;
        p{
            span{
                color: green;
            }
        }
        .editar{
            background-color: orange;
        }
        .excluir{
            background-color: red;
            color: white;
        }
    }
`;
