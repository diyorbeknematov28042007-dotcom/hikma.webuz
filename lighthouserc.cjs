module.exports = {
  ci: {
    collect: {
      url: ["http://127.0.0.1:3000/"],
      startServerCommand: "npm run start -- --hostname 127.0.0.1",
      numberOfRuns: 3,
      settings: { chromeFlags: "--no-sandbox --disable-dev-shm-usage" },
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.9 }],
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:seo": ["error", { minScore: 0.9 }],
        "largest-contentful-paint": ["error", { maxNumericValue: 2500 }],
        "cumulative-layout-shift": ["error", { maxNumericValue: 0.1 }],
        "total-blocking-time": ["warn", { maxNumericValue: 200 }],
      },
    },
    upload: { target: "filesystem", outputDir: "./lighthouse-report" },
  },
};
