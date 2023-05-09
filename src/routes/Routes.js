import { Routes as ReactDomRoutes, Route } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { LogIn } from '../pages/log/LogIn';
import { Checkout } from '../pages/CheckOut/Checkout';
import { Register } from '../components/register/Register';

function Routes() {
    return(
        <ReactDomRoutes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LogIn/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/register' element={<Register/>}/>
        </ReactDomRoutes>
    );
}

export default Routes;