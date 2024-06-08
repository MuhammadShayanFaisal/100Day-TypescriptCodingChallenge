function countdownto5() {
    let count = 10;
    while (count >= 0) {
        if (count == 5)
            break;
        else {
            console.log(count);
            count--;
        }
    }
}
countdownto5();
export {};
