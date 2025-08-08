import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber'
import { expect, APIRequestContext, APIResponse, request } from '@playwright/test'

setDefaultTimeout(60 * 1000)

let requestContext: APIRequestContext 
let userId: string | null = null
let postResponse: APIResponse
const baseUrl = 'https://serverest.dev'

Given('que o usuário com email {string} pode existir', async (email: string) => {
  console.log(`Dado que o usuário com email "${email}" pode existir`)
  requestContext = await request.newContext({
    baseURL: baseUrl,
    extraHTTPHeaders: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  userId = null

})

When('eu busco o usuário pelo email {string}', async (email: string) => {
  console.log(`Quando eu busco o usuário pelo email`)
  const response = await requestContext.get(`/usuarios?email=${encodeURIComponent(email)}`)
  expect(response.status()).toBe(200)
  const body = await response.json()
  if (body.usuarios && body.usuarios.length > 0) {
    userId = body.usuarios[0]._id
  }
})

When('se o usuário existir, eu deleto pelo _id', async () => {
  console.log(`E se o usuário existir, eu deleto pelo _id`)
  if (userId) {
    const response = await requestContext.delete(`/usuarios/${userId}`)
    expect([200, 204]).toContain(response.status())
  }
})

Then('eu cadastro um novo usuário com o email {string}', async (email: string) => {
  console.log(`Então eu cadastro um novo usuário com o email`)
  postResponse = await requestContext.post('/usuarios', {
    data: {
      nome: 'Fulano da Silva',
      email,
      password: 'teste',
      administrador: 'true',
    },
  })
})

Then('a API deve retornar sucesso no cadastro', async () => {
  console.log(`E a API deve retornar sucesso no cadastro`)
  expect(postResponse.status()).toBe(201)
  const body = await postResponse.json()
  expect(body).toHaveProperty('message', 'Cadastro realizado com sucesso')
})
