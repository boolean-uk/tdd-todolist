describe(' Todo Functions', () => {
  describe('Create Todo', () => {
    it('if there is a valid string', () => {
      // GIVEN
      const str = 'Do laundry'
      // WHEN
      const item1 = {
        id: 1,
        description: 'Do laundry',
        completed: false
      }
      const result = createTodo(str)
      // THEN
      expect(result).toEqual(item1)
    })

    it('if there is not a valid string', () => {
      // GIVEN
      const str = ''
      // WHEN
      const result = createTodo(str)
      // THEN
      expect(result).toEqual(false)
    })
  })
})
