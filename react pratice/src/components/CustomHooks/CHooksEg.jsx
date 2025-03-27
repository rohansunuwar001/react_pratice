import useFetch from "./UseFetch"



const CHooksEg = () => {

    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")
  return (
    <div>
      {
        data && data.map((item) => {
          return <p key={item.id}> {item.title} </p>
        }
        )
      }
    </div>
  )
}

export default CHooksEg
