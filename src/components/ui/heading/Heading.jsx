import cl from "./heading.module.css"

const Heading = ({text}) => {


    return (
        <>
        <p className={cl.heading}>
        {text}
        </p>
        </>
    )
} 

export default Heading