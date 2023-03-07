import WithModelList from './components/listComponents/WithModelList';
import LargePersonListItem from './components/people/LargePersonListItem';
import SmallPersonListitem from './components/people/SmallPersonListItem';
import LargeProductListItem from './components/products/LargeProductListItem';
import SmallProductListItem from './components/products/SmallProductListItem';
import people from './data/people';
import products from './data/products';

function App() {
  return (
    <>
      <h1>- Person List - </h1>
      <WithModelList
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
        modalBodyComponent={LargeProductListItem}
      />

      <h1>- Product List - </h1>
      <WithModelList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListitem}
        modalBodyComponent={LargePersonListItem}
      />
    </>
  );
}

export default App;
