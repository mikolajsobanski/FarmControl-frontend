/* eslint-disable no-shadow */
import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const RADIAN = Math.PI / 180;

const cx = 100;
const cy = 80;
const iR = 40;
const oR = 80;
const value = 50;

const needle = (value, data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />,
  ];
};

function HealthStatusPie({healthy, ill}){
  const data = [
    { name: `${ill} Chory`, value: ill, color: '#ff0000' },
    { name: `${healthy} Zdrowy`, value: healthy, color: '#00ff00' },
  ];

    return (
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={200} height={200}>
                <Pie
                dataKey="value"
                startAngle={180}
                endAngle={0}
                data={data}
                cx={cx}
                cy={cy}
                innerRadius={iR}
                outerRadius={oR}
                fill="#8884d8"
                stroke="none"
                >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                </Pie>
                {needle(value, data, cx, cy, iR, oR, '#d0d000')}
                <Legend></Legend>
            </PieChart>
        </ResponsiveContainer>
      
      
    );
  }
export default HealthStatusPie
