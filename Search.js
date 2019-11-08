import React, { useEffect, useState } from "react"
import Worker from "worker-loader!./Search.worker.js"

let worker = new Worker()

export default function() {
  const [input, setInput] = useState("")
  let [results, setResults] = useState([])
  useEffect(() => {
    worker.postMessage({ entries: [{ nom: "albert" }, { nom: "Maurice" }] })

    worker.onmessage = ({ data: results }) => setResults(results)
  }, [])

  return (
    <div className="shopping-list">
      <h1>Ma recherche</h1>
      <input
        value={input}
        placeholder="Ta recherche"
        onChange={e => {
          let input = e.target.value
          setInput(input)
          worker.postMessage({ input })
        }}
      />
      Votre saisie : {input}
      {results.map(r => JSON.stringify(r))}
    </div>
  )
}
