import styled from "styled-components";

const DefaultButton = styled.button`
{
  width: 10%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: #40a9ff;
  border: 0;
  color: white;
  border-radius: 7px;
}

  :hover {
    background: #87c7ff;
    border: 0;
    color: white;
    filter: drop-shadow();
  }

  :active {
    filter: none;
    background: #006bb3;
  }

  :visited {
    background: #c5d8ef;
    border: 0;
    color: black;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export { DefaultButton }