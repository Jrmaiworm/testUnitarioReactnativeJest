import { obtemLeiloes, obtemLeilao } from '../../src/repositorio/leilao';
import apiLeiloes from "../../src/servicos/apiLeiloes";

jest.mock('../../src/servicos/apiLeiloes');
const mockLeiloes =[

    {
        id: 1,
        nome: "Leilao",
        descricao: "Descricao dos leiloes"
    }
];

const mockRequisicao = (retorno)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
                data:retorno
            })
        })
    },200)
}

const mockRequisicaoErro = (retorno)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject();
        },200)
    })
}

describe('repositorio/leilao', ()=>{
    describe("obtemLeiloes", ()=>{
     //beforeEach eh uma funcao que roda antes de cada teste
        beforeEach(()=>{
            apiLeiloes.get.mockClear();
            //metodo limpa as chamadas
        })
    

        it('deve retorna uma lista vazia quanto houver falha na requisicao', async()=>{
            apiLeiloes.get.mockImplementation(()=> mockRequisicaoErro())
            const leiloes = await obtemLeiloes();
          expect(leiloes).toEqual([]);
          //usamos toEqual para objetos

          expect(apiLeiloes.get).toHaveBeenCalledWith('/leiloes');
          //verifica se o metodo foi chamado com a rota

          expect(apiLeiloes.get).toHaveBeenCalledTimes(1);
           //verifica se o metodo foi chamado quantas vezes

        });
        it('deve retorna uma lista de leiloes', async()=>{
            apiLeiloes.get.mockImplementation(()=> mockRequisicao(mockLeiloes))
            const leiloes = await obtemLeiloes();
          expect(leiloes).toEqual(mockLeiloes);
           //usamos toEqual para objetos

          expect(apiLeiloes.get).toHaveBeenCalledWith('/leiloes');
          //verifica se o metodo foi chamado com a rota

          expect(apiLeiloes.get).toHaveBeenCalledTimes(1);
           //verifica se o metodo foi chamado quantas vezes
         
        });
    });

    describe('obtemLeilao', () => {
        it('deve retornar um leilão', async () => {
          apiLeiloes.get.mockImplementation(() => mockRequisicao(mockLeiloes[0]));
    
          const leilao = await obtemLeilao(1);
          expect(leilao).toEqual(mockLeiloes[0]);
        });
    
        it('deve retornar um objeto vazio caso erro na requisição', async () => {
          apiLeiloes.get.mockImplementation(() => mockRequisicaoErro());
    
          const leilao = await obtemLeilao(1);
          expect(leilao).toEqual({});
        });
      });
    });
