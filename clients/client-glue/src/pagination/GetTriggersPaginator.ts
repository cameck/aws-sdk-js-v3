// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { GetTriggersCommand, GetTriggersCommandInput, GetTriggersCommandOutput } from "../commands/GetTriggersCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GlueClient,
  input: GetTriggersCommandInput,
  ...args: any
): Promise<GetTriggersCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetTriggersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetTriggers(
  config: GluePaginationConfiguration,
  input: GetTriggersCommandInput,
  ...additionalArguments: any
): Paginator<GetTriggersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetTriggersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
