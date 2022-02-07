import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { useState } from 'react';
import Popup from './component/Popup';

function App() {
  const [open, setOpen] = useState(false);
  const [isMobile] = useMediaQuery('(min-width: 768px)');

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <Flex
      bg="hsl(212, 23%, 69%)"
      w="100%"
      h="100vh"
      justify="center"
      align="center"
    >
      <Flex
        w={{ base: '325px', md: '735px' }}
        h={{ base: '515px', md: '285px' }}
        flexDirection={{ base: 'column', md: 'row' }}
        rounded="12px"
        bg="hsl(210, 46%, 95%)"
        position="relative"
      >
        <Box roundedTop={{ base: '12px' }}>
          <Image
            src="/images/drawers.jpg"
            alt="Dan Abramov"
            roundedTopLeft={{ base: '12px', md: '12px' }}
            roundedTopRight={{ base: '12px', md: '0' }}
            roundedBottomRight={{ base: '0', md: '0' }}
            roundedBottomLeft={{ base: '0', md: '12px' }}
            h={{ base: '200px', md: '285px' }}
            w={{ base: '100%', md: '100%' }}
          />
        </Box>
        <Flex
          flexDirection="column"
          w={{ base: '100%', md: '70%' }}
          p={{ base: '40px 30px 15px 30px', md: '40px 40px 30px 40px' }}
        >
          <Heading fontWeight="700" fontSize="17px" mb="25px" lineHeight="24px">
            Shift the overall look feel by adding these wonderful touches to
            furniture in your home
          </Heading>
          <Text fontWeight="500" fontSize="13px" lineHeight="20px" mb="30px">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </Text>
        </Flex>
        {!open && !isMobile ? (
          <Flex
            w={{ base: '325px', md: '445px' }}
            h={{ base: '70px', md: '35px' }}
            roundedTop={0}
            roundedBottom="12px"
            justifyContent="space-evenly"
            alignItems="center"
            position="absolute"
            bottom="0"
          >
            <Image
              src="/images/avatar-michelle.jpg"
              rounded="50%"
              h="40px"
              w="40px"
            />
            <Flex
              flexDirection="column"
              alignContent="center"
              ml="15px"
              mr="55px"
            >
              <Text fontWeight="700" fontSize="13px">
                Michelle Appleton
              </Text>
              <Text fontWeight="500" fontSize="13px">
                28 Jun 2020
              </Text>
            </Flex>
            {!isMobile ? (
              <IconButton
                aria-label="redo-button"
                icon={<Image src="/images/icon-share.svg" />}
                rounded="50%"
                onClick={handleOpen}
                _focus={{ outline: 'none' }}
              />
            ) : (
              'kjskaf'
            )}
          </Flex>
        ) : !isMobile ? (
          <Flex
            width="325px"
            h="70px"
            roundedTop={0}
            roundedBottom="12px"
            justifyContent="space-evenly"
            alignItems="center"
            position="absolute"
            bottom="0"
            bg="hsl(217, 19%, 35%)"
          >
            <Text
              color="hsl(214, 17%, 51%)"
              fontWeight="700"
              letterSpacing="7px"
            >
              SHARE
            </Text>
            <Image src="/images/icon-facebook.svg" h="20px" w="20px" />

            <Image src="/images/icon-pinterest.svg" h="20px" w="20px" />

            <Image src="/images/icon-twitter.svg" h="20px" w="20px" />
            <IconButton
              aria-label="redo-button"
              icon={<Image src="/images/icon-share.svg" color="white" />}
              rounded="50%"
              onClick={handleOpen}
              _focus={{ outline: 'none' }}
            />
          </Flex>
        ) : (
          <Flex
            w={{ base: '325px', md: '445px' }}
            h={{ base: '70px', md: '35px' }}
            roundedTop={0}
            roundedBottom="12px"
            justifyContent="space-evenly"
            alignItems="center"
            position="absolute"
            bottom={{ base: '0', md: '10%' }}
            left={{ md: '40%' }}
          >
            <Image
              src="/images/avatar-michelle.jpg"
              rounded="50%"
              h="40px"
              w="40px"
            />
            <Flex
              flexDirection="column"
              alignContent="center"
              ml={{ base: '15px', md: '-30px' }}
              mr={{ base: '55px', md: '120px' }}
            >
              <Text fontWeight="700" fontSize="13px">
                Michelle Appleton
              </Text>
              <Text fontWeight="500" fontSize="13px">
                28 Jun 2020
              </Text>
            </Flex>
            {!isMobile ? (
              <IconButton
                aria-label="redo-button"
                icon={<Image src="/images/icon-share.svg" />}
                rounded="50%"
                onClick={handleOpen}
                _focus={{ outline: 'none' }}
              />
            ) : (
              <Popup handleOpen={handleOpen} />
            )}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

export default App;
