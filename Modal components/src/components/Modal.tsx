import { FC, ReactNode, useState } from 'react';
import styled from 'styled-components';

interface ModalProps {
  children?: ReactNode;
}
const ModalBackground = styled.div`
  position: fixed;
`;
const ModalBody = styled.div``;

const Modal: FC<ModalProps> = ({ children }) => {
  const [shouldShow, setShouldShow] = useState(false);
  return (
    <>
      <button onClick={() => setShouldShow(true)}>Open Modal</button>
      {shouldShow && (
        <ModalBackground onClick={() => setShouldShow(false)}>
          <ModalBody>
            <button onClick={() => setShouldShow(false)}>close Modal</button>
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
};

export default Modal;
