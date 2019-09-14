interface valueType{
    [key:string]:string;
}
interface modType {
    [key:string]:valueType|string|any;//если убрать any, то в строке (*) ругается, что Правая часть оператора "for…in" должна иметь тип "any"
}

enum Mode {
    STANDART,
    React
}

function nameFormat(string:string):string{
        let result:string = "";
        for (let stringIndex = 0; stringIndex < string.length; stringIndex++) {
            if (stringIndex == 0 || string[stringIndex-1] === " " || string[stringIndex-1] === "-"){
                result += string[stringIndex].toUpperCase(); 
            } else {
                result += string[stringIndex].toLowerCase();
            }
        }
    return result
}

function nameLowerCase(string:string):string{
    let result:string = "";
    for (let stringIndex = 0; stringIndex < string.length; stringIndex++) {
            result += string[stringIndex].toLowerCase();
    }
    return result
}

function declorationBEM(mode:Mode, elemSeparator:string, modSeparator:string){
    return function bemGenerator(block:string, elem:string = "", mod?:modType){
        block = nameLowerCase(block);
        elem = nameLowerCase(elem);
        let result:string = "";
        result +=block;
        if (elem != ""){
            result += ` ${elem + elemSeparator + block}`
        }
        if (mod != undefined && !Array.isArray(mod)){
            for (let wrap in mod) {
                if (typeof(mod[wrap]) === "object"){ //если содержимое модификатора - объект
                    for (let inner in mod[wrap]) {             //(*)
                        if (nameLowerCase(wrap) === block){ 
                            result += ` ${wrap + modSeparator + inner + modSeparator + mod[wrap][inner] }`
                        } else if (nameLowerCase(wrap) === elem) {
                            result += ` ${wrap + elemSeparator + block + modSeparator + inner + modSeparator + mod[wrap][inner] }`
                        }
                    }
                } else {
                    result += ` ${block + elemSeparator + wrap + modSeparator+  mod[wrap]}`
                } 
            }
        }
        return nameFormat(result)
    }
}


const bem = declorationBEM(Mode.React,"-","_");

//console.log(bem( "loGo", "heAder" , {"loGo":{color:"White"} , "heADer":{siZe:"big"}}));