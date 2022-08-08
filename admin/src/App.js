import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import SignUP from './pages/signuppage.js'
import AdminDashboard from './pages/adminpanel.js'

function App() {
  return (
    <div className="App">
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<SignUP />} />
               <Route path="/adminpanel" element={<AdminDashboard />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
