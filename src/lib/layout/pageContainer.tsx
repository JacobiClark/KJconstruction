import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
interface PageContainerProps {
  children: React.ReactNode;
}

// return box with motion.div that animates on load

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <Box
      as={motion.div}
      display="flex"
      flexDirection="column"
      alignItems="center"
      w="full"
      p="8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </Box>
  );
};

export default PageContainer;
