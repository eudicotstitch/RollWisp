import "dotenv/config";
import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.on("ready", (c) => {
  console.log(`${c.user.username} is online!`);
});

client.login(process.env.DISCORD_BOT_TOKEN);
