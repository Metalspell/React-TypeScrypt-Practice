"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ProvidersProps } from "@/interfaces";


const Providers = (props: ProvidersProps) => {
  return (
    <Provider store={store}>{props.children}</Provider>
  );
};

export default Providers;