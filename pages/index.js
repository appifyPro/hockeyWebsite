import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import Honeygraph from "@/components/Honeygraph";
import Faq from "@/components/Faq";
import LearnMore from "@/components/LearnMore";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sybil</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="">
         
          <div className="relative z-1">
            <div className="z-1 flex max-md:flex-col  max-md:justify-center w-[89%] m-auto justify-between mt-14 ">
              <div className="w-[52%]  max-md:w-full max-md:h-fit ">
                <h3 className="text-[55px] max-lg:text-5xl max-md:text-4xl leading-[66px] font-Roboto font-bold">
                  Check out why people are buzzing about{" "}
                  <span className="font-extrabold">Sybil...</span>
                </h3>
                <div className="flex w-full gap-3 items-center  text-2xl max-xl:text-lg max-lg:text-sm  ">
                <button className="w-[50%] h-[64px] bg-[#FFCB20] font-bold rounded-full max-lg:rounded-md ">
                  How it works{" "}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                  >
                    <path
                      d="M15.586 10.657L11.636 6.70704C11.4538 6.51844 11.353 6.26584 11.3553 6.00364C11.3576 5.74144 11.4628 5.49063 11.6482 5.30522C11.8336 5.11981 12.0844 5.01465 12.3466 5.01237C12.6088 5.01009 12.8614 5.11088 13.05 5.29304L18.707 10.95C18.8002 11.0427 18.8741 11.1529 18.9246 11.2742C18.9751 11.3955 19.001 11.5256 19.001 11.657C19.001 11.7884 18.9751 11.9186 18.9246 12.0399C18.8741 12.1612 18.8002 12.2714 18.707 12.364L13.05 18.021C12.9578 18.1166 12.8474 18.1927 12.7254 18.2451C12.6034 18.2976 12.4722 18.3251 12.3394 18.3263C12.2066 18.3274 12.0749 18.3021 11.952 18.2519C11.8291 18.2016 11.7175 18.1273 11.6236 18.0334C11.5297 17.9395 11.4555 17.8279 11.4052 17.705C11.3549 17.5821 11.3296 17.4504 11.3307 17.3176C11.3319 17.1849 11.3595 17.0536 11.4119 16.9316C11.4643 16.8096 11.5405 16.6993 11.636 16.607L15.586 12.657H6C5.73478 12.657 5.48043 12.5517 5.29289 12.3641C5.10536 12.1766 5 11.9223 5 11.657C5 11.3918 5.10536 11.1375 5.29289 10.9499C5.48043 10.7624 5.73478 10.657 6 10.657H15.586Z"
                      fill="#0F172A"
                    />
                  </svg>
                </button>
                <button className=" font-bold rounded-full w-[60%] border-2 max-lg:rounded-md border-[#FFCB20] h-[64px]  my-5">
                  How much can i earn?
                </button>
                </div>
                <p className="text-[24px] max-lg:text-lg ">
                  Sybil is a secure and privacy-first app that is always working
                  for you to put money back in your pocket when you use the
                  internet apps on your phone
                </p>
                <p className="text-[#FEB534] mt-4 text-[24px] font-bold max-lg:text-lg">
                  How Much Can I earn With Sybil?
                </p>
              </div>
              <div className="h-full max-md:w-full max-md:h-fit ">
                <Image className="mt-0 ml-10 max-md:ml-0" width={583} height={497} src="/phones.svg"></Image>
              </div>
            </div>
            <div className="">
              <Honeygraph />
            </div>
              <div>
              <Faq />
            </div> 
            <div>
              <LearnMore />
            </div>
            
            <div>
              <Footer />
            </div>  
          </div>
          <div className="z-[-1] absolute top-12">
            <img src="/shapes.svg" alt="background shapes"></img>
          </div>
        </div>
      </main>
    </>
  );
}
