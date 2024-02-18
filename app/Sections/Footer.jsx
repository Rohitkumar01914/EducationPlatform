import FooterBottomItem from "@app/Components/FooterBottomItem";
import FooterCopyRight from "@app/Components/FooterCopyRight";
import FooterSocial from "@app/Components/FooterSocial";

export default function Footer() {
  return (
    <div className="bg-gray-200">
        <FooterSocial />
        <hr className="border-[0.3px] border-white mt-2" />
        <div className="flex justify-center">
        <FooterBottomItem />
        </div>
        <hr className="border-[0.3px] border-white mt-2"/>
<FooterCopyRight />

    </div>
  )
}
