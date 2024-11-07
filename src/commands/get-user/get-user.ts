import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import CommandNames from "src/enums/command-names";
import { Command } from "src/commands/interface/command";

export const getUserInfoCommand: Command = {
  data: new SlashCommandBuilder()
    .setName(CommandNames.GetUser)
    .setDescription("Get user info"),
  execute: async (interaction: CommandInteraction) => {
    const user = interaction.user;
    if (user) {
      await interaction.reply(`Username: ${user.username}\nID: ${user.id}`);
    } else {
      await interaction.reply("User not found");
    }
  },
};
