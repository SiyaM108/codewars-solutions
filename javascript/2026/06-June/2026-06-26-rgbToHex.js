function rgb(r, g, b) {
    // check validity of input:
    let firstElement, secondElement, thirdElement;
    if (r > 255) {
        firstElement = 255;
    } else if (r < 0) {
        firstElement = 0;
    } else {
        firstElement = r;
    }

    if (g > 255) {
        secondElement = 255;
    } else if (g < 0) {
        secondElement = 0;
    } else {
        secondElement = g;
    }

    if (b > 255) {
        thirdElement = 255;
    } else if (b < 0) {
        thirdElement = 0;
    } else {
         thirdElement = b;
    }

    // conversion:
    firstElement = firstElement.toString(16);
    secondElement = secondElement.toString(16);
    thirdElement = thirdElement.toString(16);

    // ensure 6 characters
    if (firstElement.length === 1) {
        firstElement = '0' + firstElement;
    }
    if (secondElement.length === 1) {
        secondElement = '0' + secondElement;
    }
    if (thirdElement.length === 1) {
        thirdElement = '0' + thirdElement;
    }

    return (firstElement + secondElement + thirdElement).toUpperCase();
}
