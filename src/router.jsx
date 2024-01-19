import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Coin from "./pages/Coin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: "/coin/:coin",
        element: <Coin />
      }
    ]
  }
])

export default router