import './App.css';
import Header from './features/Header/Header.jsx';
import Home from "./features/Home/Home";
import Subreddits from "./features/Subreddits/Subreddits";

function App() {
  return (
    <>
        <Header />
        <main>
            <Home />
        </main>
        <aside>
            <Subreddits />
        </aside>
    </>
  );
}

export default App;
