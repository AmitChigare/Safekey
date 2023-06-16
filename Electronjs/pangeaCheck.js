// import {GetUserPendrives, GetFileLocations, InsertNewPendrive, DeletePendrive, UpdatePendriveLocations, UpdatePendriveKey} from "./pangeaVaults.js";

const { GetUserPendrives, GetFileLocations, InsertNewPendrive, DeletePendrive, UpdatePendriveLocations, UpdatePendriveKey } = require("./pangeaVaults.js");

// let user_id = localStorage.getItem("USER_ID");

// InsertNewPendrive("pui_3p7j5h2py7dolzwxp65yhsiihl34bzpw", "kIkCAo09MgiY6kueL8k6ognJzv-raUKw0xCtzjeOv4=", "hi.txt").then(result => {
//     console.log(result);
// });

GetUserPendrives("pui_3p7j5h2py7dolzwxp65yhsiihl34bzpw").then(result => {
    console.log(result);
});

// GetFileLocations("pui_3p7j5h2py7dolzwxp65yhsiihl34bzpw", "initialKey").then(result => {
//     console.log(result);
// });

// DeletePendrive("pui_3p7j5h2py7dolzwxp65yhsiihl34bzpw", "ABAoMfJy1PJ85KDtZZFfYvFVy7c-BfM_y-vznzNA8Gw=").then(result =>{
//     console.log(result);
// });

// UpdatePendriveLocations("pui_3p7j5h2py7dolzwxp65yhsiihl34bzpw", "Fb_IPeaGmY4tDqpkW-oEdzqt9pcbVb2MZ8BHCKJyTso=", "hi.txt").then(result =>{
//     console.log(result);
// });

// UpdatePendriveKey("pui_3p7j5h2py7dolzwxp65yhsiihl34bzpw", "axcvbnm", "ABAoMfJy1PJ85KDtZZFfYvFVy7c-BfM_y-vznzNA8Gw=").then(result =>{
//     console.log(result);
// });

/*--------------------------Auth API's------------------------*/
// const RANDOM_VALUE = new Date().getTime().toString();
// const USER_EMAIL = `user.email+test${RANDOM_VALUE}@pangea.cloud`;
// const PASSWORD_INITIAL = "My1s+Password";

// const { SignUp, SignIn } = require('./pangeaAuthN.js');

// // SignUp(USER_EMAIL, PASSWORD_INITIAL).then(result => {
// //     console.log(result);
// // });

// SignIn("sairushik1903@gmail.com", "Rushik@1903").then(result => {
//     console.log(result);
// });