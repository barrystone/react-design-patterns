import styled from 'styled-components';
import { flexCenter } from '.';

const RightHandArea = styled(flexCenter)`
  background-color: yellow;
`;

const RightHand = ({ content }: { content: string }) => {
  return (
    <>
      <RightHandArea>
        <h1>Right!</h1>
        <p>{content}</p>
      </RightHandArea>
    </>
  );
};

export default RightHand;
