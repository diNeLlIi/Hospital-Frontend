// import logo from './logo.svg';
// import './App.css';
// import Login from './Pages/LoginForm/Login';
// import Dashboard from './Pages/Dashboard/Dashboard';

// function App() {
//   return (
//     <div>
//       <Dashboard/>
//     </div>
//   );
// }

// export default App;



import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import ViewAppointment from './Pages/ViewAppointment/ViewAppointment';

function App() {
  return (
    <Router>
      <div className="app-container">
        <ViewAppointment />
      </div>
    </Router>
  );
}

export default App;
