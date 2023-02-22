import PhoneIcon from "@mui/icons-material/Phone";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function ContactBar() {
  return (
    <>
      <div className="container bar">
        <div className="bar-element">
          <PhoneIcon />
        </div>
        <div className="bar-element">+216 55 555 555</div>
        <div>
          <MarkunreadIcon />
        </div>
        <div className="bar-element">neho@gmail.com</div>
        <div className="bar-elment-end">
          <div>
            <InstagramIcon />
          </div>
          <div>
            <FacebookIcon />
          </div>
        </div>
      </div>
    </>
  );
}
