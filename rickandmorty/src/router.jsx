import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import CharacterPage from "./pages/CharacterPage.jsx";
import CharacterDetailPage from "./pages/CharacterDetailPage.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/characters",
        element: <CharacterPage />,
      },
      {
        path: "/characters/:id/",
        element: <CharacterDetailPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
