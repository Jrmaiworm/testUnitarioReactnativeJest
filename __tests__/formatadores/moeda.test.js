import { formataBrasileiroParaDecimal, formataDecimalParaReal } from "../../src/negocio/formatadores/moeda"

describe("negocio/formatadores/moeda", ()=>{

    describe("formataBrasileiroParaDecimal", () =>{
        //posso usar test ou it//
        it("deve retornar 8.59 quando o valor for '8,59'",()=>{
            const resultado = formataBrasileiroParaDecimal("8,59");

            expect(resultado).toBe(8.59);
         
        });
    });

    describe("formataDecimalParaReal",() => {
        it("deve retornar R$ 8,59 quando o valor for '8.59", ()=>{
            const resultado = formataDecimalParaReal(8.59);

            
            expect(resultado).toMatch(/R\$\s8,59/);
        });
    })
});


//alguns expect q podemos usar :
//toBe(): compara inteiros ou textos;
//toBeCloseTo(): compara pontos flutuantes obtidos através de operações matemáticas, pois, devido a arredondamentos, podem haver erros com toBe();
//toBeFalsy()/toBeTruthy(): compara valores falsos/verdadeiros em um contexto booleano. No caso de falsy, não apenas false será validado, mas valores como null, 0, '', undefined e NaN também. O restante dos valores é considerado truthy;
//toEqual(): compara objetos, verificando se as propriedades internas são iguais. Usar toBe() não retornará o mesmo resultado.

//algumas funcoes globais:
// describe('', () => {}): cria um contexto com uma descrição para todos os testes dentro da função;
// test('', () => {}): cria um teste com uma descrição que deve ser correspondida ao que o teste pretende testar.
// it('', () => {}): funciona exatamente igual ao test('', () => {}). É usado para começar a frase do teste, geralmente em inglês, onde a palavra it não precisa ser repetida. Exemplo: it('deve retornar verdadeiro') ou it('must return true');
// afterAll(() => {}): executa a função após todos os testes do seu contexto (arquivo ou describe) terminarem sua execução;
// beforeAll(() => {}): executa a função antes que todos os testes do seu contexto (arquivo ou describe) comecem sua execução;
// afterEach(() => {}): executa a função várias vezes, sempre que um teste do seu contexto (arquivo ou describe) terminarem sua execução;
// beforeEach(() => {}): executa a função várias vezes, sempre antes que um teste do seu contexto (arquivo ou describe) começar sua execução.