import Modal from './components/Modal';
import LargeProductListItem from './components/products/LargeProductListItem';
import products from './data/products';

function App() {
  return (
    <>
      <Modal>
        <LargeProductListItem product={products[0]} />
      </Modal>
    </>
  );
}

export default App;
