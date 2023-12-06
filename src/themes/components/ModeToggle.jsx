import {useColorMode, Box, Tooltip } from "@chakra-ui/react";
import { PiSunDuotone, PiMoonStarsDuotone } from 'react-icons/pi'

const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
    <Tooltip label={`Toggle to ${colorMode === "light" ? "Dark" : "Light"} Mode`}>
      <Box as='button'
          padding={4}
          aria-label="Toggle Color Mode"
          onClick={toggleColorMode}
          boxShadow= 'none'
          _focus={{  }}
          bgGradient = 'linear(to-b, #030033 0%, #611b87 35%, #5570cc 69%, #5abaf0 77%, #fff8e9 100%)'
          backgroundSize = "auto 300%"
            //FIXME: Remove line appearing on ends of gradient
            //TODO: Add animations on Hover (transform scale) and on change (Sun dawning and Moon descending). Also maybe improve icon coloring selection.
          _dark={{
            backgroundPosition: 'top',
            transition: '0.8s',
            _hover: {
              backgroundPosition: 'center',
              transition: '0.5s'
            }
          }}
          _light={{
            backgroundPosition: 'bottom',
            transition: '0.8s',
            _hover: {
              backgroundPosition: 'center',
              transition: '0.5s'
            }
          }}
          >
          {colorMode === 'light' 
            ? <PiSunDuotone color = "yellow"/> 
            : <PiMoonStarsDuotone color = "white" />}
        </Box>
    </Tooltip>
    </div>
  );
};

export default Toggle;