import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/Banner';
import { GlobalStyle, Navbar, NavSection, NavButton, CartInfo, Container, StoreGrid, Card, CardTop, Badge, Category, Star, CardImage, Info, CardHeader, CardHeaderTitle, CardHeaderRating, RestaurantName, Description, SaibaMaisButton } from '../styles';
import Footer from '../components/Footer';
import { restaurants } from '../data/restaurants';

const StoreProfile = ({ index }: { index: number }) => {
  const store = restaurants[index];
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [index]);
  if (!store) return <div>Loja não encontrada.</div>;

  const cards = Array.from({ length: 6 }, (_, i) => ({
    name: `${store.name} Produto ${i + 1}`,
    img: store.img,
    desc: `Descrição do produto ${i + 1} da loja ${store.name}.`,
    category: store.category,
    topRate: i % 2 === 0,
    rating: (Math.random() * 1.2 + 3.8).toFixed(1)
  }));

  return (
    <>
      <GlobalStyle />
      <Navbar>
        <NavSection style={{ justifyContent: 'flex-start', textAlign: 'left', paddingLeft: 80 }}>
          <NavButton onClick={() => navigate('/')}>Restaurantes</NavButton>
        </NavSection>
        <NavSection style={{ justifyContent: 'center' }}>
          <h3 style={{ color: '#e66767', fontSize: '2rem', fontWeight: 800, border: '4px solid #e66767', borderRadius: 0, padding: '8px 32px', margin: '0 auto 8px auto', background: '#fff8f2', letterSpacing: '1px', display: 'inline-block' }}>
            efood <span style={{fontSize:'1.3rem',fontWeight:400,marginLeft:8}}>🍴</span>
          </h3>
        </NavSection>
        <NavSection style={{ justifyContent: 'flex-end', textAlign: 'right', paddingRight: 80 }}>
          <CartInfo>
            0 produto(s) no carrinho
          </CartInfo>
        </NavSection>
      </Navbar>
  <Banner image={store.img} category={store.category} name={store.name} />
      <Container>
        <StoreGrid>
          {cards.slice(0, 3).map((dish, idx) => (
            <Card key={dish.name + idx} style={{ maxWidth: 380, minWidth: 0, background: '#fff', boxShadow: '0 4px 24px rgba(0,0,0,0.10)', display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}>
              <CardImage src={dish.img} alt={dish.name} />
              <Info style={{ background: '#e66767', padding: '24px 18px 18px 18px' }}>
                <CardHeader>
                  <CardHeaderTitle>
                    <RestaurantName style={{ color: '#fff', fontWeight: 800 }}>{dish.name}</RestaurantName>
                  </CardHeaderTitle>
                </CardHeader>
                <Description style={{ color: '#fff', fontWeight: 500 }}>{dish.desc}</Description>
                <SaibaMaisButton
                  style={{
                    background: '#fff',
                    color: '#e66767',
                    borderRadius: 0,
                    fontWeight: 700,
                    marginTop: 16,
                    fontSize: '1rem',
                    padding: '12px 64px 12px 40px',
                    boxShadow: 'none',
                    border: 'none',
                    alignSelf: 'flex-start',
                    letterSpacing: 0.5,
                    display: 'block',
                    width: 'auto',
                    marginLeft: 16,
                  }}
                >
                  Adicionar ao carrinho
                </SaibaMaisButton>
              </Info>
            </Card>
          ))}
        </StoreGrid>
        <StoreGrid>
          {cards.slice(3, 6).map((dish, idx) => (
            <Card key={dish.name + idx} style={{ maxWidth: 380, minWidth: 0, background: '#fff', boxShadow: '0 4px 24px rgba(0,0,0,0.10)', display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}>
              <CardImage src={dish.img} alt={dish.name} />
              <Info style={{ background: '#e66767', padding: '24px 18px 18px 18px' }}>
                <CardHeader>
                  <CardHeaderTitle>
                    <RestaurantName style={{ color: '#fff', fontWeight: 800 }}>{dish.name}</RestaurantName>
                  </CardHeaderTitle>
                </CardHeader>
                <Description style={{ color: '#fff', fontWeight: 500 }}>{dish.desc}</Description>
                <SaibaMaisButton
                  style={{
                    background: '#fff',
                    color: '#e66767',
                    borderRadius: 0,
                    fontWeight: 700,
                    marginTop: 16,
                    fontSize: '1rem',
                    padding: '12px 40px',
                    boxShadow: 'none',
                    border: 'none',
                    alignSelf: 'flex-start',
                    letterSpacing: 0.5,
                    display: 'block',
                    width: 'auto',
                    marginLeft: 16,
                  }}
                >
                  Adicionar ao carrinho
                </SaibaMaisButton>
              </Info>
            </Card>
          ))}
        </StoreGrid>
      </Container>
  <Footer />
    </>
  );
};

export default StoreProfile;
