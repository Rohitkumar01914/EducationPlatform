import Image from "next/image";

export default function FooterImage() {
  return (
    <div>
        <Image src={"https://coursry.com/html/images/logo/meity%20startup.png"} alt="" width={100} height={100} priority />
        <Image src={"https://coursry.com/html/images/logo/razorpay.png"} alt="" width={100} height={100} priority />
    </div>
  )
}
