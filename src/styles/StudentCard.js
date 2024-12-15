import styled from 'styled-components';

const WrapperStudentCard = styled.div`
        /* width: 35rem; */
        background-color: black;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        border: 1px solid yellow;
        padding: 3rem 2rem;
        font-size: 1.5rem;
        border-radius: 1rem;

        .row{
            /* border: 1px solid green; */
            z-index: 2;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding:20px;
        }

        .circle{
            color: greenyellow;
            border: 1px solid grey;
            border-radius: 50%;
            background-color: #0c0c0c;
            height: 50px;
            width: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .row> div:nth-child(2){
            /* border: 1px solid yellow; */
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .student_details{
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
`;

export default WrapperStudentCard;