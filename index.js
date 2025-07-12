 import https from 'https';
 import readline from 'readline';
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
// const apikey = '66f877f713e02298fbb98d44'
// const url = `https://api.exchangerate-api.com/v6/${apikey}/latest/USD`;
const url = 'https://v6.exchangerate-api.com/v6/66f877f713e02298fbb98d44/latest/USD';
https.get(url,(response) =>{
    let data = '';
    response.on('data',(chunk) =>{
      data += chunk;
    });
    response.on('end', () => {
        const rates = JSON.parse(data).conversion_rates;
        rl.question('enter the amount in USD:',(amount)=>{
           rl.question('enter the currency you want to convert to:', (currency)=>{
             const rate = rates[currency.toUpperCase()]
             if(rate){
                console.log(`${amount} USD is equal to ${amount * rate} ${currency.toUpperCase()}`)
             }
             else{
                console.log("invalid currency");
             }
             rl.close()
           })
    })
}) 
})
