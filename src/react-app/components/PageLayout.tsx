import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface PageLayoutProps {
  title: string;
  ariaLabel?: string;
  children: React.ReactNode;
  showSeam?: boolean;
}

export function PageLayout({ title, ariaLabel, children, showSeam = true }: PageLayoutProps) {
  return (
    <>
      <Header title={title} ariaLabel={ariaLabel} showSeam={showSeam} />
      {children}
      <Footer />
    </>
  );
}
