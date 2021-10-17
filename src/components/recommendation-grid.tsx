import React from "react";
import { Grid, Box } from "@chakra-ui/react";

export const RecommendationGrid = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={24}>
      <Box w="100%" h="200px" bg="cyan.500" />
      <Box w="100%" h="200px" bg="cyan.500" />
      <Box w="100%" h="200px" bg="cyan.500" />
      <Box w="100%" h="200px" bg="cyan.500" />
      <Box w="100%" h="200px" bg="cyan.500" />
    </Grid>
  );
};
