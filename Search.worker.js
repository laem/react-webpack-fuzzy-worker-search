import Fuse from "fuse.js"

let searchWeights = [
  {
    name: "nom",
    weight: 0.3
  }
]
console.log("SALUT")
let fuse = null

onmessage = function(event) {
  if (event.data.entries)
    fuse = new Fuse(event.data.entries, {
      keys: searchWeights
    })

  if (event.data.input) {
    let results = fuse.search(event.data.input)
    postMessage(results)
  }
}
