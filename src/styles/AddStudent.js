import styled from 'styled-components';

const WrapperForAddStudent =
    styled.div`
        overflow: hidden;
        margin-top: -25px;
        padding: 2rem 5rem;
        background-color: #0c0c0c;
        width: 100dvw;
        height: 100%;
        min-height: 100dvh;
        display: flex;
        flex-direction:column;
        gap: 2rem;

           h1{
             text-align: center;
             font-weight: 500;
             font-size: 3rem;
             color: yellow;
           }

           form{
             padding: 4rem;
             border: 1px solid yellow;
             display: flex;
             flex-direction: column;
             gap: 2rem;
             justify-content: center;
             align-items: center;
             font-size: 1.2rem;
             border-radius: 10px;
           }

           .input-parent{
               display: flex;
               align-items: center;
               gap: 10px;
               width: 100%;
               justify-content: space-between;
           }
           .input-parent>div{
            display: flex;
            flex-direction: column;
            width: 90%;
           }
           .input{
             width: 100%;
             background-color: #363636;
             outline: none;
             padding: 20px;
             border-radius: 10px;
           }

           .btn{
             width: 100%;
             display: flex;
             align-items: center;
             justify-content: end;
           }

           .btn>button{
             color: #0d0d0d;
             font-weight: 600;
             background-color: yellow;
             padding: 1rem 1.5rem;
             display: flex;
             align-items: center;
             justify-content: center;
             border-radius: 10px;
           }

           .btn>button:hover{
             scale: 1.1;
             transition-duration: 300ms;
             animation-duration: 300ms;
           }
  `;

export default WrapperForAddStudent;