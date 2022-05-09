const initialState = [
  {
    id: 1,
    name: "Senhor das Moscas",
    author: "William Golding",
    img: "https://images-na.ssl-images-amazon.com/images/I/41Op9WQjjtL._SX318_BO1,204,203,200_.jpg",
    price: 30.0,
  },
  {
    id: 2,
    name: "A Montanha Mágica",
    author: "Thomas Mann",
    img: "https://images-na.ssl-images-amazon.com/images/I/41tncdh9UUS._SX343_BO1,204,203,200_.jpg",
    price: 50.0,
  },
  {
    id: 3,
    name: "Capitães da Areia",
    author: "Jorge Amado",
    img: "https://images-na.ssl-images-amazon.com/images/I/41egZIo3eYL._SX345_BO1,204,203,200_.jpg",
    price: 20.0,
  },
  {
    id: 4,
    name: "O Retrato de Dorian Gray",
    author: "Oscar Wilde",
    img: "https://images-na.ssl-images-amazon.com/images/I/41Ou42L7UoL._SX331_BO1,204,203,200_.jpg",
    price: 20.0,
  },
  {
    id: 5,
    name: "Anna Kariênina",
    author: "Liev Tolstoi",
    img: "https://images-na.ssl-images-amazon.com/images/I/51b7T4AE-tL._SX341_BO1,204,203,200_.jpg",
    price: 80.0,
  },
  {
    id: 6,
    name: "Mulherzinhas",
    author: "Louisa May Alcott",
    img: "https://images-na.ssl-images-amazon.com/images/I/51SC6Gq4D1L._SY344_BO1,204,203,200_QL70_ML2_.jpg",
    price: 50.0,
  },
];

const productsReducer = (state = initialState, action) => {
  return state;
};

export default productsReducer;
