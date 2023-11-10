import {useColorMode, Switch, Button, Stack } from "@chakra-ui/react";
import { PiSunDuotone, PiMoonStarsDuotone } from 'react-icons/pi'

const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Stack align='center' direction='row' spacing='1rem'>
        <Switch onChange={() => toggleColorMode()} colorScheme='primary' size='sm' />
      </Stack>
      <Button
        aria-label="Toggle Color Mode"
        onClick={toggleColorMode}
        _focus={{ boxShadow: 'none' }}
        w="fit-content">
        {colorMode === 'light' ? <PiMoonStarsDuotone /> : <PiSunDuotone />}
      </Button>
    </div>
  );
};

export default Toggle;