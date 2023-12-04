import {useColorMode, Button, Tooltip } from "@chakra-ui/react";
import { PiSunDuotone, PiMoonStarsDuotone } from 'react-icons/pi'

const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
    <Tooltip label={`Toggle to ${colorMode === "light" ? "Dark" : "Light"} Mode`}>
      <Button
          aria-label="Toggle Color Mode"
          onClick={toggleColorMode}
          _focus={{ boxShadow: 'none' }}
          w="fit-content">
          {colorMode === 'light' ? <PiMoonStarsDuotone /> : <PiSunDuotone />}
        </Button>
    </Tooltip>
    </div>
  );
};

export default Toggle;