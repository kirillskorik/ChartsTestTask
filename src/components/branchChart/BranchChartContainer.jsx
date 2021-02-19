import React, { useState } from 'react';
import { NodeMap } from '../../data'
import BranchChart from './BranchChart'

export default function BranchChartContainer() {

    const branches = [];
    const getBranches = (newBranch, item) => {
        item.adjList.forEach((key) => {
            if (NodeMap[key].adjList.length <= 0) {
                branches.push([...newBranch, NodeMap[key]]);
            } else {
                getBranches([...newBranch, NodeMap[key]], NodeMap[key]);
            }
        });
    };
    getBranches([NodeMap.node1], NodeMap.node1);

    const branchesObject = branches.reduce((acc, branch, index) => {
        acc[`branch${index+1}`] = branch
        return acc
    },{})

    const [initName] = Object.keys(branchesObject)
    const [branch, setBranch] = useState(initName)
    const handleChange = (event) => setBranch(event.target.value)

    return <BranchChart branchesObject={branchesObject} branch={branch} handleChange={handleChange} />
  }