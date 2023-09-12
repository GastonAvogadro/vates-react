function Formulario(props) {
    console.log(props.children);

    return (
        <div className="bg-[#ededed] h-[400px] w-[500px] py-10 flex flex-col justify-between items-center">
            {props.children}
        </div>
    )
}

export default Formulario