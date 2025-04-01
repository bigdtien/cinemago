import React, { useContext } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { ContextActors } from "../../../../contexts/ActorsProvider";


const TableActors = () => {
    const actors = useContext(ContextActors) || [];
  return (
    <TableContainer 
      component={Paper} 
      sx={{
        width: "100%", // Chiếm toàn bộ phần tử cha
        maxWidth: "1200px", // Giới hạn chiều rộng tối đa
        margin: "auto",
        mt: 3,
        borderRadius: 3,
        boxShadow: "0 4px 10px rgba(255, 255, 255, 0.1)",
        backgroundColor: "#1e1e1e"
      }}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#000" }}>
            <TableCell sx={{ color: "#fff", fontWeight: "bold", fontSize: "18px" }}>#</TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: "bold", fontSize: "18px" }}>Name</TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: "bold", fontSize: "18px" }}>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {actors.map((actor, index) => (
            <TableRow 
              key={actor.id} 
              sx={{
                backgroundColor: "#444",
                "&:hover": { backgroundColor: "#333", transition: "0.3s" }
              }}
            >
              <TableCell sx={{ color: "#fff", fontSize: "16px" }}>{index + 1}</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold", fontSize: "16px" }}>{actor.name}</TableCell>
              <TableCell sx={{ color: "#bbb", fontSize: "16px" }}>{actor.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>  );
};

export default TableActors;
