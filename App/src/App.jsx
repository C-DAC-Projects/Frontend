import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';

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
       
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App
