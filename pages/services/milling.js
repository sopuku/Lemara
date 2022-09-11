import DefaultPage from "../../Components/Ui/DefaultPage";
import Colors from "../../Components/Ui/Colors";
import Texts from "../../Components/Texts/Texts";

export default function Milling() {
  const colors = Colors();
  const texts = Texts();

  return (
    <DefaultPage
      name="milling"
      src={texts.images.millingImage}
      alt={texts.images.millingImageAlt}
      heading={texts.milling.heading}
      text={texts.milling.text}
    />
  );
}
