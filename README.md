






Installations:
npm install --save @emailjs/browser
npm i react-scroll

this is the format in contact.js to integrate the emailjs:
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
the public key, service id and template id are from the account in the emailjs.
