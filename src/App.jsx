import { useLoaderData } from "react-router-dom"

function App() {

  const coffees = useLoaderData();

  return (
    <>
      <h1 className="text-3xl">Hot hot cold coffee: {coffees.length}</h1>
    </>
  )
}

export default App
