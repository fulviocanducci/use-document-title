import React from "react";

import { useDocumentTitle } from "use-document-title";

const App = () => {
  const [title, setTitle] = useDocumentTitle();
  const setTitleName = () => setTitle("New Nome");
  const setDateTime = () => setTitle(new Date().toISOString());
  return (
    <div>
      <div>{title}</div>
      <button onClick={setTitleName}>Set Name</button>
      <button onClick={setDateTime}>Set DateTime</button>
    </div>
  );
};
export default App;
