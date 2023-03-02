import { SplitScreen } from './SplitScreen';
import { LeftHand, RightHand } from './components';

const App = () => {
  return <SplitScreen left={LeftHand} right={RightHand} />;
};

export default App;