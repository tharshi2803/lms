import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Card from "./components/card/Card";
import SideBar from './components/SideBar/SideBar';
import TopNav from './components/TopNav/TopNav';
import Login from "./pages/login/Login";
import Subject from "./pages/subject/Subject";



function App() {
  return (
    <div>
      <Router>
        <Login />
        <TopNav></TopNav>
        <SideBar></SideBar>
        
        
        {/* <Card />  */}
        {/* <Subject /> */}

        <Routes>
          <Route path='/card' element={<Card />} />
          <Route path='/subject' element={< Subject />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
