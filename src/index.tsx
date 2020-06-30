import React, { useState, useEffect } from "react";

export function useDocumentTitle(
  value: string = ""
): [string, React.Dispatch<React.SetStateAction<string>>] {
  const [title, setTitle] = useState<string>(value);
  useEffect(() => {
    document.title = title;
  }, [title]);
  return [title, setTitle];
}
