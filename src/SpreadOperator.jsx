import React,{useState} from 'react'

const SpreadOperator = () => {
  const biodata = [1, 'name']
  var sgame = ['dfvg', 'gfj', 'fh']
  var rgame = ['dfvgi', 'gfji', 'fhi']

  // first usecase is to access all the elements of an array
  var games = [...sgame, 'many game', ...rgame]
  console.log('elements of games are', games)

  // second usecase is array destucturing

  var shootgames = ['cod', 'cs', 'street fighter']
  var [first, ...remaining] = shootgames
  console.log('elements of first are', first)
  console.log('elements of remaining are', remaining)

  //  third usecase is obj destructuring
  const fullName = {
    fname: 'abd',
    lname: 'ul',

  }
  const bio = {
    id: 1,
    age: 20,
    ...fullName,
    gender: 'male'

  }

  console.log('bio after OBJ DESTRUCTURING IS', bio)

  return (
    <div>

    </div>
  )
}

export default SpreadOperator;