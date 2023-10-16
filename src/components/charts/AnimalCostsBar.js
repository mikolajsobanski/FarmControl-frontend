import React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";



function AnimalCostsBar({data}){

    return(
        
        <ResponsiveContainer width="100%" height="100%">
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
        
        </ResponsiveContainer>
           
    )
}
export default AnimalCostsBar