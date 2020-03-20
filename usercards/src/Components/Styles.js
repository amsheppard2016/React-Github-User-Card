import styled from "styled-components";

export const Container = styled.div`
    max-width: 800px;
    margin: 50px auto;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Cards = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & h1 {
        font-size: 4rem;
    }
`;

export const Card = styled.div`
    width: 90%;
    padding: 20px;
    display: flex;
    border-radius: 5px;
    box-shadow: 0 1px 6px -2px #000;
    background-color: #fff;
    margin-bottom: 30px;

    & img {
        width: 200px;
        height: 200px;
        border-radius: 3px;
        margin-right: 20px;
    }

    & p {
        font-size: 1.4rem;
        margin-top: 5px;
        margin-bottom: 3px;
    }
`;

export const Name = styled.h3`
    font-size: 3.4rem;
    margin: 5px 0px;
`;

export const Username = styled.p`
    font-size: 1.8rem;
    font-style: italic;
    margin: 3px 0 10px;
`;
