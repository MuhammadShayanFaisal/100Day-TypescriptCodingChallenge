function make_shirt(size, message) {
    if (size === void 0) { size = 10; }
    if (message === void 0) { message = "good quality"; }
    console.log("Please make the shirt to the size of", size, "with", message);
}
make_shirt();
make_shirt(12, "pant");
make_shirt(13, "extra one");
