import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalStyle, Hero, HeroLogo, HeroLogoBox, HeroLogoUtensils, HeroTitle, Container, HomeGrid, Card, CardTop, Badge, Category, Star, CardImage, Info, CardHeader, CardHeaderTitle, CardHeaderRating, RestaurantName, Description, SaibaMaisButton } from '../styles';
import Footer from '../components/Footer';
import { restaurants } from '../data/restaurants';

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return (
    <>
      <GlobalStyle />
  {/* ...existing code... */}
      <Hero>
        <HeroLogo>
          <HeroLogoBox>
            efood <HeroLogoUtensils>🍴</HeroLogoUtensils>
          </HeroLogoBox>
        </HeroLogo>
        <HeroTitle>Viva experiências gastronômicas no conforto da sua casa</HeroTitle>
      </Hero>
      <Container>
        <HomeGrid>
          {restaurants.map((rest, idx) => (
            <Card key={rest.name} style={{ maxWidth: 420, minWidth: 0, background: '#fff', boxShadow: '0 2px 8px rgba(230,103,103,0.10)', display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', borderRadius: 0, overflow: 'hidden' }}>
              <div style={{ position: 'relative' }}>
                <CardImage src={rest.img} alt={rest.name} />
                <div style={{ position: 'absolute', top: 12, right: 12, display: 'flex', gap: 8, flexDirection: 'row-reverse' }}>
                  {rest.topRate && <Badge style={{ background: '#e66767', color: '#fff', fontWeight: 700 }}>Destaque da semana</Badge>}
                  <Category style={{ background: '#e66767', color: '#fff', fontWeight: 700 }}>{rest.category}</Category>
                </div>
              </div>
              <Info style={{ background: '#fff', padding: '24px 18px 18px 18px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardHeader>
                  <CardHeaderTitle>
                    <RestaurantName style={{ color: '#e66767', fontWeight: 800 }}>{rest.name}</RestaurantName>
                  </CardHeaderTitle>
                  <CardHeaderRating>
                    <Star style={{ color: '#e66767', fontWeight: 800, fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: 4 }}>
                      {rest.rating}
                      <svg viewBox="0 0 24 24" width="20" height="20" style={{ fill: '#ffcc29', marginLeft: 2 }}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    </Star>
                  </CardHeaderRating>
                </CardHeader>
                <Description style={{ color: '#e66767', fontWeight: 500 }}>{rest.desc}</Description>
                <SaibaMaisButton
                  onClick={() => navigate(`/store/${idx}`)}
                  style={{
                    background: '#e66767',
                    color: '#fff',
                    minWidth: 120,
                    width: 'fit-content',
                    borderRadius: 0,
                    fontWeight: 700,
                    marginTop: 16,
                    fontSize: '1rem',
                    padding: '12px 24px',
                    boxShadow: 'none',
                    border: 'none',
                    alignSelf: 'flex-start',
                    letterSpacing: 0.5,
                  }}
                >
                  Saiba mais
                </SaibaMaisButton>
              </Info>
            </Card>
          ))}
        </HomeGrid>
      </Container>
  <Footer />
    </>
  );
};

export default Home;
