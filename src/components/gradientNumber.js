const GradientNumber = ({ number }) => {
    return (
        <h1
            className="text-transparent bg-clip-text text-[90px] font-bold"
            style={{
                backgroundImage: "linear-gradient(to bottom, #E3A008 40%, rgba(227, 160, 8, 0) 75%)",
            }}
        >
            {number}
        </h1>
    )
}

export default GradientNumber;