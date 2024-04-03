import "./App.css";
import {
  Box,
  Typography,
  FormControlLabel,
  InputBase,
  Checkbox,
  Button,
  Link,
} from "@mui/material";

import movieBG from "./images/movieBG.png";
import { useState } from "react";
// import { InputBase, FormControlLabel } from "@mui/material";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email} and Password: ${password}`);
    setEmail("");
    setPassword("");
  }
  return (
    <div>
      <Box
        style={{
          backgroundImage: `url{${movieBG}}`,
          height: "100vh",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundSize: "cover",
        }}
      >
        <Box
          style={{
            width: "100%",
            background: "rgb(0.0.0.75)",
            maxWidth: "380px",
            height: "50%",
            padding: 20,
          }}
        >
          <Typography variant="h2" mb={3} fontSize="1.25rem">
            Sign In
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                color: "#fff",
              }}
            />
          </Typography>
          <InputBase
            placeholder="Email Address"
            type="email"
            fullWidth={true}
            // required={true}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              backgroundColor: "white",
              padding: '"5px 10px"',
              fontSize: "15px",
              marginBottom: 2,
            }}
          >
          </InputBase>
          <InputBase
            placeholder="Password"
            type="password"
            fullWidth={true}
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              backgroundColor: "white",
              padding: '"5px 10px"',
              fontSize: "15px",
              marginBottom: 2,
            }}
          />

          <FormControlLabel
            control={
              <>
                <Checkbox defaultChecked />
              </>
            }
            label="Remember me"
          />
          <Button
            variant="contained"
            fullWidth={true}
            sx={{
              marginTop: 2,
            }}
            type="Submit"
          >
            Sign In
          </Button>
          <Box>
            <Typography fontWeight="300" mt={2}>
              <Link open href="#" underline="hover" color="white" />
              Forgot Password
            </Typography>
            <Typography fontWeight="300" mt={2}>
              <Link open href="#" underline="hover" color="white" />
              Don't have an account? Sign up
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
