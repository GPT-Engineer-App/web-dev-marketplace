import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" marginTop={8} paddingY={4} backgroundColor="gray.100" textAlign="center">
      <Text fontSize="sm">&copy; {new Date().getFullYear()} Particles. All rights reserved.</Text>
      <Link href="/about" marginLeft={4} fontSize="sm">
        About Us
      </Link>
      <Link href="/contact" marginLeft={4} fontSize="sm">
        Contact
      </Link>
    </Box>
  );
};

export default Footer;
