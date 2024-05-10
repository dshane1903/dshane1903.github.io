import { Text, Heading, Grid, Box, GridItem, Spacer } from "@chakra-ui/react";
import { Stack } from 'next';

export const Experience = ({
  side,
  title,
  desc,
  stack,
  image,
  href,
  ...props
}) => (
  <Grid fluid templateColumns="repeat(4, 1fr)" mb={4} {...props}>
    <GridItem colSpan={{ base: 4, sm:1 }}>
      <Text opacity={0.5}>
        {side}
      </Text>
    </GridItem>
    <GridItem colSpan={{ base: 4, sm: 3 }}>
      { image &&
        <Image width="36px" mb={4} src={image} alt={title}/>
      }
      <Heading as={href ? "a" : "h3"} size="sm" href={href} display="flex" alignItems="center">
        {title}
        {href && (<Text>&nbsp;↗︎</Text>)}
      </Heading>
      {desc &&
        <Text>
          {desc}
        </Text>
      }
      {stack &&
        <Text opacity={0.5}>
          {stack}
        </Text>
      }
    </GridItem>
  </Grid>
)