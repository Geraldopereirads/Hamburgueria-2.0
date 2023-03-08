import { MdSearch } from 'react-icons/md';
import { useContext } from 'react';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { CartContext } from '../../../providers/CartContext/CartContext';

const SearchForm = () => {
  const { searchValue, setSearchValue, setSearch } = useContext(CartContext);

  const submit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setSearch(searchValue);
    setSearchValue('');
  };

  return (
    <StyledSearchForm onSubmit={submit}>
      <input
        type='text'
        placeholder='Digitar pesquisa'
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
