import { globSync } from "node:fs";
import { HtmlValidate } from "html-validate";

const files = globSync("**/*.html", {
  exclude: [
    "node_modules/**",
    ".git/**",
    "dist/**",
    "coverage/**",
    "_site/**",
    "_layouts/**",
    "_includes/**",
    ".jekyll-cache/**",
    "vendor/**",
  ],
});

if (files.length === 0) {
  console.log("No HTML files to validate.");
} else {
  const validator = new HtmlValidate();
  for (const file of files) {
    const report = await validator.validateFile(file);
    for (const result of report.results) {
      for (const message of result.messages) {
        console.error(
          `${result.filePath}:${message.line}:${message.column} ${message.message} (${message.ruleId})`,
        );
      }
    }
    if (report.errorCount > 0 || report.warningCount > 0) {
      process.exitCode = 1;
    }
  }
}
