import DefaultPage from "../../Components/Ui/DefaultPage";
import Colors from "../../Components/Ui/Colors";
import Texts from "../../Components/Texts/Texts";

export default function Turning() {
  const colors = Colors();
  const texts = Texts();

  return (
    <DefaultPage
      name="turning"
      src={texts.images.turningImage}
      alt={texts.images.turningImageAlt}
      heading={texts.turning.heading}
      text={texts.turning.text}
    />
  );
}
