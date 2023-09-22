const ServicoCalculadora = require("../services/serviceCalc");

const calculadora = new ServicoCalculadora();

class Calculadora {
  Soma(req, res) {
    try {
      const result = calculadora.Soma(req.body.numA, req.body.numB);

      res.json({ message: `Soma: ${result}` });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  Sub(req, res) {
    try {
      const result = calculadora.Sub(req.body.numA, req.body.numB);

      res.json({ message: `Sub: ${result}` });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  Mult(req, res) {
    try {
      const result = calculadora.Mult(req.body.numA, req.body.numB);

      res.json({ message: `Mul: ${result}` });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  Div(req, res) {
    try {
      const result = calculadora.Div(req.body.numA, req.body.numB);

      res.json({ message: `Div: ${result}` });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  Div(req, res) {
    try {
      const result = calculadora.Div(req.body.numA, req.body.numB);

      res.json({ message: `Div: ${result}` });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  Expo(req, res) {
    try {
      const result = calculadora.Expo(req.body.numA, req.body.numB);

      res.json({ message: `Div: ${result}` });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  Raiz(req, res) {
    try {
      const result = calculadora.Raiz(req.body.numA, req.body.numB);

      res.json({ message: `Div: ${result}` });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

}

module.exports = Calculadora;
