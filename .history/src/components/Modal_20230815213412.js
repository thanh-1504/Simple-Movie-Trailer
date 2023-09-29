import React from "react";
// sm:my-8 sm:w-full sm:max-w-lg
const Modal = ({ children }) => {
  return (
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 modal_outside">
          <div class=" relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
