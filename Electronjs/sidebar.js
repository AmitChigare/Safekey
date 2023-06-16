window.onload = function(){
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    const searchBtn = document.querySelector(".bx-search")

    closeBtn.addEventListener("click",function(){
        sidebar.classList.toggle("open")
        menuBtnChange()
    })

    // searchBtn.addEventListener("click",function(){
    //     sidebar.classList.toggle("open")
    //     menuBtnChange()
    // })

    function menuBtnChange(){
        if(sidebar.classList.contains("open")){
            closeBtn.classList.replace("bx-menu","bx-menu-alt-right")
        }else{
            closeBtn.classList.replace("bx-menu-alt-right","bx-menu")
        }
    }
    document.getElementById("emailArea").textContent = localStorage.getItem("email");
}

function allInvisible(){
    document.getElementById("Carousel").style.display = "none";
    document.getElementById("configureUsb").style.display = "none";
    document.getElementById("deleteUsb").style.display = "none";
    document.getElementById("transferUsb").style.display = "none";
    document.getElementById("retrieveUsb").style.display="none";
}

function clickNewusb(){
    allInvisible();
    document.getElementById("configureUsb").style.display = "block";
    
}

async function deleteUsb(){
    allInvisible();
    document.getElementById("deleteUsb").style.display = "block";
    // document.getElementById("usbDisplayerForDelete").innerHTML = '';
    // console.log("deleting");
    // let response=""
    // await GetUserPendrives(localStorage.getItem("USER_ID")).then(result => {
    //     response = result;
    // });
    // console.log(response);
    // let fileListDiv = document.getElementById("usbDisplayerForDelete");
    // for(let i=0;i<response.count;i++){
    //     const selectedFileDiv = document.createElement("div");
    //     selectedFileDiv.classList.add("selected-file");
    //     const checkbox = document.createElement('input');
    //     checkbox.className = 'custom-checkbox'
    //     checkbox.type = 'checkbox';
    //     checkbox.name = response.items[i].name;
    //     checkbox.value = response.items[i].name;

    //     const label = document.createElement('label');
    //     label.textContent = response.items[i].name;
    //     label.className = 'custom-label';

    //     selectedFileDiv.appendChild(checkbox);
    //     selectedFileDiv.appendChild(label);
    //     selectedFileDiv.appendChild(document.createElement("br"));

    //     fileListDiv.appendChild(selectedFileDiv);
    // }
}


function retrieveEntries(data) {
    const entries = [];
    const lines = data.toString()
    console.log(lines)
    for (const line of lines) {
        const parts = line.split(' ');
        const entry = { type: parts[0], value: parts[3] };
        if (parts[3] !== undefined)
            entries.push(entry);
    }
    return entries;
}

async function OnClickDeleteUsb(){
    let dropDownForDelete = document.getElementById("DeletingUsbDropdown");
    let type=""
    console.log(dropDownForDelete);
    console.log(dropDownForDelete.value);
    if(dropDownForDelete.value==="None"){
        console.log("pendrive already empty");
        return ;
    }
    console.log(dropDownForDelete);
    let selectedOption = dropDownForDelete.options[dropDownForDelete.selectedIndex];
    if (selectedOption.value !== "") {
        type = selectedOption.text;
        console.log("type: ", type);
        let key = selectedOption.value;
      } else {
        console.log("No option selected");
      }

    // let type = dropDownForDelete.option[dropDownForDelete.selectedIndex];
    // console.log("type : ",type)
    // let key = dropDownForDelete.value;

    const pythonScriptPath = PATH_TO_SAFEKEY;
    const scriptArgs = ['-d',type];
    console.log('python', [pythonScriptPath, ...scriptArgs]);
    const pythonProcess = spawn('python', [pythonScriptPath, ...scriptArgs]);

    pythonProcess.stdout.on('data', (data) => {
        output=data.toString()
        console.log(data.toString());
        setTimeout(() => {
            // window.location.href = 'animation.html';
        }, 3); //
    });pythonProcess.on('error', (error) => {
        console.error('An error occurred while executing the Python script:', error);
      });
      



    pythonProcess.stderr.on('data', (data) => {
        const error = data.toString();
        console.error('Python script error:', error);
    });

    pythonProcess.on('close', (code) => {
        console.log('Python script exited with code:', code);
    });


    
}

function del_usb(type) {
    const pythonScriptPath = PATH_TO_SAFEKEY;
    const scriptArgs = ['-d',type];
    console.log('python', [pythonScriptPath, ...scriptArgs]);
    const pythonProcess = spawn('python', [pythonScriptPath, ...scriptArgs]);

    pythonProcess.stdout.on('data', (data) => {
        console.log(data);
        return data;
    });

    pythonProcess.stderr.on('data', (data) => {
        const error = data.toString();
        console.error('Python script error:', error);
    });

    pythonProcess.on('close', (code) => {
        console.log('Python script exited with code:', code);
    });
}

function TransferDashOpenUsb(){
    allInvisible();
    document.getElementById("transferUsb").style.display = "block";
}

function get_usb_for_delete() {
    const pythonScriptPath = PATH_TO_SAFEKEY;
    const scriptArgs = ['-gu'];
    console.log('python', [pythonScriptPath, ...scriptArgs]);
    const pythonProcess = spawn('python', [pythonScriptPath, ...scriptArgs]);
    pythonProcess.stdout.on('data', (data) => {
        const entries = retrieveEntries(data);
        console.log(entries);
        // const output = data.toString();
        // document.getElementById('output').innerText = output;

        const select_usb_button = document.getElementById('select-usb-button-for-delete');
        select_usb_button.style.display = 'none';
        const dropdown = createDropdownDelete(entries);

        const outputDiv = document.getElementById('output-show-for-deleting');
        console.log(outputDiv);
        outputDiv.innerHTML = '';
        outputDiv.appendChild(dropdown);
    });

    pythonProcess.stderr.on('data', (data) => {
        const error = data.toString();
        console.error('Python script error:', error);
    });

    pythonProcess.on('close', (code) => {
        console.log('Python script exited with code:', code);
    });
}

function createDropdownDelete(entries) {
    const dropdown = document.createElement('select');
    dropdown.classList.add("form-select");
    dropdown.classList.add("selectDropDown");
    dropdown.style.width = "434px";
    dropdown.style.backgroundColor = "#0D6EFD";
    dropdown.id = "DeletingUsbDropdown";
    console.log("entrie :"+entries[0].toString());
    for (const entry of entries) {
        const option = document.createElement('option');
        option.value = entry.value;
        option.text = entry.type;
        dropdown.appendChild(option);
    }
    console.log(dropdown);
    return dropdown;
}


async function RetrieveDashOpenUsb(){
    allInvisible();
    document.getElementById("retrieveUsb").style.display = "block";

    document.getElementById("usbDisplayerForRetrive").innerHTML = '';
    console.log("retrieving");
    let response="";
    await GetUserPendrives(localStorage.getItem("USER_ID")).then(result => {
        response = result;
    });
    console.log(response);
    let fileListDiv = document.getElementById("usbDisplayerForRetrive");
    for(let i=0;i<response.count;i++){
        const selectedFileDiv = document.createElement("div");
        selectedFileDiv.classList.add("selected-file");
        const checkbox = document.createElement('input');
        checkbox.className = 'custom-checkbox'
        checkbox.type = 'checkbox';
        checkbox.name = response.items[i].name;
        checkbox.value = response.items[i].name;

        const label = document.createElement('label');
        label.textContent = response.items[i].name;
        label.className = 'custom-label';

        selectedFileDiv.appendChild(checkbox);
        selectedFileDiv.appendChild(label);
        selectedFileDiv.appendChild(document.createElement("br"));

        fileListDiv.appendChild(selectedFileDiv);
    }
}

function createDropdownRetrive(entries) {
    const dropdown = document.createElement('select');
    dropdown.classList.add("form-select");
    dropdown.classList.add("selectDropDown");
    dropdown.style.width = "434px";
    dropdown.style.backgroundColor = "#0D6EFD";
    dropdown.id = "RetrieveUsbDropdown";
    for (const entry of entries) {
        const option = document.createElement('option');
        option.value = entry.value;
        option.text = entry.type;
        dropdown.appendChild(option);
    }
    console.log(dropdown);
    return dropdown;
}

function get_usb_for_retrieve() {
    const pythonScriptPath = PATH_TO_SAFEKEY;
    const scriptArgs = ['-gu'];
    console.log('python', [pythonScriptPath, ...scriptArgs]);
    const pythonProcess = spawn('python', [pythonScriptPath, ...scriptArgs]);

    pythonProcess.stdout.on('data', (data) => {
        const entries = retrieveEntries(data);
        console.log(entries);
        // const output = data.toString();
        // document.getElementById('output').innerText = output;

        const select_usb_button = document.getElementById('select-usb-button-for-retrieve');
        select_usb_button.style.display = 'none';
        const dropdown = createDropdownRetrive(entries);

        const outputDiv = document.getElementById('output-show-for-retrieve');
        console.log(outputDiv);
        outputDiv.innerHTML = '';
        outputDiv.appendChild(dropdown);
    });

    pythonProcess.stderr.on('data', (data) => {
        const error = data.toString();
        console.error('Python script error:', error);
    });

    pythonProcess.on('close', (code) => {
        console.log('Python script exited with code:', code);
    });
}

async function retriveUsb(){
    let usbDropdown = document.getElementById("RetrieveUsbDropdown");
    let type = "";
    
    let selectedOption = usbDropdown.options[usbDropdown.selectedIndex];
    if (selectedOption.value !== "") {
        type = selectedOption.text;
        console.log("type: ", type);
        let key = selectedOption.value;
      } else {
        console.log("No option selected");
      }
    let key = usbDropdown.value;
    if(key !== 'None'){
        console.log("pendrive not None");
        return;
    }
    let keyNeedToBeInserted = "";

    let usbDisplayerForRetrive = document.getElementById("usbDisplayerForRetrive");
    const childDivs = usbDisplayerForRetrive.children;

    // Loop through the childDivs collection
    for (let i = 0; i < childDivs.length; i++) {
        const childInputs = childDivs[i].querySelectorAll('input');

        let childInput = childInputs[0];
        if(childInput.checked){
            keyNeedToBeInserted = childInput.value;
        }

    }

    const { GetUserPendrives, GetFileLocations, InsertNewPendrive, DeletePendrive, UpdatePendriveLocations, UpdatePendriveKey } = require("./pangeaVaults.js");
    
    let value = "";
    console.log(keyNeedToBeInserted);
    await GetFileLocations(localStorage.getItem("USER_ID"), keyNeedToBeInserted).then(result => {
        console.log(result);
        value = result.current_version.secret;
    });


    const pythonScriptPath = PATH_TO_SAFEKEY;
    const scriptArgs = ['-lk',keyNeedToBeInserted , type, value];
    console.log('python', [pythonScriptPath, ...scriptArgs]);
    const pythonProcess = spawn('python', [pythonScriptPath, ...scriptArgs]);

    pythonProcess.stdout.on('data', (data) => {
        const entries = retrieveEntries(data);
        console.log(entries);
        // const output = data.toString();
        // document.getElementById('output').innerText = output;

        const select_usb_button = document.getElementById('select-usb-button-for-retrieve');
        select_usb_button.style.display = 'none';
        const dropdown = createDropdownRetrive(entries);

        const outputDiv = document.getElementById('output-show-for-retrieve');
        console.log(outputDiv);
        outputDiv.innerHTML = '';
        outputDiv.appendChild(dropdown);
    });

    pythonProcess.stderr.on('data', (data) => {
        const error = data.toString();
        console.error('Python script error:', error);
    });

    pythonProcess.on('close', (code) => {
        console.log('Python script exited with code:', code);
    });

}