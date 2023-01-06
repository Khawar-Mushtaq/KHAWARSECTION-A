import logo from './logo.svg';
import './App.css';
import MainNav from './MainNav';
import LoginForm from './LoginForm';
import { Routes,Route } from "react-router-dom";
import RegisterForm from './RegisterForm';
import DashBoard from './DashBoard';
import PersonalInfo from './PersonalInfo';
import Eduactional from './Eduactional';
import Experiance from './Experiance';
import Skills from './Skills';
import { QueryClient, QueryClientProvider, } from 'react-query'
const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <MainNav/>
      <QueryClientProvider client={queryClient}>
      <Routes>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/register' element={<RegisterForm/>}/>
      <Route path='/dashboard' element={<DashBoard/>}>
      <Route path='/dashboard/personal' element={<PersonalInfo/>}/>
      <Route path='/dashboard/education' element={<Eduactional/>}/>
      <Route path='/dashboard/experiance' element={<Experiance/>}/>
      <Route path='/dashboard/skills' element={<Skills/>}/>
      </Route>
      </Routes>
      </QueryClientProvider>
      
    </div>
  );
}

export default App;
