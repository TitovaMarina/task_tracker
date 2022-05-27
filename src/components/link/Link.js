import styled from 'styled-components';
import { Link } from 'react-router-dom'


const StyledLink = styled(Link)`
  margin-left: 5px;
  text-decoration: none;
  :hover{
    text-decoration: underline;
  }
`

const TheLink = ({ to, children }) => {

  return(
      <StyledLink to={to}>
        {children}
      </StyledLink>

  );
}

export default TheLink;
