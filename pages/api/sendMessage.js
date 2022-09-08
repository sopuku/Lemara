import fetch from "node-fetch";
import emailjs from "@emailjs/browser";

const sleep = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 350);
  });

export default async function handler(req, res) {
  const { body, method } = req;

  const { name, email, number, message, captcha } = body;

  if (method === "POST") {
    if (!captcha) {
      return res.status(422).json({
        message: "Unproccesable request, please provide the required fields",
      });
    }

    try {
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=6LflocohAAAAAICd3XuhHcO0V4NY3BsE4mZ3jsiw&response=${captcha}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
          },
          method: "POST",
        }
      );
      const captchaValidation = await response.json();
      /**
       * The structure of response from the veirfy API is
       * {
       *  "success": true|false,
       *  "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
       *  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
       *  "error-codes": [...]        // optional
        }
       */
      if (captchaValidation.success) {
        const SERVICE_ID = "service_dk5mr2k";
        const TEMPLATE_ID = "template_6juxtrk";
        const KEY = "AKeemSzyhhC8W76gf";
        const form = {
          name: name,
          email: email,
          number: number,
          message: message,
        };
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, KEY);
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
