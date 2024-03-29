import React from "react";
import { mount } from "enzyme";
import { combineReducers, createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { ShopPage } from "./shop.component";

import { auth } from "../../firebase/firebase.utils";

jest.mock("firebase/compat/app", () => {
  const auth = jest.fn();
  const firestore = jest.fn();
  const initializeApp = jest.fn();
  auth.GoogleAuthProvider = jest.fn(() => ({ setCustomParameters: jest.fn() }));
  return {
    auth,
    firestore,
    initializeApp,
  };
});

export const createMockStore = ({ state, reducers }) => {
  const store = createStore(combineReducers(reducers), state);
  return {
    ...store,
    persistor: {
      persist: () => null,
    },
  };
};

describe("ShopPage", () => {
  let wrapper;
  let mockFetchCollectionsStart;
  let store;

  beforeEach(() => {
    const mockReducer = (
      state = {
        isFetching: true,
      },
      action
    ) => state;

    const mockState = {
      shop: {
        isFetching: true,
      },
    };

    store = createMockStore({
      state: mockState,
      reducers: { shop: mockReducer },
    });

    mockFetchCollectionsStart = jest.fn();

    const mockMatch = {
      path: "",
    };

    const mockProps = {
      match: mockMatch,
      fetchCollectionsStart: mockFetchCollectionsStart,
    };

    wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <ShopPage {...mockProps} />
        </Provider>
      </BrowserRouter>
    );
  });

  it("should render ShopPage", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should fetch collections on mount", () => {
    expect(mockFetchCollectionsStart).toHaveBeenCalled();
  });
});
