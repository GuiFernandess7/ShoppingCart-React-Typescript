import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 90%;
  border: 1px solid black;
  border-radius: 20px;
  max-height: 100%;

  button {
    border-radius: 0 0 15px 15px;
  }

  img {
    max-height: 100px;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    margin: 1px; /* Defina o valor desejado para a margem em todas as direções */
    padding: 1rem;
    max-height: 50%;
    font-size: 13px;
  }

`;
