import Sidebar from "./components/Sidebar";
import "./App.css";
import { useEffect, useState } from "react";
import SettingsIcon from "./components/SettingsIcon";
import Dimensions from "./components/Dimensions";
import { useDispatch } from "react-redux";
import { setData } from "./actions/data";
import axios from "axios";
import { evaluate } from "./actions/column";
import { setApps } from "./actions/apps";
import DataTable from "./components/DataTable";

function App() {
  const [startDate, setStartDate] = useState("2022-06-01");
  const [endDate, setEndDate] = useState("2022-06-01");
  const [open, setOpen] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      await axios({
        method: "GET",
        url: `http://go-dev.greedygame.com/v3/dummy/report?startDate=${startDate}&endDate=${endDate}`,
      }).then((res) => {
        dispatch(setData(res.data.data));
        dispatch(evaluate({ data: res.data.data, startDate, endDate }));
      });
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate]);

  useEffect(() => {
    const getApps = async () => {
      await axios({
        method: "GET",
        url: `http://go-dev.greedygame.com/v3/dummy/apps`,
      }).then((res) => {
        dispatch(setApps(res.data.data));
      });
    };

    getApps();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Sidebar></Sidebar>
      <div style={{ padding: "0 2.5vw" }}></div>
      <div className="content">
        <h1>
          <b>Analytics</b>
        </h1>

        <div className="container">
          <div className="date-picker">
            <span className="date-text">From &nbsp;</span>
            <input
              type="date"
              value={startDate}
              min="2022-06-01"
              max="2022-06-30"
              onChange={(e) => setStartDate(e.target.value)}
            />
            <span className="date-text"> &nbsp;To &nbsp;</span>
            <input
              type="date"
              value={endDate}
              min={startDate}
              max="2022-06-30"
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          <div className="settings-btn-container">
            <button
              className="settings-btn"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <div className="container-flex-row">
                <SettingsIcon></SettingsIcon>
                Settings
              </div>
            </button>
          </div>
        </div>

        <div
          className="settings-container"
          style={{ display: open ? "block" : "none" }}
        >
          <h5>Dimensions and Metrics</h5>
          <Dimensions></Dimensions>
          <div className="btn-grp-container">
            <button
              style={{
                backgroundColor: "white",
                border: "1px solid #eee",
                borderRadius: "4px",
                padding: "0.5rem 1rem",
                fontSize: "0.85rem",
                color: "rgb(20,111,237)",
                marginRight: "1rem",
                cursor: "pointer",
              }}
              onClick={() => {
                setOpen(!open);
              }}
            >
              Close
            </button>

            <button
              style={{
                backgroundColor: "rgb(20,111,237)",
                border: "1px solid rgb(20,111,237)",
                borderRadius: "4px",
                padding: "0.5rem 1rem",
                fontSize: "0.85rem",
                color: "white",
                cursor: "pointer",
              }}
            >
              Apply Changes
            </button>
          </div>
        </div>

        <DataTable></DataTable>
      </div>
    </div>
  );
}

export default App;
