import React from 'react'
import { useStyles } from './styleBar'
import Bar from './Bar'

export default function BarList({branchesObject, branch}) {
    const classes = useStyles()

    return(
        <div className={classes.graphSection}>
           {branchesObject[branch].map((el, i)=> {
               const targetIndex = i + 1
               const dif = targetIndex < branchesObject[branch].length ? el.value - branchesObject[branch][targetIndex].value : null
            return (<Bar 
                key={`${i}${el.label}`} 
                label={el.label} 
                value={el.value} 
                valueDifference={dif} 
                type={el.type}
                />)})}
        </div>
    )
}