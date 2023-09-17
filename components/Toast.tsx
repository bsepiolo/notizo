"use client";
import { useToastStore } from "@/store/toast";
import Button from "@/components/Button";
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
        } max-w-md fixed w-full items-center bg-opacity-10 border flex  py-3 px-5 rounded-2sm inset-x-0 top-6 mx-auto`}
        role="alert"
      >
        <div className="grow">{toast.message}</div>
        <Button onClick={removeToast} variant="text">
          <i className="eva eva-close-outline "></i>
        </Button>
      </div>
    )
  );
}
