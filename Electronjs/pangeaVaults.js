const { PangeaConfig, VaultService, PangeaErrors, Vault } = require("pangea-node-sdk");

const PANGEA = {
  PANGEA_DOMAIN: "aws.us.pangea.cloud",
  VAULT_AUTH_TOKEN: "pts_t6i6nc6dnvcqswtanszugxzqteyiweju"
}

const config = new PangeaConfig({ domain: PANGEA.PANGEA_DOMAIN });
const vault = new VaultService(PANGEA.VAULT_AUTH_TOKEN, config);

//good
async function GetUserPendrives(USER_ID) {
  try {
    const response = await vault.list(
      {
        filter: {
          folder: "/" + USER_ID,
          // type: "asymmetric_key",
          // name__contains: "test",
          // metadata_key1: "value1",
          // created_at__lt: "2023-12-12T00:00:00Z",
        },
        // last: "WyIvdGVzdF8yMDdfc3ltbWV0cmljLyJd",
        // order: Vault.ItemOrder.ASC,
        // order_by: Vault.ItemOrderby.NAME,
        //   size: 20,
      }
    );
    // console.log(response.result);
    // console.log(response.result.items[0]);
    // console.log(response.result.items[1]);
    return response.result;
  } catch (err) {
    return "error";
  }
}

//good
async function GetFileLocations(USER_ID, UsbKey) {
  let currentPendrives = await GetUserPendrives(USER_ID);
  let i = 0;
  let VAULT_ID = "";
  for (i = 0; i < currentPendrives.items.length; i++) {
    if(currentPendrives.items[i].name === UsbKey){
      VAULT_ID = currentPendrives.items[i].id;
      break;
    }
  }

  try {
    const response = await vault.getItem(
      VAULT_ID,
      {
        version: 1,
        version_state: Vault.ItemVersionState.ACTIVE,
        verbose: true,
      }
    );
    return response.result;
  } catch (err) {
    return "error";
  }
}

//good
async function InsertNewPendrive(USER_ID, key, value) {
  let folderName = "/" + USER_ID;
  try {
    const response = await vault.secretStore(
      value,
      key,
      {
        folder: folderName,
        // metadata: {
        //   "created_by": "ninn",
        //   "used_in": "testing"
        // },
        // tags: ["these_are_tags", "these_are_tags2"],
        //   rotation_frequency: "10d",
        //   rotation_state: Vault.ItemVersionState.DEACTIVATED,
        //   expiration: "2025-01-01T10:00:00Z",
      }
    );
    return response.result;
  } catch (err) {
    return err;
  }
}

//good
async function DeletePendrive(USER_ID, UsbKey) {

  let currentPendrives = await GetUserPendrives(USER_ID);
  let i = 0;
  let VAULT_ID = "";
  for (i = 0; i < currentPendrives.items.length; i++) {
    if(currentPendrives.items[i].name === UsbKey){
      VAULT_ID = currentPendrives.items[i].id;
      break;
    }
  }

  try {
    const response = await vault.delete(
      VAULT_ID
    );
    return response.result;
  } catch (err) {
    return "error";
  }
}

//good
async function UpdatePendriveLocations(USER_ID, UsbKey, value) {

  let currentPendrives = await GetUserPendrives(USER_ID);
  let i = 0;
  let VAULT_ID = "";
  console.log(currentPendrives);
  for (i = 0; i < currentPendrives.count; i++) {
    if(currentPendrives.items[i].name === UsbKey){
      VAULT_ID = currentPendrives.items[i].id;
      break;
    }
  }
  console.log("VaultID :"+VAULT_ID.toString());
  return ;

  try {
    const response = await vault.secretRotate(
      VAULT_ID,
      value,
      {
        rotation_state: Vault.ItemVersionState.DEACTIVATED, // previous version is deactivated
      }
    );
    return response.result;
  } catch (err) {
    throw err;
    return err;
  }
}

//good
async function UpdatePendriveKey(USER_ID, oldKey, newKey) {

  let currentPendrives = await GetUserPendrives(USER_ID);
  let i = 0;
  let VAULT_ID = "";
  for (i = 0; i < currentPendrives.items.length; i++) {
    if(currentPendrives.items[i].name === oldKey){
      VAULT_ID = currentPendrives.items[i].id;
      break;
    }
  }

  try {
    const response = await vault.update(
      VAULT_ID,
      {
        name: newKey,
        //   folder: "/personal",
        //   metadata: {
        //     "created_by": "John Doe",
        //     "used_in": "Google products"
        //   },
        //   tags: ["irs_2023", "personal"],
        //   rotation_frequency: "10d",
        //   rotation_state: Vault.ItemVersionState.DEACTIVATED,
        //   rotation_grace_period: "1d",
        //   expiration: "2025-01-01T10:00:00Z",
        //   item_state: Vault.ItemState.DISABLED,
      }
    );
    return response.result;
  } catch (err) {
    return "error";
  }
}

module.exports = { GetUserPendrives, GetFileLocations, InsertNewPendrive, DeletePendrive, UpdatePendriveLocations, UpdatePendriveKey };
