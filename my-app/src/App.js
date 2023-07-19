import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import NavBarSimple from './components/NavbarSimple';

function App() {
  return (
    <div className={css.App}>
      <Sidebar/>
      <NavBarSimple/>
    </div>
  );
}

export default App;