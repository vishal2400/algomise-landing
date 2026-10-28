"use client";

import { openContactForm } from "./ContactForm";

export default function ContactTrigger({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button type="button" onClick={openContactForm} className={className}>
      {children}
    </button>
  );
}
