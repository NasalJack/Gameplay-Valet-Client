const store = {
  games: [
    {
      id: 1,
      title: 'Example 1',
      rules: 'rules here',
      quickRules: 'quick rules here',
      tips: 'tips here',
      rating: '5',
      description: 'short description here',
      longDescription: 'there is a lot more information about the game contained here',
      img: 'link to an image here',
      genres: ['a', 'b', 'c']
    },
    {
      id: 2,
      title: 'Example 2',
      rules: 'rules here',
      quickRules: 'quick rules here',
      tips: 'tips here',
      rating: '2',
      description: 'short description here',
      longDescription: 'there is a lot more information about the game contained here',
      img: 'link to an image here',
      genres: ['a', 'd', 'f']
    },
    {
      id: 3,
      title: 'Example 3',
      rules: 'rules here',
      quickRules: 'quick rules here',
      tips: 'tips here',
      rating: '4',
      description: 'short description here',
      longDescription: 'there is a lot more information about the game contained here',
      img: 'link to an image here',
      genres: ['d', 'b', 'e']
    }
  ],
  notes: [
    {id: 1, expanded: false, name: 'something', info: 'more information is contained here'},
    {id: 2, expanded: true, name: 'confusion', info: 'this game is too confusing and I dont understand it'}
  ]
}

export default store