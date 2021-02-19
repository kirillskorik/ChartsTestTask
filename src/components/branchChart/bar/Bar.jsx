import React from 'react'
import { useStyles } from './styleBar'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export default function Bar({label, value, type, valueDifference}) {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.itemBar}>
                <div className={`${classes.bar} ${type === 'BASIC' ? classes.barBasic : classes.barServices}`} style={{height: `${value}%`}}>
                    <p className={classes.barLabel}> {label} </p>
                </div>
                {valueDifference === null ? "" :
                    <div className={classes.differenceBars}>
                        <div className={classes.difIcon}>
                            <span className={classes.circle}> <ArrowDownwardIcon style={{fontSize: "17px"}}/> </span>
                        </div>
                        <div className={classes.difNumber}> -{valueDifference}% </div>
                    </div>
                }
            </div>
            <div className={classes.valueBar}>
                {value}%
            </div>
        </div>
    )
}