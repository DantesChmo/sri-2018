interface ModifierValueTypeIsObject{
    [key: string]: string|boolean;
}
interface TypeOfModificationForDeclorationBEM {
    [key: string]: ModifierValueTypeIsObject|string;
}

enum Mode {
    STANDART,
    REACT
}

function nameFormat(string: string): string {
    let result = '';
    let lastChar = '';
    for (const char of string) {
        if (lastChar === ' ' || lastChar === '-' || lastChar === '') {
            result += char.toUpperCase();
        } else {
            result += char.toLowerCase();
        }
        lastChar = char;
    }

    return result;
}

function checkValue(obj: ModifierValueTypeIsObject, modSeparator: string, currentKey: string): string {
    let result: string;
    if (typeof (obj[currentKey]) === 'boolean' && obj[currentKey] === true) {
        result = modSeparator + currentKey;
    } else {
        result = modSeparator + currentKey + modSeparator + obj[currentKey];
    }
    return result;
}

function declorationBEM(mode: Mode, elemSeparator: string, modSeparator: string) {
    return function bemGenerator(block: string, elem = '', mod?: TypeOfModificationForDeclorationBEM|ModifierValueTypeIsObject) {
        block = block.toLowerCase();
        elem = elem.toLowerCase();
        let result = '';
        let blockModifier = '';
        let elemModifier = '';

        result += block;
        if (elem !== '') {
            result += ` ${elem + elemSeparator + block}`;
        }
        if (mod !== undefined && !Array.isArray(mod)) {
            Object.keys(mod).forEach((modKeys) => {
                const modValue: any = mod[modKeys];
                if (typeof (modValue) === 'object') {
                    Object.keys(modValue).forEach((keyOfModValue) => {
                        if (modKeys.toLowerCase() === block) {
                            const blockModifierAdditive: string = ` ${modKeys + checkValue(modValue, modSeparator, keyOfModValue)}`.toLowerCase();
                            if (blockModifier.match(blockModifierAdditive) === null) {
                                blockModifier += blockModifierAdditive;
                            }
                        } else if (modKeys.toLowerCase() === elem) {
                            const elemModifierAdditive: string = ` ${modKeys + elemSeparator + block + checkValue(modValue, modSeparator, keyOfModValue)}`.toLowerCase();

                            if (elemModifier.match(elemModifierAdditive) === null) {
                                elemModifier += elemModifierAdditive;
                            }
                        }
                    });
                } else {
                    const defaultObject: any = mod;
                    result += ` ${block + checkValue(defaultObject, modSeparator, modKeys)}`;
                }
            });
        }
        return nameFormat(result + blockModifier + elemModifier);
    };
}

export const bem = declorationBEM(Mode.REACT, '-', '_');
