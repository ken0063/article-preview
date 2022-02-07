import {
  IconButton,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
import React, { useRef } from 'react';

const Popup = ({ handleOpen }) => {
  const initialFocusRef = useRef();
  return (
    <Popover
      initialFocusRef={initialFocusRef}
      placement="top"
      closeOnBlur={false}
      arrowSize="20px"
    >
      <PopoverTrigger>
        <IconButton
          aria-label="redo-button"
          icon={<Image src="/images/icon-share.svg" />}
          rounded="50%"
          onClick={handleOpen}
          _focus={{ outline: 'none' }}
          variant="outline"
        />
      </PopoverTrigger>
      <PopoverContent
        color="white"
        bg="hsl(217, 19%, 35%)"
        borderColor="hsl(217, 19%, 35%)"
        _focus={{ outline: 'none' }}
        rounded="15px"
      >
        <PopoverArrow bg="gray.600" borderColor="hsl(217, 19%, 35%)" />

        <PopoverBody
          // border="0"
          d="flex"
          alignItems="center"
          justifyContent="space-around"
          h="56px"
        >
          <Text color="hsl(214, 17%, 51%)" fontWeight="700" letterSpacing="7px">
            SHARE
          </Text>
          <Image src="/images/icon-facebook.svg" h="20px" w="20px" />

          <Image src="/images/icon-pinterest.svg" h="20px" w="20px" />

          <Image src="/images/icon-twitter.svg" h="20px" w="20px" />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Popup;
