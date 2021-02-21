import React, { ChangeEvent } from "react";
import { Box, Grid, TextField, Typography } from "@material-ui/core";
import {
  InvestigatorSpecialStats,
} from "../models/COCInvestigator";
import { TypographyVariant } from "../utils/TypographyVariant";

export interface CharacterProfileProps {
  specialStats: InvestigatorSpecialStats;
  setStats: (
    propName: string
  ) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const specialExpendableStatNames = [
  {
    label: "health",
    id: "health",
  },
  {
    label: "sanity",
    id: "sanityPoints",
  },
  {
    label: "magic",
    id: "magicPoints",
  },
];

export const CharacterProfile: React.FC<CharacterProfileProps> = ({
  specialStats,
  setStats,
}) => {
  return (
    <Box
    display="flex"
    flexDirection="column"
    >
      <Typography variant={TypographyVariant.H4}>{"Vital Stats"}</Typography>
      <Box
        display="flex"
        flexDirection="column"
        borderRadius="4px"
        border={`2px solid black`}
        padding="16px"
      >
        <Grid container spacing={1}>
          {specialExpendableStatNames.map((stat) => {
            return (
              <Grid item md={4}>
                <TextField
                  label={stat.label}
                  //@ts-ignore
                  value={specialStats[stat.id]}
                  variant={"outlined"}
                  onChange={(e) => {
                    return;
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Typography variant={TypographyVariant.H4}>{"Portrait"}</Typography>
      <Box
        display="flex"
        flexDirection="column"
        borderRadius="4px"
        border={`2px solid black`}
        padding="16px"
        bgcolor='gray'
        height="100%"
      >
      </Box>
    </Box>
  );
};
