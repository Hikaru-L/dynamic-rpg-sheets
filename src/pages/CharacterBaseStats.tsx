import React, { ChangeEvent } from "react";
import { Box, Grid, TextField, Typography } from "@material-ui/core";
import { InvestigatorStats } from "../models/COCInvestigator";
import { TypographyVariant } from "../utils/TypographyVariant";
import { customThemeProps } from "../config/customThemeProps";

export interface CharacterBaseStatsProps {
  stats: InvestigatorStats;
  setStats: (
    propName: string
  ) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
const statNames = [
  {
    label: "STR",
    id: "strength",
  },
  {
    label: "DEX",
    id: "dexterity",
  },
  {
    label: "INT",
    id: "intelligence",
  },
  {
    label: "CON",
    id: "constitution",
  },
  {
    label: "APP",
    id: "appearance",
  },
  {
    label: "POW",
    id: "power",
  },
  {
    label: "SIZ",
    id: "size",
  },
  {
    label: "SAN",
    id: "sanity",
  },
  {
    label: "EDU",
    id: "education",
  },
];
export const CharacterBaseStats: React.FC<CharacterBaseStatsProps> = ({
  stats,
  setStats,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      borderRadius="4px"
      border={`2px solid black`}
      padding="16px"
    >
      <Grid container spacing={1}>
        {statNames.map((statName) => {
          return (
            <Grid item md={4}>
              <Box display="flex">
                <Box display="flex" mr="4px">
                  <TextField
                    label={statName.label}
                    //@ts-ignore
                    value={stats.baseStats[statName.id]}
                    onChange={setStats(statName.id)}
                    variant={"outlined"}
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
                  >
                    <Typography variant={TypographyVariant.BODY1}>
                      {
                        // @ts-ignore
                        Math.floor(stats.baseStats[statName.id] / 2)
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
                  >
                    <Typography variant={TypographyVariant.BODY1}>
                      {
                        // @ts-ignore
                        Math.floor(stats.baseStats[statName.id] / 5)
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
  );
};
