import axios from 'axios';

export async function addOrder(pid,sid,totalprice,paymethod,orderdetails) {
    
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;

    var response = axios.post("http://localhost:3001/orders", {
        User_id: "62c2af176d517299c55c79e0",
        Packages_ID: pid,
        Service_ID: sid,
        Creation_time: dateTime,
        Total_Price: totalprice,
        Payment_Method: paymethod,
        Order_details: orderdetails,
        Order_Status: "In Progress"
    })
        .catch(err => {
            console.log(err);
        });

    return response
}