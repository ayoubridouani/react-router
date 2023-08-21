import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)

/*
React Router:
- Setup React v18
- Create a Navbar and Pages (Home, About, Contact, Blog)
- Create a BrowserRouter/Routes/Route on index.js and App.js
- Create a Links <Link to='' /></Link>
- Create a NavLinks <NavLink to=''></NavLink>
- Redirect with Navigate Component <Navigate to='/home' />
- Redirect with useNavigate() hook
- Retreive Params with useParams()
*/