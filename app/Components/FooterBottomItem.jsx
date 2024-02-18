import FooterBussines from "./FooterBussines";
import FooterCompany from "./FooterCompany";
import FooterDiscover from "./FooterDiscover";
import FooterImage from "./FooterImage";
import FooterWork from "./FooterWork";

export default function FooterBottomItem() {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 mx-auto p-6 ml-xl mr-2xl gap-4">
    <FooterImage />
    <FooterCompany />
    <FooterDiscover />
    <FooterWork />
    <FooterBussines />
</div>

  )
}
