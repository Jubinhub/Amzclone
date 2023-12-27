import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";
import ProductDetails from "./ProductDetails";
import OrderConfirmed from "./OrderConfirmed";
import OrderTracking from "./OrderTracking";
import YourCart from "./YourCart";
import ViewAccount from "./ViewAccount";
import Profile from "./Profile";
function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element = {<Login/>}/>
          <Route path="/homepage" element = {<HomePage/>}/>
          <Route path="/youraccount" element={<ViewAccount />} />
          <Route path="/myProfile__page" element={<Profile />} />
          <Route path="profilepage" element={<Login />} />
          <Route path="productdetails">
            <Route index element={<ProductDetails />} />
            <Route path="buynow" element={<OrderConfirmed />} />
          </Route>
          <Route path="cart">
            <Route index element={<YourCart />} />
          </Route>
          <Route path="/buynow" element={<OrderConfirmed />} />
          <Route path="/orderSummary" element={<OrderTracking />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
