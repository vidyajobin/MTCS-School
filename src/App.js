import './App.css';
import HeaderNavbar from './components/HeaderNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import RoutesConfig from './routes/Routes';


function App() {
  return (
    <div className='App'>
      <HeaderNavbar />
      <RoutesConfig/>
    </div>
  );
}

export default App;
