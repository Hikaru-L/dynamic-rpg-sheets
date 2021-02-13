import React from "react";
import { useParams } from "react-router-dom";



export const CharacterSheetPage: React.FC = () => {
  const { characterId } = useParams()

  return (
    <p>
      {characterId}
    </p>
  )
}


