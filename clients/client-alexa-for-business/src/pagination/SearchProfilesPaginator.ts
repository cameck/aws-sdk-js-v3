// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  SearchProfilesCommand,
  SearchProfilesCommandInput,
  SearchProfilesCommandOutput,
} from "../commands/SearchProfilesCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: SearchProfilesCommandInput,
  ...args: any
): Promise<SearchProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchProfilesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateSearchProfiles(
  config: AlexaForBusinessPaginationConfiguration,
  input: SearchProfilesCommandInput,
  ...additionalArguments: any
): Paginator<SearchProfilesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchProfilesCommandOutput;
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
