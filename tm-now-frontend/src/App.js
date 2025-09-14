import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import ProtectedRoute from './protectedRoute';
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import AllRequests from './components/AllRequests';
import CreateRequest from './components/CreateRequest';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path = "/register" element={<Register />} />
        <Route path = "/admin-login" element={<AdminLogin />} />
        <Route path = "/get-all-requests" element={<AllRequests />} />
        <Route path = "/create-request" element={<ProtectedRoute><CreateRequest/></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}
export default App;
