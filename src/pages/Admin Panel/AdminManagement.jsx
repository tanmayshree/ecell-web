import TestimonialEntryData from "./TestimonialEntryData";

const AdminManagement = () => {

    const handleLogout = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (token) {
            const url = "https://127.0.0.1:5000/logout"
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

            <TestimonialEntryData/>
        </>
     );
}
 
export default AdminManagement;