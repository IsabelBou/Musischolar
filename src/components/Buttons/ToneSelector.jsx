import { Button, Tooltip } from "@chakra-ui/react";
import { GiGClef } from "react-icons/gi";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react'
import ToneSlider from "../ToneSlider";

// IMPROVE: Replace slider with circle of fifths wheel menu

// TODO: Generate MEI file for tone selection. See: https://book.verovio.org/advanced-topics/transposition.html#transposition-by-tonic-pitch

// IMPROVE: Have tooltip display tonality preview

const ToneSelector = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      <Tooltip label = 'Select Tonality Pitch' >
        <Button aria-label = "Select Tonality Pitch" 
          onClick = { onOpen }>
          <GiGClef />
        </Button>
      </Tooltip>
      <Modal isOpen = { isOpen } onClose = { onClose }  
        size = 'sm' isCentered >
        <ModalOverlay backdropFilter='auto' backdropBlur='1.5px' backdropSaturate='50%'/>
        <ModalContent>
          <ModalHeader>Key Signature Selection</ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign = 'center'>
            Slide to change Key Signatures
            <ToneSlider/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ToneSelector;
