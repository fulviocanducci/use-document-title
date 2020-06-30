import React from 'react'

import { useMyHook } from 'use-document-title'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
