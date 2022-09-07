import { Grid, Heading, Text } from "@chakra-ui/react";

const SomeText = () => {
  return (
    <Grid textAlign="center">
      <Heading as="h1" size="lg">
        Kelly Jensen Construction{" "}
      </Heading>

      <Text fontSize="xs" color="gray.500">
        Professional Website{" "}
      </Text>
    </Grid>
  );
};

export default SomeText;
