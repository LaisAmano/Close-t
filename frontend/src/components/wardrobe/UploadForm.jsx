/*
  UploadForm.jsx

  Objetivo deste componente:
  Permitir que o usuário escolha uma imagem do computador, envie para
  o backend (rota /items/remove-background) e veja o resultado
  (imagem com fundo removido) na tela.

  ------------------------------------------------------------------
  COMO USAR ESTE ARQUIVO:
  Cada bloco "// TODO" é uma parte que você vai escrever.
  Os comentários explicam O QUE a linha/bloco deve fazer — você decide O COMO.
  Não apague os comentários ainda; eles são o seu guia.
  ------------------------------------------------------------------
*/

import { useState } from "react";
import axios from "axios";

function UploadForm() {

  // TODO 1: Crie um estado para guardar o ARQUIVO selecionado pelo usuário.
  // Valor inicial: null (nenhum arquivo selecionado ainda)
  // Dica: useState retorna [valor, funçãoParaAtualizar]


  // TODO 2: Crie um estado para guardar a URL/imagem RESULTADO
  // (a imagem que volta do backend, sem fundo).
  // Valor inicial: null


  // TODO 3: Crie um estado booleano para indicar se a requisição
  // está "carregando" (loading). Valor inicial: false


  // TODO 4: Crie um estado para guardar uma mensagem de ERRO, caso algo dê errado.
  // Valor inicial: null


  /*
    TODO 5: Função handleFileChange(event)

    Quando o usuário escolhe um arquivo no <input type="file">,
    o React dispara um evento. Você precisa:

    a) Pegar o arquivo escolhido (event.target.files[0])
    b) Salvar esse arquivo no estado criado no TODO 1
    c) Limpar qualquer resultado anterior (estado do TODO 2) e
       qualquer erro anterior (estado do TODO 4) — porque o usuário
       está começando um novo upload
  */


  /*
    TODO 6: Função handleUpload() — async

    Esta é a função principal. Ela deve:

    a) Verificar se existe um arquivo selecionado (estado do TODO 1).
       Se não existir, define uma mensagem de erro e PARA (return).

    b) Ativar o estado de loading (TODO 3) = true

    c) Criar um objeto FormData e adicionar o arquivo nele.
       Dica: const formData = new FormData()
             formData.append("file", arquivo)
             ("file" precisa ser exatamente esse nome — é o que a
              rota do backend espera, veja routes/items.py)

    d) Fazer a requisição POST com axios para:
       http://localhost:8000/items/remove-background

       IMPORTANTE: a resposta vem como um arquivo binário (imagem),
       não como JSON. Para o axios entender isso, você precisa
       passar uma opção extra na configuração da requisição:
       { responseType: "blob" }

    e) Transformar a resposta (blob) em uma URL que o navegador
       consegue exibir numa <img>.
       Dica: URL.createObjectURL(response.data)

    f) Salvar essa URL no estado do TODO 2 (resultado)

    g) Em caso de erro (try/catch), salvar uma mensagem no estado
       do TODO 4

    h) No final (bloco finally), desativar o loading (TODO 3 = false)
  */


  return (
    <div className="flex flex-col items-center gap-4 p-6">

      {/*
        TODO 7: Input de arquivo

        - type="file"
        - accept="image/*"  (só permite imagens no seletor)
        - onChange={...}    (chama a função do TODO 5)
      */}


      {/*
        TODO 8: Botão "Remover fundo"

        - onClick chama a função do TODO 6
        - texto do botão muda conforme o estado de loading
          (ex: "Processando..." vs "Remover fundo")
        - pode ficar desabilitado (disabled) enquanto loading=true
      */}


      {/*
        TODO 9: Exibir mensagem de erro, SE existir
        (renderização condicional — algo como: {erro && <p>...</p>})
      */}


      {/*
        TODO 10: Exibir a imagem resultado, SE existir
        <img src={resultado} alt="Peça sem fundo" />
      */}

    </div>
  );
}

export default UploadForm;