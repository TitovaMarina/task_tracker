import styled from 'styled-components';
import Box from '@mui/material/Box';


const StyledFormContainer = styled.div`
  margin: auto;
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: 'Lato', sans-serif;
`


const Form = ({ children }) => {

  return(

    <StyledFormContainer>
      {children}

    </StyledFormContainer>
  );
}

export default Form;
