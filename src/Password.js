const ValidPassword = () => <h1>Valid Password</h1>
const InvalidPassword = () => <h1>Invalid Password</h1>

function Password({isValid}) {

    if(isValid) {
         return <ValidPassword />;
    } else {
        return <InvalidPassword/>;
    }
    
}

export default Password