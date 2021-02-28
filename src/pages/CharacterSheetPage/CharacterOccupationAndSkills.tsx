import React, { ChangeEvent, useState, useEffect } from "react";
import { Box, Grid, TextField, Typography, MenuItem } from "@material-ui/core";
import {
  InvestigatorStats,
  InvestigatorBaseStats,
  InvestigatorSpecialStats,
} from "../../models/COCInvestigator/COCInvestigator";
import { TypographyVariant } from "../../utils/TypographyVariant";
import { customThemeProps } from "../../config/customThemeProps";
import {
  occupationNames,
  InvestigatorOccupation,
  occupations,
} from "../../models/COCInvestigator/InvestigatorOccupations";

export interface CharacterOccupationAndSkillsProps {
  occupationName: string;
  setOccupationName: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const CharacterOccupationAndSkills: React.FC<CharacterOccupationAndSkillsProps> = ({
  occupationName,
  setOccupationName,
}) => {
  const [occupation, setOccupation] = useState<InvestigatorOccupation>();
  useEffect(() => {
    const newOccupation = occupations.find(
      (occ) => occ.name === occupationName
    );
    setOccupation(newOccupation);
  }, [occupationName]);
  return (
    <Box
      height="100%"
      display="flex"
      flex={1}
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box display="flex" flexDirection="column">
        <Typography variant={TypographyVariant.H4}>
          {"Occupation and Skills"}
        </Typography>
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
                  "Warning: changing occupation resets current allocated skill points"
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
            <Box
              display="flex"
              flexDirection="column"
              flex={1}
              mr={2}
            >
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
            <Box
              display="flex"
              flexDirection="column"
              flex={1}
            >
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
    </Box>
  );
};
