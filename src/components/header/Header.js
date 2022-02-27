import styled from 'styled-components';

const StyledHeader = styled.header`
  background: green;
  display: flex;
  justify-content: center;
`
const StyledTitle = styled.h1`
  color: white;
  font-size: 50px;
`

const Header = ({ title }) => {

  return(
    <StyledHeader>
      <StyledTitle>
        {title}
      </StyledTitle>
    </StyledHeader>
  );
}

export default Header;
