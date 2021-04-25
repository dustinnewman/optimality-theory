import config from "../config"
import retrieve from "./retrieve"

const retrieve_input = () => retrieve(config.input);

export default retrieve_input