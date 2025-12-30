import { useState } from "react";


export default function Header(){
    const [date, SetDate] = useState(new Date())

    setInterval(() => SetDate(new Date()), 1000)
    
    return (
        <header>
            <span>Время: {date.toLocaleTimeString()}</span>
        </header>
    );
}