import { Layout } from "./components/layout/Layout";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from './components/footer/Footer';

import Routes from "./routes/Routes";
//redux
import { Provider } from'react-redux';
import { store } from './redux/store';


function App() {
  return (
      <Layout>
        <Provider store={store}>
        <Navbar/>
        <Routes/>
        <Footer/>
        </Provider>
      </Layout>
  );
}

export default App;
