var triangleSide1 = 9;
var triangleSide2 = 8;
var triangleSide3 = 9;

if (triangleSide1 == triangleSide2 && triangleSide2 != triangleSide3){
    console.log('The triangle is triangle is Isosceles.')
}
else if (triangleSide2 != triangleSide3 && triangleSide3 == triangleSide1){
    console.log('The triangle is triangle is Isosceles.')
}
else if (triangleSide3 != triangleSide1 && triangleSide1 == triangleSide2){
    console.log('The triangle is triangle is Isosceles.')
}
else {
    console.log('The triangle is not triangle is Isosceles.')
}