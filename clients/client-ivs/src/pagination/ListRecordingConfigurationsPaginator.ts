// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListRecordingConfigurationsCommand,
  ListRecordingConfigurationsCommandInput,
  ListRecordingConfigurationsCommandOutput,
} from "../commands/ListRecordingConfigurationsCommand";
import { IvsClient } from "../IvsClient";
import { IvsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IvsClient,
  input: ListRecordingConfigurationsCommandInput,
  ...args: any
): Promise<ListRecordingConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRecordingConfigurationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRecordingConfigurations(
  config: IvsPaginationConfiguration,
  input: ListRecordingConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListRecordingConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRecordingConfigurationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IvsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Ivs | IvsClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
