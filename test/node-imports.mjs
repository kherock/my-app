import { createRequire } from "module";

const require = createRequire(import.meta.url);

const fns = [
  () => [require.resolve("react-oidc-context"), require("react-oidc-context")],
  () => [require.resolve("oidc-client-ts"), require("oidc-client-ts")],
  () => Promise.all([import.meta.resolve("react-oidc-context"), import("react-oidc-context")]),
  () => Promise.all([import.meta.resolve("oidc-client-ts"), import("oidc-client-ts")]),
];

for (const fn of fns) {
  try {
    console.log(fn.toString(), await fn());
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
}
