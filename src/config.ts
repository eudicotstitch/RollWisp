import "dotenv/config";

type Config = {
  token: string;
  clientId: string;
  guildId: string;
};

export const config: Config = {
  token: process.env.DISCORD_BOT_TOKEN || "",
  clientId: process.env.DISCORD_CLIENT_ID || "",
  guildId: process.env.DISCORD_GUILD_ID || "",
};
