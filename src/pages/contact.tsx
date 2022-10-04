import { useState } from "react";
import {
  FormControl,
  FormHelperText,
  Textarea,
  FormLabel,
  Button,
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
  SliderMark,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";

import PageContainer from "lib/layout/pageContainer";

const labelStyles = {
  mt: "4",
  ml: "-30px",
  fontSize: "sm",
};

function Contact() {
  const [sliderValue, setSliderValue] = useState(50);

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
        spacing={6}
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
        </FormControl>
        <FormControl w="full" isRequired>
          <FormLabel>Project description</FormLabel>
          <Textarea
            h="150"
            placeholder="Tell me about the work you need done"
          />
        </FormControl>
        <FormControl w="full" isRequired>
          <FormLabel>Budget Estimate</FormLabel>
          <Slider defaultValue={0} min={0} max={4} step={1} mr={7}>
            <SliderMark value={0} mt="4" ml="-5" fontSize="md">
              ~$1000
            </SliderMark>
            <SliderMark value={1} mt="4" ml="-5" fontSize="md">
              $3000
            </SliderMark>
            <SliderMark value={2} mt="4" ml="-5" fontSize="md">
              $7000
            </SliderMark>
            <SliderMark value={3} mt="4" ml="-5" fontSize="md">
              $15000
            </SliderMark>
            <SliderMark value={4} mt="4" ml="-10" fontSize="md">
              $25000+
            </SliderMark>

            <SliderTrack bg="green.100">
              <Box position="relative" right={10} />
              <SliderFilledTrack bg="green.300" />
            </SliderTrack>
            <SliderThumb boxSize={6} bg="blue.100" />
          </Slider>
        </FormControl>
      </VStack>
      <Button
        m={8}
        rightIcon={<MdOutlineEmail />}
        colorScheme="blue"
        variant="outline"
      >
        Email Kelly Jensen
      </Button>
    </PageContainer>
  );
}

export default Contact;
