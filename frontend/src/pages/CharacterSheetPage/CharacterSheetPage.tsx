import React, { useState, ChangeEvent, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, ThemeProvider } from "@material-ui/core";
import { theme } from "../../config/theme";
import styled from "styled-components";
import { CharacterInfo } from "./CharacterInfo";
import { CharacterProfile } from "./CharacterProfile";
import {
  COCInvestigator,
  InvestigatorSpecialStats,
  InvestigatorBaseStats,
  InvestigatorSkills,
} from "../../models/COCInvestigator/COCInvestigator";
import { CharacterBaseStats } from "./CharacterBaseStats";
import {
  MoveRateCalculator,
  DamageBonusAndBuildCalculator,
} from "../../utils/COCCalculators";
import { CharacterOccupationAndSkills } from "./CharacterOccupationAndSkills";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 88px;
  background-color: white;
`;
const baselineInvestigator = new COCInvestigator()

export const CharacterSheetPage: React.FC = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState<COCInvestigator>(
    new COCInvestigator()
  );
  const [baseStats, setBaseStats] = useState<InvestigatorBaseStats>(
    character.stats.baseStats
  );
  const [specialStats, setSpecialStats] = useState<InvestigatorSpecialStats>(
    character.stats.specialStats
  );
  const [skills, setSkills] = useState<InvestigatorSkills>(
    character.skills
  )
  const [occupation, setOccupation] = useState<string>("");

  const setCharacterOccupation = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = event.target.value;
    if (name) {
      setOccupation(name);
      setCharacter({
        ...character,
        info: {
          ...character.info,
          occupation: name,
        },
      });
      setSkills(baselineInvestigator.skills)
    }
  };

  const calculateSpecialStats = () => {
    const { db: damageBonus, build } = DamageBonusAndBuildCalculator(
      baseStats.strength,
      baseStats.size
    );
    setSpecialStats({
      luck: specialStats.luck,
      sanityPoints: baseStats.power,
      magicPoints: Math.floor(baseStats.power / 5),
      health: Math.floor(
        (character.stats.baseStats.size + baseStats.constitution) / 10
      ),
      currentHealth: Math.floor((baseStats.size + baseStats.constitution) / 10),
      moveRate: MoveRateCalculator(
        baseStats.strength,
        baseStats.dexterity,
        baseStats.size,
        character.info.age
      ),
      damageBonus,
      build,
      currentMagic: Math.floor(baseStats.power / 5),
    });
  };

  useEffect(() => {
    calculateSpecialStats();
  }, [baseStats]);

  const setCharacterInfo = (propName: string) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCharacter({
      ...character,
      info: {
        ...character.info,
        [propName]: event.target.value,
      },
    });
  };

  const setCharacterBaseStats = (propName: string) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newStat = Number(event.target.value);
    if (newStat || event.target.value === "") {
      setBaseStats({
        ...baseStats,
        [propName]: newStat > 100 ? 100 : newStat,
      });
    }
  };

  const setCharacterSpecialStats = (propName: string) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newStat = Number(event.target.value);
    if (newStat || event.target.value === "") {
      setSpecialStats({
        ...specialStats,
        [propName]: newStat,
      });
    }
  };

  const setCharacterSkill = (propName: string, newSkill: number) => {
      setSkills({
        ...skills,
        [propName]: newSkill,
      });
  };

  const resetCharacterSkills = () => {
    setSkills(baselineInvestigator.skills)
  }
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Box display="flex" flex="1">
          <Box display="flex" flex="5" mr={2}>
            <CharacterInfo info={character.info} setInfo={setCharacterInfo} />
          </Box>
          <Box display="flex" flex="4" mr={2}>
            <CharacterBaseStats
              baseStats={baseStats}
              specialStats={specialStats}
              setStats={setCharacterBaseStats}
            />
          </Box>
          <Box display="flex" flex="3">
            <CharacterProfile
              specialStats={specialStats}
              setStats={setCharacterSpecialStats}
            />
          </Box>
        </Box>
        <Box display="flex" mt={2}>
          <CharacterOccupationAndSkills
            occupationName={occupation}
            setOccupationName={setCharacterOccupation}
            skills={skills}
            setSkill={setCharacterSkill}
            stats={baseStats}
            resetSkills={resetCharacterSkills}
          />
        </Box>
      </ThemeProvider>
    </Wrapper>
  );
};
