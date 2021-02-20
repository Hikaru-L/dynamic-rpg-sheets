import React, { ChangeEvent } from "react";
import { Box, Grid, TextField } from "@material-ui/core";
import { InvestigatorStats } from "../models/COCInvestigator";

export interface CharacterBaseStatsProps {
  stats: InvestigatorStats;
  setStats: (
    propName: string
  ) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
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
        <Grid item md={4}>
          <TextField
            label="STR"
            value={stats.baseStats.strength}
            onChange={setStats("strength")}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            label="DEX"
            value={stats.baseStats.dexterity}
            onChange={setStats("dexterity")}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            label="INT"
            value={stats.baseStats.intelligence}
            onChange={setStats("intelligence")}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            label="CON"
            value={stats.baseStats.constitution}
            onChange={setStats("constitution")}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            label="APP"
            value={stats.baseStats.appearance}
            onChange={setStats("appearance")}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            label="POW"
            value={stats.baseStats.power}
            onChange={setStats("power")}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            label="SIZ"
            value={stats.baseStats.size}
            onChange={setStats("size")}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            label="SAN"
            value={stats.baseStats.sanity}
            onChange={setStats("sanity")}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            label="EDU"
            value={stats.baseStats.education}
            onChange={setStats("education")}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
