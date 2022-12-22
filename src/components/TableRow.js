import React from "react";
import { useSelector } from "react-redux";
import dateFormatter from "../utils/dateFormatter";

const TableRow = (props) => {
  let { item } = props;
  let columns = useSelector((state) => state.columns);
  let apps = useSelector((state) => state.apps);

  return (
    <tr style={{ borderTop: "1px solid rgb(228,228,228)" }}>
      {
        // eslint-disable-next-line array-callback-return
        columns.map((column) => {
          if (column.show) {
            let content = "dsjkn";
            if (column.id === "1") {
              content = dateFormatter(item.date);
            } else if (column.id === "2") {
              //   console.log(apps[item.app]);
              content = apps[item.app];
            } else if (
              column.id === "3" ||
              column.id === "4" ||
              column.id === "5" ||
              column.id === "6"
            ) {
              content = item[column.label.toLowerCase()].toLocaleString();
            } else if (column.id === "7") {
              // content = `$${item[column.label.toLowerCase()].toFixed(2)}`;
              content = `$${item[column.label.toLowerCase()].toFixed(2)}`;
            } else {
              content = `${item[column.label.toLowerCase()]}%`;
            }

            return (
              <td
                key={column.id}
                style={{
                  textAlign: "center",
                  verticalAlign: "middle",
                  padding: "0.6rem 0",
                  fontSize: "0.8rem",
                }}
              >
                {content}
              </td>
            );
          }
        })
      }
    </tr>
  );
};

export default TableRow;
