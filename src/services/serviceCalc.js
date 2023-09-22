class ServicoCalculadora {
    Soma(numA, numB) {

        if (isNaN(numA) || isNaN(numB)) {
            throw new Error("asd")
        };

        return numA + numB;

    }

    Sub(numA, numB) {

        if (isNaN(numA) || isNaN(numB)) {
            throw new Error("asd")
        };

        return numA - numB;

    }

    Mult(numA, numB) {

        if (isNaN(numA) || isNaN(numB)) {
            throw new Error("asd")
        };

        return numA * numB;

    }

    Div(numA, numB) {

        if (isNaN(numA) || isNaN(numB)) {
            throw new Error("asd")
        };

        return numA / numB;

    }

    Expo(numA, numB) {

        if (isNaN(numA) || isNaN(numB)) {
            throw new Error("asd")
        };

        return numA ** numB;

    }

    Raiz(numA, numB) {

        if (isNaN(numA) || isNaN(numB)) {
            throw new Error("asd")
        };

        return numA ** (1/numB);

    }



}

module.exports = ServicoCalculadora