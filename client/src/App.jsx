import {Navbar, Welcome, Footer, Transactions, Services, Loader} from './components';
import './main';

const App = () => {
  

  return (
    <div className="main-h-screen">
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />        
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
