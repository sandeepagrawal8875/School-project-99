// <<<<<<<<<<<<<<LIVe Priview of Photo>>>>>>>>>>>>>>
let photoinput= document.getElementById("photo");
let photoimg = document.getElementById("priviewphoto");
photoinput.addEventListener("change",function(){
    const file = this.files[0];
    if(file){
        const reader = new FileReader();
        reader.addEventListener("load",function(){
            photoimg.setAttribute("src",this.result)
        })
        reader.readAsDataURL(file);
    }
})

// <<<<<<<<<<<<<<<LIVe Priview of  ID>>>>>>>>>>>>>>
let IDinput=document.getElementById("ID");
let IDimg=document.getElementById("priviewID");
IDinput.addEventListener("change",function(){
    const file =this.files[0];
    if(file)
    {
        const reader=new FileReader();
        reader.addEventListener("load",function()
        {
            IDimg.setAttribute("src",this.result);
        })
        reader.readAsDataURL(file);
    }
})

// <<<<<<<<<<<<<<<<LIVe Priview of Character Certificate>>>>>>>>>>>>>>>>
let CastCertiinput=document.getElementById("CastCerti");
let CastCertiimg=document.getElementById("priviewCastCerti");
CastCertiinput.addEventListener("change",function(){
    const file =this.files[0];
    if(file)
    {
        const reader=new FileReader();
        reader.addEventListener("load",function()
        {
            CastCertiimg.setAttribute("src",this.result);
        })
        reader.readAsDataURL(file);
    }
})


// <<<<<<<<<<<<<<<< LIVe Priview of Domicile Certificate >>>>>>>>>>>>>>>>
let Domicileinput=document.getElementById("Domicile");
let Domicileimg=document.getElementById("priviewDomicile");
Domicileinput.addEventListener("change",function(){
    const file =this.files[0];
    if(file)
    {
        const reader=new FileReader();
        reader.addEventListener("load",function()
        {
            Domicileimg.setAttribute("src",this.result);
        })
        reader.readAsDataURL(file);
    }
})

// <<<<<<<<<<<<<<<<LIVe Priview of TC >>>>>>>>>>>>>>>>
let TCinput=document.getElementById("TC");
let TCimg=document.getElementById("priviewTC");
TCinput.addEventListener("change",function(){
    const file =this.files[0];
    if(file)
    {
        const reader=new FileReader();
        reader.addEventListener("load",function()
        {
            TCimg.setAttribute("src",this.result);
        })
        reader.readAsDataURL(file);
    }
})

// <<<<<<<<<<<<<<<< LIVe Priview of Character Certificate >>>>>>>>>>>>>>>>
let CharacterCertiinput=document.getElementById("CharacterCerti");
let CharacterCertiimg=document.getElementById("priviewCharacterCerti");
CharacterCertiinput.addEventListener("change",function(){
    const file =this.files[0];
    if(file)
    {
        const reader=new FileReader();
        reader.addEventListener("load",function()
        {
            CharacterCertiimg.setAttribute("src",this.result);
        })
        reader.readAsDataURL(file);
    }
})

// <<<<<<<<<<Priview Over>>>>>>>>>>

// <<<<<<<<<< Contact Details >>>>>>>>
console.log("hellow");