import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d1fff9;
  color: #333;
  padding: 10px;
  font-family: 'Lato', sans-serif;
  height: 7vh;
  border-bottom: thick double #1976d2;
`
const StyledTitle = styled.h1`
  color: black;
  font-size: 25px;
`

const StyledBox = styled.h1`
  display: flex;
  justify-content: flex-end;
`

const Header = ({ title, children }) => {

  return(
      <StyledHeader>
        <StyledTitle>
          {title}
        </StyledTitle>
        <StyledBox>
          {children}
        </StyledBox>
      </StyledHeader>

  );
}

export default Header;
