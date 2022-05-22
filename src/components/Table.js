import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Datos</TableCell>
            <TableCell align="right">Cloro (mg/l)</TableCell>
            <TableCell align="right">Ph (PH)</TableCell>
            <TableCell align="right">Turbidez (NTU)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.cloro.map((row, index) => (
            <TableRow
              key={row.timestamp}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Dato {index}
              </TableCell>
                <TableCell align="right">{props.cloro[index].value}</TableCell>
                <TableCell align="right">{props.ph[index].value}</TableCell>
                <TableCell align="right">{props.turbidez[index].value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
