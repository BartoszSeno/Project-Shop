import "../assets/footer.css";
import Payment from "./payment/payment";
import Information from "./information/information";
import "../assets/media/footer/footermedia.css";

function Footer() {
  return (
    <>
      <footer className="footer-container">
        <Payment />
        <Information />
      </footer>
    </>
  );
}

export default Footer;
