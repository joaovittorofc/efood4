import styled from 'styled-components';

export const StoreProductCard = styled.div`
  background: #e66767;
  border-radius: 0;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 370px;
  max-width: 370px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  transition: box-shadow 0.2s, transform 0.2s;
  border: none;
  &:hover {
    box-shadow: 0 8px 32px rgba(0,0,0,0.22);
    transform: translateY(-2px) scale(1.01);
  }
  @media (max-width: 900px) {
    min-height: 220px;
    max-width: 100%;
  }
`;

export const StoreProductInfo = styled.div`
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
    padding: 12px 8px 14px 8px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    min-height: 80px;
    gap: 8px;
  }
`;

export const StoreProductTitle = styled.h2`
  font-size: 1.35rem;
  color: #fff;
  font-weight: 800;
  letter-spacing: 0.5px;
  margin: 0 0 8px 0;
  border-radius: 0;
`;

export const StoreProductDescription = styled.p`
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
    min-height: 48px;
    max-height: 80px;
  }
`;

export const StoreProductButton = styled.button`
  position: static;
  width: 100%;
  margin: 0 auto 32px auto;
  background: #fff;
  color: #e66767;
  border: none;
  border-radius: 0;
  padding: 10px 0;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: none;
  transition: background 0.2s, transform 0.2s;
  z-index: 2;
  &:hover {
    background: #ffe3e3;
    color: #c94c4c;
    transform: scale(1.01);
  }
  @media (max-width: 600px) {
    padding: 8px 0;
    font-size: 0.95rem;
    margin-bottom: 10px;
  }
`;
