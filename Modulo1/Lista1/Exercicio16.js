let g = 0;
let i = 101;
let primo = false;

while (g < 50) {
    let primo = true;
    for (let j = 2; j <= g; j++) {
        if (i % j === 0) {
            primo = false;
            break;
        }
    }
    if (primo) {
        console.log(i);
        g++;
    }
    i++;
}