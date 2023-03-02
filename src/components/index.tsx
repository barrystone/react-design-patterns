import styled from 'styled-components';

const flexCenter = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LeftHandArea = styled(flexCenter)`
  background-color: lightblue;
`;
const RightHandArea = styled(flexCenter)`
  background-color: yellow;
`;

export const LeftHand = ({ count }: { count: number }) => {
  return (
    <>
      <LeftHandArea>
        <h1>Left!</h1>
        <p>Sum: {count}</p>
      </LeftHandArea>
    </>
  );
};

export const RightHand = ({ content }: { content: string }) => {
  return (
    <>
      <RightHandArea>
        <h1>Right!</h1>
        <p>{content}</p>
      </RightHandArea>
    </>
  );
};
