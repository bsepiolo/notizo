"use client";
import { createContext } from "react";
export const ToastContext = createContext<Record<string, any> | null>(null);
