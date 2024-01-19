import { useParams } from "react-router-dom"

export default function Coin(props) {
  const { coin } = useParams()

  if (!coin) {
    return <h2>Sorry... Coin not found.</h2>
  }

  return (
    <>

    </>
  )
}