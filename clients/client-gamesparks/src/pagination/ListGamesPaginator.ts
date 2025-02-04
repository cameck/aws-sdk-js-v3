// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListGamesCommand, ListGamesCommandInput, ListGamesCommandOutput } from "../commands/ListGamesCommand";
import { GameSparksClient } from "../GameSparksClient";
import { GameSparksPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GameSparksClient,
  input: ListGamesCommandInput,
  ...args: any
): Promise<ListGamesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGamesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListGames(
  config: GameSparksPaginationConfiguration,
  input: ListGamesCommandInput,
  ...additionalArguments: any
): Paginator<ListGamesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGamesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GameSparksClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GameSparks | GameSparksClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
