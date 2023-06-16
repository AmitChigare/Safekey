const { spawn } = require('child_process');

function get_usb() {
    const pythonScriptPath = PATH_TO_SAFEKEY;
    const scriptArgs = ['-gu'];
    console.log('python', [pythonScriptPath, ...scriptArgs]);
    const pythonProcess = spawn('python', [pythonScriptPath, ...scriptArgs]);

    pythonProcess.stdout.on('data', (data) => {
        const entries = retrieveEntries(data);
        console.log(entries);
        // const output = data.toString();
        // document.getElementById('output').innerText = output;

        const select_usb_button = document.getElementById('select-usb-button');
        select_usb_button.style.display = 'none';
        const dropdown = createDropdown(entries);

        const outputDiv = document.getElementById('output');
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

function retrieveEntries(data) {
    const entries = [];
    const lines = data.toString().split('\n').map(line => line.trim());
    for (const line of lines) {
        const parts = line.split(' ');
        const entry = { type: parts[0], value: parts[3] };
        if (parts[3] !== undefined)
            entries.push(entry);
    }
    return entries;
}

function createDropdown(entries) {
    const dropdown = document.createElement('select');
    dropdown.classList.add("form-select");
    dropdown.classList.add("selectDropDown");
    dropdown.style.width = "434px";
    dropdown.style.backgroundColor = "#0D6EFD";
    dropdown.id = "SelectedUsb";
    for (const entry of entries) {
        const option = document.createElement('option');
        option.value = entry.value;
        option.text = entry.type;
        dropdown.appendChild(option);
    }
    console.log(dropdown);
    return dropdown;
}
