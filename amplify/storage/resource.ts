import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "amplifyPortfolioDrive",
  access: (allow) => ({
    "media/{entity_id}/*": [
      allow.entity("identity").to(["read", "write", "delete"]),
    ],
  }),
});