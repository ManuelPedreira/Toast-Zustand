import styled from "styled-components";

export const MainPageContainer = styled.div`
  min-width: 400px;
  max-width: 800px;
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputContainer = styled.label`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 1rem;

  input,
  select {
    flex-grow: 1;
    padding: 0.5rem;
    background-color: #1a1a1a;
    border: 1px solid #666;
    border-radius: 10px;
    transition: all 0.1s;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

    &:focus-visible {
      outline: 0px;
      border-color: #646cff;
      background-color: #333;
    }

    &:hover {
      outline: 0px;
      background-color: #333;
    }
  }

  select:hover {
    border-color: #646cff;
  }
`;
