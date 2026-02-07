//import logo from './logo.svg';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          kjnsdhgbfsdkjhgbf
        </a>
      </header> */}
      <Header />
      <Content />
      <Footer />
    </div>
  );
}


export default App;
