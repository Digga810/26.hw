var x = +prompt('Введите первое число');
var y = +prompt('Введите второе число');
var z = +prompt('Введите третье число');

if (x<y && y<z || x>y && y>z) {
    alert(y);
}
else if (x<z && z<y || x>z && z>y) {
    alert(z);
}
else if (y<x && x<z || y>x && x>z) {
    alert(x);
}
else{
    alert('Ошибка');
}