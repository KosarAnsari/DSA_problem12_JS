//Introduction to Searching
names = ["John","Smith","Muriel","Adam"];
console.log(names.indexOf("Smith"));
console.log(names.includes("Muriel"));

//Linear Search Algorithm
const users =[{username : "John Doe",email : "johndoe123@gmail.com"},
    {username : "Gracy",email : "gracyjohnson@gmail.com"},
    {username : "Sarah",email : "sarahjohnson@gmail.com"},
    {username : "Rhea" ,email : "Rheagray@gmail.com"}];

    function isUser(array,key){
        for(let items of array){
            if(items['email'] === key){
                return true;
            }
        }
        return false;
    };

    let res = isUser(users,"abc");
    console.log(res);