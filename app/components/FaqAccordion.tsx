"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-navy-800/10 border-y border-navy-800/10">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 py-5 text-left"
            >
              <span className="font-serif text-lg font-medium text-navy-950">
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className={`mt-1 shrink-0 text-xl text-steel transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="pb-5 pr-10 text-[15px] leading-relaxed text-ink/80">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
