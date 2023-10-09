import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";



function AnimalCostsBar({data}){

    return(
        <div>
            
            <ComposedChart
            width={400}
            height={300}
            data={data}
            margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            }}
            >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total_costs" barSize={20} fill="#413ea0" />
            </ComposedChart>
        </div>
    )
}
export default AnimalCostsBar