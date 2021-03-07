import React, { ChangeEvent } from "react";
import {
  Box,
  TextField,
  Typography,
  MenuItem,
} from "@material-ui/core";
import { TypographyVariant } from "../../utils/TypographyVariant";
import {
  occupationNames,
  InvestigatorOccupation,
} from "../../models/COCInvestigator/InvestigatorOccupations";
import {
  InvestigatorSkillTypeNames,
} from "../../models/COCInvestigator/InvestigatorSkills";
import { theme } from "../../config/theme";

export interface CharacterOccupationProps {
  occupation: InvestigatorOccupation | undefined;
  setOccupation: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const getOccupationSkillsString = (occupation: InvestigatorOccupation) => {
  const skillNames = occupation.skills.map(
    (skill) => InvestigatorSkillTypeNames[skill]
  );
  let st = skillNames.join(", ");
  if (occupation.interpersonalSkills > 0) {
    if (occupation.interpersonalSkills === 1) {
      st = st.concat(
        ", 1 interpersonal skill (Charm, Fast Talk, Intimidate or Persuade)"
      );
    } else {
      st = st.concat(
        `, ${occupation.interpersonalSkills} interpersonal skills (Charm, Fast Talk, Intimidate or Persuade)`
      );
    }
  }
  if (occupation.extraSkillTypes > 0) {
    if (occupation.extraSkillTypes === 1) {
      st = st.concat(", any 1 other skill as personal or era specialty");
    } else {
      st = st.concat(
        `, any ${occupation.extraSkillTypes} other skills as personal or era specialties`
      );
    }
  }
  return st;
};

const getOccupationSkillPointsString = (occupation: InvestigatorOccupation) => {
  let st = occupation.skillPoints.reduce(
    (acc: string, current) =>
      acc.concat(`${current.type} x ${current.multiplier} + `),
    ""
  );
  if (
    occupation.optionalSkillPoints &&
    occupation.optionalSkillPoints.length > 1
  ) {
    st = st.concat(
      `( ${occupation.optionalSkillPoints[0].type} x ${occupation.optionalSkillPoints[0].multiplier} or ${occupation.optionalSkillPoints[1].type} x ${occupation.optionalSkillPoints[1].multiplier} )`
    );
  } else {
    st = st.slice(0, st.length - 2);
  }
  return st;
};

export const CharacterOccupation: React.FC<CharacterOccupationProps> = ({
  occupation,
  setOccupation,
}) => {

  return (
    <Box
      height="100%"
      display="flex"
      flex={1}
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box display="flex" flexDirection="column">
        <Typography variant={TypographyVariant.H4} color="textPrimary">{"Occupation"}</Typography>
        <Box
          display="flex"
          flexDirection="column"
          borderRadius="4px"
          border={`2px solid black`}
          padding="16px"
          bgcolor={theme.palette.background.paper}
        >
          <Box display="flex" flex={1}>
            <Box display="flex" flex={1}>
              <TextField
                select
                label="Choose occupation"
                value={occupation?.name}
                onChange={setOccupation}
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
              <Typography variant={TypographyVariant.OVERLINE} color="textSecondary">
                {"Description"}
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                borderRadius="4px"
                border={`1px solid rgb(118, 118, 118)`}
                padding="8px"
              >
                <Typography variant={TypographyVariant.BODY2} color="textPrimary">
                  {occupation?.description}
                </Typography>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" flex={1} mr={2}>
              <Box display="flex" flexDirection="column">
                <Typography variant={TypographyVariant.OVERLINE} color="textSecondary">
                  {"Occupation skill points"}
                </Typography>
                <Box
                  display="flex"
                  flexDirection="column"
                  borderRadius="4px"
                  border={`1px solid rgb(118, 118, 118)`}
                  padding="8px"
                  mb={1}
                >
                  <Typography variant={TypographyVariant.BODY2} color="textPrimary">
                    {occupation
                      ? getOccupationSkillPointsString(occupation)
                      : ""}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column">
                <Typography variant={TypographyVariant.OVERLINE} color="textSecondary">
                  {"Credit Rating"}
                </Typography>
                <Box
                  display="flex"
                  flexDirection="column"
                  borderRadius="4px"
                  border={`1px solid rgb(118, 118, 118)`}
                  padding="8px"
                >
                  <Typography variant={TypographyVariant.BODY2} color="textPrimary">
                    {`min: ${occupation?.creditRating.min} max: ${occupation?.creditRating.max}`}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" flex={1}>
              <Box display="flex" flexDirection="column">
                <Typography variant={TypographyVariant.OVERLINE} color="textSecondary">
                  {"Suggested Contacts"}
                </Typography>
                <Box
                  display="flex"
                  flexDirection="column"
                  borderRadius="4px"
                  border={`1px solid rgb(118, 118, 118)`}
                  padding="8px"
                  mb={1}
                >
                  <Typography variant={TypographyVariant.BODY2} color="textPrimary">
                    {occupation?.suggestedContacts.join(", ")}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column">
                <Typography variant={TypographyVariant.OVERLINE} color="textSecondary">
                  {"Available Skills"}
                </Typography>
                <Box
                  display="flex"
                  flexDirection="column"
                  borderRadius="4px"
                  border={`1px solid rgb(118, 118, 118)`}
                  padding="8px"
                >
                  <Typography variant={TypographyVariant.BODY2} color="textPrimary">
                    {occupation ? getOccupationSkillsString(occupation) : ""}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
