export default function FooterCopyRight() {
    const currentYear = new Date().getFullYear();

  return (
    <div className="text-center pt-12 pb-6">© Copyright {currentYear} By <span className="text-blue-600 font-semibold">Sparky Education</span> | All Rights Reserved!</div>
  )
}
