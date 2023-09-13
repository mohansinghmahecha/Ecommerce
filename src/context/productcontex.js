import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "http://localhost:8000/posts";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  issingleLoading: true,
  singleProduct: [
    {
      id: 3,
      name: "Chatrawas",
      company: "Dangrous",
      price: 1000000000,
      colors: ["#ffffff", "#000000", "#f0f0f0"],
      image: "https://picsum.photos/300",
      images: [
        "https://picsum.photos/id/237/200/300",
        "https://picsum.photos/id/237/200/300",
        "https://picsum.photos/id/237/200/300",
      ],
      description: "the main body is here",
      category: "Dangrous ",
      featured: true,
    },
  ],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    console.log("url getProducts : ", url);

    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
  /* my 2nd api for single product open */
  const getSingleproduct = async (url) => {
    console.log("url getSingleproduct : ", url);
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      //const res = await axios.get(url).data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_API_ERROR" });
    }
  };

  useEffect(() => {
    // getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleproduct, getProducts }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
