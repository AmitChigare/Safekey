## Follow the steps to get started:

1. You need two files to get started 
  [`safekey.py` ](https://github.com/jashwanth0712/Safekey/blob/main/scripts/safekey.py)and [`usb_tracer.py`](https://github.com/jashwanth0712/Safekey/blob/main/scripts/usb_tracer.py)
  </br>Please check the path of the file before running the commands
 
2. Run the following commands in command line:</br>
  * **List all the USBs that are connected to the system** </br></br>
     ```
     python safekey.py -gu
     ```
  * **For Setting a New Key** </br></br>
  *Syntax : python safekey.py -&nbsp;l ` <DRIVE_NAME> ` `<FILE_NAME_1>` `<FILE_NAME_2>` ... `<FILE_NAME_N>`*</br></br>
     ```
     python safekey.py -l E filepath1 filepath2 ....
     ```
   * **To transfer the key from drive 1 to drive 2** </br></br>
   *Syntax : python safekey.py -t `<FROM_DRIVE>` `<TO_DRIVE>`*</br></br>
     ```
     python safekey.py -t D E 
     ```
   * **To Delete the key in the USB drive** </br></br>
   *Syntax : python safekey.py -d `<DRIVE_NAME>`* </br></br>
     ```
     python safekey.py -d E 
     ```
  * **Set with the secret key** </br></br>
  *Syntax : python safekey.py - lk `<SECRET_KEY>` `<DRIVE_NAME>` `<FILE_NAME_1>` `<FILE_NAME_2>` ... `<FILE_NAME_N>`*</br></br>
     ```
     python safekey.py -lk secret-key E filepath1 filepath2
     ```
  * **Trace your connected USB drive.** </br></br>
    ![Command Image](https://github.com/jashwanth0712/Safekey/blob/main/Electronjs/images/att.jpeg)</br></br>
    ```
    python usb_tracer.py
    ```
  
