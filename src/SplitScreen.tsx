import styled from 'styled-components';

interface leftAndRightComponentProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

interface splitScreenProps {
  left: React.ComponentType<leftAndRightComponentProps>;
  right: React.ComponentType<leftAndRightComponentProps>;
  leftWeight: number;
  rightWeight: number;
}

interface paneProps {
  weight: number;
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;
const Pane = styled.div<paneProps>`
  flex: ${[(props) => props.weight]};
`;

export const SplitScreen = ({
  left: Left,
  right: Right,
  leftWeight = 1,
  rightWeight = 1
}: splitScreenProps) => {
  return (
    <Container>
      <Pane weight={leftWeight}>
        <Left />
      </Pane>
      <Pane weight={rightWeight}>
        <Right />
      </Pane>
    </Container>
  );
};
