import LargePersonListItem from './components/people/LargePersonListItem';
import SmallPersonListItem from './components/people/SmallPersonListItem';
import LargeProductListitem from './components/products/LargeProductListItem';
import SmallProductListitem from './components/products/SmallProductListItem';
import RegularList from './components/RegularList';
import people from './data/people';
import products from './data/products';

function App() {
  return (
    <>
      <h1>- Person List - </h1>
      <h2>Small Person List: </h2>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <br />
      <h2>Large Person List: </h2>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
      <br />

      <h1>- Product List - </h1>
      <h2>Small Product List: </h2>
      <RegularList
        items={products}
        resourceName="products"
        itemComponent={SmallProductListitem}
      />
      <br />
      <h2>Large Product List: </h2>
      <RegularList
        items={products}
        resourceName="products"
        itemComponent={LargeProductListitem}
      />
    </>
  );
}

export default App;
