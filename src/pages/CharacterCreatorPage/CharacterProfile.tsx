import React, { ChangeEvent, useState, useEffect } from "react";
import { Box, Grid, TextField, Typography, Button, Dialog, DialogTitle, DialogContent, makeStyles } from "@material-ui/core";
import { InvestigatorSpecialStats } from "../../models/COCInvestigator/COCInvestigator";
import { TypographyVariant } from "../../utils/TypographyVariant";
import { theme } from "../../config/theme";
import styled from "styled-components";

export interface CharacterProfileProps {
  specialStats: InvestigatorSpecialStats;
  setStats: (
    propName: string
  ) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  avatarUrl: string;
  setAvatarUrl: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
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

const Avatar = styled.img`
 max-height: 100%;
 max-width: 100%;
`

export const CharacterProfile: React.FC<CharacterProfileProps> = ({
  specialStats,
  setStats,
  avatarUrl,
  setAvatarUrl,
}) => {
  const useStyles = makeStyles({
    root: {
      "& .MuiOutlinedInput-root": {
        backgroundColor: "#232323",
        color: "#fff",
      },
      "& .MuiInputLabel-root": {
        color: "#fff",
      },
    },
  });
  const classes = useStyles()
  const [shouldShowUrlInputDialog, setShouldShowUrlInputDialog] = useState(
    false
  );
  const [shouldShowAvatar, setShouldShowAvatar] = useState(!!avatarUrl)
  useEffect(() => {
    setShouldShowAvatar(true)
    setShouldShowUrlInputDialog(false)
  }, [avatarUrl])
  const handleCloseInputDialog = () => setShouldShowUrlInputDialog(false)
  return (
    <Box display="flex" flexDirection="column" flex={1}>
      <Typography variant={TypographyVariant.H4} color="textPrimary">
        {"Vital Stats"}
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        borderRadius="4px"
        border={`2px solid black`}
        padding="16px"
        bgcolor={theme.palette.background.paper}
        mb={2}
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
                  classes={{root: classes.root}}
                  onChange={(e) => {
                    return;
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Typography variant={TypographyVariant.H4} color="textPrimary">
        {"Portrait"}
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        borderRadius="4px"
        border={`2px solid black`}
        bgcolor="#202020"
        height="100%"
        width="auto"
        justifyContent="center"
        alignItems="center"
      >
        {shouldShowAvatar ? (
          <Avatar src={avatarUrl} onError={()=>setShouldShowAvatar(false)}/>
        ) : (
          <Button variant="contained" color="primary" onClick={()=>setShouldShowUrlInputDialog(true)}>
          <Box m={1}>Select portrait url</Box>
        </Button>
        )}
      </Box>
      <Dialog open={shouldShowUrlInputDialog} onClose={handleCloseInputDialog}>
          <DialogTitle>
            {
              "Paste a valid public url to use as your character portrait"
            }
          </DialogTitle>
          <DialogContent>
                <Box ml={2}>
                <TextField label="Player name" value={avatarUrl} onChange={setAvatarUrl}/>
                </Box>
          </DialogContent>
        </Dialog>
    </Box>
  );
};
