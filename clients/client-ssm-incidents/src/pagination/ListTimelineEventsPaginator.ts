// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListTimelineEventsCommand,
  ListTimelineEventsCommandInput,
  ListTimelineEventsCommandOutput,
} from "../commands/ListTimelineEventsCommand";
import { SSMIncidentsClient } from "../SSMIncidentsClient";
import { SSMIncidentsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SSMIncidentsClient,
  input: ListTimelineEventsCommandInput,
  ...args: any
): Promise<ListTimelineEventsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTimelineEventsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListTimelineEvents(
  config: SSMIncidentsPaginationConfiguration,
  input: ListTimelineEventsCommandInput,
  ...additionalArguments: any
): Paginator<ListTimelineEventsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTimelineEventsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof SSMIncidentsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSMIncidents | SSMIncidentsClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
