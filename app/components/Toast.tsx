"use client";
import { useToastStore } from "@/store/toast";
import Button, { ButtonColor } from "@/app/components/Button";
export default function Toast() {
  const { toast, removeToast } = useToastStore();

  const typeClasses = {
    success: "bg-green-500 border-green-500 text-green-500",
    error: "bg-red border-red text-red",
    info: "bg-blue border-blue text-blue",
  };

  const buttonColor: Record<string, ButtonColor> = {
    success: "success",
    error: "warning",
    info: "secondary",
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
        <Button
          onClick={removeToast}
          variant="text"
          color={buttonColor[toast.type]}
        >
          <i className="eva eva-close-outline "></i>
        </Button>
      </div>
    )
  );
}
