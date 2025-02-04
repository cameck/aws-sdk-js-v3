// smithy-typescript generated code
import { EndpointParameters as __EndpointParameters, EndpointV2 } from "@aws-sdk/types";
import { Endpoint, Provider } from "@smithy/types";

export interface ClientInputEndpointParameters {
  region?: string | Provider<string>;
  useFipsEndpoint?: boolean | Provider<boolean>;
  endpoint?: string | Provider<string> | Endpoint | Provider<Endpoint> | EndpointV2 | Provider<EndpointV2>;
}

export type ClientResolvedEndpointParameters = ClientInputEndpointParameters & {
  defaultSigningName: string;
};

export const resolveClientEndpointParameters = <T>(
  options: T & ClientInputEndpointParameters
): T & ClientResolvedEndpointParameters => {
  return {
    ...options,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    defaultSigningName: "internetmonitor",
  };
};

export interface EndpointParameters extends __EndpointParameters {
  Region?: string;
  UseFIPS?: boolean;
  Endpoint?: string;
}
