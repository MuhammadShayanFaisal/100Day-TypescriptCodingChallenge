function skipnumber5() {
    for (let i = 0; i < 10; i++) {
        if (i == 4)
            continue;
        else
            console.log("Number: ", i + 1);
    }
}
skipnumber5();
export {};
