// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  SearchNetworkProfilesCommand,
  SearchNetworkProfilesCommandInput,
  SearchNetworkProfilesCommandOutput,
} from "../commands/SearchNetworkProfilesCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: SearchNetworkProfilesCommandInput,
  ...args: any
): Promise<SearchNetworkProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchNetworkProfilesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateSearchNetworkProfiles(
  config: AlexaForBusinessPaginationConfiguration,
  input: SearchNetworkProfilesCommandInput,
  ...additionalArguments: any
): Paginator<SearchNetworkProfilesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchNetworkProfilesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AlexaForBusinessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AlexaForBusiness | AlexaForBusinessClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
