import './App.css';
import Stories from './Stories';
import Pagination from './Pagination';
import Search from './Search';

function App() {
 
  return (
    <div className="App">
      <Search/>
      <Pagination/>
    <Stories/>
    </div>
  );
}

export default App;
