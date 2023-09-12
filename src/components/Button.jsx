function Button({color, name}) {
    return (
        <button className={`border w-40 h-10 ${color}`}>
            {name}
        </button>
    )
}

export default Button