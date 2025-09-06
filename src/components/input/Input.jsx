

const Input = (
    {
        width = 340,
        height = 56,
        placeholder = "",
        borderColor = "#BEC0BF",
        borderWidth = 0.3,
        ...props
    }
) => {

    const inputStyle = {
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        border: `${borderWidth}px solid ${borderColor}`,
        padding: '0 16px',
        borderRadius: '4px',
        fontSize: '16px',
        boxSizing: 'border-box',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        outline: 'none', 
        transition: 'border 0.2s, box-shadow 0.2s',

    }

    return (
        <>
        <input
            type="text"
            style={inputStyle}
            placeholder={placeholder}
            {...props}
        />
        </>
    )
} 

export default Input