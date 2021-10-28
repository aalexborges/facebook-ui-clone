import capitalize from '../../utils/capitalize'

it('must capitalize the first letter of the sentence', () => {
  expect(capitalize('this is a test', true)).toEqual('This is a test')
})

it('must capitalize the first letter of each word', () => {
  expect(capitalize('this is a test')).toEqual('This Is A Test')
})
