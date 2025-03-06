import { Provider } from 'react-redux';
import "./Level4.css"
import Level1 from "./level4Comp/Level1";
import myStore from "./reduxFiles/myStore";

const App = () => {
  return (<>
    <Provider store={myStore}>
      <Level1 />
    </Provider>
  </>);
};

export default App;
