import { MdDelete } from 'react-icons/md';

import { useContext } from 'react';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { CartContext } from '../../../../providers/CartContext/CartContext';

const CartProductCard = () => {
  const { carCart, removeCart } = useContext(CartContext);

  return (
    <>
      {carCart.map((card) => (
        <StyledCartProductCard key={card.id}>
          <div className='imageBox'>
            <img src={card.img} alt='Hamburguer' />
          </div>
          <div className='contentBox'>
            <StyledTitle tag='h3' $fontSize='three'>
              {card.name}
            </StyledTitle>
            <button
              onClick={() => removeCart(card.id)}
              type='button'
              aria-label='Remover'
            >
              <MdDelete size={24} />
            </button>
          </div>
        </StyledCartProductCard>
      ))}
    </>
  );
};

export default CartProductCard;
