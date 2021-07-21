import React, {useState} from 'react'
export default function Test() {
  const [a, setA] = useState(0)
  return (
    <div>
      <button onClick={() => setA(() => Math.random() * 100)}>set</button>
      {a}
      xxxxxxxxxxxx
    </div>
  )
}
