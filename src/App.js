import './App.css';
import Header from './Header';
import Ipinfo from './Ipinfo';
import Maps from './Maps';
import Searchbar from './Searchbar';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Searchbar />
      <div className='center'>
        <Ipinfo />
        <Maps />
      </div>
    </div>
  );
}