
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: #000;
  color: #fff;
  a {
    color: #fff;
  }

  img {
    background: gray;
  }`;


const Footer = () => {
  return (
    <StyledFooter>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by Creative Devs
      </a>
    </StyledFooter>
  )
}

export default Footer