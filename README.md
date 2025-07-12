# Currency_converter
This is a nodeJs module for comparison between currencies using exchange rate API 

#https module of nodeJs is used to fetch data from API 
import https from 'https';

#API url 
url= "https://v6.exchangerate-api.com/v6/66f877f713e02298fbb98d44/latest/USD"

#readline module of nodeJs is used to read and write in the terminal
import readline from 'readline';
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

#install (index.js, package.json and package-lock.json) all file under a same folder

