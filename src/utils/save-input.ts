import config from "../config";
import save from "./save"

const save_input = (input: string) => {
    save(config.input, input);
    window.dispatchEvent(new Event(config.input_changed));
}

export default save_input