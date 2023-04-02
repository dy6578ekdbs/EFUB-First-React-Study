import React from "react";
import Notification from "./Notification";

const reserverdNotification = [
    {
        id:1,
        message : "오늘 일정을 알려드립니다"
    },
    {
        id:2,
        message : "점심식사 시간입니다."
    },
    {
        id:3,
        message : "이제 곧 미팅 시간입니다"
    },
];

var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notifications : [],
        };
    }

    componentDidMount(){
        const {notifications} = this.state;
        timer = setInterval(()=>{
            if(notifications.length < reserverdNotification.length){
                const index = notifications.length;
                notifications.push(reserverdNotification[index]);
                this.setState({
                    notifications: notifications,
                });
            }else{
                // this.setState({
                //     notifications:[],
                // });
                clearInterval(timer);
            }
        },1000);
    }
    render(){
        return (
            <div>
                {this.state.notifications.map((notification)=>{
                    return <Notification 
                    key={notification.id}
                    id={notification.id}
                    message = {notification.message}/>;
                })}
            </div>
        );
    }
}

export default NotificationList;