import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist/esm/admin/",
    format: "es",
  },
  external: ["vue-demi", "vue-router-demi"],
  plugins: [
    resolve(),
    typescript({
      declaration: true,
      declarationDir: "dist/esm/admin/",
      outDir: "dist/esm/admin/",
      target: "ESNext",
    }),
  ],
};
