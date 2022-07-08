import './App.css';
import Header from './Header';
import Ipinfo from './Ipinfo';
import Searchbar from './Searchbar';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Searchbar />
      <Ipinfo />
    </div>
  );
}