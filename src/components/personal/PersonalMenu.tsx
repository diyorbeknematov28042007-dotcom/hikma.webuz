"use client";

import { useRef } from "react";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";

const links = [
  ["#haqimda", "Men haqimda"],
  ["#konikmalar", "Könikmalar"],
  ["#yuristim", "YURISTIM"],
  ["#tajriba", "Tajriba"],
] as const;

export function PersonalMenu() {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        className="dn-menu-trigger dn-icon-button"
        aria-label="Menyuni oçiş"
        aria-haspopup="dialog"
        aria-controls="dn-mobile-menu"
        onClick={() => dialog.current?.showModal()}
      >
        <List size={23} aria-hidden="true" />
      </button>
      <dialog
        ref={dialog}
        id="dn-mobile-menu"
        className="dn-menu"
        aria-labelledby="dn-menu-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className="dn-menu-inner">
          <div className="dn-menu-top">
            <p id="dn-menu-title">Diyorbek Ne’matov</p>
            <button
              type="button"
              className="dn-icon-button"
              aria-label="Menyuni yopiş"
              onClick={() => dialog.current?.close()}
            >
              <X size={23} aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobil navigatsiya">
            {links.map(([href, label]) => (
              <a key={href} href={href} onClick={() => dialog.current?.close()}>
                {label}<ArrowUpRight size={24} aria-hidden="true" />
              </a>
            ))}
          </nav>
          <a className="dn-button dn-button-orange" href="#aloqa" onClick={() => dialog.current?.close()}>
            Boğlaniş<ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </div>
      </dialog>
    </>
  );
}
