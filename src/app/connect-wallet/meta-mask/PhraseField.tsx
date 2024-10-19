import { useState } from "react";

interface PhraseFieldProps {
  index: number;
  value: string;
  onChange: (value: string) => void;
}

export default function PhraseField({ index, value, onChange }: PhraseFieldProps) {
  const [hidePass, setHidePass] = useState<boolean>(true);

  return (
    <div className="flex gap-4 items-center mb-2">
      <h3>{index + 1}.</h3>
      <input
        type={hidePass ? "password" : "text"}
        className="w-[200px] h-[48px] bg-transparent border-solid border-[1px] pl-3 rounded-md"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div>
        {/* Toggle visibility */}
        <button type="button" onClick={() => setHidePass((prev) => !prev)}>
          {hidePass ? (
            <svg
              width="24"
              height="24"
              fill="currentColor"
              className="show-hide-toggle__icon"
              aria-label="This word is hidden"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"></path>
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              fill="currentColor"
              className="show-hide-toggle__icon"
              aria-label="This word is being shown"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
