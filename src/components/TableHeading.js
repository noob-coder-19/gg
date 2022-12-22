import React from "react";

const TableHeading = (props) => {
  let { label, summary, id } = props;

  if (id === "8" || id === "9") {
    summary = summary.toFixed(3) + "%";
  } else if (id === "7") {
    summary = "$" + summary.toFixed(3);
  } else {
    summary = Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 2,
    }).format(summary);
  }

  return (
    <th>
      <svg
        stroke="currentColor"
        fill="rgb(128,127,128)"
        strokeWidth={0}
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        cursor={"pointer"}
      >
        <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
      </svg>

      <h4 style={{ color: "rgb(128, 127, 128)", margin: "0.25rem 0 0.7rem 0" }}>
        {label}
      </h4>
      <h5
        style={{
          fontSize: "1.4rem",
          fontWeight: 400,
          marginBottom: "0.7rem",
        }}
      >
        {summary}
      </h5>
    </th>
  );
};

export default TableHeading;
