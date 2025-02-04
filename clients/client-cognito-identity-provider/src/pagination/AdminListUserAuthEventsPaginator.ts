// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CognitoIdentityProviderClient } from "../CognitoIdentityProviderClient";
import {
  AdminListUserAuthEventsCommand,
  AdminListUserAuthEventsCommandInput,
  AdminListUserAuthEventsCommandOutput,
} from "../commands/AdminListUserAuthEventsCommand";
import { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CognitoIdentityProviderClient,
  input: AdminListUserAuthEventsCommandInput,
  ...args: any
): Promise<AdminListUserAuthEventsCommandOutput> => {
  // @ts-ignore
  return await client.send(new AdminListUserAuthEventsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateAdminListUserAuthEvents(
  config: CognitoIdentityProviderPaginationConfiguration,
  input: AdminListUserAuthEventsCommandInput,
  ...additionalArguments: any
): Paginator<AdminListUserAuthEventsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: AdminListUserAuthEventsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CognitoIdentityProviderClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CognitoIdentityProvider | CognitoIdentityProviderClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
