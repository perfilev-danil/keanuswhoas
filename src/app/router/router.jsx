import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Home from "../../pages/Home/Home";
import Whoas from "../../pages/Whoas/Whoas";
import Favorites from "../../pages/Favorites/Favorites";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={routes.Whoas} element={<Whoas />} />
      <Route path={routes.Favorites} element={<Favorites />} />
    </Routes>
  );
};

export default AppRouter;
