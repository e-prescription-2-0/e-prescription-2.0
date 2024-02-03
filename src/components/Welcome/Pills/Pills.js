import { motion } from "framer-motion"
import { slideIn } from "../../../utils/animations"
import style from "./Pills.module.css"
import PillsCanvas from "./PillsCanvas"

const Pills = () => {
  return (
    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className={style["pills-wrapper"]}
    >
      <PillsCanvas />
    </motion.div>
  )
}

export default Pills
