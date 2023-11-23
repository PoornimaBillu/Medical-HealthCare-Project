import logo from './logo.svg';
import './App.css';
import NavTwo from './NavTwo/NavTwo';
import ComponentTwo from './MaterialUi/ComponentTwo';
import Fetch from './ComponentPages/FetchPage/Fetch';
import { BrowserRouter } from 'react-router-dom';

// import Navbar from './Components/Navbar/Navbar';
// import Header from './Components/TodoCrud/Header';
// import ComponentOne from './MaterialUi/ComponentOne';
// import ComponentTwo from './MaterialUi/ComponentTwo';
// import Main from './ProjectFolder/Main';
//import Navbar from './ProjectFolder/Navbar';



function App() {
  return (
    <div className="App">
      {/* <Fetch /> */}
      <BrowserRouter>
      <NavTwo />
      </BrowserRouter>
     
      {/* <ComponentTwo /> */}
      
      {/* <Navbar />  */}
       {/* <Header /> */}
      {/* <ComponentOne /> */}
      {/* <ComponentTwo /> */}
      {/* <h1>Health Care</h1> */}
      {/* <Main />
      <Navbar /> */}
      
    </div>
  );
}

export default App;
