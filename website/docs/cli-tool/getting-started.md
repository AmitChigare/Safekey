## Follow these Commands to get started

1. You need these files to get started [safekey.py](https://github.com/jashwanth0712/Safekey/blob/main/scripts/safekey.py) and [usb_tracer.py](https://github.com/jashwanth0712/Safekey/blob/main/scripts/usb_tracer.py). Make Sure you know the path to these files.
2. Follow these commands. </ br></ br>

   - **List all the USB drives that are connected to the computer system.**

     ```
     python safekey.py -gu
     ```

   - **Setting a New key in a drive fron file1 to file2**

     Syntax : python safekey.py - l `<DRIVE_NAME>` `<FILE_NAME_1>` `<FILE_NAME_2>`</ br>

     ```
     python safekey.py -l E file1 file2
     ```

   - **Transfer from Drive-1 to Drive-2**

     Syntax : python safekey.py - t `<DRIVE_NAME_1>` `<DRIVE_NAME_2>`</ br>

     ```
     python safekey.py -t D E
     ```

   - **Setting a New key in a drive fron file1 to file2**

     Syntax : python safekey.py - l `<DRIVE_NAME>` `<FILE_NAME_1>` `<FILE_NAME_2>`</ br>

     ```
     python safekey.py -l E file1 file2
     ```
