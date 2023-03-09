import { formataMaiorLanceDoLeilao } from "../../src/negocio/formatadores/lance";

describe("negocio/formatadores/lance",()=>{

  describe("formataMaiorLanceDoLeilao", ()=>{
     it("deve retornar o maior lance do leilao",()=>{
        const lances = [
            {
                valor:10,
            },
            {
                valor:11,
            },
            {
                valor:20,
            },
        ];
        const valorInicial = 5;
        const maiorLance = formataMaiorLanceDoLeilao(lances, valorInicial);
        expect(maiorLance).toBe(20);
     });
     it('deve retornar o valor inicial caso nao existir lances', ()=>{
        const lances = [];
        valorInicial = 5;
        const maiorLance = formataMaiorLanceDoLeilao(lances, valorInicial);
        expect(maiorLance).toBe(5);

     }
     );
  })

})