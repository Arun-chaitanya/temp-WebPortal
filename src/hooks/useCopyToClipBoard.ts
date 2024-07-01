import React, { useState } from "react";

const useCopyToClipBoard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setIsCopied(true);
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    } else {
      console.log("clipboard not found");
    }
  };

  return { copy, isCopied };
};

export default useCopyToClipBoard;
