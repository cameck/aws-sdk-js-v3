// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeTableStatisticsCommand,
  DescribeTableStatisticsCommandInput,
  DescribeTableStatisticsCommandOutput,
} from "../commands/DescribeTableStatisticsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeTableStatisticsCommandInput,
  ...args: any
): Promise<DescribeTableStatisticsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeTableStatisticsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeTableStatistics(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeTableStatisticsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeTableStatisticsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeTableStatisticsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof DatabaseMigrationServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DatabaseMigrationService | DatabaseMigrationServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
