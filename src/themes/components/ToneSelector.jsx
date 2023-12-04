import { Button, Tooltip } from "@chakra-ui/react";
//import VerovioRenderer from "./Verovio";
//import { scores } from '/src/resources/constants';
import { GiGClef } from "react-icons/gi"; //Temporary icon

//TODO: Generate MEI file for tone selection. See: https://book.verovio.org/advanced-topics/transposition.html#transposition-by-tonic-pitch

const ToneSelector = () => {
//TODO: Wheel selector for tone choice and logic for trasposition

  return (
    <div>
      <Tooltip label='Select Tonality Pitch' hasArrow closeDelay={200} placement='bottom'>
        <Button 
              aria-label="Select Tonality Pitch" 
              _focus={{ boxShadow: 'none' }} 
              w="fit-content">
                  <GiGClef />
              </Button>
      </Tooltip>
    </div>
    //TODO: Figure out why SVG is not being rendered correctly inside button; might have to do with dimensions
  );
};

export default ToneSelector;
