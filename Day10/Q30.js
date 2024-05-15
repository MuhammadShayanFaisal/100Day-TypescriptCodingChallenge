// Supposing 5 members with admins in it
var i;
var array = ["Member", "Admin", "Member", "Admin", "Member"];
for (i = 0; i < 5; i++) {
    if (array[i] == "Admin")
        console.log("Hello Admin");
    else
        console.log("Hello Members");
}
