import { SlashCommandBuilder } from "discord.js";
import { CommandInteraction } from "discord.js";
import { ICommand } from "../interface/ICommand";

const pingPongCommand: ICommand = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  action: async (interaction: CommandInteraction) => {
    await interaction.reply("Pong!");
  },
};

export default pingPongCommand;
