import React from 'react'
import BarList from './bar/BarList'
import { useStyles } from './styleBranchChart'
import { NativeSelect, Paper } from '@material-ui/core'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'

export default function BarChart({branchesObject, branch, handleChange}) {
    const classes = useStyles()
    return(
      <div className="container">
        <Paper className={classes.branchChart}>
          <div className={classes.firstGraphTitle}>
            <div className={classes.firstGraphTitleLeft}>
              <p className={classes.firstGraphTitleText}> Completed sign-ups over time </p>
              <div className={classes.firstGraphTitleLeftIcon}>
                <InfoOutlinedIcon style={{ fontSize: 14 }} />
              </div>
            </div>
            <div className={classes.firstGraphTitleRight}>
                <NativeSelect
                className={classes.selectBranch}
                value={branch}
                onChange={handleChange}
                name=""
                IconComponent={()=>""}
                >
                  {Object.keys(branchesObject).map((name, index)=> <option key={index} value={name}> {name} </option>)}  
                </NativeSelect>
                <div className={classes.firstGraphTitleRightIcon}>
                    <SettingsOutlinedIcon style={{ fontSize: 22 }} />
                </div>
            </div>
          </div>
          <BarList branchesObject={branchesObject} branch={branch}/>
        </Paper>
      </div>
    )
}