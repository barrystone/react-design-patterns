import { SplitScreen } from './SplitScreen';
import { LeftHand, RightHand } from './components';

const App = () => {
  return (
    <SplitScreen leftWeight={1} rightWeight={4}>
      <LeftHand count={5} />
      <RightHand content="example content!" />
    </SplitScreen>
  );
};

export default App;
