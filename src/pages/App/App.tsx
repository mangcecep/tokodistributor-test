import Router from '../Router';
import { Provider } from 'react-redux';
import store from '../../redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
