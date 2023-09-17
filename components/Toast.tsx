"use client";
import { useToastStore } from "@/store/toast";
import { TIMERS } from "@/constants/timers";

export default function Toast() {
  const { toast, removeToast } = useToastStore();

  const typeClasses = {
    Success: "bg-green-500 border-green-500 text-green-500",
    Error: "bg-red border-red text-red",
    Info: "bg-blue border-blue text-blue",
  };

  if (toast && !toast.permanent) {
    setTimeout(() => {
      removeToast();
    }, toast.expirationTime);
  }

  return (
    toast && (
      <div
        className={`${
          typeClasses[toast.type]
        } max-w-md fixed w-full bg-opacity-10 border  py-3 px-5 rounded-2sm inset-x-0 top-6 mx-auto`}
        role="alert"
      >
        {toast.message}
      </div>
    )
  );
}
