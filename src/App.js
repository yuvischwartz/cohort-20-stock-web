import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar';
import SearchBox from './components/SearchBox';
import PortfolioBox from './components/PortfolioBox';

function App() {
  return (
    <>
       <Topbar/>
        <div className={'flex w-full h-screen'}>
            <SearchBox/>
            <PortfolioBox/>
        </div>
    </>
  );
}

export default App;
