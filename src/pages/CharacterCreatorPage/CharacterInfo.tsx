import React, { ChangeEvent } from "react";
import { Box, TextField, Typography } from "@material-ui/core";
import { InvestigatorBaseInfo } from "../../models/COCInvestigator/COCInvestigator";
import { TypographyVariant } from "../../utils/TypographyVariant";
import { theme } from "../../config/theme";

export interface CharacterInfoProps {
  info: InvestigatorBaseInfo;
  setInfo: (propName: string) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}
export const CharacterInfo: React.FC<CharacterInfoProps> = ({ info, setInfo }) => {
  return (
    <Box display="flex"
    flex={1}
    flexDirection="column" >
      <Typography variant={TypographyVariant.H4} color="textPrimary">{'Character Info'}</Typography>
      <Box
        display="flex"
        flexDirection="column"
        borderRadius="4px"
        border={`2px solid black`}
        padding="16px"
        height="100%"
        bgcolor={theme.palette.background.paper}
      >
          <TextField label="Player name" value={info.player} onChange={setInfo('player')}/>
          <Box height="8px"/>
          <TextField label="Name" value={info.name} onChange={setInfo('name')}/>
          <Box height="8px"/>
          <TextField label="Occupation" value={info.occupation} onChange={setInfo('occupation')} disabled/>
          <Box height="8px"/>
          <TextField label="Birthplace" value={info.birthplace} onChange={setInfo('birthplace')}/>
          <Box height="8px"/>
          <TextField label="Sex" value={info.sex} onChange={setInfo('sex')}/>
          <Box height="8px"/>
          <TextField label="Age" value={info.age} onChange={setInfo('age')}/>
        </Box>
        </Box>
  )
}
