import cl from "./button.module.css"

const Button = ({width, height, text}) => {


    return (
        <>
        <button className={cl.btn} style={{width:width, height:height}}>
        {text}
        </button>
        </>
    )
} 

export default Button