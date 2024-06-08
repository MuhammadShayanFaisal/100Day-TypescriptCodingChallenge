function Checkingnumber(any) {
    return isNaN(any);
}
console.log("The value written is not an number : ", Checkingnumber(23));
console.log("The value written is not an number : ", Checkingnumber(true));
console.log("The value written is not an number : ", Checkingnumber("hello"));
export {};
