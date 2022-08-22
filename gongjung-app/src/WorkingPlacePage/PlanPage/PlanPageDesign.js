import styled from "styled-components";

const MainContainer = styled.div`
        width: 100%;
        height: 70%;
        display: flex;
        background: white;
    `
const LeftContainer = styled.div`
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
    `;
const RightContainer = styled.div`
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
    `;

export {MainContainer, LeftContainer, RightContainer}