import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";

// Parse routes from src/routes.ts without needing a TS loader
const routesSource = readFileSync("src/routes.ts", "utf8");
const routes = [...routesSource.matchAll(/"(\/[^"]*)"/g)].map((m) => m[1]);

const distDir = "dist";
const indexHtml = readFileSync(join(distDir, "index.html"), "utf8");

for (const route of routes) {
  if (route === "/") continue;
  const outDir = join(distDir, route);
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), indexHtml);
  console.log(`Pre-rendered ${route}/index.html`);
}