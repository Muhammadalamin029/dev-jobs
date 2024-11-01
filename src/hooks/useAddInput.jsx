import React, { useState } from "react";

const useAddInput = (register) => {
  const addInput = (element, placeholder) => {
    const container = document.getElementById(element);
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = placeholder;
    input.classList.add("form-control");
    input.classList.add("mb-2");
    // input.setAttribute("", { ...register("requirements.items.1") });
    container.appendChild(input);
  };

  return [addInput];
};

export default useAddInput;
