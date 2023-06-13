import Navbar from "../components/Navbar"
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import '../app.css'
const baseURL = 'https://foodbar-admin.onrender.com';

export const MyAccount = () => {

    const { user, isAuthenticated,logout } = useAuth0();

    const [orderItem, setOrderItem] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.post(`${baseURL}/api/myorders`, {
                    method: 'post',
                    data: { email: user.email }
                });
                setOrderItem(response.data);
            } catch (error) {
                console.error('Error fetching order item:', error);
            }
        }
        fetchItems()

    }, []);


    const dateTime = (dateTimeString) => {
        const dateTimeObj = new Date(dateTimeString);
        const year = dateTimeObj.getFullYear();
        const month = dateTimeObj.getMonth() + 1; // Months are zero-based
        const day = dateTimeObj.getDate();
        const hours = dateTimeObj.getHours();
        const minutes = dateTimeObj.getMinutes();
        return `${day}-${month}-${year}, ${hours}-${minutes}`
    }

    return (
        isAuthenticated ? (
            <div>
                <Navbar />
                <div className="max-w-6xl  mx-auto p-8">
                    <div>
                        <table>
                            <tr>
                                <th>OrderId</th>
                                <th>Address</th>
                                <th>Status</th>
                                <th>Time & Date</th>
                            </tr>
                            {
                                orderItem.length > 0 && (
                                    orderItem.map(item => {
                                        return (

                                            <tr key={item._id}>
                                                <td>{item._id}</td>
                                                <td>{item.address}</td>
                                                <td>{item.status}</td>
                                                <td>{dateTime(item.date)}</td>

                                            </tr>

                                        )
                                    })
                                )
                            }
                        </table>
                    </div>
                    <button className="text-lg text-custom-red underline" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                        Log Out
                    </button>
                </div>
            </div>
        ) :
            <h1 className="text-center mt-12" >Please Login</h1>
    )
}



