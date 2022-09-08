import { Flex } from '@chakra-ui/react';

const Card = (props) => {
  return (
    <Flex borderRadius='12px' {...props}>
      {props.children}
    </Flex>
  );
};

export default Card;
