import Title from "./title" 


function Novo(){
    return(
        <div className = "centro">
           
           <Title/>


            <div className="outro">
            <p className="texto"> 01/06/2022 08:13 </p>
                 <p>NOTA À COMUNIDADE:
                     Bloqueio de orçamento da Educação
                  </p>

            
             </div>

             <div className="outro">
             <p className="texto"> 31/05/2022 12:35 </p>
                  <p>IFRO publica edital para Cadastro de Interesse de Remoção
                  </p>
                
             </div>

             <div className="outro">
             <p className="texto"> 30/05/2022 09:54 </p>
                  <p>Parceria entre IFRO e UAB irá ampliar a oferta de cursos de pós-graduação e de Pedagogia
                  </p>
                
             </div>

             <div className="outro">
             <p className="texto"> 25/05/2022 15:10 </p>
                  <p>Manutenção do Sistema SUAP acontece nesta sexta-feira (27) 
                  </p>
                
             </div>

             <div className="outro">
             <p className="texto"> 25/05/2022 07:44 </p>
                  <p>Pais e responsáveis por alunos podem ter acesso a informações estudantis pelo App IFRO Mobile
                  </p>
                
             </div>

             <button className="button"> 🔍 Mais Notícias</button>

        </div>
    )
}
export default Novo;