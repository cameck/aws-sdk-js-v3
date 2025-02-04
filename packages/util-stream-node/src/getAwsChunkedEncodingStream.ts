import { GetAwsChunkedEncodingStream, GetAwsChunkedEncodingStreamOptions } from "@aws-sdk/types";
import { Readable } from "stream";

/**
 * @internal
 */
export const getAwsChunkedEncodingStream: GetAwsChunkedEncodingStream<Readable> = (
  readableStream: Readable,
  options: GetAwsChunkedEncodingStreamOptions
) => {
  const { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher } = options;

  const checksumRequired =
    base64Encoder !== undefined &&
    checksumAlgorithmFn !== undefined &&
    checksumLocationName !== undefined &&
    streamHasher !== undefined;
  const digest = checksumRequired ? streamHasher!(checksumAlgorithmFn!, readableStream) : undefined;

  const awsChunkedEncodingStream = new Readable({ read: () => {} });
  readableStream.on("data", (data) => {
    const length = bodyLengthChecker(data) || 0;
    awsChunkedEncodingStream.push(`${length.toString(16)}\r\n`);
    awsChunkedEncodingStream.push(data);
    awsChunkedEncodingStream.push("\r\n");
  });
  readableStream.on("end", async () => {
    awsChunkedEncodingStream.push(`0\r\n`);
    if (checksumRequired) {
      const checksum = base64Encoder!(await digest!);
      awsChunkedEncodingStream.push(`${checksumLocationName}:${checksum}\r\n`);
      awsChunkedEncodingStream.push(`\r\n`);
    }
    awsChunkedEncodingStream.push(null);
  });
  return awsChunkedEncodingStream;
};
