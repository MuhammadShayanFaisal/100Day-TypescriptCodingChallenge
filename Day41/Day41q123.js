function vowel(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            console.log("Vowel found at this", i + 1, "position");
            break;
        }
    }
}
vowel("shayan"); //supposing lowercase letters
export {};
