import React from 'react';
import {
  Grid,
  FormControl,
  InputLabel,
  TextField,
  InputAdornment,
  MenuItem,
  Button,
  Stack,
  Select,
  Box,
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

const FormComponent = ({ info, setInfo, handleSubmit, update }) => {
  const handleChange = e => {
    e.preventDefault();
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;
    // console.log(name, value);
    setInfo({ ...info, [name]: value });
  };

  return (
    <div>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
        style={{ width: '300' }}
      >
        <p className="contact-header">
          <a
            href="https://clarusway.com/"
            className="design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>{'<Clarusway/> '}</code>
          </a>

          <span className="design header">design</span>
        </p>
        <h2 className="contact-header Add">Add Contact</h2>

        <Box style={{ backgroundColor: 'white', padding: '20px' }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3} direction="column">
              <TextField
                variant="outlined"
                name="username"
                value={info.username}
                onChange={handleChange}
                placeholder="Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                variant="outlined"
                name="phoneNumber"
                value={info.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneEnabledIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel style={{ paddingLeft: '20px' }}>Gender</InputLabel>
                <Select
                  label="Gender"
                  name="gender"
                  variant="outlined"
                  value={info.gender}
                  onChange={handleChange}
                >
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" type="submit" value="Submit">
                {update && 'UPDATE'}
                {!update && 'ADD'}
              </Button>
            </Stack>
          </form>
        </Box>
      </Grid>
    </div>
  );
};

export default FormComponent;
