// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListForecastsCommand,
  ListForecastsCommandInput,
  ListForecastsCommandOutput,
} from "../commands/ListForecastsCommand";
import { ForecastClient } from "../ForecastClient";
import { ForecastPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ForecastClient,
  input: ListForecastsCommandInput,
  ...args: any
): Promise<ListForecastsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListForecastsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListForecasts(
  config: ForecastPaginationConfiguration,
  input: ListForecastsCommandInput,
  ...additionalArguments: any
): Paginator<ListForecastsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListForecastsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ForecastClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Forecast | ForecastClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
