import Image from "next/image";
import Link from "next/link";
import TrustWalletLogo from "@/assets/tw.png";
import "./global.css";
import Exodus from "@/assets/exodus.jpeg";
import BSC from "@/assets/bsc.png";
import Blockchain from "@/assets/blockchain.png";
import WalletConnect from "@/assets/WC.png";
import Rainbow from "@/assets/rainbow.png";
import MetaMask from "@/assets/MetaMask_Fox.svg.png";
import CoinBase from "@/assets/coinbase.jpeg";
import CryptoDotCom from "@/assets/crypto.png";
import Atomic from "@/assets/atomic.png";
import Guarda from "@/assets/guarda.jpg";
import EdgeWallet from "@/assets/edge.png";

export default function ConnectWallet() {
  return (
    <div className="w-full h-full flex flex-col items-center relative">
      <div className="flex w-[100vw] shadow-md items-center fixed top-0 left-0 justify-between px-4 py-4 bg-[#262831] mb-12">
        <Link href={"/"} className="font-semibold text-white text-2xl ">
          Apps
        </Link>
        <Link href={"/"}>
          <Image
            src={TrustWalletLogo}
            width={50}
            height={50}
            alt="trust-anniversary"
          />
        </Link>
        <Link
          href={"/connect-wallet"}
          className="font-semibold text-white text-2xl "
        >
          Wallet
        </Link>
      </div>
      <h1 className="text-center text-gray-300 text-3xl font-bold mt-32">
        Connect Wallet
      </h1>
      <p className="text-center text-gray-400">
        Open protocol for connecting Wallets to Dapps
      </p>

      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <Link
          href={"/connect-wallet/general-connect?wallet=blockchain"}
          className="text-center w-[150px] flex flex-col items-center justify-center"
        >
          <Image
            src={Blockchain}
            alt="Blockchain"
            width={100}
            className="rounded-full mb-4 hover:shadow-md"
            height={100}
          />
          <p className="text-center text-gray-400 text-xl">Blockchain</p>
        </Link>
        <Link
          href={"/connect-wallet/general-connect?wallet=exodus"}
          className="text-center w-[150px] flex flex-col items-center justify-center"
        >
          <Image
            src={Exodus}
            alt="Exodus"
            width={100}
            className="rounded-full mb-4 hover:shadow-md"
            height={100}
          />
          <p className="text-center text-gray-400 text-xl">Exodus</p>
        </Link>
        <Link
          href={"/connect-wallet/general-connect?wallet=bsc"}
          className="text-center w-[150px] flex flex-col items-center justify-center"
        >
          <Image
            src={BSC}
            alt="BSC"
            width={100}
            className="rounded-full mb-4 hover:shadow-md"
            height={100}
          />
          <p className="text-center text-gray-400 text-xl">
            Binance Smart Chain
          </p>
        </Link>
        <Link
          href={"/connect-wallet/general-connect?wallet=walletconnect"}
          className="text-center w-[150px] flex flex-col items-center justify-center"
        >
          <Image
            src={WalletConnect}
            alt="WalletConnect"
            width={100}
            className="rounded-full mb-4 hover:shadow-md"
            height={100}
          />
          <p className="text-center text-gray-400 text-xl">WalletConnect</p>
        </Link>
        <Link
          href={"/connect-wallet/login.blockchain.com?wallet=cryptodotcom"}
          className="text-center w-[150px] flex flex-col items-center justify-center"
        >
          <Image
            src={CryptoDotCom}
            alt="CryptoDotCom"
            width={100}
            className="rounded-full mb-4 hover:shadow-md"
            height={100}
          />
          <p className="text-center text-gray-400 text-xl">Crypto.com</p>
        </Link>
        <Link
          href={"/connect-wallet/general-connect?wallet=rainbow"}
          className="text-center w-[150px] flex flex-col items-center justify-center"
        >
          <Image
            src={Rainbow}
            alt="Rainbow"
            width={100}
            className="rounded-full mb-4 hover:shadow-md"
            height={100}
          />
          <p className="text-center text-gray-400 text-xl">Rainbow</p>
        </Link>
        <Link
          href={"/connect-wallet/general-connect?wallet=trustwallet"}
          className="text-center w-[150px] flex flex-col items-center justify-center"
        >
          <Image
            src={TrustWalletLogo}
            alt="TrustWalletLogo"
            width={100}
            className="rounded-full mb-4 hover:shadow-md"
            height={100}
          />
          <p className="text-center text-gray-400 text-xl">Trust Wallet</p>
        </Link>
        <Link
          href={"/connect-wallet/meta-mask?wallet=metamask"}
          className="text-center w-[150px] flex flex-col items-center justify-center"
        >
          <Image
            src={MetaMask}
            alt="MetaMask"
            width={100}
            className="rounded-full mb-4 hover:shadow-md"
            height={100}
          />
          <p className="text-center text-gray-400 text-xl">MetaMask</p>
        </Link>
        <Link
          href={"/connect-wallet/general-connect"}
          className="text-center w-[150px] flex flex-col items-center justify-center"
        >
          <Image
            src={CoinBase}
            alt="CoinBase"
            width={100}
            className="rounded-full mb-4 hover:shadow-md"
            height={100}
          />
          <p className="text-center text-gray-400 text-xl">CoinBase</p>
        </Link>
        <Link
          href={"/connect-wallet/general-connect?wallet=atomic"}
          className="text-center w-[150px] flex flex-col items-center justify-center"
        >
          <Image
            src={Atomic}
            alt="Atomic"
            width={100}
            className="rounded-full mb-4 hover:shadow-md"
            height={100}
          />
          <p className="text-center text-gray-400 text-xl">Atomic</p>
        </Link>
        <Link
          href={"/connect-wallet/general-connect?wallet=guarda"}
          className="text-center w-[150px] flex flex-col items-center justify-center"
        >
          <Image
            src={Guarda}
            alt="Guarda"
            width={100}
            className="rounded-full mb-4 hover:shadow-md"
            height={100}
          />
          <p className="text-center text-gray-400 text-xl">Guarda</p>
        </Link>
        <Link
          href={"/connect-wallet/general-connect?wallet=edge"}
          className="text-center w-[150px] flex flex-col items-center justify-center"
        >
          <Image
            src={EdgeWallet}
            alt="Edge Wallet"
            width={100}
            className="rounded-full mb-4 hover:shadow-md"
            height={100}
          />
          <p className="text-center text-gray-400 text-xl">Edge</p>
        </Link>
      </div>
    </div>
  );
}
