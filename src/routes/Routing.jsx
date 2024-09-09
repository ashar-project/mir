import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Menu } from "../modules/Menu";

const RegistrationPage = lazy(() => import("../pages/RegistrationPage"));
const WorldPage = lazy(() => import("../pages/WorldPage"));

export const Routing = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path={SitePaths.registration} element={<RegistrationPage />} />
        <Route path={SitePaths.world} element={<WorldPage />} />
      </Routes>
    </div>
  );
};

const SitePaths = {
  world: "/",
  registration: "/registration",
};
