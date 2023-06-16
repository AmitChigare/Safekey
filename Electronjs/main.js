const { ipcRenderer } = require("electron");
const fileListDiv = document.getElementById("fileList");
const selectedFilesDiv = document.getElementById("selectedFiles");
const electron = require("electron");

let SelectedFolderPath = "";

//this still not working
ipcRenderer.on("selected-folder", (event, folderPath) => {
  // Do something with the selected folder path
  // console.log('Selected folder:', folderPath);
  console.log("here");
  SelectedFolderPath = folderPath;
});

ipcRenderer.on("files", (event, files) => {
  for (const file of files) {
    const selectedFileDiv = document.createElement("div");
    selectedFileDiv.classList.add("selected-file");
    const checkbox = document.createElement('input');
    checkbox.className = 'custom-checkbox'
    checkbox.type = 'checkbox';
    checkbox.name = 'file';
    checkbox.value = file;
    checkbox.className = 'custom-checkbox'

    const label = document.createElement('label');
    label.textContent = file;
    label.className = 'custom-label';

    checkbox.addEventListener("change", (event) => {
      if (event.target.checked) {
        displaySelectedFile(file);
      } else {
        removeSelectedFile(file);
      }
    });

    selectedFileDiv.appendChild(checkbox);
    selectedFileDiv.appendChild(label);
    selectedFileDiv.appendChild(document.createElement("br"));

    fileListDiv.appendChild(selectedFileDiv);
  }
});

function displaySelectedFile(file) {
  const selectedFileDiv = document.createElement("div");
  selectedFileDiv.textContent = file;
  selectedFileDiv.style.display = "none";
  selectedFilesDiv.appendChild(selectedFileDiv);
}

function removeSelectedFile(file) {
  const selectedFileDivs = selectedFilesDiv.getElementsByTagName("div");
  for (const div of selectedFileDivs) {
    if (div.textContent === file) {
      div.remove();
      break;
    }
  }
}

function EmptyTheFileList() {
  const selectedFileDivs = selectedFilesDiv.getElementsByTagName("div");
  const fileDivs = fileListDiv.getElementsByTagName("div");
  console.log(selectedFileDivs);
  console.log(fileDivs);
  for (const div of selectedFileDivs) {
    console.log(div.textContent);
    div.remove();
  }
  for (const div of fileDivs) {
    console.log("here");
    console.log(div);
    console.log(div.textContent);
    div.remove();
  }
}
function displaySelectedFile(file) {
  const selectedFileDiv = document.createElement("div");
  selectedFileDiv.textContent = file;
  selectedFileDiv.style.display = "none";
  selectedFileDiv.dataset.filePath = SelectedFolderPath + file; // Store the file path as a data attribute
  selectedFilesDiv.appendChild(selectedFileDiv);

  const filePath = selectedFileDiv.dataset.filePath;
  console.log("Selected file path:", filePath);
}



function openDialog() {
  EmptyTheFileList();
  ipcRenderer.send("open-dialog");
}

/*--------using apis on buttons--------*/

const {
  GetUserPendrives,
  GetFileLocations,
  InsertNewPendrive,
  UpdatePendriveLocations,
  UpdatePendriveKey,
} = require("./pangeaVaults.js");

function RunInsertNewPendrive() {
  
  const { GetUserPendrives, GetFileLocations, InsertNewPendrive, DeletePendrive, UpdatePendriveLocations, UpdatePendriveKey } = require("./pangeaVaults.js");


  const selectedFileDivs = selectedFilesDiv.getElementsByTagName("div");
  let value = "";
  for (const childElement of selectedFileDivs) {
    value = value + SelectedFolderPath + childElement.textContent + " ";
  }
  console.log("value:"+value.toString());
  let pendriveDropdown = document.getElementById("SelectedUsb");
  
  let type = pendriveDropdown.options[pendriveDropdown.selectedIndex];
  let key ="";
  if (type.value !== "") {
      // type = type.text;
      console.log("type: ", type);
      key = type.value;
    } else {
      console.log("No option selected");
    }
  console.log("pendriveDropdown.value :"+pendriveDropdown.value.toString());
  if(pendriveDropdown.value === 'None'){
    console.log("pendrive is empty, inserting key");

    //getting newKey from scripts

    const pythonScriptPath = PATH_TO_SAFEKEY;
    const scriptArgs = ['-l', type.text, value];
    console.log('python', [pythonScriptPath, ...scriptArgs]);
    const pythonProcess = spawn('python', [pythonScriptPath, ...scriptArgs]);
    let newKey = "";
    pythonProcess.stdout.on('data', (data) => {
        console.log(data.toString());
        newKey = data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
        const error = data.toString();
        console.error('Python script error:', error);
    });

    pythonProcess.on('close', (code) => {
        console.log('Python script exited with code:', code);
    });
    try {
      console.log()
      InsertNewPendrive(localStorage.getItem("USER_ID"), newKey, value).then(result => {
          console.log(result);
      });
      //insertion complete
    } catch (error) {
      console.error(error);
    }
    return ;
  }
  console.log("replacing pendrive key");
  try {
    console.log(localStorage.getItem("USER_ID").toString()+
    pendriveDropdown.value.toString()+
    value.toString());
    UpdatePendriveLocations(
      localStorage.getItem("USER_ID"),
      pendriveDropdown.value,
      value
    ).then((result) => {
      console.log(result);
    });
  } catch (error) {
    console.error(error);
  }
}
