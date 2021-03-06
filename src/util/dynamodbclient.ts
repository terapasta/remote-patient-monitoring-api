
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export function loadDynamoDBClient() {
  if (process.env.JEST_WORKER_ID) {
    const config = {
      convertEmptyValues: true,
      endpoint: 'localhost:8000',
      sslEnabled: false,
      region: 'local-env',
    };
    return new DocumentClient(config);
  } else {
    var dynamodb = require('serverless-dynamodb-client');
    return dynamodb.doc;
  }
}
