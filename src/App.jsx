import { useState } from "react";
import {MainStyle, DivFuncional, Copo} from "./style"
export default function App() {
  //estado para controlar o café selecionado:
  const [copoSelecionado, setCompoSelecionado] = useState(
    "https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/laranja2x.png?raw=true"
  );
  const [corDeFundo, setCorDeFundo] = useState(
    "https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/Ellipse%202.png?raw=true"
  );

  const trocandoCopo = (imagemCopo,imagemFundo) => {
    setCompoSelecionado(imagemCopo);
    setCorDeFundo(imagemFundo);
  }
  //
  return (
    <MainStyle>
      <section>
        <h2>Mais que Café</h2>
        <h2>
          Isso é <span>Starbucks</span>
        </h2>
        <p>
          A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
          dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
          Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas
          quentes e frias, doces diferenciados e sanduíches.
        </p>
        <button>SAIBA MAIS</button>
        <div>
          <img
            src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/amarelo.png?raw=true"
            alt=""
            onClick={() =>
              trocandoCopo(
                "https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/amarelo2x.png?raw=true",
                "https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/Ellipse%201.png?raw=true"
              )
            }
          />
          <img
            src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/laranja.png?raw=true"
            alt=""
            onClick={() =>
              trocandoCopo(
                "https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/laranja2x.png?raw=true",
                "https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/Ellipse%202.png?raw=true"
              )
            }
          />
          <img
            src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/vermelho.png?raw=true"
            alt=""
            onClick={() =>
              trocandoCopo(
                "https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/vermelho2x.png?raw=true",
                "https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/vermelhoElipse.png?raw=true"
              )
            }
          />
        </div>
      </section>

      <DivFuncional>
        <Copo src={copoSelecionado} alt="" />
        <img src={corDeFundo} alt="" />
      </DivFuncional>
    </MainStyle>
  );
}
