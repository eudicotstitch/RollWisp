import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { ICommand } from "../interface/ICommand";

const getServerInfoCommand: ICommand = {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Get server info"),
  action: async (interaction: CommandInteraction) => {
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
