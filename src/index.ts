import "dotenv/config";
import { Client, Events, GatewayIntentBits } from "discord.js";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (readyClient) => {
  console.log(`${readyClient.user.username} is online!`);
});

client.login(process.env.DISCORD_BOT_TOKEN);
