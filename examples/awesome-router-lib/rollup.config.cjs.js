import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist/cjs/admin/",
    format: "cjs",
  },
  external: ["vue-demi", "vue-router-demi"],
  plugins: [
    resolve(),
    typescript({
      declaration: false,
      outDir: "dist/cjs/admin/",
      target: "es2015",
    }),
  ],
};
