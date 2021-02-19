import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  graphSection: {
    display: "flex",
    marginTop: "30px",
    padding: "0 40px 40px 25px",
  },
  itemBar: {
    height: "400px",
    display: "flex",
    alignItems: "center",
    marginLeft: "15px",
  },
  bar: {
    width: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
  },
  barBasic: {
    background: "#d7ebff",
  },
  barServices: {
    background: "#d4eeea",
  },
  barLabel: {
    transform: "rotate(-90deg)",
    whiteSpace: "nowrap",
    color: "#323a44",
    fontSize: "18px",
  },
  differenceBars: {
    marginLeft: "15px",
    marginTop: "35px",
  },
  difNumber: {
    color: "#9b9b9b",
    fontSize: "14px",
    marginTop: "10px",
    textAlign: "center",
  },
  difIcon: {
    width: "50px",
    height: "50px",
    background: "#e3e3e3",
    borderRadius: "50%",
    color: "#323a44",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    border: "2px solid #323a44",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  valueBar: {
    margin: " 20px 0 0 15px",
    width: "80px",
    textAlign: "center",
    color: "#323a44",
    fontSize: "18px",
    fontWeight: "500",
  },
});
