import styled from 'styled-components';

interface leftAndRightComponentProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

interface splitScreenProps {
  left: React.ComponentType<leftAndRightComponentProps>;
  right: React.ComponentType<leftAndRightComponentProps>;
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;
const Pane = styled.div`
  flex: 1;
`;

export const SplitScreen = ({ left: Left, right: Right }: splitScreenProps) => {
  return (
    <Container>
      <Pane>
        <Left />
      </Pane>
      <Pane>
        <Right />
      </Pane>
    </Container>
  );
};
