import {useColorMode, Box, Tooltip } from "@chakra-ui/react";
import { PiSunDuotone, PiMoonStarsDuotone } from 'react-icons/pi'

const ModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const CYCLE = [
    /* Night */
    '#9024D0 0%',
    '#4851C9 15%',
    /* Sunrise */
    '#788cf3 26%',
    '#A5C9F0 35%',
    '#DEB262 38%',
    '#E58C4D 39%',
    '#F34325 40%',
    /*Sunset */
    '#21023D 45%',
    '#681853 57%',
    '#FA4E39 67%',
    '#F6E473 70%',
    /* Day  */
    '#021A9A 75%',
    '#2f92f4 87%',
    '#0293ea 95%'
  ];

  const POS = {
    night:    '50% 1%' ,
    sunrise:  '50% 20%',
    sunset:   '50% 60%',
    day:      '50% 99%'  
  };

  // IMPROVE: Find a way to animate from hovered initial state to unhovered next state (without scroll effect and without initial unhovered state)
    //Alternative: Create script that will remove hover effect upon click


  //IMPROVE: Find out if tooltip can stay after mode change (currently swaps and disappears soon afterwards, only reappears when no longer focusing button and then hovering again)

  return (
    <div>
    <Tooltip label = {`Toggle to ${colorMode === "light" ? "Dark" : "Light"} Mode`}>
      <Box as = 'button' aria-label = "Toggle Color Mode"
        onClick={toggleColorMode}
        /* Formatting similar to sq sized button */
        p = {3}
        fontSize = '22'
        text-align = 'center'
        display = 'flex'
        alignContent = 'center'
        justifyContent = 'flex-center'
        boxShadow = 'none'
        // Full "sky" gradient, with all four modes
        bgGradient = { `linear(to-b, ${CYCLE})` }
        backgroundSize = "auto 400%"
        /* --- COLOR CHANGING UPON MODE TOGGLE --- */
        transition= '0.8s '
        _hover = {{
          transition: '0.7s',
            ease: "easeInOut",
            _dark: { backgroundPosition: POS.sunrise },
            _light: { backgroundPosition: POS.sunset },
          }}
        _dark = {{ backgroundPosition: POS.night }}
        _light = {{ backgroundPosition: POS.day  }}
        >
          {colorMode === 'light' 
            ? <PiSunDuotone color = "#FFFFA3"/> 
            : <PiMoonStarsDuotone color = "white" />}
        </Box>
    </Tooltip>
    </div>
  );
};

export default ModeToggle;