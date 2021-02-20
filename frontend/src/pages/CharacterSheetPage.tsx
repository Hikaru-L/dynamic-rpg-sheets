import React, { useState, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, ThemeProvider, Grid } from "@material-ui/core";
import { TypographyVariant } from "../utils/TypographyVariant";
import { theme } from "../config/theme";
import styled from "styled-components";
import { customThemeProps } from "../config/customThemeProps";
import { CharacterInfo } from "./CharacterInfo";
import { COCInvestigator } from "../models/COCInvestigator";
import { CharacterBaseStats } from "./CharacterBaseStats";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 88px;
  background-color: white;
`;

export const CharacterSheetPage: React.FC = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState<COCInvestigator>(new COCInvestigator())
  const setCharacterInfo = (propName: string) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCharacter({
      ...character,
      info: {
        ...character.info,
        [propName]: event.target.value,
      }
    })
  }

  const setCharacterBaseStats = (propName: string) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCharacter({
      ...character,
      stats: {
        ...character.stats,
        baseStats: {
          ...character.stats.baseStats,
          [propName]: Number(event.target.value),
        }
      }
    })
  }

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <CharacterInfo info={character.info} setInfo={setCharacterInfo}/>
          </Grid>
          <Grid item md={3}>
            <CharacterBaseStats stats={character.stats} setStats={setCharacterBaseStats}/>
          </Grid>
          <Grid item md={3}>
            <Box
              display="flex"
              borderRadius="4px"
              border={`2px solid ${customThemeProps.colors.waterGreen}`}
              padding="16px"
            >
              <Typography variant={TypographyVariant.H4}>
                {characterId}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Wrapper>
  );
};
