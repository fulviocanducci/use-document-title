# canducci-use-document-title

[![NPM](https://img.shields.io/npm/v/canducci-use-document-title.svg)](https://www.npmjs.com/package/canducci-use-document-title) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![npm](https://img.shields.io/npm/dt/canducci-use-document-title?style=plastic)](https://www.npmjs.com/package/canducci-use-document-title) [![Node.js CI](https://github.com/fulviocanducci/use-document-title/workflows/Node.js%20CI/badge.svg)](https://www.npmjs.com/package/canducci-use-document-title)

## Install

```bash
npm install --save canducci-use-document-title
```

## Usage

```tsx
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
```

## License

MIT © [fulviocanducci](https://github.com/fulviocanducci)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
