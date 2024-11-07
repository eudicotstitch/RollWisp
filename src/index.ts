import { Commander } from "./commander/commander";
import { Server } from "./server";

const main = async () => {
  const commander = new Commander();
  const server = new Server(commander);

  await server.init();
};

main();
