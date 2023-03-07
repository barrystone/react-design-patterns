import Modal from './components/Modal';
import LargeProductListitem from './components/products/LargeProductListItem';
import products from './data/products';

function App() {
  return (
    <>
      <Modal>
        <LargeProductListitem products={products[0]} />
      </Modal>
    </>
  );
}

export default App;
