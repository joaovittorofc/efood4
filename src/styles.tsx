// Arquivo de estilos globais e componentes visuais do projeto efood
// Contém styled-components para layout, grid, cards, navbar, banner, footer e utilitários
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Estilos globais aplicados ao body e background do site
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
    background: #fff4ee;
  }
  .hero-bg {
    background: repeating-linear-gradient(135deg, #ffe3e3 0 16px, transparent 16px 32px);
    width: 100vw;
    min-height: 320px;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`;

// Banner principal da Home
export const Hero = styled.section`
  width: 100vw;
  min-height: 320px;
  background: #ffe9db;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: repeating-linear-gradient(0deg, transparent, transparent 18px, #f9d7c3 18px, #f9d7c3 22px), repeating-linear-gradient(90deg, transparent, transparent 18px, #f9d7c3 18px, #f9d7c3 22px);
    opacity: 0.45;
    z-index: 0;
    pointer-events: none;
  }
`;

// Logo do banner
export const HeroLogo = styled.div`
  margin-top: 36px;
  margin-bottom: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
// Caixa estilizada do logo
export const HeroLogoBox = styled.div`
  border: 4px solid #e66767;
  border-radius: 0;
  padding: 8px 32px;
  display: flex;
  align-items: center;
  font-size: 2.1rem;
  font-weight: 800;
  color: #e66767;
  background: #fff8f2;
  letter-spacing: 1px;
  z-index: 1;
`;
// Ícone de utensílios ao lado do logo
export const HeroLogoUtensils = styled.span`
  font-size: 1.5rem;
  margin-left: 8px;
  font-weight: 400;
`;
// Título principal do banner
export const HeroTitle = styled.h1`
  text-align: center;
  color: #e66767;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0;
  margin-top: 0;
  z-index: 1;
  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;
// Container centralizado para conteúdo principal
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;
// Grid para Home (2 colunas)
// Grid responsiva de 2 colunas para Home
export const HomeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  padding: 24px 0 24px 0;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 0 0 12px 0;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 0 0 6px 0;
  }
`;

// Grid para StoreProfile (3 colunas)
// Grid responsiva de 3 colunas para StoreProfile
export const StoreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 32px 0 32px 0;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 18px;
    padding: 0 0 16px 0;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 0 0 8px 0;
  }
`;
// Card de restaurante/produto
export const Card = styled.div`
  background: #fff;
  border-radius: 0;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(230, 103, 103, 0.10);
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 420px;
  max-width: 520px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  transition: box-shadow 0.2s, transform 0.2s;
  border: none;
  &:hover {
    box-shadow: 0 8px 32px rgba(230, 103, 103, 0.13);
    transform: translateY(-2px) scale(1.01);
  }
  @media (max-width: 900px) {
    min-height: 260px;
    max-width: 100%;
  }
  @media (max-width: 600px) {
    min-height: 180px;
    max-width: 100%;
    margin: 0 0 8px 0;
  }
`;
// Topo do card (badges)
export const CardTop = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 14px 18px 0 18px;
  z-index: 2;
  pointer-events: none;
  flex-wrap: wrap;
`;
// Badge de destaque
export const Badge = styled.span`
  display: inline-block;
  background: #fff;
  color: #e66767;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 0;
  padding: 4px 14px;
  margin-right: 6px;
  box-shadow: 0 1px 4px rgba(230, 103, 103, 0.07);
  letter-spacing: 0.2px;
  text-transform: uppercase;
  border: 2px solid #e66767;
`;
// Badge de categoria
export const Category = styled.span`
  display: inline-block;
  background: #fff;
  color: #e66767;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 0;
  padding: 4px 14px;
  box-shadow: 0 1px 4px rgba(230, 103, 103, 0.07);
  letter-spacing: 0.2px;
  text-transform: uppercase;
  border: 2px solid #e66767;
`;
// Estrela de avaliação
export const Star = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  color: #e66767;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  gap: 6px;
  margin-left: 8px;
  svg {
    margin-left: 4px;
    margin-right: -2px;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    fill: #ffb347;
    filter: drop-shadow(0 1px 2px rgba(0,0,0,0.10));
  }
`;
// Componente de imagem do card, com fallback
export const CardImage = ({ src, alt }: { src: string, alt: string }) => {
  const [imgSrc, setImgSrc] = React.useState(src);
  return (
    <Img
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc('https://via.placeholder.com/400x220?text=Imagem+Indispon%C3%ADvel')}
    />
  );
};
// Estilo da imagem do card
const Img = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
  min-height: 180px;
  max-height: 220px;
  object-fit: cover;
  display: block;
  background: #f5f5f5;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom: none;
  transition: filter 0.2s;
  margin-bottom: 0;
  @media (max-width: 600px) {
    min-height: 110px;
    max-height: 140px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  ${Card}:hover & {
    filter: brightness(0.97) saturate(1.1);
  }
`;
// Área de informações do card
export const Info = styled.div`
  padding: 24px 18px 18px 18px;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #e66767;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  min-height: 120px;
  margin-bottom: 0;
  gap: 12px;
  @media (max-width: 600px) {
    padding: 10px 6px 10px 6px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    min-height: 60px;
    gap: 6px;
  }
`;
// Header do card (nome e avaliação)
export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;
// Título do header do card
export const CardHeaderTitle = styled.div`
  display: flex;
  align-items: center;
`;
// Área de avaliação do header
export const CardHeaderRating = styled.div`
  display: flex;
  align-items: center;
  padding-right: 12px;
`;
// Nome do restaurante/produto
export const RestaurantName = styled.h2`
  font-size: 1.35rem;
  color: #fff;
  font-weight: 800;
  letter-spacing: 0.5px;
  margin: 0 0 8px 0;
  border-radius: 0;
  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 4px;
  }
`;
// Descrição do restaurante/produto
export const Description = styled.p`
  font-size: 1.15rem;
  color: #fff;
  line-height: 1.5;
  margin-bottom: 24px;
  margin-top: 0;
  max-width: 98%;
  min-height: 80px;
  max-height: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-line;
  font-weight: 500;
  @media (max-width: 600px) {
    font-size: 0.92rem;
    min-height: 32px;
    max-height: 60px;
    margin-bottom: 10px;
  }
`;
// Rodapé customizado
export const Footer = styled.footer`
  background-color: #ffeeee;
  text-align: center;
  padding: 40px 20px;
  margin-top: 60px;
`;
// Logo do rodapé
export const Logo = styled.h3`
  color: #e66767;
  font-size: 2rem;
  font-weight: 800;
  border: 4px solid #e66767;
  border-radius: 0;
  padding: 8px 32px;
  margin: 0 auto 8px auto;
  background: #fff8f2;
  letter-spacing: 1px;
  display: inline-block;
`;
// Copyright do rodapé
export const Copyright = styled.p`
  color: #a1a1a1;
  font-size: 0.8rem;
`;
// Navbar customizada
export const Navbar = styled.nav`
  width: 100vw;
  background: repeating-linear-gradient(135deg, #ffe3e3 0 16px, transparent 16px 32px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0 24px 0;
  position: relative;
  border: none;
  box-shadow: none;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
    padding: 18px 0 12px 0;
    gap: 8px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    padding: 10px 0 8px 0;
    gap: 4px;
  }
`;
// Seção da navbar
export const NavSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  @media (max-width: 900px) {
    justify-content: flex-start;
    padding: 4px 0;
  }
  @media (max-width: 600px) {
    justify-content: flex-start;
    padding: 2px 0;
  }
`;
// Botão da navbar
export const NavButton = styled.button`
  background: none;
  border: none;
  color: #e66767;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  padding: 0;
  margin: 0;
  transition: color 0.2s;
  &:hover {
    color: #c94c4c;
    text-decoration: underline;
  }
`;
// Info do carrinho na navbar
export const CartInfo = styled.div`
  color: #e66767;
  font-weight: 700;
  font-size: 1.15rem;
  text-align: right;
`;
// Botão "Saiba mais" e "Adicionar ao carrinho"
export const SaibaMaisButton = styled.button`
  position: absolute;
  left: 18px;
  bottom: 18px;
  background: #e66767;
  color: #fff;
  border: none;
  border-radius: 0;
  padding: 10px 22px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: none;
  transition: background 0.2s, transform 0.2s;
  z-index: 2;
  &:hover {
    background: #c94c4c;
    transform: scale(1.04);
  }
  @media (max-width: 600px) {
    left: 12px;
    bottom: 12px;
    padding: 8px 16px;
    font-size: 0.95rem;
  }
`;
