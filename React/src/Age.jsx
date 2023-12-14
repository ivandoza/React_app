export function Age({ age }) {
  return (
    <p>
    {age > 18 ? <p>Your age is {age}</p> : <p>You are very young!</p>}
    </p>
  )
}
