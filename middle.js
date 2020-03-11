function middle(text){
let pol=text.lentgh/2
if (pol%2==0) {
    console.log(text[Math.ceil(text)]+" "+text[Math.floor(pol)])
}
else console.log(text[pol]);
}
middle("Nabuhodonozor")