import "dotenv/config";
import { Client, Events, GatewayIntentBits } from "discord.js";
import { Commander } from "./commander/commander";

export class Server {
  constructor(private commander: Commander) {}

  init(): Promise<void> {
    return new Promise((ok) => {
      const client = new Client({ intents: [GatewayIntentBits.Guilds] });

      client.once(Events.ClientReady, (readyClient) => {
        console.log(`${readyClient.user.username} is online!`);
      });

      client.login(process.env.DISCORD_BOT_TOKEN);

      client.on(Events.InteractionCreate, (interaction) => {
        if (interaction.isCommand()) {
          this.commander.execute(interaction);
        }
        // 暫時不處理StringSelectMenu事件
        if (interaction.isStringSelectMenu()) {
          return;
        }
        return;
      });
    });
  }
}
