import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import StartUpNavigation from "../../startup/StartUpNavigation";
import SmallWithLogoLeft from "../Footer/SmallWithLogoLeft";
import codef from "./../../assets/aboutus.png";

const ArticleList = ({ navLight }) => {
  return (
    <>
      <StartUpNavigation navLight={navLight} />
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
          marginTop="150px"
        >
          <Flex border="1px solid #383047" height="500px">
            <Image
              rounded={"md"}
              alt={"product image"}
              src={codef}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "500px", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                CodeFace ?
              </Heading>
              <Text
                color="gray"
                fontWeight={300}
                fontSize={"2xl"}
                marginTop="16px"
              >
                your best friend in the marathon of becoming a programmer
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text fontSize={"lg"}>
                  In the list of in-demand professions, we would not be wrong if
                  we say that the specializations related to information
                  technologies, especially programming, were at the forefront.
                  If we look at the marathon of becoming a programmer today, we
                  can see several typical obstacles faced by almost a large
                  number of marathon participants. If we look at all these
                  obstacles, we can clearly see that they come out of the same
                  door "Coding skill".
                </Text>
                <Text fontSize={"lg"}>
                  he CodeFace project is a project designed to solve this
                  problem from the roots. If we use such an analogy, we have all
                  played online games against randomly selected opponents over
                  time and this has developed our skills in that game and made
                  us Gamer :-). the most important point is that even if we lose
                  in that game, it will not cause a lack of self-confidence in
                  us. CodeFace is a project based on these logic and principles.
                  By logging in with your Github or Google account, you are
                  ready to take part in Code wars, and as if you are competing
                  with a random programmer on a random algorithm given to you by
                  the system in a game. In the logic of code wars, a magic wand
                  that will instill confidence in you and have a great positive
                  effect on the development of "coding skills".
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Features
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Javascript Code IDE</ListItem>
                    <ListItem>UI free Tools</ListItem>{" "}
                    <ListItem>Arena of Code</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Task Manager</ListItem>
                    <ListItem>Code Snippets</ListItem>
                    <ListItem>Free Support</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
            </Stack>

            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              Begin FaceCode journey
            </Button>
          </Stack>
        </SimpleGrid>
      </Container>
      <SmallWithLogoLeft />
    </>
  );
};

export default ArticleList;
