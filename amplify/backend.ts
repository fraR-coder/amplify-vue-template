import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";

const backend=defineBackend({
  auth,
  data,
});

backend.addOutput({
  auth: {
    aws_region: "eu-central-1",
    user_pool_id: "eu-central-1_cxXAfMLPD",
    user_pool_client_id: "hjo60fv8sri9rq8j4kokm4c5t",
    //identity_pool_id: "<your-cognito-identity-pool-id>",
    username_attributes: ["email"],
    standard_required_attributes: ["email"],
    user_verification_types: ["email"],
    //unauthenticated_identities_enabled: true,
    // password_policy: {
    //   min_length: 8,
    //   require_lowercase: true,
    //   require_uppercase: true,
    //   require_numbers: true,
    //   require_symbols: true,
    // },
  },
});
