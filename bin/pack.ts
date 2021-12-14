import { Builder } from "@sls-next/lambda-at-edge";

const builder = new Builder(".", "./build", { args: ["build"] });
builder
  .build()
  .then(() => {
    console.log("✅ Done");
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
