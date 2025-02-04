// smithy-typescript generated code
import { createAggregatedClient } from "@aws-sdk/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  DescribeServicesCommand,
  DescribeServicesCommandInput,
  DescribeServicesCommandOutput,
} from "./commands/DescribeServicesCommand";
import {
  GetAttributeValuesCommand,
  GetAttributeValuesCommandInput,
  GetAttributeValuesCommandOutput,
} from "./commands/GetAttributeValuesCommand";
import {
  GetPriceListFileUrlCommand,
  GetPriceListFileUrlCommandInput,
  GetPriceListFileUrlCommandOutput,
} from "./commands/GetPriceListFileUrlCommand";
import { GetProductsCommand, GetProductsCommandInput, GetProductsCommandOutput } from "./commands/GetProductsCommand";
import {
  ListPriceListsCommand,
  ListPriceListsCommandInput,
  ListPriceListsCommandOutput,
} from "./commands/ListPriceListsCommand";
import { PricingClient, PricingClientConfig } from "./PricingClient";

const commands = {
  DescribeServicesCommand,
  GetAttributeValuesCommand,
  GetPriceListFileUrlCommand,
  GetProductsCommand,
  ListPriceListsCommand,
};

export interface Pricing {
  /**
   * @see {@link DescribeServicesCommand}
   */
  describeServices(
    args: DescribeServicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServicesCommandOutput>;
  describeServices(
    args: DescribeServicesCommandInput,
    cb: (err: any, data?: DescribeServicesCommandOutput) => void
  ): void;
  describeServices(
    args: DescribeServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServicesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAttributeValuesCommand}
   */
  getAttributeValues(
    args: GetAttributeValuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAttributeValuesCommandOutput>;
  getAttributeValues(
    args: GetAttributeValuesCommandInput,
    cb: (err: any, data?: GetAttributeValuesCommandOutput) => void
  ): void;
  getAttributeValues(
    args: GetAttributeValuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAttributeValuesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPriceListFileUrlCommand}
   */
  getPriceListFileUrl(
    args: GetPriceListFileUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPriceListFileUrlCommandOutput>;
  getPriceListFileUrl(
    args: GetPriceListFileUrlCommandInput,
    cb: (err: any, data?: GetPriceListFileUrlCommandOutput) => void
  ): void;
  getPriceListFileUrl(
    args: GetPriceListFileUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPriceListFileUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProductsCommand}
   */
  getProducts(args: GetProductsCommandInput, options?: __HttpHandlerOptions): Promise<GetProductsCommandOutput>;
  getProducts(args: GetProductsCommandInput, cb: (err: any, data?: GetProductsCommandOutput) => void): void;
  getProducts(
    args: GetProductsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProductsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPriceListsCommand}
   */
  listPriceLists(
    args: ListPriceListsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPriceListsCommandOutput>;
  listPriceLists(args: ListPriceListsCommandInput, cb: (err: any, data?: ListPriceListsCommandOutput) => void): void;
  listPriceLists(
    args: ListPriceListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPriceListsCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Web Services Price List API is a centralized and convenient way to
 *          programmatically query Amazon Web Services for services, products, and pricing information. The Amazon Web Services Price List
 *          uses standardized product attributes such as <code>Location</code>, <code>Storage
 *             Class</code>, and <code>Operating System</code>, and provides prices at the SKU
 *          level. You can use the Amazon Web Services Price List to build cost control and scenario planning tools, reconcile
 *          billing data, forecast future spend for budgeting purposes, and provide cost benefit
 *          analysis that compare your internal workloads with Amazon Web Services.</p>
 *          <p>Use <code>GetServices</code> without a service code to retrieve the service codes for all AWS services, then
 *          <code>GetServices</code> with a service code to retrieve the attribute names for
 *          that service. After you have the service code and attribute names, you can use <code>GetAttributeValues</code>
 *          to see what values are available for an attribute. With the service code and an attribute name and value,
 *          you can use <code>GetProducts</code> to find specific products that you're interested in, such as
 *          an <code>AmazonEC2</code> instance, with a <code>Provisioned IOPS</code>
 *             <code>volumeType</code>.</p>
 *          <p>Service Endpoint</p>
 *          <p>Amazon Web Services Price List service API provides the following two endpoints:</p>
 *          <ul>
 *             <li>
 *                <p>https://api.pricing.us-east-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>https://api.pricing.ap-south-1.amazonaws.com</p>
 *             </li>
 *          </ul>
 */
export class Pricing extends PricingClient implements Pricing {}
createAggregatedClient(commands, Pricing);
