import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SecurityLayout from "../layouts/SecurityLayout";
import UsersPage from "../sections/security/users/UsersPage";
import ProfilesPage from "../sections/security/profiles/ProfilesPage";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Rutas dentro de las secciones de Seguridad */}
        <Route path="/security" element={<SecurityLayout />}>
          <Route path="/security/users" element={<UsersPage />} />
          <Route path="/security/profiles" element={<ProfilesPage />} />
        </Route>

        {/* Redirección a Seguridad si el usuario va a "/" */}
        <Route path="/" element={<SecurityLayout />}>
          <Route index element={<UsersPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
