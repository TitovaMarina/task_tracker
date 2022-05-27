import styled from 'styled-components';
import Header from "../header";

const Wrapper = styled.div`

`
const Content = styled.div`
  height: 83vh;
`

const DefaultLayout = ({ title, children }) => {

  return(
    <Wrapper>
      <Header title={title} />
      <Content>
        {children}
      </Content>
    </Wrapper>
  );
}

export default DefaultLayout;
