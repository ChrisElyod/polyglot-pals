import React, { ChangeEventHandler, ComponentProps, PropsWithChildren, useState } from 'react';
import { Avatar } from '@chakra-ui/avatar';
import { Button, ButtonGroup } from '@chakra-ui/button';
import { Box, Divider, Stack, Text } from '@chakra-ui/layout';

import { IoFilterSharp } from 'react-icons/io5';
import Icon from '@chakra-ui/icon';
import { Radio, RadioGroup } from '@chakra-ui/radio';
import { Select } from '@chakra-ui/select';

import styles from './discover.module.scss';

interface State {
  filterOpen: boolean;
  sortValue: string;
  sortDir: string;
  knownFilter: string;
  learningFilter: string;
}

interface Language {
  [key: string]: string
}

class Discover extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      filterOpen: false,
      sortValue: '',
      sortDir: '',
      knownFilter: '',
      learningFilter: ''
    }
  }

  renderLanguages = () => {
    return Object.keys(this.props?.languages).map((key => <option value={this.props.languages[key]}>{this.props.languages[key]}</option>))
  }

  render() {
  console.log(this.props);

    const { filterOpen, sortDir, sortValue, learningFilter, knownFilter } = this.state;
    const lfPals = [
      {
        username: 'Chris',
        knownLanguage: ['English'],
        languageToLearn: ['Korean']
      },
      {
        username: 'Chris',
        knownLanguage: ['English'],
        languageToLearn: ['Korean']
      },
      {
        username: 'Chris',
        knownLanguage: ['English'],
        languageToLearn: ['Korean']
      },
      {
        username: 'Chris',
        knownLanguage: ['English'],
        languageToLearn: ['Korean']
      },
      {
        username: 'Chris',
        knownLanguage: ['English'],
        languageToLearn: ['Korean']
      }
    ]

    const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = ({ target }) => {
      console.log(target.id, target.value);
      this.setState((prevState, prevProps) => ({ [target.id]: target.value }));
    }

    const handleReset = () => {
      this.setState({ sortValue: '', sortDir: '', knownFilter: '', learningFilter: '' });
    }

    return (
      <Box py="8" display="flex" flexDir="column" alignItems="center">
        <Box position="relative" w={{ base: '100vw', md: '700px' }}>
          <Box display="flex" flexDirection="column">
            <Button
              rightIcon={<Icon as={IoFilterSharp} w="5" h="5"/>}
              mb="2"
              onClick={() => this.setState((prevState, prevProps) => ({ filterOpen: !prevState.filterOpen }))}
              colorScheme="brand"
            >
              Sort / Filter
            </Button>
            <Box display={filterOpen ? 'flex' : 'none'} flexDirection="column" borderRadius="md" bg="whiteAlpha.700" mb="2" p="4">
              <Box display="flex" flexBasis="1">
                <RadioGroup onChange={(value) => this.setState({ sortValue: value })} value={sortValue} mx="2">
                  <Stack direction="column">
                    <Radio value="dateCreated">Date Created</Radio>
                    <Radio value="speakingLanguage">Speaking Language</Radio>
                    <Radio value="learningLanguage">Learning Language</Radio>
                  </Stack>
                  <Divider my="4" borderColor="black"/>
                  <RadioGroup onChange={(value) => this.setState({ sortDir: value })} value={sortDir} defaultValue="asc">
                    <Stack direction="row">
                      <Radio value="asc">Ascending</Radio>
                      <Radio value="desc">Descending</Radio>
                    </Stack>
                  </RadioGroup>
                </RadioGroup>
                <Box display="flex" flexDirection="column" w="100%" ml="10" justifyContent="space-around">
                  <Box>
                    <label htmlFor="knownFilter"><Text fontWeight="semibold">Speaking Language:</Text></label>
                    <Select placeholder="Select speaking filter" id="knownFilter" onChange={handleSelectChange} value={knownFilter}>
                      {
                        this.renderLanguages()
                      }
                    </Select>
                  </Box>
                  <Box>
                    <label htmlFor="learningFilter"><Text fontWeight="semibold">Learning Language:</Text></label>
                    <Select
                      placeholder="Select learning filter"
                      id="learningFilter"
                      onChange={handleSelectChange}
                      value={learningFilter}
                    >
                      {
                        this.renderLanguages()
                      }
                    </Select>
                  </Box>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" mt="2" justifyContent="space-between">
                <Button colorScheme="brand" size="md" onClick={handleReset}>Reset</Button>
                <Button colorScheme="brand" size="md">Apply</Button>
              </Box>
            </Box>
          </Box>
          {
            lfPals && lfPals.map((pal, index) => {
              return (
                <Box
                  bg={index % 2 ? 'blackAlpha.300' : 'whiteAlpha.600'}
                  w="100%"
                  p="4"
                  display="flex"
                  alignItems="center"
                  borderRadius="20px"
                  marginBottom="2"
                  cursor="pointer"
                  position="relative"
                  className={styles.palPost}
                >
                  <Avatar size="md" name={pal.username} mr="2"/>
                  <Text fontWeight="bold" fontSize="18">{pal.username}</Text>
                  <Box
                    ml="4"
                    display="flex"
                    justifyContent="space-evenly"
                    alignItems="center"
                    width="100%"
                    id={styles.palInfo}
                  >
                    <Box display="flex" flexDirection="column">
                      <Text fontWeight="semibold">I speak:</Text>
                      <Text>{pal.knownLanguage.join(', ')}</Text>
                    </Box>
                    <Box display="flex" flexDirection="column">
                      <Text fontWeight="semibold">Learning:</Text>
                      <Text>{pal.languageToLearn.join(', ')}</Text>
                    </Box>
                  </Box>
                  <Box
                    w="100%"
                    h="100%"
                    opacity={0}
                    position="absolute"
                    top="0"
                    left="0"
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="center"
                    id={styles.palActions}
                  >
                    <Button colorScheme="brand" mr="10">Connect</Button>
                  </Box>
                </Box>
              )
            })
          }
        </Box>
      </Box>
    )
  }
}

export default Discover;

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/languages');
  console.log(res);

  return {
    props: {
      languages: await res.json()
    }
  }
}