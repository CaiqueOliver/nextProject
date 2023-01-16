import styled from "styled-components";
export const Product = styled.div`
display: flex;
gap: 30px;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin-bottom: 70px;
min-height: 100vh;
div {
  height: 320px;
  width: 230px;
  border: 2px solid rgb(194, 193, 193);
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Container = styled.span`
  button {
    border-radius: 10px;
    border: none;
    margin: 10px;
  }
`;

export const Button = styled.button`
  button {
    font-size: 20px;
    backgroud: transparent;
    border: none;
    color: crimson;
    display: flex;
    justify-content: space-between;
  }
`;
