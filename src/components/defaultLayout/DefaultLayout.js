import styled from 'styled-components';
import Header from "../header";

const Wrapper = styled.div`
  font-family: 'Lato', sans-serif;
`
const Content = styled.div`
  height: 83vh;
`

const DefaultLayout = ({ title, button, children }) => {

  return(
    <Wrapper>
      <Header title={title}>
        { title === "Home page" ? button : null}
      </Header>
      <Content>
        {children}
      </Content>
    </Wrapper>
  );
}

export default DefaultLayout;
