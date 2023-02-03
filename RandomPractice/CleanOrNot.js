


function BellBoy(name, age, languages, country, clean){
    this.name = name,
    this.age = age,
    this.languages = languages,
    this.country = country,
    this.clean = function(){
        alert("Cleaning in progress...")
    }
}

var bellBoy1 = new BellBoy("XYZ", 19, ["Hindi, English"], "India");

var v = prompt("Do you want me to clean your room?");
if(v==="yes"){
    bellBoy1.clean();
}
else{
    alert("Okay, bbye!")
}

