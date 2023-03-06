import LargePersonListItem from './components/people/LargePersonListItem';
import SmallPersonListItem from './components/people/SmallPersonListItem';
import RegularList from './components/RegularList';
import people from './data/people';

function App() {
  return (
    <>
      <h2>SmallPersonList: </h2>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <br />
      <h2>LargePersonList: </h2>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
    </>
  );
}

export default App;
