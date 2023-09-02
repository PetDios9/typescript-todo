import { useSelector } from "react-redux"
import Card from "./ui/Card"
import { RootState } from "../redux/todoStore"

function CardContainer() {
const todoList = useSelector((state: RootState) => state)


  return (
    <div className="card-container">
        {
            todoList.todo.map((todo) => {
                return <Card key={todo.id} id={todo.id} description={todo.description} completed={todo.completed} />
            })
        }
    </div>
  )
}

export default CardContainer