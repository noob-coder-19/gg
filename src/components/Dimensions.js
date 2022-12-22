import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Dimension from "./Dimension";

const Dimensions = () => {
  const columns = useSelector((state) => state.columns);
  const dragItem = useRef();
  const dragOverItem = useRef();

  return (
    <div className="dimensions-container">
      {columns.map((column, index) => (
        <Dimension
          key={column.id}
          id={column.id}
          index={index}
          name={column.name}
          show={column.show}
          dragItem={dragItem}
          dragOverItem={dragOverItem}
        ></Dimension>
      ))}
    </div>
  );
};

export default Dimensions;
