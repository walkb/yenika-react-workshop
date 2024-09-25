import Image from "next/image"

export default function Logo() {
    return (
        <div className="bg-black rounded-full">
            <Image src={"/FooterLogo.png"} alt="" width={100} height={100}></Image>
        </div>
    )
}