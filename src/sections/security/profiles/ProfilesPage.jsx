import { useState } from "react";
import {
  Paper,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  IconButton,
  TextField,
  InputAdornment,
  Button,
  Checkbox,
} from "@mui/material";
import { Search, Delete, Edit } from "@mui/icons-material";

export default function ProfilesPage() {
    
  // Estado para paginación y búsqueda
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");

  const profiles = [
    { id: 2456, profile: "Librarian" },
    { id: 2458, profile: "Jury" },
    { id: 2638, profile: "Student" },
  ];

  // Filtrar perfiles por búsqueda
  const filteredProfiles = profiles.filter((profile) =>
    profile.profile.toLowerCase().includes(search.toLowerCase())
  );

  // Manejar cambio de página
  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  // Manejar cambio de filas por página
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: 3 }}>
      <Paper
        elevation={20}
        sx={{
          width: "90%",
          padding: 3,
          borderRadius: 2,
          backgroundColor: "white",
        }}
      >
        {/* Barra de Búsqueda (donde dice search)*/}
        <Box sx={{ 
            display: "flex", 
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 2,
            width: "100%"
            
            }}>
          
          <TextField
            variant="outlined"
            placeholder="Search..."
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              width: "400px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#1a4568",
                },
                "&:hover fieldset": {
                  borderColor: "#1a4568",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1a4568",
                },
              },
            }}

            InputProps={{ 
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
              sx: { borderRadius: "20px" },
            }}
          />

          {/* Botón de Eliminar */}
          <Box>
            <IconButton sx={{
                gap: 2,
                border: "1px solid #1a4568", 
                borderRadius: "20px", 
                padding: "8px", 
                transition: "0.2s", 
                "&:hover": {
                    borderColor: "#14406a", 
                },
                "&:focus": {
                    backgroundColor: "rgba(4, 29, 67, 0.2)", 
                },
            }}>
              <Delete />
            </IconButton>

            {/* Botón de editar */}
            <IconButton sx={{
                gap: 2,
                border: "1px solid #1a4568", 
                borderRadius: "20px", 
                padding: "8px", 
                transition: "0.2s", 
                "&:hover": {
                        borderColor: "#14406a" }}}>
                <Edit />
            </IconButton>
            <Button variant="contained" sx={{ backgroundColor: "#1a4568", color: "white", borderRadius: "20px" }}>
              + Add
            </Button>
          </Box>
        </Box>

        {/* Tabla de perfiles */}
        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: "#1a4568" }}>
              <TableRow>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  <Checkbox sx={{color: "#1a4568"}}/> {/* Checkbox, arreglar cosita*/}

                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>ID</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Profile</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold", textAlign: "center", width:200}}>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredProfiles.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((profile) => (
                <TableRow key={profile.id} sx={{ "&:nth-of-type(odd)": { backgroundColor: "#f5f5f5" } }}>
                  <TableCell>
                    <Checkbox sx={{color:"#9c9c9c"}} />
                  </TableCell>
                  <TableCell>{profile.id}</TableCell>
                  <TableCell>{profile.profile}</TableCell>
                  <TableCell sx={{display: "flex", justifyContent: "flex-end"}}>
                    <Button size="small" sx={{ marginRight: 2, background: "#1e3a5f", color: "white" }}>Details</Button>
                    <Button size="small"  sx={{ marginRight: 2, background: "#1e3a5f", color: "white" }}>Permissions</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Paginación */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredProfiles.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
