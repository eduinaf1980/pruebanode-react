import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/scss/theme.scss';
import './styles.css';
import Dashboard from './pages/dashboard/Dashboard';
import Company from "./pages/parametrization/company/Index";
import CreateCompany from "./pages/parametrization/company/Create";
import UpdateCompany from "./pages/parametrization/company/Update";
import User from "./pages/parametrization/user/Index";
import CreateUser from "./pages/parametrization/user/Create";
import UpdateUser from "./pages/parametrization/user/Update";
import Item from "./pages/parametrization/item/Index";
import CreateItem from "./pages/parametrization/item/Create";
import UpdateItem from "./pages/parametrization/item/Update";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/dashboard' element={<Dashboard />} />

        <Route exact path="/companies" element={<Company />} />
        <Route exact path="/companies/create" element={<CreateCompany />} />
        <Route exact path="/companies/update/:nit" element={<UpdateCompany />} />

        <Route exact path="/item" element={<Item />} />
        <Route exact path="/item/create" element={<CreateItem />} />
        <Route exact path="/item/update/:id" element={<UpdateItem />} />
        
        <Route exact path="/users" element={<User />} />
        <Route exact path="/users/create" element={<CreateUser />} />
        <Route exact path="/users/update/:id" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;