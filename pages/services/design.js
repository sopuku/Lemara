import DefaultPage from "../../Components/Ui/DefaultPage";
import Colors from "../../Components/Ui/Colors";
import Texts from "../../Components/Texts/Texts";

export default function Design() {
  const colors = Colors();
  const texts = Texts();

  return (
    <DefaultPage
      name="design"
      src={texts.images.designImage}
      alt={texts.images.designImageAlt}
      heading={texts.design.heading}
      text={texts.design.text}
    />
  );
}
