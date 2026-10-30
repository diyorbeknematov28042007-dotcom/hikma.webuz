"use client";

import { useRef } from "react";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";

export function PersonalMenu({ labels }: { labels: { open: string; close: string; navigation: string; about: string; skills: string; experience: string; contact: string } }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const links = [["#haqimda",labels.about],["#konikmalar",labels.skills],["#yuristim","YURISTIM"],["#tajriba",labels.experience]];

  return (
    <>
      <button
        type="button"
        className="dn-menu-trigger dn-icon-button"
        aria-label={labels.open}
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
              aria-label={labels.close}
              onClick={() => dialog.current?.close()}
            >
              <X size={23} aria-hidden="true" />
            </button>
          </div>
          <nav aria-label={labels.navigation}>
            {links.map(([href, label]) => (
              <a key={href} href={href} onClick={() => dialog.current?.close()}>
                {label}<ArrowUpRight size={24} aria-hidden="true" />
              </a>
            ))}
          </nav>
          <a className="dn-button dn-button-orange" href="#aloqa" onClick={() => dialog.current?.close()}>
            {labels.contact}<ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </div>
      </dialog>
    </>
  );
}
