function fibonacci(num) {
  if (num <= 0) return "Input should be a positive integer";
    if (num === 1) return 0;
    if (num === 2) return 1;
    
    let a = 0, b = 1, temp;

    for (let i = 3; i <= num; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

module.exports = fibonacci;
