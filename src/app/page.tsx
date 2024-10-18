import Image from "next/image";
import cover from "@/assets/cover.png";
import Link from "next/link";
import Logo from "@/assets/logo.png";

export default function Home() {
  return (
    <div className="text-center flex flex-col h-full justify-center items-center relative">
      <div className="absolute top-0 left-0 flex items-center justify-between w-full">
        <Image src={Logo} width={100} height={100} alt="logo" />
        <h1 className="text-4xl">ChainGPT</h1>
      </div>
      <h2 className="font-bold text-3xl mt-12">$200,000 in CGPT Giveaway!🎉🎊🎁</h2>
      <p className="font-normal my-12 text-xl ">
        Mint your free anniversary AI NFT with ChainGPT and share with Friends
        on Social media <br /> for a chance to win<br /> for a chance to win free Bitcoin, Ethereum, USDT and Solana
      </p>
      <Image
        src={cover}
        alt="cover photo"
        width={200}
        height={250}
        className="w-full h-[250px] object-contain"
      />

      <Link
        href={"/connect-wallet"}
        className="uppercase font-semibold text-white bg-[#2020c9] w-full h-[42px] rounded-[50px] mt-12 hover:bg-[#205bc9] hover:shadow-sm flex items-center justify-center"
      >
        Get Started
      </Link>
    </div>
  );
}
