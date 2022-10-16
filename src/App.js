import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Card from "./components/card/Card";
import Login from "./pages/login/Login";
import Subject from "./pages/subject/Subject";


function App() {
  return (
    <div>
      <Router>
        <Login />
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
