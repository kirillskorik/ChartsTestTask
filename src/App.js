import "./App.css";
import DateChart from "./components/dateChart/DateChart";
import BranchChartContainer from "./components/branchChart/BranchChartContainer";

function App() {
  return (
    <div className="main">
      <DateChart />
      <BranchChartContainer />
    </div>
  );
}

export default App;
