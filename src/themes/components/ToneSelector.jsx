import { Button } from "@chakra-ui/react";
//import VerovioRenderer from "./Verovio";
//import { scores } from '/src/resources/constants';
import { GiGClef } from "react-icons/gi"; //Temporary icon

//TODO: Generate MEI file for tone selection. See: https://book.verovio.org/advanced-topics/transposition.html#transposition-by-tonic-pitch

const ToneSelector = () => {
//TODO: Wheel selector for tone choice and logic for trasposition

  return (
    <div>
            <Button 
            aria-label="Adjust Tempo" 
            _focus={{ boxShadow: 'none' }} 
            w="fit-content">
                <GiGClef />
            </Button>
    </div>
    //TODO: Figure out why SVG is not being rendered correctly inside button; might have to do with dimensions
  );
};

export default ToneSelector;
