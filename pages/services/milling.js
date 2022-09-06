import DefaultPage from "../../Components/Ui/DefaultPage";
import Colors from "../../Components/Ui/Colors";
import Texts from "../../Components/Texts/Texts";

export default function Milling() {
  const colors = Colors();
  const texts = Texts();

  return (
    <DefaultPage
      name="milling"
      src={colors.milling.image}
      heading={texts.milling.t1.heading}
      text={texts.milling.t1.text}
    />
  );
}
