function valid_phone(ph){
    let r = /^[0-9]{10}$/;
    let r1 = /^\+91\s[0-9]{10}$/;
    return r1.test(ph);
}

let phone_no = "+91 9442513652";

let phone_no1 = "944213sdfsd652";
console.log(valid_phone(phone_no));


if(phone_no1.length !== 10 || isNaN(phone_no1))
{
    console.log("Not a valid Phone Number");
}

