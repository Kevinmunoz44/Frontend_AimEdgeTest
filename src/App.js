import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import Users from './pages/Users';
import Products from './pages/Products';
import AddUser from './pages/AddUser';
import EditeUser from './pages/EditeUser';
import AddProducts from './pages/AddProducts';
import EditProducts from './pages/EditProducts';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/users' element={<Users />}/>
          <Route path='/users/add' element={<AddUser />}/>
          <Route path='/users/edit/:id' element={<EditeUser />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/products/add' element={<AddProducts />}/>
          <Route path='/products/edit/:id' element={<EditProducts />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
