import { SplitScreen } from './SplitScreen';
import { LeftHand, RightHand } from './components';

const App = () => {
  return (
    <SplitScreen
      left={LeftHand}
      right={RightHand}
      leftWeight={1}
      rightWeight={3}
    ></SplitScreen>
  );
};

export default App;
