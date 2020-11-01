import styled from 'styled-components';

const Section = styled.section`
  margin: 3em auto;

  &:first-child {
    margin-top: 0;
  }
`;

const CenteredSection = styled(Section)`
  text-align: center;
`;

export default CenteredSection;
