import fetch from "node-fetch";

const sleep = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 350);
  });

export default async function handler(req, res) {
  const { body, method } = req;

  const { captcha } = body;

  if (method === "POST") {
    if (!captcha) {
      return res.status(422).json({
        message: "Unproccesable request, please provide the required fields",
      });
    }

    try {
      const response = await fetch(`https://hcaptcha.com/siteverify`, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        body: `response=${captcha}&secret=0x8962e437cb7a4964bc5fe613b38a966f46228529`,
        method: "POST",
      });
      const captchaValidation = await response.json();

      if (captchaValidation.success) {
        // Replace this with the API that will save the data received
        // to your backend
        await sleep();
        return res.status(200).send("OK");
      }

      return res.status(422).json({
        message: "Unproccesable request, Invalid captcha code",
      });
    } catch (error) {
      console.log(error);
      return res.status(422).json({ message: "Something went wrong" });
    }
  }
  return res.status(404).send("Not found");
}
