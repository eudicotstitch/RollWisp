import { Collection, CommandInteraction } from "discord.js";
import { getServerInfoCommand } from "src/commands/get-server/get-server";
import { getUserInfoCommand } from "src/commands/get-user/get-user";
import { Command } from "src/commands/interface/command";
import { pingPongCommand } from "src/commands/ping-pong/ping-pong";
import CommandNames from "src/enums/command-names";

export class Commander {
  private commands: Collection<string, Command> = new Collection();

  constructor() {
    this.initializeCommands();
  }

  private initializeCommands() {
    this.commands.set(CommandNames.Ping, pingPongCommand);
    this.commands.set(CommandNames.GetServer, getServerInfoCommand);
    this.commands.set(CommandNames.GetUser, getUserInfoCommand);
  }

  async execute(interaction: CommandInteraction) {
    const cmd = this.dispatch(interaction);
    if (cmd) {
      await cmd.execute(interaction);
    }
  }

  private dispatch(interaction: CommandInteraction): Command | undefined {
    const { commandName } = interaction;
    switch (commandName) {
      case CommandNames.Ping:
        return this.commands.get(CommandNames.Ping);
      case CommandNames.GetServer:
        return this.commands.get(CommandNames.GetServer);
      case CommandNames.GetUser:
        return this.commands.get(CommandNames.GetUser);
      default:
        return undefined;
    }
  }
}
