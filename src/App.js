import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import News from './components/News/News';
import Header from './components/Header/Header';
import TopHeadline from './components/TopHeadline/TopHeadline';


function App() {
  return (
    <div className="bordered">

      <Header></Header>
      <TopHeadline></TopHeadline>
    </div>
  );
}

export default App;
