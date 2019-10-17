module.exports = function(config) {
  config.set({
    mutate: [
      'src/**/**.js',
      '!src/aws/**.js',
      '!src/index.js',
    ],
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "command",
    transpilers: [],
    coverageAnalysis: "off",
  });
};
