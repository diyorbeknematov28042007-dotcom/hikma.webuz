"use client";

import { useId, useState } from "react";
import { Plus } from "@phosphor-icons/react";

export function PersonalAccordion({
  title,
  text,
  note,
  defaultOpen = false,
}: {
  title: string;
  text: string;
  note: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const triggerId = `dn-trigger-${id}`;
  const panelId = `dn-panel-${id}`;

  return (
    <div className="dn-accordion">
      <h3>
        <button
          className="dn-accordion-trigger"
          type="button"
          id={triggerId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          {title}<Plus size={22} aria-hidden="true" />
        </button>
      </h3>
      <div
        className="dn-accordion-panel"
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        aria-hidden={!open}
        inert={!open}
        data-open={open}
      >
        <div className="dn-accordion-clip">
          <div className="dn-accordion-content"><p>{text}</p><span>{note}</span></div>
        </div>
      </div>
    </div>
  );
}
