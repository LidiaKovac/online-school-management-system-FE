
import './App.css';

import {BrowserRouter, Route} from "react-router-dom"

import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import StudentDashboard from './pages/Dashboard/StudentDashboard';
import Redirect from "./pages/Redirect/Redirect"
import TeacherDashboard from './pages/Dashboard/TeacherDashboard';
import UploadNotes from './pages/Notes/Upload/Upload_New';
import LNotes from "./pages/Notes/Landing"
import Notes from './pages/Notes/Type/Notes';
import Classes from './pages/Classes/Classes';
import SingleClassPage from './pages/Classes/Single/SingleClass';
import HomeworkPage from './pages/HomeworkPage/HomeworkPage';
import Grade from './pages/Grade/Grade';

const App: React.FC = () => {
  return (
    <BrowserRouter>
     <Route exact path="/redirect"><Redirect/></Route>

     <Route exact path="/"><Login/></Route> 
     <Route exact path="/join"><SignUp/></Route>
     
     <Route exact path="/studentdash"><StudentDashboard/></Route>
     <Route exact path="/teacherdash"><TeacherDashboard/></Route>

     <Route exact path="/notes/new"><UploadNotes/></Route>
     <Route exact path="/notes/type"><Notes/></Route>
     <Route exact path="/notes"><LNotes/></Route>

     <Route exact path="/classes/search"><Classes/></Route>
     <Route exact path="/class/:id" component={SingleClassPage} />
     <Route exact path="/homework"> <HomeworkPage/> </Route>
     <Route exact path='/grade'>
       <Grade/>
     </Route>
    </BrowserRouter>
  );
}

export default App;
