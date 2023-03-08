export interface ICart {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface ICarCart {
  id: number;
  img: string;
  name: string;
  price: number;
}

export interface ICartContext {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  cart: ICart[];
  setCart: React.Dispatch<React.SetStateAction<ICart[]>>;
  carCart: ICarCart[];
  setCarCart: React.Dispatch<React.SetStateAction<ICarCart[]>>;
  addCart: (card: ICarCart) => void;
  removeCart: (cardId: number) => void;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  searchCartList: ICart[];
  total: number;
  removeAllFoods: () => void;
}
