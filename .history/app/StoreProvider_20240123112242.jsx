"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "../lib/store";
import { setAdminUserDetails, setUserDetails } from "../lib/users/userSlice";

export default function StoreProvider({ admin,user, children }) {
  const storeRef = useRef(null);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
      storeRef.current.dipatch(setUserDetails(user));
      storeRef.current.dipatch(setAdminUserDetails(admin));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
