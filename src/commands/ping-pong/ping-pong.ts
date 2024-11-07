import { SlashCommandBuilder } from "discord.js";
import { CommandInteraction } from "discord.js";
import { Command } from "../interface/command";

export const pingPongCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  execute: async (interaction: CommandInteraction) => {
    await interaction.reply("Pong!");
  },
};
