
import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const browser = await chromium.launch();

try {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1
  });

  const file = pathToFileURL(
    resolve("social-card.html")
  ).href;

  await page.goto(file, { waitUntil: "load" });

  await page.evaluate(() => document.fonts.ready);

  await page.locator("#social-photo").evaluate(
    img => img.decode()
  );

  await page.locator("#social-card").screenshot({
    path: "assets/portfolio-share.jpg",
    type: "jpeg",
    quality: 78,
    animations: "disabled"
  });

  console.log("Thumbnail created successfully.");
} finally {
  await browser.close();
}
