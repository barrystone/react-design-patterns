import styled from 'styled-components';
import { Children } from 'react';

interface splitScreenProps {
  children?: React.ReactNode;
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
  children,
  leftWeight = 1,
  rightWeight = 1
}: splitScreenProps) => {
  const [left, right] = Children.toArray(children);
  console.log('children', children);

  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  );
};
