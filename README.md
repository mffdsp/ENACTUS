# Instruções de uso



## Adicionar novo produto à API:

A adição de novo produto é realizada utilizando o corpo da requisição com método POST em http://localhost:3333/products/, implementado em <a href=https://github.com/mffdsp/ENACTUS/blob/master/public/routes/productRouter.js>aqui</a>.

## Recebendo produtos da API:

Para retornar informações de algum produto é preciso utilizar o método GET em http://localhost:3333/products/:productId, ou http://localhost:3333/products/ para retornar a lista de todos os produtos cadastrados, implementado em <a href=https://github.com/mffdsp/ENACTUS/blob/master/public/routes/productRouter.js>aqui</a>.

## Deletar produtos da API:

Para retirar algum produto da lista é preciso utilizar o método DELETE em http://localhost:3333/products/:productId para deletar algum produto em específico ou http://localhost:3333/products/ para deletar todos os produtos, implementado em <a href=https://github.com/mffdsp/ENACTUS/blob/master/public/routes/productRouter.js>aqui</a>.

## Editando produto da API:

A edição de produto é realizada utilizando o método PUT em http://localhost:3333/products/:productId, implementado em <a href=https://github.com/mffdsp/ENACTUS/blob/master/public/routes/productRouter.js>aqui</a>.

## Tratamento de imagens:

As informações de imagem estão presentes na pasta pública http://localhost:3333/uploads/exemplo.png

ps. O Projeto deve, preferencialmente, ser testado em servidor local. Porém, relacionei esse deploy a um link no heroku que também serve de teste. http://enactus-mffdsp.herokuapp.com/products

Modelo do Produto
```javascript
 ProductSchema = ({  
    name: {
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    }
    }, {
    timestamps: true,
    }
```

# Tecnologias utilizadas:

* NodeJs
* Express
* MongoDB
* Multer

E-mail para contato: <a href="mffsp@ic.ufal.br">mffsp@ic.ufal.br</a>
