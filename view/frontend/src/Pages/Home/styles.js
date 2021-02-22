import styled from 'styled-components';
import Banner1 from '../../assets/img/Banners/bluebg.png';
            
export const Bannerbox = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${Banner1});
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
    padding: 2rem;
    padding-bottom: 10rem;

    img{
        margin-top: 2rem;
    }
`;

export const Topsellers = styled.section`
    .walker{
        width: 20rem;
        height: 20rem;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        align-items: center;
        padding: 15rem;
        
        .whisk{
            width: 20rem;
            height: 20rem;
            background-image: url('https://image.freepik.com/free-vector/water-texture_1048-4071.jpg');
            display: flex;
            justify-content: center;
            margin: 0 auto;
            align-items: center;
            padding: 15rem;
            padding: 16rem 12rem;
            border-radius: 0.6rem;
            box-shadow: 0px 0px 43px 12px whitesmoke;
            position: relative;
            overflow: hidden;
            -webkit-tap-highlight-color: transparent;
                
            &:after {
                content: '';
                position: absolute;
                top: -110%;
                left: -210%;
                width: 200%;
                height: 200%;
                opacity: 0;
                transform: rotate(30deg);
                pointer-events: none;
                background: linear-gradient(
                to right, 
                transparent 0%,
                transparent 77%,
                rgba(255, 255, 255, 0.4) 92%,
                rgba(255, 255, 255, 0.0) 100%
                );
            }
            
            img{
                transition: 0.4s;
            }

            &:focus-within, 
            &:active,
            &:hover{
                img{
                 transform: translateY(-10%);
                }
                cursor: pointer;
                    &:after {
                    opacity: 1;
                    top: 50%;
                    left: 50%;
                    transition-property: left, top, opacity;
                    transition-duration: 0.7s, 0.7s, 0.15s;
                    transition-timing-function: ease;
                    }
                }
            }
    
        margin: 0 auto;
        border-radius: 20px;
        padding-bottom: 23rem;
    }

    a{
        text-decoration: none;
        font-size: 0px;
        color: transparent;
    }
`;

export const TopsellersP = styled.div`
    p{  
        text-align: center;
        font-family: "Gothic Bold";
        color: white;
        font-size: 1.5rem;
        display: block;
        margin: 0 auto;
        text-align: center;
        letter-spacing: 0.1rem;
        padding-bottom: 5rem;
    }
    
`;

export const Topsellers2 = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    .product{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        margin-bottom:2rem;
        padding: 1rem;
        border-radius:2rem;
        background-color: white;
        border: 22px solid grey;
        box-shadow: 0px 0px 41px 23px lightgoldenrodyellow;
        img{
            width: 20rem;
        }

        div{
            #name{
                font-family: "Gothic Medium";
                color: #777777;
                font-size: 1.5rem;
            }

            #type{
                padding-top: 0.7rem;
                font-family: "Gothic Medium";
                color: #777777;
                font-size: 1.1rem;
            }

            #category{
                padding-top: 0.9rem;
                font-family: "Gothic Light";
                color: #777777;
                font-size: 1.1rem;
            }

            #price{
                color: #4caf50;
                font-size: 2rem;
                font-family: 'Gothic Bold';
                padding-top: 0.6rem;
                padding-bottom: 0.6rem;
            }
        }
        
        

        button{
            display: flex;
            justify-content: space-around;
            align-items: center;
            background-color: #a1cc3a;
            color: white;
            font-family: 'Gothic Bold';
            text-decoration: none;
            border: 2px solid #a0cc3a;
            font-size: 1.3rem;
            padding: 1rem 4rem;
            border-radius: 0.5rem;
        }
    }
`;