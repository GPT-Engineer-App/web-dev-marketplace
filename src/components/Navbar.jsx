import React from "react";
import { Box, Flex, Spacer, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box as="nav" backgroundColor="gray.100" paddingY={4}>
      <Flex maxWidth="800px" margin="0 auto" alignItems="center">
        <Link href="/" fontWeight="bold" fontSize="xl">
          Particles
        </Link>
        <Spacer />
        <Link href="/developers" marginLeft={4}>
          Developers
        </Link>
        <Link href="/about" marginLeft={4}>
          About
        </Link>
        <Link href="/contact" marginLeft={4}>
          Contact
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;