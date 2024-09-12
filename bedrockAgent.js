const { BedrockAgentRuntimeClient, InvokeAgentCommand } = require("@aws-sdk/client-bedrock-agent-runtime");
const { joinResponseChunks }  = require("./utils");
const config = require("./config");

const errorMessage = "Error al invocar el agente en Bedrock";

const bedrockClient = new BedrockAgentRuntimeClient({
  region: config.aws_region,
  credentials: {
    accessKeyId: config.aws_access_key_id,
    secretAccessKey: config.aws_secret_access_key
  }
});

async function invokeAgent(query, sessionId) {
  const params = {
    agentAliasId: config.bedrock_agent_alias_id,
    agentId: config.bedrock_agent_id,
    sessionId: sessionId,
    inputText: query,
    maxTokens: config.bedrock_max_tokens,
    temperature: config.bedrock_temperature
  };

  try {
    const command = new InvokeAgentCommand(params);
    const response = await bedrockClient.send(command);

    const output = joinResponseChunks(response);
    return output;
  } catch (error) {
    console.error(`${errorMessage}: `, error);
    throw new Error(errorMessage);
  }
}

module.exports = {
  invokeAgent
}