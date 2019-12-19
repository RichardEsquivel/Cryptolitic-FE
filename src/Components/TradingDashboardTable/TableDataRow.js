import React from "react";
import TableData from "./TableData";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  head: {
    position: "sticky",
    top: 0
  },
  tablerow: {
    background: "rgba(0, 0, 0, 0.8)",
    color: "rgb(255, 255, 255)",
    borderBottom: "1px solid rgba(35, 32, 44, 0.8)"
  }
});

const TableDataRow = ({ dataRow }) => {
  const classes = useStyles();

  const data = Object.values(dataRow);
  return (
    <TableRow className={classes.tablerow}>
      {data.map(item => (
        <TableData item={item} />
      ))}
    </TableRow>
  );
};

export default TableDataRow;
