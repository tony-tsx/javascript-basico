var array = Array( 10 )

var users = [
  { name: 'Lorem', age: 18 },
  { name: 'Alan', age: 26 },
  { name: 'Daniel', age: 30 },
  { name: 'Augusto', age: 24 },
  { name: 'Laura', age: 38 },
]

array.fill( null )

array[0] = undefined

array[3] = Symbol( 'description' )

array[8] = 'some text'

// array.forEach( ( item, index, array ) => {
//   console.log( "[" + index + "]: " + String( item ) )
// } )

const newArray = array.map( ( item, index, _ ) => {
  return index + 1
} )

const usersWithId = users.map( ( user, index ) => Object.assign( {}, user, { id: index + 1 } ) )

console.log(
  usersWithId,
  users
)

array.filter( ( item, index, array ) => false )

array.find( ( item, index, array ) => true )

// array.reduce( ( item, index, array ) => {}, {} )

// array.reduceRight( ( item, index, array ) => {}, {} )
