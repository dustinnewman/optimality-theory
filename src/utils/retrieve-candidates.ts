import config from "../config"
import retrieve from "./retrieve"

const retrieve_candidates = () => retrieve(config.candidates)?.split(",")

export default retrieve_candidates