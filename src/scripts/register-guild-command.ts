import { REST, Routes } from "discord.js";
import "dotenv/config";
import CommandNames from "src/enums/command-names";

const commands = [
  {
    name: CommandNames.GetServer,
    description: "Get server info",
  },
  {
    name: CommandNames.GetUser,
    description: "Get user info",
  },
];

(async () => {
  const rest = new REST({ version: "10" }).setToken(
    process.env.DISCORD_BOT_TOKEN,
  );
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.DISCORD_CLIENT_ID,
        process.env.DISCORD_GUILD_ID,
      ),
      {
        body: commands,
      },
    );

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(`error: ${error}`);
  }
})();
