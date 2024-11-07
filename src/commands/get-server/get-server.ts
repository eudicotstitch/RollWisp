import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import CommandNames from "../../enums/command-names";
import { Command } from "../../commands/interface/command";

export const getServerInfoCommand: Command = {
  data: new SlashCommandBuilder()
    .setName(CommandNames.GetServer)
    .setDescription("Get server info"),
  execute: async (interaction: CommandInteraction) => {
    const guild = interaction.guild;
    if (guild) {
      await interaction.reply(
        `Server name: ${guild.name}\nTotal members: ${guild.memberCount}`
      );
    } else {
      await interaction.reply("Server not found");
    }
  },
};

export default getServerInfoCommand;
