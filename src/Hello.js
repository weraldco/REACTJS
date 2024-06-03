
function Hello() {

    const handleClick = () => {
        console.log('clicked')
    }

    return <>
        <button onClick={handleClick}>Button</button>
    </>
}

export default Hello;