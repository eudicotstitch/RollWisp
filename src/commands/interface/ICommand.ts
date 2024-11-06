import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export interface ICommand {
  data: SlashCommandBuilder;
  action: (interaction: CommandInteraction) => Promise<void>;
}
