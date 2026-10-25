"use client";

import { useState, type FormEvent } from "react";
import { Copy } from "@phosphor-icons/react";

type Props = {
  label: string;
  placeholder: string;
  button: string;
  copied: string;
  error: string;
  note: string;
};

export function LawInquiry({ label, placeholder, button, copied, error, note }: Props) {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!message.trim()) return;
    try {
      await navigator.clipboard.writeText(message.trim());
      setStatus(copied);
    } catch {
      setStatus(error);
    }
  }

  return (
    <form className="law-inquiry" onSubmit={handleSubmit}>
      <label htmlFor="law-message">{label}</label>
      <textarea
        id="law-message"
        name="message"
        rows={3}
        maxLength={500}
        required
        placeholder={placeholder}
        value={message}
        onChange={(event) => { setMessage(event.target.value); setStatus(""); }}
      />
      <button className="law-button law-button-dark" type="submit">
        {button}<Copy size={18} aria-hidden="true" />
      </button>
      <p className="law-inquiry-status" role="status">{status}</p>
      <p className="law-inquiry-note">{note}</p>
    </form>
  );
}
