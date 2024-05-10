import Head from "next/head";
import { Box, ChakraProvider, Grid, GridItem, Heading, Text, Image } from "@chakra-ui/react";
import { Experience } from "../components/experience";
import { theme } from "../utils/theme";

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Shane Duncan</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/Cropped_Image.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/Cropped_Image.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/Cropped_Image.png"/>
        <link rel="icon" href="/Cropped_Image.ico" />
      </Head>
      <Box py="115px" px={4} maxWidth={512} mx="auto">
        <Grid fluid mb={10} templateColumns="repeat(4, 1fr)" alignItems="center">
          <GridItem colSpan={1}>
            <Image
              borderRadius="full"
              width={{ base: '80%', lg: 'full' }}
              src="/1664030822331.jpeg"
              alt="Shane Duncan"
            />
          </GridItem>
          <GridItem colSpan={3}>
            <Box>
              <Heading as="h1" size="lg">
              ‎‎ ‎  Shane Duncan
              </Heading>
              <Text>‎ ‎ ‎ Software and Data Engineering</Text>
            </Box>
          </GridItem>
        </Grid>
        <Box my={10}>
          <Heading as="h2" size="md" md={2} mb={2}>
            About
          </Heading>
          <Text>
            Hello 👋 I'm Shane. I am a recent graduate of the University of Pennsylvania School of Engineering and Applied Sciences 
            at the intersection between Software and Data, with an obsession for building technology and life-long learning! 
            I am deeply interested in the intersection of software and data engineering, and specifically how companies 
            leverage distribuetd systems to scale big data technologies, as well as shipping machine learning services to production. 
            I am also interested in computing infrastructure within the Cloud and it's lower level implementations and abstractions.
          </Text>
        </Box>
        <Box my={10}>
          <Heading as="h2" size="md" md={2} mb={2}>
            Experience
          </Heading>
          <Experience
            side="May-Aug 2022"
            title="App Dev Intern - Alivia"
            desc="Developed an interactive user-faced mobile application using the React Native and Expo frameworks for deployment on
            both IOS and Android with a concentration on accessibility and ease of use."
            href="https://www.aliviaanalytics.com/"
            stack="React Native • AWS"
          />
          <Experience
            side="June-Aug 2021"
            title="Research Intern - Geisenger"
            desc=" Created a set of internal web applications that centralized currentand historical job ticket information, and organized 
            assets stored in a local network attached storage device."
            href="https://allevia.us/"
            stack="Scikit-Learn • NumPy • Pandas"
          />
          <Experience
            side="June-Aug 2020"
            title="Summer Analyst - Barclays"
            desc="Created application security dashboards, improved the security database, and created a chatbot protoype with DjangoFlow."
            href="https://home.barclays/"
            stack="Cybersecurity • PostgreSQL • Django"
          />
        </Box>
        <Box my={10}>
          <Heading as="h2" size="md" md={2} mb={2}>
            Education
          </Heading>
          <Experience
            side="2019-2023"
            title="University of Pennsylvania"
            desc="B.S. Systems Science Engineering"
            stack="Algorithms • OOP • ML • Probability/Statistics ..."
          />
      
        </Box>
        
        <Box my={10}>
          <Heading as="h2" size="md" md={2} mb={2}>
            Projects
          </Heading>
          <Experience
            side="2022"
            title="Natural Disaster Severity Classifier"
            href="https://github.com/dshane1903/Natural-Disaster-Classifier"
            desc="A supervised learning model for classification of wildfire severity based on the burn level of surrounding vegetation."
            stack="Scikit-Learn • Pandas • Numpy"
          />
          <Experience
            side="2022"
            title="YelpDB"
            href="https://github.com/dshane1903/YelpDB"
            desc="A yelp clone web-server that uses PostgreSQL, Flask, Google Cloud Platform, and Bootstrap."
            stack="Flask • SQL • Google Cloud Platform"
          />
          <Experience
            side="2019"
            title="COVID-19 Academic BERT"
            href="https://github.com/dshane1903/COVID-19-Academic-BERT-"
            desc="A BERT-based search engine built for retrieveing COVID-19 academic journals from the CORD-19 dataset."
            stack="React.js • PyTorch • Flask"
          />
        </Box>
        <Box my={10}>
          <Experience
            side="Resume"
            title="PDF"
            href="duncan-shane-resume.pdf"
          />
          <Experience
            side="Github"
            title="dshane1903"
            href="https://github.com/dshane1903"
          />
          <Experience
            side="LinkedIn"
            title="Shane Duncan"
            href="https://www.linkedin.com/in/qwl/"
          />
        </Box>
      </Box>
    </ChakraProvider>
  )
}
