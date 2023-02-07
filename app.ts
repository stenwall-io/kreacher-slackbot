import { App, BasicSlackEvent } from "@slack/bolt";
import "dotenv/config";

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});

app.event("app_mention", async ({ event, client, logger }) => {
  //console.log(event);
  try {
    // Call chat.postMessage with the built-in client
    const result = await client.chat.postMessage({
      channel: event.channel,
      text: "Yes Master Regulus?",
    });
    logger.info(result);
  } catch (error) {
    logger.error(error);
  }
});

(async () => {
  // Start your app
  await app.start();

  console.log("Kreacher is waiting!");
})();
