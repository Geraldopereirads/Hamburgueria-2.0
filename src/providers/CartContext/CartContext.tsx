import { toast } from 'react-toastify';
import { createContext, useEffect, useState } from 'react';
import { ICarCart, ICart, ICartContext } from './@types';
import { IDefaultProviderProps } from '../UserContext/@types';
import { api } from '../../services/api';

export const CartContext = createContext<ICartContext>({} as ICartContext);

export const CartProvider = ({ children }: IDefaultProviderProps) => {
  const localStorageCard = localStorage.getItem('@CARDS');
  const [searchValue, setSearchValue] = useState('');
  const [search, setSearch] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [cart, setCart] = useState<ICart[]>([]);
  const [carCart, setCarCart] = useState<ICarCart[]>(
    localStorageCard ? JSON.parse(localStorageCard) : []
  );

  const searchCartList = cart.filter((card) =>
    search === ''
      ? true
      : card.name.toLowerCase().includes(search.toLowerCase())
  );

  const total = carCart.reduce(
    (accumulator, product) => accumulator + product.price,
    0
  );

  useEffect(() => {
    const cartLoad = async () => {
      const token = localStorage.getItem('@TOKEN');
      if (token) {
        try {
          const response = await api.get<ICart[]>(`products`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setCart(response.data);
        } catch (error) {
          localStorage.removeItem('@TOKEN');
        }
      }
    };
    cartLoad();
  }, []);

  useEffect(() => {
    localStorage.setItem('@CARDS', JSON.stringify(carCart));
  }, [carCart]);

  const addCart = (card: ICarCart) => {
    setCarCart([...carCart, card]);
    toast.success('Produto adicionado ao carrinho com sucesso!');
  };

  const removeCart = (cardId: number) => {
    const newTeam = carCart.filter((card) => card.id !== cardId);
    setCarCart(newTeam);
    toast.success('Produto removido do carrinho com sucesso!');
  };

  const removeAllFoods = () => {
    setCarCart([]);
    toast.success('Todos os produtos foram removidos do carrinho com sucesso!');
  };

  return (
    <CartContext.Provider
      value={{
        openModal,
        setOpenModal,
        cart,
        setCart,
        carCart,
        setCarCart,
        addCart,
        removeCart,
        setSearchValue,
        searchValue,
        setSearch,
        search,
        searchCartList,
        total,
        removeAllFoods,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
