import { SplitScreen } from './SplitScreen';
import LeftHand from './components/layout/LeftHand';
import RightHand from './components/layout/RightHand';

const App = () => {
  return (
    <SplitScreen leftWeight={1} rightWeight={4}>
      <LeftHand count={5} />
      <RightHand content="example content!" />
    </SplitScreen>
  );
};

export default App;
