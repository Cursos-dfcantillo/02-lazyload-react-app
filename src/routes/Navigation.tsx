import {
    BrowserRouter,
    Route,
    Routes,
    NavLink,
    Navigate,
  } from 'react-router-dom';
  
  import logo from '../logo.svg';
import { RegisterPage,FormikBasicPage ,FormikYupPage,FormikComponent,FormikAbstraction, RegisterFormikPage,DynamicFormPage} from '../03-forms/pages';
  
  export const Navigation = () => {
    return (
      <BrowserRouter>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              <li>
                <NavLink to="/register" className="nav-active" >Register Pages</NavLink>
              </li>
              <li>
                <NavLink to="/formik-basic" className="nav-active" >Formik Basic</NavLink>
              </li>
              <li>
                <NavLink to="/formik-yup" className="nav-active" >Formik Yup</NavLink>
              </li>
              <li>
                <NavLink to="/formik-component" className="nav-active" >Formik Components</NavLink>
              </li>
              <li>
                <NavLink to="/formik-abstraction" className="nav-active" >Formik Abstraction</NavLink>
              </li>
              <li>
                <NavLink to="/register-formik" className="nav-active" >Register Formik Pages</NavLink>
              </li>
              <li>
                <NavLink to="/dynamic-form" className="nav-active" >Dynamic Form Pages</NavLink>
              </li>

              
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          {/* <Switch>
            <Route path="/lazy1">
              <h1>About</h1>
            </Route>
            <Route path="/lazy2">
              <h1>Users</h1>
            </Route>
            <Route path="/lazy3">
              <h1>Home</h1>
            </Route>
  
            <Route path="/*" element={<Navigate to="/lazy1" replace/>}>
              <h1>Home</h1>
            </Route>
          </Switch> */}
          <Routes>
            <Route path='/register' element={<RegisterPage/>} />
            <Route path='/formik-basic' element={<FormikBasicPage/>} />
            <Route path='/formik-yup' element={<FormikYupPage/>} />
            <Route path='/formik-component' element={<FormikComponent/>} />
            <Route path='/formik-abstraction' element={<FormikAbstraction/>} />
            <Route path='/register-formik' element={<RegisterFormikPage/>} />
            <Route path='/dynamic-form' element={<DynamicFormPage/>} />
            
            <Route path='/*' element={<Navigate to="/register" replace/>} />

          
          </Routes>
        </div>
      </BrowserRouter>
    );
  }