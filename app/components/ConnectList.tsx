"use client";

import { useState } from "react";

export default function ConnectList({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  const [copied, setCopied] = useState<string | null>(null);

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        /* clipboard unavailable */
      }
      document.body.removeChild(ta);
    }
    setCopied(text);
    window.setTimeout(() => setCopied(null), 2000);
  }

  return (
    <ul className="mt-4 space-y-2.5 text-sm">
      {items.map((c) => {
        if (c.href.startsWith("mailto:")) {
          const email = c.href.replace("mailto:", "");
          return (
            <li key={c.label}>
              <button
                type="button"
                onClick={() => copy(email)}
                className="text-left text-ink transition-colors hover:text-muted"
              >
                {copied === email ? "Copied ✓" : c.label}
              </button>
            </li>
          );
        }
        return (
          <li key={c.label}>
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink transition-colors hover:text-muted"
            >
              {c.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
