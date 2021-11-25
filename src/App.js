import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Aboutus from "./pages/Aboutus/Aboutus";
import AllServices from "./pages/AllServices/AllServices/AllServices";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import SignUp from "./pages/Login/SignUp/SignUp";
import Navigation from "./pages/Share/Navigation/Navigation";

import SingleService from "./pages/Share/SingleService/SingleService";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* <Header></Header> */}
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/services" element={<AllServices />}></Route>
          <Route path="/singleService/:serviceId" element={<RequireAuth><SingleService /></RequireAuth>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
