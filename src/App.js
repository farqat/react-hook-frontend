
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { Route, Routes } from 'react-router-dom'
import AddEmployeeComponent from './components/AddEmployeeComponent';



function App() {
  return (
    <div>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/addEmployee" element={<AddEmployeeComponent />} />
            <Route path="/get-employee/:id" element={<AddEmployeeComponent />} />
            <Route
              path="*"
              element={
                <div>
                  <h2>404 Page not found</h2>
                </div>
              }
            />
          </Routes>
        </div>
        <FooterComponent />
    </div>
  );
}

export default App;
