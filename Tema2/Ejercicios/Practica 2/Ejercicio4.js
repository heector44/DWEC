let num = parseInt("Dime el número de un mes");
switch (num) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert(`El mes ${num} tiene 31 días`);
    break;
  case 4:
  case 6:
  case 9:
    alert(`El mes ${num} tiene 30 días`);
    break;
  case 2:
    alert(
      `El mes ${num} tiene 28 días o 29 dependiendo si el año es bisiesto o no`
    );
    break;
}
