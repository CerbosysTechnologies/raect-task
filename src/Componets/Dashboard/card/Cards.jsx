import React from 'react'
import "./Cards.css"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Cards() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (

    <>
      <div className='main'>
        <div className='flex jc-sb'>
          <h1 className='dashboard-head'>Dashboard</h1>
          <div className='flex gap-0 items-center'>
            <p>Compare to </p>
            <FormControl sx={{
              m: 1,
              minWidth: 100
            }}>
              {/* <InputLabel id="demo-simple-select-label"></InputLabel> */}
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={1}>Last Year</MenuItem>
                <MenuItem value={2}>Current Year</MenuItem>
                <MenuItem value={3}>Next Year</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className='flex gap-1 jc-sb cards-div'>
          <Card sx={{ minWidth: 100 }} className='w-full'>
            <CardContent>
              <Typography sx={{ fontSize: 20, fontWeight: 500 }} color="text.secondary" gutterBottom>
                Purchase
              </Typography>
              <Typography variant="body2" className='flex items-center gap-0'>
                <span className='card-h-2'>4294</span>
                <span className='card-span flex items-center'>+32% <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4l4 4l5-5m0 0h-3.207M20 9v3.207" /></svg></span>
              </Typography>
            </CardContent>

          </Card>
          <Card sx={{ minWidth: 100 }} className='w-full'>
            <CardContent>
              <Typography sx={{ fontSize: 20, fontWeight: 500 }} color="text.secondary" gutterBottom>
                Revenue
              </Typography>
              <Typography variant="body2" className='flex items-center gap-0'>
                <span className='card-h-2'>$322,3k</span>
                <span className='card-span flex items-center'>+49% <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4l4 4l5-5m0 0h-3.207M20 9v3.207" /></svg></span>
              </Typography>
            </CardContent>

          </Card>
          <Card sx={{ minWidth: 100 }} className='w-full'>
            <CardContent>
              <Typography sx={{ fontSize: 20, fontWeight: 500 }} color="text.secondary" gutterBottom>
                Refunds
              </Typography>
              <Typography variant="body2" className='flex items-center gap-0'>
                <span className='card-h-2'>$8,2k</span>
                <span className='card-span down flex items-center'>+7% <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256"><path fill="currentColor" d="M236 208a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V48a12 12 0 0 1 24 0v11l52 52l23.51-23.52a12 12 0 0 1 17 0L188 139v-11a12 12 0 0 1 24 0v40q0 .6-.06 1.2c0 .16-.05.33-.07.49s-.06.45-.1.67s-.09.38-.14.56s-.09.39-.15.58l-.19.54c-.07.19-.13.38-.21.56s-.15.34-.23.5s-.17.38-.27.57s-.18.3-.27.45s-.21.38-.33.56s-.24.32-.36.47s-.22.32-.34.47s-.46.53-.71.78l-.08.1l-.1.08c-.25.25-.51.48-.78.71l-.46.34c-.16.12-.32.25-.48.36s-.37.22-.55.33s-.3.19-.46.27s-.37.18-.56.27s-.33.16-.51.23l-.54.21l-.57.19a4.92 4.92 0 0 1-.55.14l-.58.15l-.64.09l-.53.08a11.51 11.51 0 0 1-1.18.05h-40a12 12 0 0 1 0-24h11l-43-43l-23.51 23.52a12 12 0 0 1-17 0L44 93v103h180a12 12 0 0 1 12 12"/></svg></span>
              </Typography>
            </CardContent>

          </Card>
        </div>
      </div>
    </>
  )
}

export default Cards