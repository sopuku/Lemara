import DefaultPage from "../../Components/Ui/DefaultPage";
import Colors from "../../Components/Ui/Colors";
import Texts from "../../Components/Texts/Texts";

export default function Design() {
  const colors = Colors();
  const texts = Texts();

  return (
    <DefaultPage
      name="design"
      src={colors.design.image}
      heading={texts.design.t1.heading}
      text={texts.design.t1.text}
    />
  );
}
