import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import ScaleLoader from "react-spinners/ScaleLoader";
import { monthStatistics, dayStatistics } from "../../data";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from './stylesDateChart'
import { NativeSelect, Paper } from '@material-ui/core';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export default function DateChart() {
  const classes = useStyles()
  const [duration, setDuration] = useState('month')

  const handleChange = (event) => setDuration(event.target.value)

  const data = duration === 'month' ? [['x', 'sing-ups'], ...monthStatistics] : [['x', 'sing-ups'], ...dayStatistics]

  return (
    <div className="container">
      <div className={classes.titleDuaration}>
        <p className={classes.performance}> Performance snapshot </p>
        <NativeSelect
          className={classes.selectDuration}
          value={duration}
          onChange={(event) => handleChange(event)}
          name="duration"
          IconComponent={ExpandMoreIcon}
        >
          <option value="month">Last 30 days</option>
          <option value="day">Thursday</option>
        </NativeSelect>
      </div>
      <Paper>
        <div className={classes.firstGraphTitle}>
          <div className={classes.firstGraphTitleLeft}>
            <p className={classes.firstGraphTitleText}> Completed sign-ups over time </p>
            <div className={classes.firstGraphTitleLeftIcon}>
              <InfoOutlinedIcon style={{ fontSize: 14 }} />
            </div>
          </div>
          <div className={classes.firstGraphTitleRightIcon}>
            <SettingsOutlinedIcon style={{ fontSize: 22 }} />
          </div>
        </div>
        <div className={classes.graphSection}>
          <div>
            <p className={classes.graphSectionNumber}> 1327 </p>
            <p className={classes.graphSectionSingUps}> Sings-up completed </p>
            <div className={classes.graphSectionDescription}>
              <div className={classes.iconSection}>
                <ArrowUpwardIcon />
              </div>
              <p className={classes.graphSectionDescriptionText}>
                You have a 11% growth in<br /> comparison with previous month.
              </p>
            </div>
          </div>
          <Chart
            width={'640px'}
            height={'340px'}
            chartType="LineChart"
            loader={<ScaleLoader color={"#4a90e2"} className="loader" />}
            data={data}
            options={{
              vAxis: { 
                format: 'short', 
                gridlines: { count: 4 },
                textStyle: { color: '#637279', 
                   fontName: 'Rubik', 
                   fontSize: 16 } },
              hAxis: { 
                format: duration=== 'month' ? 'MMM d' : 'hh:mm', 
                gridlines: { color: "transparent", count: 5 },
                textStyle: { color: '#637279', 
                   fontName: 'Rubik', 
                   fontSize: 16 } 
              },
              curveType: 'function',
              legend: "none",
              chartArea: { left: "10px", top: "5px", width: "90%", height: "87%" },
              colors: ["#4a90e2"],
              lineWidth: 5
            }}
          />
        </div>
      </Paper>
    </div>)
}