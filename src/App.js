import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="bordered">

      <Header></Header>
      <Blog></Blog>
    </div>
  );
}

export default App;
