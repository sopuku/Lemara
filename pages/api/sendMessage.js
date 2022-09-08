import fetch from "node-fetch";
import emailjs from "@emailjs/browser";

const sleep = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 350);
  });

const SERVICE_ID = "service_lemara";
const TEMPLATE_ID = "template_lemara";
const KEY = "SEEgDE7p6N_iBx4yL";

export default async function handler(req, res) {
  const { body, method } = req;

  // Extract the email and captcha code from the request body
  const { name, email, number, message, captcha } = body;
  const form = {
    name: name,
    email: email,
    number: number,
    message: message,
  };

  if (method === "POST") {
    // If email or captcha are missing return an error
    if (!email || !captcha || !name || !number || !message) {
      return res.status(422).json({
        message: "Unproccesable request, please provide the required fields",
      });
    }

    try {
      // Ping the google recaptcha verify API to verify the captcha code you received
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
        const form = {
          name: name,
          email: email,
          number: number,
          message: message,
        };
        emailjs.send(SERVICE_ID, TEMPLATE_ID, form, KEY);
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
  // Return 404 if someone pings the API with a method other than
  // POST
  return res.status(404).send("Not found");
}
