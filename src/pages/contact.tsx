import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  VStack,
  HStack,
  Heading,
  Text,
  Slider,
  SliderTrack,
  Box,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

import PageContainer from "lib/layout/pageContainer";

function Contact() {
  return (
    <PageContainer>
      <VStack
        spacing={4}
        mb={5}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Heading as="h1" noOfLines={1}>
          Interested in high quality wood work? You've come to the right place!{" "}
        </Heading>
        <Text fontSize="2xl">
          Please tell me about your project and I'll get back to you as soon as
          possible
        </Text>
      </VStack>{" "}
      <VStack
        w="full"
        maxW="900"
        spacing={4}
        mb={5}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <HStack w="full" spacing={4}>
          <FormControl w="full" isRequired>
            <FormLabel>First Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl w="full" isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input type="text" />
          </FormControl>
        </HStack>
        <FormControl w="full" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>W never share your email.</FormHelperText>
        </FormControl>
        <Slider defaultValue={60} min={0} max={300} step={30}>
          <SliderTrack bg="red.100">
            <Box position="relative" right={10} />
            <SliderFilledTrack bg="tomato" />
          </SliderTrack>
          <SliderThumb boxSize={6} />
        </Slider>
      </VStack>
    </PageContainer>
  );
}

export default Contact;
