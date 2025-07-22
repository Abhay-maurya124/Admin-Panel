import React from 'react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', uv: 23 },
  { name: 'Feb', uv: 249 },
  { name: 'Mar', uv: 23 },
  { name: 'Apr', uv: 494 }
];

const LineGraph = () => {
  return (
    <div>
      <LineChart width={300} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Line 
          type="monotone" 
          dataKey="uv" 
          stroke="#8884d8" 
          strokeWidth={2}
        />
      </LineChart>
    </div>
  );
};

export default LineGraph;