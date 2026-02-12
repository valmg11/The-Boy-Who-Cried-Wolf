//Valentina Gandolfo
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* render header, content and footer */}
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;