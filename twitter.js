const TWITTER_REGEX =
  /https?:\/\/((fix(up|v)|stupidpenis|girlcock|\x68\x69\x74\x6C\x65\x72|\x6E\x69\x67\x67\x65\x72)?x(cancel)?|([fv]x)?twitter(vx)?|ilsforpresident|lightbrd)\.com/g;
const REPLACEMENT = "https://tw.c7.pm";

module.exports = {
  spec: {
    mrfVersion: 1,
    name: "Twitter Replacer",
  },
  sendHook: async (msg, forward) => {
    msg.content = msg.content.replace(TWITTER_REGEX, REPLACEMENT);
    return forward(msg);
  },
  receiveHook: async (msg, reject, forward) => {
    if (TWITTER_REGEX.test(msg.content)) {
      msg.content = msg.content.replace(TWITTER_REGEX, REPLACEMENT);
      for (const embed of msg.embeds) {
        if (TWITTER_REGEX.test(embed.url)) embed.url = embed.url.replace(TWITTER_REGEX, REPLACEMENT);
      }
      return forward(msg);
    }
  },
};
