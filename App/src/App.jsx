import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import AddBlog from './Pages/AddBlog';


function App() {
  return (
    <div>
      <Routes>
        <Route
          path=''
          element={<SignIn />}
        />
        <Route
          path='signup'
          element={<SignUp />}
        />
        <Route
          path='home'
          element={<Home />}
        />
        <Route
          path='addblog'
          element={<AddBlog />}
        />
       
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App
