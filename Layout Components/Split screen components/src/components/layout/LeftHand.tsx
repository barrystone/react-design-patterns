import styled from 'styled-components';
import { flexCenter } from '.';

const LeftHandArea = styled(flexCenter)`
  background-color: lightblue;
`;

const LeftHand = ({ count }: { count: number }) => {
  return (
    <>
      <LeftHandArea>
        <h1>Left!</h1>
        <p>Sum: {count}</p>
      </LeftHandArea>
    </>
  );
};

export default LeftHand;
