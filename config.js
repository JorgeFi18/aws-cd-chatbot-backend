module.exports = {
  port: process.env.PORT || 4000,
  origin: process.env.ORIGIN || "http://localhost:5173",
  aws_region: process.env.AWS_REGION || "us-east-1",
  aws_access_key_id: process.env.AWS_ACCESS_KEY_ID,
  aws_secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
  bedrock_agent_alias_id: process.env.BEDROCK_AGENT_ALIAS_ID,
  bedrock_agent_id: process.env.BEDROCK_AGENT_ID,
  bedrock_max_tokens: process.env.BEDROCK_MAX_TOKENS || 500,
  bedrock_temperature: process.env.BEDROCK_TEMPERATURE || 0.7
};