async function joinResponseChunks(response) {
  if (response.completion && response.completion.options && response.completion.options.messageStream) {
    const stream = response.completion.options.messageStream;

    let result = "";
    for await (const chunk of stream) {
      if (chunk instanceof Uint8Array) {
        result += new TextDecoder('utf-8').decode(chunk);
      } else if (typeof chunk === 'object') {
        if (chunk.body) {
          // Decodifica el array de bytes a texto
          const decodedBody = String.fromCharCode(...Object.values(chunk.body));
          result += decodedBody;
        } else {
          result += JSON.stringify(chunk, null, 2);
        }
      } else {
        result += chunk.toString();
      }
    }
    const resultJson = JSON.parse(result);
    const responseIA = Buffer.from(resultJson.bytes, 'base64').toString('utf-8');
    return responseIA;
  } else {
    throw new Error("No message stream available in response.");
  }
};

module.exports = {
  joinResponseChunks
};