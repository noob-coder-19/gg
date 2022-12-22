import React from "react";
import { useDispatch } from "react-redux";
import { toggle, swap } from "../actions/column";

const Dimension = (props) => {
  const { name, show, id, index, dragItem, dragOverItem } = props;
  const dispatch = useDispatch();

  const handleDragStart = (e, position) => {
    dragItem.current = position;
  };

  const handleDragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const handleDragEnd = (e) => {
    dispatch(swap(dragItem.current, dragOverItem.current));
  };

  return (
    <button
      style={{
        width: "10rem",
        backgroundColor: "white",
        border: "1px solid #eee",
        borderRadius: "4px",
        padding: "0.5rem 1rem",
        fontSize: "0.75rem",
        borderLeft: show ? "4px solid rgb(20,111,237)" : "1px solid #eee",
        textAlign: "left",
      }}
      onClick={() => {
        dispatch(toggle(id));
      }}
      draggable
      onDragStart={(e) => {
        handleDragStart(e, index);
      }}
      onDragEnter={(e) => {
        handleDragEnter(e, index);
      }}
      onDragEnd={handleDragEnd}
    >
      {name}
    </button>
  );
};

export default React.memo(Dimension);
