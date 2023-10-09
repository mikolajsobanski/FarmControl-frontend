import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";


const COLORS = ['#0088FE', '#00C49F',];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
function TaskRatioPie({inProgres, complete}){
    const data = [
        { name: `${inProgres} Zadań w trakcie`, value: inProgres },
        { name: `${complete} Zadań ukończonych`, value: complete },
        
      ];

    return(
        <div>
            
            <PieChart width={250} height={250}>
                <Pie
                    data={data}
                    cx={100}
                    cy={100}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend />
            </PieChart>
        </div>
    )
}
export default TaskRatioPie