import React from "react";
import { useSelector } from "react-redux";
import "../styles/table.css";
import TableHeading from "./TableHeading";
import TableRow from "./TableRow";

const DataTable = () => {
  const { data } = useSelector((state) => state.data);
  const columns = useSelector((state) => state.columns);

  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map(
            (column) =>
              column.show && (
                <TableHeading
                  key={column.id}
                  id={column.id}
                  label={column.label}
                  summary={column.value}
                ></TableHeading>
              )
          )}
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => {
          return <TableRow key={index} item={item}></TableRow>;
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
