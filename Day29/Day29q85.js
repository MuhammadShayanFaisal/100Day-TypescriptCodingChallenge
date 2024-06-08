function loactionofsubstring(str) {
    let count = str.indexOf("code");
    if (count != 0)
        return count;
    else
        return -1;
}
console.log(loactionofsubstring("Hello everyone, I code many questions"));
export {};
