import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
import { useEffect } from "react";

function createData(sl_no, timestamp, feedback, validation_status) {
  return { sl_no, timestamp, feedback, validation_status };
}

useEffect(() => {
  
})

const rows = [
  createData(1, "25/02/24 05:02:54", "hvjb lorevsjjcac  fievdiuhveusuviusvsiud viu bs  usfh soifh ius siu sud fsug fcusdv dsgvsbv usddoiwhof qfu foifhEOF UGE fuESHsLOa wp afhpaf  pojehi  p  esiehhe", "Pending"),
  createData(2, "25/02/24 05:02:54", "hvjb lorevsjjcac  fievdiuhveusuviusvsiud viu bs  usfh soifh ius siu sud fsug fcusdv dsgvsbv usddoiwhof qfu foifhEOF UGE fuESHsLOa wp afhpaf  pojehi  p  esiehhe", "Pending"),
];

const UserDashboard = () => {
  return (
    <div className="dashboard_wrapper">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">

          <TableHead>
            <TableRow>
              <TableCell>Sl. No.</TableCell>
              <TableCell>Timestamp</TableCell>
              <TableCell>Feedback</TableCell>
              <TableCell>Validation Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.sl_no}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.sl_no}
                </TableCell>
                <TableCell align="left">{row.timestamp}</TableCell>
                <TableCell align="left">{row.feedback}</TableCell>
                <TableCell align="left">{row.validation_status}</TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </div>
  );
};

export default UserDashboard;


