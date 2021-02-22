import React from 'react';

import { Footersection } from './styles';
import Logo from '../../assets/img/newding.png'; 

function Footer() {
  return <>
    <Footersection>
      <div>
        <h3>INSTITUCIONAL</h3>
        <p>Como Comprar <br/>
           Quem somos   <br/>
           Meu Cadastro <br/>
           Meus Pedidos <br/>
           Trocas e Devoluções <br/>
           Pagamentos <br/>
           Envios e prazos <br/>
           Políticas de Privacidade <br/>
        </p>
      </div>
      
      <div>
        <h3>CENTRAL DE ATENDIMENTO</h3>
        <p>Atendimento <br/>
           Segunda á Sexta das 08:00 ás 12:00 e das <br/>
           13:30 ás 18:00 (exceto Sáb, Dom e Feriados) <br/>
        </p>

        <p>  Email <br/>
           sac@adegadodindigo.com.br <br/>
           compras@adegadodindigo.com.br <br/>
        </p>   
        
        <p>
           SAC <br/>
           Sorocaba e <br/>
           (15) 99820-4926 <br/>
           (15) 99820-4320 <br/>
        </p>
      </div>

      <div>
        <h3>FORMAS DE PAGAMENTO</h3>
        <img src="https://www.outdoorshopp.com.br/arquivos/mb-footer-pagamento.png?v=637268935701900000" alt=""/>
        <h3>COMPRAS 100% SEGURAS</h3>
        <img src="https://outdoorshopp.vteximg.com.br/arquivos/mb-footer-selos.png?v=637378710732800000" alt=""/>
      </div>   
      
      <div>
        <h3>SIGA-NOS</h3>
        <img src={Logo} alt=""/>
      </div>    
    </Footersection>    
  </>;
}

export default Footer;