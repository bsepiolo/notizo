import { TIMERS } from "@/constants/timers";
import { create } from "zustand";
type ToastData = {
  message: string;
  type: "Success" | "Error" | "Info";
  permanent?: boolean;
  expirationTime?: number;
} | null;
type ToastStore = {
  toast: ToastData | null;
  setToast: (data: ToastData | null) => void;
  removeToast: () => void;
};

export const useToastStore = create<ToastStore>((set) => ({
  toast: null,
  setToast: (toast: ToastData = null) => {
    if (!toast) {
      return set(() => ({ toast }));
    }
    const toastPreparedData: ToastData = {
      ...toast,
      ...(!toast.expirationTime &&
        !toast.permanent && { expirationTime: TIMERS.toastExpiration }),
    };
    return set(() => ({ toast: toastPreparedData }));
  },

  removeToast: () => set(() => ({ toast: null })),
}));
