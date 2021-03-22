import React, { useState, useEffect, ChangeEvent } from "react";
import {
  Box,
  ThemeProvider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
  TextField,
} from "@material-ui/core";
import { theme } from "../../config/theme";
import styled from "styled-components";
import { TypographyVariant } from "../../utils/TypographyVariant";
import { signUp, login } from "../../service/endpoints/authEndpoints";
import { useCookies } from "react-cookie";
import { Redirect } from "react-router-dom";
import FullScreenLoader from "../../components/FullScreenLoader";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 88px;
  background-color: ${theme.palette.background.default};
`;

export const HomePage: React.FC = () => {
  // ======================================= STATE VARIABLES =======================================
  const [isSignupDialogOpen, setIsSignupDialogOpen] = useState(false);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(['auth'])
  const [errorMessage, setErrorMessage] = useState("");
  const [shouldRedirectToProfile, setShouldRedirectToProfile] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const handleCloseDialog = () => {
    setUsername("");
    setPassword("");
    setIsSignupDialogOpen(false);
    setIsLoginDialogOpen(false);
    setErrorMessage("");
  };
  const handleSetUsername = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUsername(event.target.value);
  };

  const handleSetPassword = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(event.target.value);
  };
  const handleLogin = async () => {
    setIsLoading(true)
    const response: boolean = await login(username, password);
    if (response) {
      setShouldRedirectToProfile(true)
    } else {
      setIsLoading(false)
      setErrorMessage("Wrong username or password.");
    }
  };
  const handleSignup = async () => {
    setIsLoading(true)
    const response: boolean = await signUp(username, password);
    if (response) {
      setShouldRedirectToProfile(true)
    } else {
      setIsLoading(false)
      setErrorMessage(
        "Username already taken, please choose a different name."
      );
    }
  };

    useEffect(() => {
      if(cookies.auth) {
        setShouldRedirectToProfile(true)
      }
    }, [])

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Box display="flex" flex="1" flexDirection="column">
          <Box alignItems="center">
            <Typography variant={TypographyVariant.H1} color="textPrimary">
              Dynamic RPG Sheets
            </Typography>
          </Box>
          <Box mt={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsLoginDialogOpen(true)}
            >
              <Box m={1} width="200px">
                LOGIN
              </Box>
            </Button>
          </Box>
          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsSignupDialogOpen(true)}
            >
              <Box m={1} width="200px">
                SIGN UP
              </Box>
            </Button>
          </Box>
          <Box mt={2}>
            <Button variant="contained" color="primary">
              <Box m={1} width="200px">
                DICE ROLLER
              </Box>
            </Button>
          </Box>
        </Box>
        <Dialog open={isSignupDialogOpen} onClose={handleCloseDialog}>
          <Box width={"500px"}>
            <DialogTitle>{"Create new account"}</DialogTitle>
            <DialogContent>
              <Box mb={2}>
                <TextField
                  label={"Username"}
                  //@ts-ignore
                  value={username}
                  onChange={handleSetUsername}
                  variant={"outlined"}
                  style={{ width: "100%" }}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  label={"Password"}
                  //@ts-ignore
                  value={password}
                  onChange={handleSetPassword}
                  variant={"outlined"}
                  style={{ width: "100%" }}
                />
              </Box>
              <Box mb={1} justifyContent="flex-end" display="flex">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSignup}
                >
                  <Box m={1} width="auto">
                    CREATE ACCOUNT
                  </Box>
                </Button>
              </Box>
              <Box mb={3}>
                <Typography variant={TypographyVariant.CAPTION} color="error">
                  {errorMessage}
                </Typography>
              </Box>
            </DialogContent>
          </Box>
        </Dialog>
        <Dialog open={isLoginDialogOpen} onClose={handleCloseDialog}>
          <Box width={"500px"}>
            <DialogTitle>{"Log in your account"}</DialogTitle>
            <DialogContent>
              <Box mb={2}>
                <TextField
                  label={"Username"}
                  //@ts-ignore
                  value={username}
                  onChange={handleSetUsername}
                  variant={"outlined"}
                  style={{ width: "100%" }}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  label={"Password"}
                  //@ts-ignore
                  value={password}
                  onChange={handleSetPassword}
                  variant={"outlined"}
                  style={{ width: "100%" }}
                />
              </Box>
              <Box mb={3} justifyContent="flex-end" display="flex">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleLogin}
                >
                  <Box m={1} width="auto">
                    LOGIN
                  </Box>
                </Button>
              </Box>
              <Box mb={3}>
                <Typography variant={TypographyVariant.CAPTION} color="error">
                  {errorMessage}
                </Typography>
              </Box>
            </DialogContent>
          </Box>
        </Dialog>
        {shouldRedirectToProfile && <Redirect to={'/profile'}/>}
        <FullScreenLoader isLoading={isLoading}/>
      </ThemeProvider>
    </Wrapper>
  );
};
