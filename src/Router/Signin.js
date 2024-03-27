import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
const navigate=useNavigate();
const handleNext=()=>(
    navigate('/Login')
)
  return (
    <>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    <img onClick={handleNext} src="data:image/jpeg;base64,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"/>
    </>
  );
}