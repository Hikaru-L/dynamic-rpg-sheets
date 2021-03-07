import React, { ChangeEvent } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import {
  InvestigatorBaseStats,
  InvestigatorSkills,
  COCInvestigator,
} from "../../models/COCInvestigator/COCInvestigator";
import { TypographyVariant } from "../../utils/TypographyVariant";
import { customThemeProps } from "../../config/customThemeProps";
import { InvestigatorOccupation } from "../../models/COCInvestigator/InvestigatorOccupations";
import {
  InvestigatorSkillTypes,
  InvestigatorSkillTypeNames,
} from "../../models/COCInvestigator/InvestigatorSkills";
import { theme } from "../../config/theme";

export interface CharacterOccupationAndSkillsProps {
  skills: InvestigatorSkills;
  stats: InvestigatorBaseStats;
  setSkill: (propName: string, newSkill: number) => void;
  totalOccupationSkillPoints: number;
  remainingOccupationSkillPoints: number;
  setRemainingOccupationSkillPoints: (state: number) => void;
  totalHobbieSkillPoints: number;
  remainingHobbieSkillPoints: number;
  setRemainingHobbieSkillPoints: (state: number) => void;
  occupation: InvestigatorOccupation | undefined;
}
const baselineInvestigator = new COCInvestigator();
let skillsOldState = baselineInvestigator.skills;

const interpersonalSkills = ["charm", "fastTalk", "intimidate", "persuade"];

const shouldHighlightSkill = (
  skill: string,
  occupation?: InvestigatorOccupation
) => {
  if (occupation) {
    if (occupation.interpersonalSkills > 0) {
      if (interpersonalSkills.indexOf(skill) >= 0) {
        return true;
      }
    }
    if (occupation.skills.indexOf(skill as InvestigatorSkillTypes) >= 0) {
      return true;
    }
    if (skill === InvestigatorSkillTypes.creditRating) {
      return true;
    }
    return false;
  } else {
    return false;
  }
};

export const CharacterSkills: React.FC<CharacterOccupationAndSkillsProps> = ({
  skills,
  stats,
  setSkill,
  remainingHobbieSkillPoints,
  remainingOccupationSkillPoints,
  totalOccupationSkillPoints,
  occupation,
  setRemainingHobbieSkillPoints,
  setRemainingOccupationSkillPoints,
}) => {
  const useHighlightedStyles = makeStyles({
    root: {
      "& .MuiFilledInput-root": {
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
      },
      "& .MuiInputLabel-root": {
        color: "#fff",
      },
    },
  });

  const useStyles = makeStyles({
    root: {
      "& .MuiFilledInput-root": {
        backgroundColor: "#121212",
      },
    },
  });

  const highlightedClasses = useHighlightedStyles();
  const classes = useStyles();

  // ======================================== SKILL POINTS LOGIC ========================================
  //TODO only let save if credit rating meets basic occupation requirements

  //TODO fix logic here, theres some weird shenanigans going on
  const handleChangeSkill = (skillName: string) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let newSkillValue = Number(event.target.value);
    if (newSkillValue < 1) {
      newSkillValue = 0;
    } else if (newSkillValue > 100) {
      newSkillValue = 100;
    }
    if (occupation) {
      const oldSkillValue = skillsOldState[skillName as InvestigatorSkillTypes];
      const pointVariation = newSkillValue - oldSkillValue;

      //TODO add interpersonal skill treatment
        //add to remaining points
        if (occupation.skills.includes(skillName as InvestigatorSkillTypes)) {
          setRemainingOccupationSkillPoints(
            remainingOccupationSkillPoints - pointVariation
          );
        } else {
          setRemainingHobbieSkillPoints(
            remainingHobbieSkillPoints - pointVariation
          );
        }
    }
    skillsOldState[skillName as InvestigatorSkillTypes] = newSkillValue;
    setSkill(skillName, newSkillValue);
  };

  // ===================================================================================================

  return (
    <Box mt={2}>
      <Typography variant={TypographyVariant.H4} color="textPrimary">
        {"Skills"}
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        borderRadius="4px"
        border={`2px solid black`}
        padding="16px"
        bgcolor={theme.palette.background.paper}
      >
        <Box>
          <Typography
            variant={TypographyVariant.H6}
            color="textSecondary"
          >{`Total Occupation points: ${totalOccupationSkillPoints}`}</Typography>
          <Typography
            variant={TypographyVariant.H6}
            color="textSecondary"
          >{`Remaining Occupation points: ${remainingOccupationSkillPoints}`}</Typography>
          <Typography
            variant={TypographyVariant.H6}
            color="textPrimary"
          >{`Total Personal Interest points: ${
            stats.intelligence * 2
          }`}</Typography>
          <Typography
            variant={TypographyVariant.H6}
            color="textPrimary"
          >{`Remaining Personal Interest points: ${remainingHobbieSkillPoints}`}</Typography>
          <Box my={2}>
            <Typography variant={TypographyVariant.OVERLINE} color={"error"}>
              {
                "Occupation-specific skills will be highlighted green and allocated points will automatically be subtracted from total."
              }
            </Typography>
            <div>
              <Typography variant={TypographyVariant.OVERLINE} color={"error"}>
                {
                  "Occupations with interpersonal skills will highlight those, so keep in mind the upper limit of skills of that type your occupation can have."
                }
              </Typography>
            </div>
          </Box>
        </Box>
        <Grid container>
          {Object.keys(skills).map((skill) => {
            return (
              <Grid item md={2} key={skill}>
                <Box m={1} display="flex">
                  <Box display="flex" mr="4px">
                    <TextField
                      //@ts-ignore
                      label={InvestigatorSkillTypeNames[skill]}
                      //@ts-ignore
                      value={skills[skill]}
                      variant={"filled"}
                      classes={{
                        root: shouldHighlightSkill(skill, occupation)
                          ? highlightedClasses.root
                          : classes.root,
                      }}
                      onChange={handleChangeSkill(skill)}
                    />
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <Box
                      border={`1px solid ${customThemeProps.colors.waterGreen}`}
                      borderRadius="4px"
                      px="1px"
                      mb="2px"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      width="24px"
                    >
                      <Typography
                        variant={TypographyVariant.BODY1}
                        color="textPrimary"
                      >
                        {
                          // @ts-ignore
                          Math.floor(skills[skill] / 2)
                        }
                      </Typography>
                    </Box>
                    <Box
                      border={`1px solid ${customThemeProps.colors.waterGreen}`}
                      borderRadius="4px"
                      px="1px"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      width="24px"
                    >
                      <Typography
                        variant={TypographyVariant.BODY1}
                        color="textPrimary"
                      >
                        {
                          // @ts-ignore
                          Math.floor(skills[skill] / 5)
                        }
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};
