import { Provider } from 'react-redux';
import Level1 from "../step2/Level1";
import myStore from "../reduxFiles/myStore";

const ReduxStep2 = () => {
  return (<>
    <h2>Redux Step2 - 적용후</h2>
    <Provider store={myStore}>
      <Level1 />
    </Provider>
  </>);
}

export default ReduxStep2;
