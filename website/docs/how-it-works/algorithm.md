# How it works?

![flowchart](https://github.com/jashwanth0712/Safekey/blob/main/Electronjs/images/flowchart.png?raw=true)
### Techstacks used
`Electronjs` `python` `Pangea services`
### how it works 
### `USB`
- USB has two hidden files namely `metadata` and `key`
- metadata stores the list of files that the key should affect
- key has the secret key through which encryption and decryption occurs
### `Computer`
- Backend script is responsible for managing and triggering operations whenever the usb is injected or ejected
- when a new usb is inserted , the metadata and key are stored in a cache file and all the files that it affects are decrypted and unhidden 
- when the usb is ejected , all the files inside the cache are encrypted back and the cache is freed so that no one else can read the key and files
