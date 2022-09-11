const AdminLogin = () => {

    const handleLogin = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (token) {
            alert("You are not logged in.")
        }
        else {
            const user = {
                'email': e.target.email.value,
                'password': e.target.password.value
            }
            const url = "https://backend-ecell.herokuapp.com/login?include_auth_token"
            const init_ob = {
                method: "POST",
                mode: "cors",
                headers: {
                    'Content-Type': "application/json",
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(user)
            }
            const res = await fetch(url, init_ob);
            if (res && res.ok) {
                const data = await res.json()
                const auth_token = data.response.user.authentication_token
                localStorage.setItem('token', auth_token)
                alert("Successfully Logged In.")
            }
        }
    }

    return (
        <>
            <form action="" onSubmit={handleLogin}>
                <input type="email" name="email" required />
                <input type="password" name="password" required />
                <button type="submit">Login</button>
            </form>
        </>
    );
}

export default AdminLogin;