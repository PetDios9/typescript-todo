interface CardProps {
  content?: string;
}

function Card({ content } : CardProps) {
  return (
    <div className="card">
        <div className="text-container">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>{content}</p>
        </div>
        <div className="checkbox-container">
            <input type="checkbox" />
        </div>
    </div>
  )
}

export default Card