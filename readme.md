(node +16)

npm init adonis-ts-app <nome-aplicacao>

node ace serve --watch (inicia o server)

---Instala o lucid para o mysql:

npm i @adonisjs/lucid@alpha

--- Configurar lucid

node ace invoke @adonisjs/lucid

-- Quando terminar de configurar o banco, no Env.ts:

  MYSQL_HOST: Env.schema.string({ format: 'host' }),
  MYSQL_PORT: Env.schema.number(),
  MYSQL_USER: Env.schema.string(),
  MYSQL_PASSWORD: Env.schema.string.optional(),
  MYSQL_DB_NAME: Env.schema.string(),

--Criar migration

node ace make:migration <nome_migration>
node ace migration:run

--Criar model

node ace make:model User


--Criar controller

node ace make:controller UserController -r





