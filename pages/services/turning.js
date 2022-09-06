import DefaultPage from "../../Components/Ui/DefaultPage";
import Colors from "../../Components/Ui/Colors";
import Texts from "../../Components/Texts/Texts";

export default function Turning() {
  const colors = Colors();
  const texts = Texts();

  return (
    <DefaultPage
      name="turning"
      src={colors.turning.image}
      heading={texts.turning.t1.heading}
      text={texts.turning.t1.text}
    />
  );
}
