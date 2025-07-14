"use client";

import React from "react";
import { HeroUIProvider } from "@heroui/react";
import { Toaster } from "react-hot-toast";
import CustomCursor from "./CustomCursor";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <HeroUIProvider>
      <CustomCursor />
      {children}
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1a1a1a',
            color: '#D4AF37',
            border: '1px solid #D4AF37',
          },
        }}
      />
    </HeroUIProvider>
  );
} 