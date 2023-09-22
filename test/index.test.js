const { describe, expect, it } = require("@jest/globals");
const ServicoCalculadora = require("../src/services/serviceCalc");

describe("Teste Calculadora", () => {
  const servico = new ServicoCalculadora();

  it("Should sum two numbers", () => {
    const result = servico.Soma(1, 2);

    expect(result).toBe(3);
  });

  it("Should sum two numbers", () => {
    const result = servico.Soma(1, -2);

    expect(result).toBe(-1);
  });

  it("Should sum two numbers", () => {
    const result = servico.Soma(s, 2);

    expect(result).toBe("asd");
  });

  it("Should error", () => {
    const result = () => servico.Somar(1, "a");
    console.log("AQUIIIII");

    expect(result).toThrowError("Favor informar números");
  });


  it("Should sum two numbers", () => {
    const result = servico.Sub(1, 2);

    expect(result).toBe(-1);
  });

  it("Should sum two numbers", () => {
    const result = servico.Sub(1, -2);

    expect(result).toBe(3);
  });

  it("Should sum two numbers", () => {
    const result = servico.Sub(s, 2);

    expect(result).toBe("asd");
  });


  it("Should sum two numbers", () => {
    const result = servico.Mult(1, 2);

    expect(result).toBe(2);
  });

  it("Should sum two numbers", () => {
    const result = servico.Mult(6, 2);

    expect(result).toBe(12);
  });

  it("Should sum two numbers", () => {
    const result = servico.Mult(s, 2);

    expect(result).toBe("asd");
  });


  it("Should sum two numbers", () => {
    const result = servico.Div(2, 2);

    expect(result).toBe(1);
  });

  it("Should sum two numbers", () => {
    const result = servico.Div(6, 2);

    expect(result).toBe(3);
  });

  it("Should sum two numbers", () => {
    const result = servico.Div(s, 2);

    expect(result).toBe("asd");
  });


  it("Should sum two numbers", () => {
    const result = servico.Expo(2, 2);

    expect(result).toBe(4);
  });

  it("Should sum two numbers", () => {
    const result = servico.Expo(6, 2);

    expect(result).toBe(36);
  });

  it("Should sum two numbers", () => {
    const result = servico.Expo(s, 2);

    expect(result).toBe("asd");
  });

  it("Should sum two numbers", () => {
    const result = servico.Raiz(4, 2);

    expect(result).toBe(2);
  });

  it("Should sum two numbers", () => {
    const result = servico.Raiz(121, 2);

    expect(result).toBe(11);
  });

  it("Should sum two numbers", () => {
    const result = servico.Raiz(s, 2);

    expect(result).toBe("asd");
  });
 
});

