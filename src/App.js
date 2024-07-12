import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import CartPage from "./page/CartPage";
function App() {
 

  return (
    <>
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
