import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Appheader from './components/header';
import AppCarousel from './components/carousel';
import AppFeaturesSection from './components/AppFeaturesSection';
import OurClients from './components/OurClients';
import Industry from './components/Industry';
import Customers from './components/Customers';
import Lists from './components/Lists';
import Customize from './components/Customize';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header id="header">
        <Appheader />
      </header>
        <main>
          <AppCarousel />
          <AppFeaturesSection />
          <Customize />
          <OurClients />
          <Industry />
          <Customers />
          <Lists />
          
        </main>
        <footer>
            <Footer />
        </footer>
        
    </div>
  );
}

export default App;
