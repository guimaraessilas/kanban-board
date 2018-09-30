import React from 'react'
import Board from 'react-trello'

export default class App extends React.Component {

  render() {
    const data = {
      lanes: [
        {
          id: 'lane1',
          title: 'Fazer',
          cards: [
            { id: 'Card1', title: 'Criar um kanbancom reactjs', description: 'Utilizar package react-trello', tags:[{title: 'Desenvolvimento'} ]},
            { id: 'Card2', title: 'Publicar isso no github', description: 'https://github.com/guimaraessilas', tags:[{title: 'Versionamento'} ]}
          ]
        },
        {
          id: 'lane2',
          title: 'Fazendo',
          cards: []
        },
        {
          id: 'lane3',
          title: 'Feito',
          cards: []
        }
      ]
    }
    return <Board data={data} draggable tagStyle={{ fontSize: "80%" }} />
  }
}