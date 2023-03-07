import { FC, ReactNode, useState } from 'react';
import styled from 'styled-components';

interface ModalProps {
  children?: ReactNode;
}
const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;
const ModalBody = styled.div`
  background-color: white;
  color: black;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
  position: relative;
`;
const ModalClose = styled.button`
  background-color: red;
  position: absolute;
  z-index: 1;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  border: none;
  &:hover {
    border: 1px black groove;
    color: black;
  }
`;

const Modal: FC<ModalProps> = ({ children }) => {
  const [shouldShow, setShouldShow] = useState(false);
  return (
    <>
      <button onClick={() => setShouldShow(true)}>Open Modal</button>
      {shouldShow && (
        <ModalBackground onClick={() => setShouldShow(false)}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            {children}
            <ModalClose onClick={() => setShouldShow(false)}>
              <span>x</span>
            </ModalClose>
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
};

export default Modal;
