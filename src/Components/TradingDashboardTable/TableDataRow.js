import React from "react";
import TableData from "./TableData";
import { getIcons } from "../../Utilities/tradingPairIcons";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  tablerow: {
    background: "rgba(0, 0, 0, 0.8)",
    color: "rgb(255, 255, 255)",
  },
  positive: {
    color: "green",

  },
  negative: {
    color: "red",

  },
 
});

const TableDataRow = ({ dataRow }) => {
  const classes = useStyles();
  console.log(dataRow, `trading`)

  dataRow.exchange = dataRow.exchange
    .replace(/\_/, " ")
    .split(" ")
    .map(word => {
      return word.charAt(0).toUpperCase() + word.substr(1);
    })
    .join(" ");

  dataRow.trading_pair = dataRow.trading_pair.toUpperCase();
  dataRow.trading_pair = dataRow.trading_pair.replace(/\_/, "/");

  if (String(dataRow.trade_price).length <= 3) {
    dataRow.trade_price = "$ " + String(dataRow.trade_price.toFixed(2));
  } else {
    dataRow.trade_price = "$ " + String(dataRow.trade_price);
  }

  if (String(dataRow.percentage).length <= 3) {
    dataRow.percentage = dataRow.percentage.toFixed(2);
  }

  const data = Object.values(dataRow);

  const icons = getIcons(dataRow.trading_pair);

  return (
    <TableRow className={classes.tablerow}>
      {data.map((item, i) => {
        if (i === 6) {
          return (
            <TableData
              item={item}
              positive={classes.positive}
              negative={classes.negative}
            />
          );
        } else if (i === 4) {
          return (
            <TableData item={item} icon1={icons.icon1} icon2={icons.icon2} />
          );
        }
        return <TableData item={item} />;
      })}
    </TableRow>
  );
};

export default TableDataRow;
