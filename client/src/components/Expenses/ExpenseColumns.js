import { Box, Flex, keyframes, Text } from '@chakra-ui/react';

const ExpenseColumns = ({ name, value }) => {
  const heightGrow = keyframes`
  from { height: 0 }
  to { height:${value}px }
`;

  return (
    <Flex height='100%' align='center' direction='column'>
      <Flex
        height='90%'
        bg='#91a7ff'
        borderRadius='12px'
        width='12px'
        overflow={'hidden'}
        justify='flex-end'
        direction='column'
      >
        <Box bg='#4263eb' animation={`${heightGrow} forwards 0.5s ease`} />
      </Flex>
      <Text color='#000'>{name}</Text>
    </Flex>
  );
};

export default ExpenseColumns;
