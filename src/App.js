import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/MainComponent'
import image from './img/paper-background.jpg';


function App() {
  return (
    <div className="App bg-image" >
      <Main />
    </div>
  );
}

export default App;

// style={{backgroundImage: `url(${image}` }}