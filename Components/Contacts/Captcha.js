import { Box } from "@chakra-ui/react";
import React from "react";

export default function Captcha() {
  return (
    <React.Fragment>
      <script src="https://js.hcaptcha.com/1/api.js" async defer></script>
      <Box
        className="h-captcha"
        data-sitekey="2478aa4d-eac5-471b-8cf5-1fb9ef6254c8"
      ></Box>
    </React.Fragment>
  );
}
