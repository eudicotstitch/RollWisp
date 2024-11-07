import { REST, Routes } from "discord.js";
import "dotenv/config";
import CommandNames from "src/enums/command-names";

const commands = [
  {
    name: CommandNames.Ping,
    description: "Replies with Pong!",
  },
];

(async () => {
  const rest = new REST({ version: "10" }).setToken(
    process.env.DISCORD_BOT_TOKEN,
  );
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(`error: ${error}`);
  }
})();
