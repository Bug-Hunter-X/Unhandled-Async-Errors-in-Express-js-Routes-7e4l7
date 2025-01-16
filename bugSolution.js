const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(error => {
    console.error('Error processing request:', error); // Log the error
    res.status(500).send('Internal Server Error'); // Send a proper error response
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

//Simulate Asynchronous Operation
function someAsyncOperation(){
    return new Promise((resolve,reject) =>{
        const randomNumber = Math.random();
        if(randomNumber<0.5){
            resolve(randomNumber);
        }else{
            reject(new Error('Something went wrong'));
        }
    })
}