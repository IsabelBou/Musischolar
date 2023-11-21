import { IconButton } from "@chakra-ui/react";
import VerovioRenderer from "./Verovio";
import { scores } from '/src/resources/constants';

//TODO: Generate MEI file for tone selection

const ToneSelector = () => {
//TODO: Wheel selector for tone choice and logic for trasposition

  return (
    <div>
      <IconButton aria-label="Select Tone" _focus={{ boxShadow: 'none' }} w="fit-content" icon={<VerovioRenderer url = {scores.JONICO} />} />
    </div>
    //TODO: Figure out why SVG is not being rendered correctly inside button; might have to do with dimensions
  );
};

export default ToneSelector;
