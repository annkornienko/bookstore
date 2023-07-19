"use client";

import { Suspense } from "react";
import { Provider } from "react-redux";
import Table from "./components/table";
import store from "./store/rootReducer";

export default function Home(props: any) {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <Table />
      </Suspense>
    </Provider>
  );
}
