import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BannerWrapper = styled.div<{
  image: string;
}>`
  width: 100vw;
  min-height: 320px;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: #000 url('${props => props.image}') center/cover no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  box-shadow: 0 4px 16px rgba(230, 103, 103, 0.10);
  margin-bottom: 32px;
  overflow: hidden;
  @media (max-width: 900px) {
    min-height: 180px;
    margin-bottom: 18px;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.45);
    z-index: 1;
  }
`;

const BannerContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 48px 48px 36px 48px;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,0.18);
  @media (max-width: 900px) {
    padding: 18px 12px 14px 12px;
  }
  @media (max-width: 600px) {
    padding: 10px 4vw 10px 4vw;
  }
`;

const BannerCategory = styled.span`
  background: none;
  color: #fff;
  font-weight: 400;
  font-size: 1.1rem;
  border-radius: 0;
  padding: 0;
  margin-bottom: 8px;
  margin-top: -36px;
  @media (max-width: 600px) {
    font-size: 0.9rem;
    margin-top: -22px;
    margin-bottom: 4px;
  }
`;

const BannerTitle = styled.h2`
  color: #fff;
  font-size: 2.3rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  text-shadow: 0 2px 8px rgba(0,0,0,0.18);
  @media (max-width: 600px) {
    font-size: 1.2rem;
    margin-bottom: 4px;
  }
`;

const BannerRating = styled.div`
  background: rgba(255,255,255,0.18);
  color: #fff;
  font-weight: 600;
  font-size: 1.1rem;
  margin-top: 8px;
  border-radius: 18px;
  min-width: 54px;
  height: 34px;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 12px;
`;

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80';

export default function Banner({ image, category, name }: { image: string, category: string, name: string }) {
  const [bgImage, setBgImage] = useState(image);

  useEffect(() => {
    if (!image) {
      setBgImage(FALLBACK_IMAGE);
      return;
    }
    const img = new window.Image();
    img.src = image;
    img.onload = () => setBgImage(image);
    img.onerror = () => setBgImage(FALLBACK_IMAGE);
  }, [image]);

  return (
    <BannerWrapper image={bgImage}>
      <BannerContent>
        <BannerCategory>{category}</BannerCategory>
        <BannerTitle>{name}</BannerTitle>
      </BannerContent>
    </BannerWrapper>
  );
}
