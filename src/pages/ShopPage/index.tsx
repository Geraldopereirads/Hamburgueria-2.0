import { useContext } from 'react';
import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import { StyledContainer } from '../../styles/grid';
import { CartContext } from '../../providers/CartContext/CartContext';
import { UserContext } from '../../providers/UserContext/UserContext';

const ShopPage = () => {
  const { openModal } = useContext(CartContext);
  const { loading } = useContext(UserContext);

  return (
    <StyledShopPage>
      {openModal ? <CartModal /> : null}
      <Header />
      <main>
        <StyledContainer containerWidth={1300}>
          {loading ? <p>Carregando...</p> : <ProductList />}
        </StyledContainer>
      </main>
    </StyledShopPage>
  );
};

export default ShopPage;
