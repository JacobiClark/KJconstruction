import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

import PageContainer from "lib/layout/pageContainer";

function Contact() {
  return (
    <PageContainer>
      <FormControl
        display="flex"
        flexDirection="column"
        justifyContent="center"
        maxW="800"
      >
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>W never share your email.</FormHelperText>
      </FormControl>
    </PageContainer>
  );
}

export default Contact;
