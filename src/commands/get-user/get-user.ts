import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { ICommand } from "../interface/ICommand";

const getUserInfoCommand: ICommand = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Get user info"),
  action: async (interaction: CommandInteraction) => {
    const user = interaction.user;
    if (user) {
      await interaction.reply(`Username: ${user.username}\nID: ${user.id}`);
    } else {
      await interaction.reply("User not found");
    }
  },
};

export default getUserInfoCommand;
