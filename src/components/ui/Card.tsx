interface CardProps {
  id: string,
  description: string;
}

function Card({ description, id } : CardProps) {
  return (
    <div className="card">
        <div className="text-container" key={id}>
            <p>{description}</p>
        </div>
        <div className="checkbox-container">
            <input type="checkbox" />
        </div>
    </div>
  )
}

export default Card