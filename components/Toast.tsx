"use client";
import { useState, useContext } from "react";
import { ToastContext } from "@/context/toast-context";
type Props = {
  children?: string;
};

export default function Toast({ children }: Props) {
  const { toastState } = useContext(ToastContext);
  return (
    toastState.visible && (
      <div
        className="bg-red text-red max-w-md fixed w-full bg-opacity-10 border border-red py-4 px-5 rounded-2sm inset-x-0 top-6 mx-auto"
        role="alert"
      >
        We couldn't find a match for that email and password. Give it another
        shot or reset your password if needed!
      </div>
    )
  );
}

export function ToastContextProvider({ children }: any) {
  const [toastState, setToastState] = useState({ visible: false });

  return (
    <ToastContext.Provider value={{ toastState, setToastState }}>
      {children}
    </ToastContext.Provider>
  );
}
