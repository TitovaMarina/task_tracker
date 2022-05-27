import styled from 'styled-components';
import { Link } from 'react-router-dom'


const StyledButton = styled.button`
   border: 3px solid #bb7db2;
	border-radius: 6px;
  background-color: beige;

`

const Button = ({ className, children, onClick, type = 'button', disabled }) => {

  return(
      <StyledButton className={className} onClick={onClick} type={type} disabled={disabled}>
			  {children}
      </StyledButton>

  );
}

export default Button;
