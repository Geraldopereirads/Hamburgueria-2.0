import { useContext } from 'react';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { CartContext } from '../../../providers/CartContext/CartContext';

const ProductCard = () => {
  const { addCart, searchCartList } = useContext(CartContext);
  return (
    <>
      {searchCartList.map((card) => (
        <StyledProductCard key={card.id}>
          <div className='imageBox'>
            <img src={card.img} alt='Hamburguer' />
          </div>
          <div className='content'>
            <StyledTitle tag='h3' $fontSize='three'>
              {card.name}
            </StyledTitle>
            <StyledParagraph className='category'>
              {card.category}
            </StyledParagraph>
            <StyledParagraph className='price'>{`R$ ${card.price}`}</StyledParagraph>
            <StyledButton
              onClick={() => addCart(card)}
              $buttonSize='medium'
              $buttonStyle='green'
            >
              Adicionar
            </StyledButton>
          </div>
        </StyledProductCard>
      ))}
    </>
  );
};

export default ProductCard;
