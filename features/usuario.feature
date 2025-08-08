Feature: Gerenciar usuários na API Serverest

  Scenario: Deletar usuário existente e cadastrar novamente
    Given que o usuário com email "teste01@qa.com.br" pode existir
    When eu busco o usuário pelo email "teste01@qa.com.br"
    And se o usuário existir, eu deleto pelo _id
    Then eu cadastro um novo usuário com o email "teste01@qa.com.br"
    And a API deve retornar sucesso no cadastro