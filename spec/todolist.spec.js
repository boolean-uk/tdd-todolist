const { create, get, setDone, getIncomplete } = require('../src/todolist.js')

create('This is a note')
create('This is a second note')
create('This is a third note')
create('This is a fourth note')
create('This is a fifth note')

describe('create', () => {
  it('add a new todo to the todo object with a unique id and incomplete status', () => {
    // Given
    const todo = 'This is some text that represents a note that has been added'
    // When
    const result = create(todo)

    // Then

    expect(result).toEqual({ id: 6, text: todo, status: 'incomplete' })
  })
})

describe('get', () => {
  it('Is going to return the array with objects (the todos)', () => {
    // When
    const result = get()

    // Then

    expect(result).toEqual([
      {
        id: 1,
        text: 'This is a note',
        status: 'incomplete'
      },
      {
        id: 2,
        text: 'This is a second note',
        status: 'incomplete'
      },
      {
        id: 3,
        text: 'This is a third note',
        status: 'incomplete'
      },
      {
        id: 4,
        text: 'This is a fourth note',
        status: 'incomplete'
      },
      {
        id: 5,
        text: 'This is a fifth note',
        status: 'incomplete'
      }
    ])
  })
})

// get()

// describe('setDone', () => {
//   it('Will identify the todo by id and change the status to complete', () => {
//     // Given
//     const id = 2

//     // When
//     const result = setDone(id)


//     // Then
//     expect(result).toEqual({
//       id: 2,
//       text: 'This is a second note',
//       status: 'complete'
//     })
//   })
// })

// describe('getIncomplete', () => {
//   it('Will return the array of objects that have an incomplete status only', () => {
//     // When
//     const result = getIncomplete()

//     // Then
//     expect(result).toEqual([
//       {
//         id: 1,
//         text: 'This is some text that represents a note that has been added',
//         status: 'incomplete'
//       },
//       {
//         id: 2,
//         text: 'This is a third note that has been added',
//         status: 'incomplete'
//       }
//     ])
//   })
// })
