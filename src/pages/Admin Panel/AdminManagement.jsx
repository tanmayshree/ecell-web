import TestimonialEntryData from "./TestimonialEntryData";

const AdminManagement = () => {

    const handleLogout = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (token) {
            const url = "https://backend-ecell.herokuapp.com/logout"
            const init_ob = {
                method: "GET",
                mode: "cors",
            }
            const res = await fetch(url, init_ob);
            localStorage.removeItem('token')
            alert("Successfully Logged Out.")
        }
        else {
            alert("You are not logged in.")
        }
    }

    return (
        <>
            <form action="" onSubmit={handleLogout}>
                <button type="submit">Logout</button>
            </form>

            <TestimonialEntryData />
        </>
    );
}

export default AdminManagement;