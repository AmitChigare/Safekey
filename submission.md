## Inspiration 💡 
Safe Key was inspired by the concept of an unsharable key. Using a physical pendrive as the key, our software encrypts and secures files. Without the pendrive, files remain inaccessible and secure. In case of key loss, our Pangea vault securely stores and recovers the key. Take control of your digital security with Safe Key, the solution for enhanced file protection.

## What it does ⚒️
![poster](https://github.com/jashwanth0712/Safekey/blob/main/Electronjs/images/SAFE%20KEYb.jpg?raw=true)

Our project's main feature is transforming a USB device into a secret key. When the USB is inserted, files become visible, and when ejected, they are hidden and encrypted. This tool is invaluable for individuals seeking to securely store private data on their devices.

## How we built it
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

## Challenges we ran into
We are storing user's pendrive info in our organisation's pangea vault.
here the user's info is still accessible by the org, so he 


## Accomplishments that we're proud of
It was a really fun filled first step into cyber security and a great experience in working with pangea APIs , we have created an end to end application , which is a great accomplishment 
## What we learned
- We have explored various encryption techniques
- learnt how to use Auth services 
- learnt how pangea API works 
- this was ourt first time working with electron js, While working on our project, we had to explore and find optimal ways to integrate Pangea Auth into the Electron.js application. It was a valuable learning process that deepened our appreciation for Electron.js's capabilities.
## What's next for Safekey
Enhanced Security Features: Evaluate and implement additional security measures to fortify the encryption system. This could involve incorporating advanced encryption algorithms, multi-factor authentication, or biometric verification for an added layer of protection.
Explore compatibility with different operating systems and platforms.
Third-Party Auditing and Certification: Consider subjecting Safekey to independent security audits and certifications to provide users with reassurance regarding the robustness and trustworthiness of the encryption system.
