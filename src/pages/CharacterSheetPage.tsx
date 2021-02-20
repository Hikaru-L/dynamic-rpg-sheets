import React, { useState, ChangeEvent, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, ThemeProvider, Grid } from "@material-ui/core";
import { TypographyVariant } from "../utils/TypographyVariant";
import { theme } from "../config/theme";
import styled from "styled-components";
import { customThemeProps } from "../config/customThemeProps";
import { CharacterInfo } from "./CharacterInfo";
import { COCInvestigator } from "../models/COCInvestigator";
import { CharacterBaseStats } from "./CharacterBaseStats";
import { MoveRateCalculator, DamageBonusAndBuildCalculator } from "../utils/COCCalculators";

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

  const calculateSpecialStats = () => {
    const {db: damageBonus, build} = DamageBonusAndBuildCalculator(character.stats.baseStats.strength, character.stats.baseStats.size)
    setCharacter({
      ...character,
      stats: {
        ...character.stats,
        specialStats: {
          ...character.stats.specialStats,
          sanityPoints: character.stats.baseStats.power,
          magicPoints: Math.floor(character.stats.baseStats.power/5),
          health: Math.floor((character.stats.baseStats.size + character.stats.baseStats.constitution)/10),
          currentHealth: Math.floor((character.stats.baseStats.size + character.stats.baseStats.constitution)/10),
          moveRate: MoveRateCalculator(character.stats.baseStats.strength, character.stats.baseStats.dexterity, character.stats.baseStats.size, character.info.age),
          damageBonus,
          build,
        }
      }
    })
  }

  useEffect(() => {
    calculateSpecialStats()
  }, [])
 

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
    const newStat = Number(event.target.value)
    if(newStat || event.target.value === '') {
      setCharacter({
        ...character,
        stats: {
          ...character.stats,
          baseStats: {
            ...character.stats.baseStats,
            [propName]: (newStat > 100 ? 100 : newStat),
          }
        }
      })
      calculateSpecialStats()
    }
  }

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Grid container spacing={2}>
          <Grid item md={5}>
            <CharacterInfo info={character.info} setInfo={setCharacterInfo}/>
          </Grid>
          <Grid item md={4}>
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
