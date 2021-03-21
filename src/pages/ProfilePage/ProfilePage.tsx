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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 88px;
  background-color: ${theme.palette.background.default};
`;

export const ProfilePage: React.FC = () => {
  // ======================================= STATE VARIABLES =======================================

  useEffect(() => {}, []);

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Box display="flex" flex="1" flexDirection="column">
          <Box alignItems="center">
            <Typography variant={TypographyVariant.H1} color="textPrimary">
              Characters
            </Typography>
          </Box>
          <Box mt={6}>
            <Button
              variant="contained"
              color="primary"
            >
              <Box m={1} width="200px">
                CREATE CHARACTER
              </Box>
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
    </Wrapper>
  );
};
