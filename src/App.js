import './App.css';
import Constraints from './components/constraints';
import Footer from './components/footer';
import Header from './components/header';
import Input from './components/input';
import Tableau from './components/tableau';

function App() {
  return (
    <>
      <Header />
      <main>
        <Input />
        <Constraints />
        <Tableau />
      </main>
      <Footer />
      </>
  );
}

export default App;
