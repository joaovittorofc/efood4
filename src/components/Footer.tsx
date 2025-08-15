import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #ffeddd;
  text-align: center;
  padding: 48px 0 32px 0;
  margin-top: 60px;
  @media (max-width: 600px) {
    padding: 28px 0 18px 0;
    margin-top: 32px;
  }
`;
const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 18px;
`;
const LogoBox = styled.div`
  border: 5px solid #e66767;
  border-radius: 0;
  padding: 8px 36px;
  display: flex;
  align-items: center;
  font-size: 2.2rem;
  font-weight: 800;
  color: #e66767;
  background: none;
  letter-spacing: 1px;
  margin-bottom: 12px;
  @media (max-width: 600px) {
    font-size: 1.3rem;
    padding: 6px 16px;
  }
`;
const Utensils = styled.span`
  font-size: 2.1rem;
  margin-left: 8px;
  font-weight: 400;
  @media (max-width: 600px) {
    font-size: 1.1rem;
    margin-left: 4px;
  }
`;
const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 18px;
  @media (max-width: 600px) {
    gap: 12px;
    margin-bottom: 10px;
  }
`;
const SocialIcon = styled.a`
  color: #e66767;
  font-size: 1.7rem;
  transition: color 0.2s;
  &:hover {
    color: #c94c4c;
  }
  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;
const FooterText = styled.p`
  color: #e66767;
  font-size: 0.95rem;
  margin-top: 24px;
  margin-bottom: 0;
  @media (max-width: 600px) {
    font-size: 0.75rem;
    margin-top: 14px;
    padding: 0 8px;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterLogo>
        <LogoBox>
          efood <Utensils>🍴</Utensils>
        </LogoBox>
      </FooterLogo>
      <SocialRow>
        <SocialIcon href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="7" fill="#fff"/><path d="M12 8.4A3.6 3.6 0 1 0 12 15.6 3.6 3.6 0 0 0 12 8.4Zm0 5.9A2.3 2.3 0 1 1 12 9.7a2.3 2.3 0 0 1 0 4.6Zm4.5-6.1a.84.84 0 1 1-1.68 0 .84.84 0 0 1 1.68 0ZM19.2 8.6a5.2 5.2 0 0 0-1.4-2.1A5.2 5.2 0 0 0 15.1 5.1c-.8-.2-1.6-.3-3.1-.3s-2.3 0-3.1.3a5.2 5.2 0 0 0-2.1 1.4A5.2 5.2 0 0 0 4.8 8.6c-.2.8-.3 1.6-.3 3.1s0 2.3.3 3.1a5.2 5.2 0 0 0 1.4 2.1 5.2 5.2 0 0 0 2.1 1.4c.8.2 1.6.3 3.1.3s2.3 0 3.1-.3a5.2 5.2 0 0 0 2.1-1.4 5.2 5.2 0 0 0 1.4-2.1c.2-.8.3-1.6.3-3.1s0-2.3-.3-3.1Zm-1.1 6.2a3.7 3.7 0 0 1-2.1 2.1c-.7.3-1.5.3-3.1.3s-2.4 0-3.1-.3a3.7 3.7 0 0 1-2.1-2.1c-.3-.7-.3-1.5-.3-3.1s0-2.4.3-3.1a3.7 3.7 0 0 1 2.1-2.1c.7-.3 1.5-.3 3.1-.3s2.4 0 3.1.3a3.7 3.7 0 0 1 2.1 2.1c.3.7.3 1.5.3 3.1s0 2.4-.3 3.1Z" fill="#e66767"/></svg>
        </SocialIcon>
        <SocialIcon href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="7" fill="#fff"/><path d="M15.5 8.5h-2V7.5c0-.4.3-.5.5-.5h1.5V5h-2c-1.7 0-2.5.8-2.5 2.5V8.5h-1.5V11h1.5v6h2.5v-6h1.7l.3-2.5Z" fill="#e66767"/></svg>
        </SocialIcon>
        <SocialIcon href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="7" fill="#fff"/><path d="M19.5 8.2c-.4.2-.8.3-1.2.4.4-.2.7-.6.9-1-.4.2-.8.4-1.3.5-.4-.4-1-.7-1.6-.7-1.2 0-2.1 1-2.1 2.1 0 .2 0 .3.1.5-1.7-.1-3.2-.9-4.2-2.1-.2.3-.3.7-.3 1.1 0 .7.4 1.3 1 1.7-.3 0-.6-.1-.9-.2v.1c0 1 .7 1.8 1.6 2-.2.1-.4.1-.7.1-.1 0-.2 0-.3-.1.2.7.9 1.2 1.7 1.2-.6.5-1.4.8-2.2.8-.1 0-.2 0-.3-.1.8.5 1.7.8 2.7.8 3.2 0 5-2.7 5-5v-.2c.3-.2.6-.5.8-.8Z" fill="#e66767"/></svg>
        </SocialIcon>
      </SocialRow>
      <FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
      </FooterText>
    </FooterWrapper>
  );
}
