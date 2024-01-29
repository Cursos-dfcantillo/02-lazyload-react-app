import {
    BrowserRouter,
    Route,
    Routes,
    NavLink,
    Navigate,
  } from 'react-router-dom';
  
  import logo from '../logo.svg';
import { LazyPage1,LazyPage2,LazyPage3 } from '../01-lazyload/pages';
  
  export const Navigation = () => {
    return (
      <BrowserRouter>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              <li>
                <NavLink to="/lazy1" className="nav-active" >Lazy 1</NavLink>
              </li>
              <li>
                <NavLink to="/lazy2" className="nav-active" >Lazy 2</NavLink>
              </li>
              <li>
                <NavLink to="/lazy3" className="nav-active" >Lazy 3</NavLink>
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
            <Route path='/lazy1' element={<LazyPage1/>} />
            <Route path='/lazy2' element={<LazyPage2/>} />
            <Route path='/lazy3' element={<LazyPage3/>} />

            <Route path='/*' element={<Navigate to="/lazy1" replace/>} />

          
          </Routes>
        </div>
      </BrowserRouter>
    );
  }