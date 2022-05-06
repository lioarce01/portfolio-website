
import Layout from '../components/layouts/article'
import { Container, Badge, Link, List, ListItem, Heading, ListIcon } from '@chakra-ui/react'
import { Meta } from '../components/work'
import P from '../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import { CheckIcon } from '@chakra-ui/icons'

const Skills = () => {

    return (
        <Layout title='skills'>
          <Container>
            <Heading as='h3' variant='section-title'>
                Hard Skills
            </Heading>
              <List ml ={4} my={4}>
                  <Section>
                      <ListItem>
                          <Meta>NodeJS</Meta>
                      </ListItem>
                      <ListItem>
                          <Meta>NextJS</Meta>
                      </ListItem>
                      <ListItem>
                          <Meta>Solidity</Meta>
                      </ListItem>
                      <ListItem>
                          <Meta>Hardhat</Meta>
                      </ListItem>
                      <ListItem>
                          <Meta>Truffle</Meta>
                      </ListItem>
                      <ListItem>
                          <Meta>Chakra UI</Meta>
                      </ListItem>
                      <ListItem>
                          <Meta>TailwindCSS</Meta>
                      </ListItem>
                  </Section>
                </List>
                <Heading as='h3' variant='section-title'>
                    Soft Skills
                </Heading>
                <List ml ={4} my={4} spacing={3}>
                    <ListItem>
                        <ListIcon as={CheckIcon} color='green.500' />
                        Commitment
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckIcon} color='green.500' />
                        Flexibility
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckIcon} color='green.500' />
                        Critical Thinking
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckIcon} color='green.500' />
                        Autodidact and Constant learning
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckIcon} color='green.500' />
                        Teamwork
                    </ListItem>
                </List>
          </Container>
      </Layout>
    )
}

export default Skills