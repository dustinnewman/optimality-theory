import config from "../config";
import save from "./save"

const save_candidates = (candidates: string) => {
    save(config.candidates, candidates);
    window.dispatchEvent(new Event(config.candidates_changed));
}

export default save_candidates