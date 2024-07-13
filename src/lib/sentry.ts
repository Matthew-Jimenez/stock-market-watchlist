import * as Sentry from "@sentry/react";

import env from "config/env";

const isLocal = env.ENV === "local";

try {
  Sentry.init({
    release: process.env.npm_package_version,
    dsn: env.SENTRY_DSN,
    integrations: isLocal
      ? []
      : [
          Sentry.browserTracingIntegration(),
          Sentry.replayIntegration({
            blockAllMedia: false,
            maskAllInputs: false,
            maskAllText: false,
          }),
        ],
    tracesSampleRate: isLocal ? 0 : 1,
    tracePropagationTargets: [
      "localhost",
      /^https:\/\/origami-server-main-staging-8b78948f1f50\.herokuapp\.com\/api/,
      /^https:\/\/stock-market-watchlist\.netlify\.app/,
    ],
    replaysSessionSampleRate: isLocal ? 0 : 1,
    replaysOnErrorSampleRate: isLocal ? 0 : 1,
    environment: env.ENV,
  });
} catch (error) {
  console.error("Error initializing Sentry.");
  console.error(error);
}
