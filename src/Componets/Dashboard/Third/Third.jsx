import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import './Third.css';
import { PieChart } from '@mui/x-charts/PieChart';

const Third = () => {
  const data = [
    { name: 'Category 1', value: 200 },
    { name: 'Category 2', value: 300 },
    { name: 'Category 3', value: 400 },
  ];
  return (
    <>
      <div>
        <Card sx={{ minWidth: 100 }}>
          <CardContent>
            <PieChart
              series={[
                {
                  data: data.map((item) => ({ ...item, value: item.value })),
                  innerRadius: 0,
                  outerRadius: 101,
                  paddingAngle: 5,
                  cornerRadius: 5,
                  startAngle: 0, // Start angle set to 0 degrees
                  endAngle: 180, // End angle set to 180 degrees
                  cx: 152,
                  cy: 153,
                },
              ]}
            />

            <Divider />
            <Typography sx={{ fontSize: 18, fontWeight: 600 }} gutterBottom>
              You're good!
            </Typography>
            <Typography
              sx={{ mb: 1.5, fontWeight: 500 }}
              color="text.secondary"
            >
              Your sales perfomance score is better tan 80% other users
            </Typography>
            <Typography variant="body2">
              <Button variant="outlined">Improve your score</Button>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
export default Third;
