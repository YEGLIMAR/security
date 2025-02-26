import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

export default function SecurityLayout() {
  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
      {/* Sidebar fijo a la izquierda */}
      <Sidebar />

      {/* Contenido dinámico */}
      <Box sx={{ flexGrow: 1, p: 3, backgroundColor: "#f4f4f4" }}>
        <Outlet /> {/* Aquí se renderizan las páginas (Usuarios, Perfiles) */}
      </Box>
    </Box>
  );
}
