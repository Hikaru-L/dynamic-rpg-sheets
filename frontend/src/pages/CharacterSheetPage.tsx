import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, ThemeProvider } from "@material-ui/core";
import { TypographyVariant } from "../utils/TypographyVariant";
import { theme } from "../config/theme";
import styled from "styled-components";
import { customThemeProps } from "../config/customThemeProps";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 88px;
  background-color: ${customThemeProps.colors.blueishGray};
`

export const CharacterSheetPage: React.FC = () => {
  const { characterId } = useParams();

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Box>
          <Typography variant={TypographyVariant.H4}>{characterId}</Typography>
        </Box>
      </ThemeProvider>
    </Wrapper>
  );
};
