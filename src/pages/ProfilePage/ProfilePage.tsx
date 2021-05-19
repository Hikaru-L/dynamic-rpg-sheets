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
import { getCOCSheets } from "../../service/endpoints/userEndpoints";
import { SheetIdentifier } from "../../models/SheetIdentifier";
import { Link, Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";
import FullScreenLoader from "../../components/FullScreenLoader";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 88px;
  background-color: ${theme.palette.background.default};
`;

export const ProfilePage: React.FC = () => {
  // ======================================= STATE VARIABLES =======================================
  const [isLoading, setIsLoading] = useState(false);
  const [shouldRedirectToHome, setShouldRedirectToHome] = useState(false)
  const [cookies, setCookie] = useCookies(['auth'])
  const [sheets, setSheets] = useState<SheetIdentifier[]>([]);
  const handleGetSheets = async () => {
    setIsLoading(true);
    const sheets = await getCOCSheets();
    setSheets(sheets || []);
    setIsLoading(false);
  };
  useEffect(() => {
    handleGetSheets();
  }, []);
  const logout = async () => {
    setCookie('auth', '')
    setShouldRedirectToHome(true)
  }

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Box display="flex" flex="1" flexDirection="column">
          <Box alignItems="center">
            <Typography variant={TypographyVariant.H1} color="textPrimary">
              Your Characters
            </Typography>
          </Box>
          <Box
            mt={6}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            {sheets.length ? (
              sheets.map((sheet: SheetIdentifier) => {
                return (
                  <Box mb={2}>
                    <Button variant="contained" color="primary">
                      <Box m={1} width="200px">
                        {sheet.name}
                      </Box>
                    </Button>
                  </Box>
                );
              })
            ) : !isLoading ? (
              <Box mb={2}>
                <Typography variant={TypographyVariant.CAPTION} color="error">
                  Seems you dont have any characters yet, click on the button
                  below to get started!
                </Typography>
              </Box>
            ) : (
              <></>
            )}
            <Link to={"/create-character"} style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary">
                <Box m={1} width="200px">
                  CREATE CHARACTER
                </Box>
              </Button>
            </Link>
            <Box mt={2}>
            <Button variant="contained" color="primary" onClick={logout}>
                <Box m={1} width="200px">
                  LOGOUT
                </Box>
              </Button>
              {shouldRedirectToHome && <Redirect to={'/'}/>}
            </Box>
          </Box>
        </Box>
        <FullScreenLoader isLoading={isLoading}/>
      </ThemeProvider>
    </Wrapper>
  );
};
