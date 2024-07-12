import * as Sentry from "@sentry/react";

import env from "config/env";

const isLocal = env.ENV === "local";

try {
  Sentry.init({
    release: process.env.npm_package_version,
    dsn: env.SENTRY_DSN,
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration({
        blockAllMedia: false,
        maskAllInputs: false,
        maskAllText: false,
      }),
    ],
    // Performance Monitoring
    tracesSampleRate: isLocal ? 0 : 1, //  Capture 100% of the transactions
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: [
      "localhost",
      /^https:\/\/origami-server-main-staging-8b78948f1f50\.herokuapp\.com\/api/,
      /^https:\/\/stock-market-watchlist\.netlify\.app/,
    ],
    // Session Replay
    replaysSessionSampleRate: isLocal ? 0 : 1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: isLocal ? 0 : 1, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
    environment: env.ENV,
  });
} catch (error) {
  console.error("Error initializing Sentry.");
  console.error(error);
}
