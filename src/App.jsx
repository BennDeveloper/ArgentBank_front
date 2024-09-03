import { Outlet } from 'react-router-dom';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import './index.css';
import './App.css';
import { store } from './redux/store';

function App() {



  return (
    <Provider store={store}>
      <div className="app-container">
        <Header />
        <div className="content-container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;