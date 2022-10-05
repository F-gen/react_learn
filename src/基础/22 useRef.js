
import React, { useEffect, useRef } from "react";

class Test extends React.Component {
  render() {
    return (
      <div>类组件</div>
    )
  }
}


function App() {
  const testRef = useRef(null)
  const appRef = useRef(null)
  useEffect(() => {
    console.log(testRef.current)
    console.log(appRef.current)

  }, [])
  return (
    <div>
      <Test ref={testRef}></Test>
      <h1 ref={appRef}>App</h1>
    </div>
  )
}

export default App
