import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.button`
  ${tw`rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition`}

  .dark & {
    ${tw`text-dark-med-emphasis hover:bg-gray-800 hover:text-dark-high-emphasis focus:bg-gray-700`}
  }
`;
