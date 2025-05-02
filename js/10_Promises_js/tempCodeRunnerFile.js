async function getallusers() {
    try {
        // using fetch/library method 
        const  response = await fetch("https://jsonplaceholder.typicode.com/users")
        // convert response to json format and the conversion also take time 
        // so we have to await this as well
        const data = await response.json()
        console.log(data);
   
    } 
    catch (error) {
        console.log("E :" ,error); 
    }
}
getallusers()