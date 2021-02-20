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
        <Box display="flex" borderRadius="4px" border="1px solid black" padding="16px">
          <Typography variant={TypographyVariant.H4}>{characterId}</Typography>
        </Box>
      </ThemeProvider>
    </Wrapper>
  );
};
