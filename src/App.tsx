import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppPagosDashboard from './pages/AppPagos';
import LoginScreen from './pages/LogIn';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          
          <Route path="/AppPagosDashboard" element={<AppPagosDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;