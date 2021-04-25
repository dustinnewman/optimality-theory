import React, { useRef } from "react";
import { all_phones, parse } from "tipa";
import Button from "./button";
import "./index.css";

type KeyboardProps = {
  save: (input: string) => void;
};

const BUTTON_LIST = all_phones;

const Keyboard = ({ save }: KeyboardProps) => {
  const input = useRef<HTMLTextAreaElement>(null);

  const insert_key = (key: string) => {
    if (
      input?.current?.selectionStart ||
      input?.current?.selectionStart === 0
    ) {
      const start = input.current.selectionStart;
      const end = input.current.selectionEnd;
      const before = input.current.value.substring(0, start);
      const after = input.current.value.substring(
        end,
        input.current.value.length
      );

      const new_value = before + key + after;
      input.current.value = new_value;
      input.current.selectionStart = start + key.length;
      input.current.selectionEnd = start + key.length;
      // We need to manually call save function because when we set the value
      // of the input programmatically rather than the user doing it, it does
      // not trigger the change event. Manually triggering the change event
      // possible but tricky and not worth the extra overhead.
      check_and_save();
    } else if (input?.current) {
      input.current.value += key;
    }
  };

  const parse_inputs = () => {
    if (input?.current) {
      input.current.value
        .split(",")
        .forEach((word) => console.log(parse(word)));
    }
  };

  const check_and_save = () => {
    if (input?.current) {
      save(input.current.value);
      parse_inputs();
    }
  };

  return (
    <div className="keyboard">
      <div className="ipa-buttons">
        {BUTTON_LIST.map((phone) => (
          <Button
            key={phone.number}
            title={phone.name}
            text={phone.ipa_sym}
            onClick={insert_key}
          />
        ))}
      </div>
      <textarea
        className="ipa-input"
        ref={input}
        spellCheck={false}
        autoCapitalize="false"
        autoComplete="false"
        onChange={check_and_save}
      />
    </div>
  );
};

export default Keyboard;
