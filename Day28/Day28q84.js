function replacejavascriptwithtypescript(str) {
    return str.replace(/Javascript/g, "Typescript");
}
let sentence = "I love Javascript,as Javascript has became popular language";
let str = replacejavascriptwithtypescript(sentence);
console.log("The new text with replaced Javascript with Typescipt is:", str);
export {};
