import { MdShoppingCart, MdLogout } from 'react-icons/md';
import { GiMagicBroom } from 'react-icons/gi';
import { useContext } from 'react';
import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import LogoKenzieBurguer from '../../assets/LogoKenzieBurguer.svg';
import { StyledContainer } from '../../styles/grid';
import { CartContext } from '../../providers/CartContext/CartContext';
import { UserContext } from '../../providers/UserContext/UserContext';

const Header = () => {
  const { setOpenModal, setSearch } = useContext(CartContext);
  const { userLogout } = useContext(UserContext);

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className='flexGrid'>
          <img
            src={LogoKenzieBurguer}
            alt='Kenzie Burguer Logo'
            className='logo'
          />
          <nav className='nav' role='navigation'>
            <SearchForm />
            <div className='buttons'>
              <button onClick={() => setSearch('')} type='button'>
                <GiMagicBroom size={28} />
              </button>

              <button
                type='button'
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                <MdShoppingCart size={28} />
              </button>
              <button
                onClick={() => {
                  userLogout();
                }}
                type='button'
              >
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
