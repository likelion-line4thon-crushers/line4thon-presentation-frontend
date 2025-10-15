import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainPage from "./pages/MainPage";
import PDFTestPage from "./pages/PDFTestPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "pdf-test",
        element: <PDFTestPage />,
      },
    ],
  },
]);

export default router;
