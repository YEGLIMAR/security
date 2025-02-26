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
} from "@mui/material";
import { Search, FilterList } from "@mui/icons-material";

export default function UsersPage() {
  // Estado para paginación
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");

  // Datos de prueba
  const users = [
    { id: 1, name: "Mario", lastName: "Perez", email: "mario@gmail.com", idDoc: "V-30123032", joinedAt: "12/12/2001" },
    { id: 2, name: "Ana", lastName: "Gomez", email: "ana@gmail.com", idDoc: "V-12345678", joinedAt: "15/08/2015" },
    { id: 3, name: "Luis", lastName: "Fernandez", email: "luisf@gmail.com", idDoc: "V-87654321", joinedAt: "20/05/2018" },
    { id: 4, name: "Sofia", lastName: "Martinez", email: "sofia.m@gmail.com", idDoc: "V-24681357", joinedAt: "07/09/2020" },
    { id: 5, name: "Carlos", lastName: "Ruiz", email: "carlosr@gmail.com", idDoc: "V-13579246", joinedAt: "10/03/2017" },
    { id: 6, name: "Elena", lastName: "Torres", email: "elena.t@gmail.com", idDoc: "V-98765432", joinedAt: "23/11/2019" },
  ];

  // Filtrar usuarios por búsqueda
  const filteredUsers = users.filter((user) =>
    Object.values(user).some((value) => value.toString().toLowerCase().includes(search.toLowerCase()))
  );

  // Manejo de paginación
  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

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

        {/* Barra de Búsqueda */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>

  {/* Barra de Búsqueda y Filtro */}
  <Box sx={{ display: "flex", gap: 2, alignItems: "center", width: "70%" }}>
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
  <IconButton
    sx={{
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
    }}
  >
    <FilterList sx={{ color: "#1a4568" }} />
  </IconButton>
</Box>

  {/* Botón "+ ADD"  */}
  <Button variant="contained" sx={{ backgroundColor: "#1a4568", color: "white", borderRadius: "20px" }}>
    + ADD
  </Button>
</Box>

        
        {/* Tabla de Usuarios */}
        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: "#1e3a5f" }}>
              <TableRow>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>ID</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Last Name</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Email</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>ID Document</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Joined At</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
                <TableRow key={user.id} sx={{ "&:nth-of-type(odd)": { backgroundColor: "#f5f5f5" } }}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.lastName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.idDoc}</TableCell>
                  <TableCell>{user.joinedAt}</TableCell>
                  <TableCell>
                    <Button variant="contained" size="small" sx={{ backgroundColor: "#1e3a5f", color: "white" }}>
                      Details
                    </Button>
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
          count={filteredUsers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
