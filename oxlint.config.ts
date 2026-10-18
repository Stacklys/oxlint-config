import { defineConfig } from "oxlint";
import baseConfig from "./dist/index.js";

export default defineConfig({
  extends: [baseConfig],
});