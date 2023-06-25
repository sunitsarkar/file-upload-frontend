
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './component/login';
import RegistrationPage from './component/reg';
import Upload from './component/upload';
import File from './component/file';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/registration' element={<RegistrationPage/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/file'  element={<File/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
