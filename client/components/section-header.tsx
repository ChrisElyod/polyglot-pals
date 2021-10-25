import React, { FC } from 'react';

import { Text } from '@chakra-ui/layout';

const SectionHeader:FC = ({ children }) => (
  <Text transform="rotate(2deg)" casing="uppercase" fontSize="32" textDecor="underline" alignSelf="center" fontWeight="semibold">{children}</Text>
)

export default SectionHeader;