import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm" color="gray.500">
        {new Date().getFullYear()} -{" "}
        <Link href="https://jacobics.me" isExternal rel="noopener noreferrer">
          2022 - jacobics.me
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
