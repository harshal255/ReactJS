import styled from "styled-components";

const WrapperForAllStudents = styled.section`
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

        .student_grid{
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1rem;
        }

           h1{
             text-align: center;
             font-weight: 500;
             font-size: 3rem;
             color: yellow;
           }

`;

export default WrapperForAllStudents;