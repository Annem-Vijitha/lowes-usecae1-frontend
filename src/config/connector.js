import React, { useReducer } from "react";

import axiosClient from "./axios";


// context
import userContext from "./context";

// reducer
import Reducer from "./reducer";

// type tags

import {
  GET_CATEGORIES,
  GET_ITEMS,
  POST_CATEGORY,
  POST_ITEMS,
} from "./values";

const Context = props => {
  const initialState = {
    user: null,
    currency: null,
    items: [],
    categories: []
  };

  // Dispatch to execute actions
  const [state, dispatch] = useReducer(Reducer, initialState);

 

  // POST Methods
  const addCategory = async category => {
    const res = await axiosClient.post("/categories/add", category)

    dispatch({
      type: POST_CATEGORY,
      payload: res.data
    });
  };
  const addItem = async (item) => {
    try {
      const res = await axiosClient.post("/items/add", item);
      dispatch({
        type: POST_ITEMS,
        payload: res.data,
      });
    } catch (error) {
      console.error("Error adding item:", error);
      // Handle error scenario if needed
    }
  };
  // GET Methods

  const getCategories = async () => {
    const res = await axiosClient.get("/categories/getall");

    dispatch({
      type: GET_CATEGORIES,
      payload: res.data
    });
  };
  const getItems = async () => {
    const res = await axiosClient.get("/items/getall");

    dispatch({
      type: GET_ITEMS,
      payload: res.data
    });
  };
  const handleDelete = async categoryID => {
   
    axiosClient
      .delete(`/categories/delete/${categoryID}`) // replace with your backend API endpoint
      .then((response) => {
        console.log(response.data); // handle success response
        // Perform any additional actions after successful deletion
      })
      .catch((error) => {
        console.error(error); // handle error response
        // Perform any additional error handling
      });
  };
  const handleDelete1 = async itemID => {
   
    axiosClient
      .delete(`/items/delete/${itemID}`) // replace with your backend API endpoint
      .then((response) => {
        console.log(response.data); // handle success response
        // Perform any additional actions after successful deletion
      })
      .catch((error) => {
        console.error(error); // handle error response
        // Perform any additional error handling
      });
  };

  const updateCategory = async(category,id) => {
   console.log("id:",id);
    axiosClient
      .put(`/categories/update/${id}`,category) // replace with your backend API endpoint
      .then((response) => {
        console.log(response.data); // handle success response
        // Perform any additional actions after successful deletion
      })
      .catch((error) => {
        console.error(error); // handle error response
        // Perform any additional error handling
      });
  };
  const updateItem = async(item,id) => {
   console.log("id:",id);
    axiosClient
      .put(`/items/update/${id}`,item) // replace with your backend API endpoint
      .then((response) => {
        console.log(response.data); // handle success response
        // Perform any additional actions after successful deletion
      })
      .catch((error) => {
        console.error(error); // handle error response
        // Perform any additional error handling
      });
  };


  return (
    <userContext.Provider
      value={{
        categories: state.categories,
        items: state.items,
        addCategory,
        addItem,
        getCategories,
        getItems,
        handleDelete,
        handleDelete1,
        updateCategory,
        updateItem
      }}
    >
      {props.children}
    </userContext.Provider>
  );
    };
export default Context;
