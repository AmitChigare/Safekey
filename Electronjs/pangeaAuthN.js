const {
  PangeaConfig,
  AuthNService,
  PangeaErrors,
  AuthN,
} = require('pangea-node-sdk');

const PANGEA = {
  PANGEA_DOMAIN: "aws.us.pangea.cloud",
  VAULT_AUTH_TOKEN: process.env.VAULT_AUTH_TOKEN
}

const token = PANGEA.VAULT_AUTH_TOKEN;
const config = new PangeaConfig({ domain: PANGEA.PANGEA_DOMAIN });
const authn = new AuthNService(token, config);

async function SignUp(USER_EMAIL, PASSWORD_INITIAL) {
  try {
    const createResp = await authn.user.create(
      USER_EMAIL,
      PASSWORD_INITIAL,
      AuthN.IDProvider.PASSWORD,
      // { profile: PROFILE_INITIAL }
    );
    localStorage.setItem("USER_ID", response.result.active_token.identity);
    return createResp.result;
  } catch (err) {
    return "error";
  }
}

async function SignIn(USER_EMAIL, PASSWORD_INITIAL) {
  try {
    const response = await authn.user.login.password(
      USER_EMAIL,
      PASSWORD_INITIAL,
      // {
      //   extra_profile: {
      //     first_name: "Joe",
      //     last_name: "User",
      //   },
      // }
    );
    localStorage.setItem("USER_ID", response.result.active_token.identity);
    return response.result;
  } catch (err) {
    return "error";
  }
}

// export default { SignUp, SignIn };

module.exports = { SignUp, SignIn };

