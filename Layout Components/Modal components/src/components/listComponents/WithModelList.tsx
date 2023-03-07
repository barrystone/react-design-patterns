import { FC } from 'react';
import styled from 'styled-components';
import Modal from '../Modal';

interface WithModelListProps {
  items: Array<object>;
  resourceName: string;
  itemComponent: FC;
  modalBodyComponent: FC;
}

const WithModalWrapper = styled.div`
  border-bottom: 1px solid white;
  padding-bottom: 10px;
`;

const WithModelList: FC<WithModelListProps> = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
  modalBodyComponent: ModalBodyComponent
}: WithModelListProps) => {
  return (
    <>
      {items.map((item, idx) => (
        <WithModalWrapper key={idx}>
          <ItemComponent {...{ [resourceName]: item }} />
          <Modal>
            <ModalBodyComponent {...{ [resourceName]: item }} />
          </Modal>
        </WithModalWrapper>
      ))}
    </>
  );
};

export default WithModelList;
