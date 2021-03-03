import React, { ChangeEvent, useState, useEffect, useMemo } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import {
  InvestigatorBaseStats,
  InvestigatorSkills,
} from "../../models/COCInvestigator/COCInvestigator";
import { TypographyVariant } from "../../utils/TypographyVariant";
import { customThemeProps } from "../../config/customThemeProps";
import {
  occupationNames,
  InvestigatorOccupation,
  occupations,
} from "../../models/COCInvestigator/InvestigatorOccupations";
import { InvestigatorSkillTypes } from "../../models/COCInvestigator/InvestigatorSkills";

export interface CharacterOccupationAndSkillsProps {
  occupationName: string;
  setOccupationName: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  skills: InvestigatorSkills;
  stats: InvestigatorBaseStats;
  setSkill: (
    propName: string
  ) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const interpersonalSkills = [
  "appraise",
  "charm",
  "fastTalk",
  "intimidate",
  "persuade",
];
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
    if(skill === InvestigatorSkillTypes.creditRating) {
      return true;
    }
    return false;
  } else {
    return false;
  }
};

export const CharacterOccupationAndSkills: React.FC<CharacterOccupationAndSkillsProps> = ({
  occupationName,
  setOccupationName,
  skills,
  stats,
  setSkill
}) => {
  const [occupation, setOccupation] = useState<InvestigatorOccupation>();

  useEffect(() => {
    const newOccupation = occupations.find(
      (occ) => occ.name === occupationName
    );
    setOccupation(newOccupation);
  }, [occupationName]);

  const useStyles = makeStyles({
    root: {
      backgroundColor: "#c2edfb",
    },
  });
  const classes = useStyles();

  // ======================================== SKILL POINTS LOGIC ========================================
  //TODO only let save if credit rating meets basic occupation requirements
  const [remainingHobbiePoints, setRemainingHobbiePoints] = useState(
    stats.intelligence * 2
  );
  const totalOccupationSkillPoints = useMemo(() => {
    if (occupation) {
      return occupation.skillPoints.reduce((acc, skill) => {
        //@ts-ignore
        const points = stats[skill.type] * skill.multiplier;
        return acc + points;
      }, 0);
    } else {
      return 0;
    }
  }, [occupation, stats]);
  const [occupationSkillPoints, setOccupationSkillPoints] = useState(0);
  useEffect(() => {
    setOccupationSkillPoints(totalOccupationSkillPoints);
  }, [totalOccupationSkillPoints]);

  // ===================================================================================================

  return (
    <Box
      height="100%"
      display="flex"
      flex={1}
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box display="flex" flexDirection="column">
        <Typography variant={TypographyVariant.H4}>{"Occupation"}</Typography>
        <Box
          display="flex"
          flexDirection="column"
          borderRadius="4px"
          border={`2px solid black`}
          padding="16px"
        >
          <Box display="flex" flex={1}>
            <Box display="flex" flex={1}>
              <TextField
                select
                label="Choose occupation"
                value={occupationName}
                onChange={setOccupationName}
                fullWidth
              >
                {occupationNames.map((name) => {
                  return (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  );
                })}
              </TextField>
            </Box>
            <Box display="flex" flex={5} alignItems="flex-end" ml={2}>
              <Typography variant={TypographyVariant.OVERLINE} color={"error"}>
                {
                  "Warning: changing occupation or base stats resets currently allocated skill points"
                }
              </Typography>
            </Box>
          </Box>
          <Box display="flex" mt={2}>
            <Box display="flex" flexDirection="column" flex={1} mr={2}>
              <Typography variant={TypographyVariant.OVERLINE}>
                {"Description"}
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                borderRadius="4px"
                border={`1px solid black`}
                padding="8px"
              >
                <Typography variant={TypographyVariant.BODY2}>
                  {occupation?.description}
                </Typography>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" flex={1} mr={2}>
              <Box display="flex" flexDirection="column">
                <Typography variant={TypographyVariant.OVERLINE}>
                  {"Occupation skill points"}
                </Typography>
                <Box
                  display="flex"
                  flexDirection="column"
                  borderRadius="4px"
                  border={`1px solid black`}
                  padding="8px"
                  mb={1}
                >
                  <Typography variant={TypographyVariant.BODY2}>
                    {occupation?.skillPoints.reduce(
                      (acc: string, current) =>
                        acc.concat(`${current.type} x ${current.multiplier} `),
                      ""
                    )}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column">
                <Typography variant={TypographyVariant.OVERLINE}>
                  {"Credit Rating"}
                </Typography>
                <Box
                  display="flex"
                  flexDirection="column"
                  borderRadius="4px"
                  border={`1px solid black`}
                  padding="8px"
                >
                  <Typography variant={TypographyVariant.BODY2}>
                    {`min: ${occupation?.creditRating.min} max: ${occupation?.creditRating.max}`}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" flex={1}>
              <Box display="flex" flexDirection="column">
                <Typography variant={TypographyVariant.OVERLINE}>
                  {"Suggested Contacts"}
                </Typography>
                <Box
                  display="flex"
                  flexDirection="column"
                  borderRadius="4px"
                  border={`1px solid black`}
                  padding="8px"
                  mb={1}
                >
                  <Typography variant={TypographyVariant.BODY2}>
                    {occupation?.suggestedContacts.join(", ")}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column">
                <Typography variant={TypographyVariant.OVERLINE}>
                  {"Available Skills"}
                </Typography>
                <Box
                  display="flex"
                  flexDirection="column"
                  borderRadius="4px"
                  border={`1px solid black`}
                  padding="8px"
                >
                  <Typography variant={TypographyVariant.BODY2}>
                    {occupation?.skills.join(", ")}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box mt={2}>
        <Typography variant={TypographyVariant.H4}>{"Skills"}</Typography>
        <Box
          display="flex"
          flexDirection="column"
          borderRadius="4px"
          border={`2px solid black`}
          padding="16px"
        >
          <Box>
            <Typography
              variant={TypographyVariant.H6}
              color="textSecondary"
            >{`Total Occupation points: ${totalOccupationSkillPoints}`}</Typography>
            <Typography
              variant={TypographyVariant.H6}
              color="textSecondary"
            >{`Remaining Occupation points: ${occupationSkillPoints}`}</Typography>
            <Typography
              variant={TypographyVariant.H6}
            >{`Total Personal Interest points: ${
              stats.intelligence * 2
            }`}</Typography>
            <Typography
              variant={TypographyVariant.H6}
            >{`Remaining Personal Interest points: ${remainingHobbiePoints}`}</Typography>
                        <Box my={2}>

            <Typography variant={TypographyVariant.OVERLINE} color={"error"} >
              {
                "Occupation-specific skills will be highlighted blue and allocated points will automatically be subtracted from total."
              }
            </Typography>
            <div>
            <Typography variant={TypographyVariant.OVERLINE} color={"error"} >
              {
              "Occupations with interpersonal skills will highlight those, so keep in mind the upper limit of skills of that type your occupation can have."
              }
            </Typography>
            </div>
            </Box>
          </Box>
          <Box width="90%">
          <Grid container>
            {Object.keys(skills).map((skill) => {
              return (
                <Grid item md={2} key={skill}>
                  <Box m={1} display="flex">
                    <Box display="flex" mr="4px">
                      <TextField
                        label={skill}
                        //@ts-ignore
                        value={skills[skill]}
                        variant={"filled"}
                        classes={
                          shouldHighlightSkill(skill, occupation)
                            ? { root: classes.root }
                            : {}
                        }
                        onChange={setSkill(skill)}
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
                        <Typography variant={TypographyVariant.BODY1}>
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
                        <Typography variant={TypographyVariant.BODY1}>
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
      </Box>
    </Box>
  );
};
