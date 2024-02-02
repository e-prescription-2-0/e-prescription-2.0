import { Html } from "@react-three/drei"

const PillsFallback = () => {
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src="pills.png" alt="pills"></img>
    </Html>
  )
}

export default PillsFallback
