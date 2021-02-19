import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  branchChart: {
    marginTop: "30px",
  },
  titleDuaration: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: "15px",
  },
  performance: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#323a44",
  },
  selectBranch: {
    borderRadius: "6px",
    background: "#ececec",
    paddingLeft: "10px",
    fontSize: "12px !important",
    color: "#323a44",
    "&&&:before": {
      display: "none",
    },
  },
  firstGraphTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 16px 16px 20px",
    width: "100%",
    borderBottom: "1px solid #ecf2ff",
    boxSizing: "border-box",
  },
  firstGraphTitleLeft: {
    display: "flex",
    alignItems: "center",
  },
  firstGraphTitleText: {
    fontSize: "18px",
    marginRight: "15px",
    color: "#323a44",
  },
  firstGraphTitleLeftIcon: {
    background: "#f2f2f2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    color: "#323a44",
  },
  firstGraphTitleRight: {
    display: "flex",
  },
  firstGraphTitleRightIcon: {
    marginLeft: "15px",
    width: "30px",
    height: "30px",
    background: "#ececec",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "6px",
    color: "#323a44",
  },
});
