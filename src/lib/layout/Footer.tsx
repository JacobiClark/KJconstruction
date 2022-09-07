import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center" margin={2}>
      <Text fontSize="sm" color="gray.500">
        {new Date().getFullYear()} -{" "}
        <Link href="https://jacobics.me" isExternal rel="noopener noreferrer">
          jacobics.me
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
