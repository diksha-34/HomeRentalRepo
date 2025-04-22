import { Route, Routes } from 'react-router-dom'
import './App.css';
import UserRouter from './Router/UserRouter';
import AdminRouter from './Router/AdminRouter';
function App() {
  return (
    <div>
      <Routes>
      <Route path='/*' element={<UserRouter/>}></Route>
        <Route path='/admin/*' element={<AdminRouter/>}>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
