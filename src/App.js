
import './App.css';



import Topbar from './Topbar/topbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/home/home'
import Write from './Create/Write';
import Login from './Pages/login';
import Register from './Pages/register';
import Setting from './Setting/Setting';
import { useSelector,useDispatch } from 'react-redux';
import Protectedroute from './Protected route/Protectedroute';
import SinglePost from './Single Post/Single Post';
function App() {
  const{isAuthenticated} = useSelector(state => state.root);
 
  return (
    <>
    <Router>
      <Topbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/setting" element={<Setting/>}/>
        <Route path="/write" element={
          <Protectedroute isAuthenticated={isAuthenticated}>
          <Write/>
          </Protectedroute>
          }
        />
        <Route path="/post/:id" element={<SinglePost/>}/>
      </Routes>
      
    </Router>
      
      
      
    </>
    
     
      
    
  );
}

export default App;
