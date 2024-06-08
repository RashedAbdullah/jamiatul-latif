"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, mounted, setMounted }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (mounted && modalRef.current && !modalRef.current.open) {
      modalRef.current.showModal();
    }
  }, [mounted]);

  if (!mounted) return null;

  const modalContainer = document.getElementById("modal");
  if (!modalContainer) return null;

  return createPortal(
    <dialog
      onClick={() => setMounted(false)}
      ref={modalRef}
      className="relative bg-opacity-50 rounded lg:hidden"
    >
      <div onClick={(e) => e.stopPropagation()} className="relative overflow-auto">
        {children}
      </div>
    </dialog>,
    modalContainer
  );
};

export default Modal;
