interface modifierValueTypeIsObject{
    [key:string]:string|boolean;
}
interface typeOfModificationForDeclorationBEM {
    [key:string]:modifierValueTypeIsObject|string;
}

enum Mode {
    STANDART,
    REACT
}

function nameFormat(string:string):string{
        let result:string = "";
        let lastChar:string = "";
        for (const char of string) {
            if(lastChar === " " || lastChar === "-" || lastChar == ""){
                result += char.toUpperCase();
            }else {
                result +=char.toLowerCase();
            }
            lastChar = char;
        }

    return result
}

function nameLowerCase(string:string):string{
    let result:string = "";
    for (const char of string) {
        result += char.toLowerCase()        
    }
    return result
}

function checkValue(obj:modifierValueTypeIsObject,modSeparator:string,currentKey:string):string{
    let result:string;
    if (typeof(obj[currentKey]) === "boolean" ){            
        result = modSeparator + currentKey;
    } else {
        result = modSeparator + currentKey + modSeparator + obj[currentKey];
    }
    return result
}
 
function declorationBEM(mode:Mode, elemSeparator:string, modSeparator:string){
    return function bemGenerator(block:string, elem:string = "", mod?:typeOfModificationForDeclorationBEM|modifierValueTypeIsObject){

        block = nameLowerCase(block);
        elem = nameLowerCase(elem);
        let result:string = "";
        result +=block;
        if (elem != ""){
            result += ` ${elem + elemSeparator + block}`
        }
        if (mod != undefined && !Array.isArray(mod)){

            Object.keys(mod).forEach(function(modKeys){
                const modValue:any = mod[modKeys];               
                if (typeof(modValue) === "object"){
                    Object.keys(modValue).forEach(function(keyOfModValue){ //по внутреннему объекту
                        if (nameLowerCase(modKeys) === block){
                            result += ` ${modKeys + checkValue(modValue,modSeparator,keyOfModValue)}`;
                        } else if (nameLowerCase(modKeys) === elem) {
                            result += ` ${modKeys + elemSeparator + block + checkValue(modValue,modSeparator,keyOfModValue)}`;                                
                        }
                    });
                } else {
                    const defaultObject:any = mod;
                    result += ` ${block + checkValue(defaultObject,modSeparator,modKeys)}`;
                }
            });


        }
        return nameFormat(result)
    }
}

export const bem = declorationBEM(Mode.REACT,"-","_");
