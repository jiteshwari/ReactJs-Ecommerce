import "./styles/style.css";
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import store from "./redux/store/store";
import ProtectedRoute from './routers/ProtectedRoutes';

function App() {
  return (
    <>
      <Provider store = { store }>
        <AppRouter/>
      </Provider>
    </>
  )
}

export default App;
