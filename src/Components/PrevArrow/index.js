
function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
            style={{ ...style, display:" flex", justifyContent: "center", alignItems: "center", padding: "4px", background: '#fff', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer' }}
        >

        </div>
    )
}

export default PrevArrow