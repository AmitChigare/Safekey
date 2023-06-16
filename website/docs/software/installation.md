- preferably use windows machine
- clone the project by typing
    ```
    git clone https://github.com/jashwanth0712/Safekey.git
    ```

- Make your that your Node version is above 16 , you can check that by `node -v`
- Next , we have to install few python libraries to facilitate our background script , run the following command in you rcommand prompt
    ```
    pip install Fernet
    pip install cryptography
    pip install argparse
    pip install subprocess
    pip install os
    pip install time
    ```

- go to scripts folder
    copy path of `safekey.py`
    open `.env` in Electrojs
    paste the path to `PATH_TO_SAFEKEY` variable
    in path change all `\` to `\\`
    eg: `C:\Users\user\Desktop\Safekey\scripts\safekey.py` to `C:\\Users\\user\\Desktop\\Safekey\\scripts\\safekey.py`

- open the project in visual studio
- type to `cd Electronjs`

- run `npm i` (inside Electronjs folder)

- run `npm run dev` (to start the app)

- login
    test credentials
        abc@abc.com
        Abc@123
