<h1>To-do List</h1>

## Índice

- [Descrição do Projeto](#descrição-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [O Que Aprendi](#o-que-aprendi)
- [Desenvolvimento Contínuo](#desenvolvimento-contínuo)
- [Recursos Úteis](#recursos-úteis)
- [Autor](#autor)

## Descrição do Projeto 

Lista de tarefas diária que possibilita o usuário a listar suas atividades, marca-las como feitas e excluí-las. 

URL: https://to-do-list-nine-iota.vercel.app/

![image](https://user-images.githubusercontent.com/122060348/231527864-2b99e0ce-629e-4060-9c00-17b461325dd0.png)

## Tecnologias Utilizadas

`HTML`
`CSS`
`Javascript`


### O Que Aprendi

Na realização do projeto aprendi muitas coisas como: manipular o DOM de maneiras diferentes, criar conteúdos e estiliza-los direto pelo JS, inserir data, hora e configura-las, entre outras coisas. 

Segue exemplo, trechos dos códigos abaixo: 

JS
```js
   function addTask (task) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<input id="muda" type="checkbox" /><span id="span">${task}</span><button class="btn"></button>`
    list.appendChild(listItem);
}
```

```js
  function refreshTime() {
  var dateString = new Date().toLocaleString("pt-br", option);
  var formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}
}
```

### Desenvolvimento Contínuo

Para os próximos projetos irei desenvolver mais o JS.

### Recursos Úteis

- [Artigo Data JS](https://www.delftstack.com/pt/howto/javascript/javascript-get-current-date/) - Este artigo me ajudou a incluir data em tempo real no JS.

## Autor

- Linkedin - [Ana Carolina Bianchini](https://www.linkedin.com/in/ana-carolina-bianchini-desenvolvedora-front-end/)

