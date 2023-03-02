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

export const LeftHand = () => {
  return (
    <>
      <LeftHandArea>
        <h1>Left!</h1>
      </LeftHandArea>
    </>
  );
};

export const RightHand = () => {
  return (
    <>
      <RightHandArea>
        <h1>Right!</h1>
      </RightHandArea>
    </>
  );
};
