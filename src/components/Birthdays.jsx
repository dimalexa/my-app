import { birthdays } from "../data/birthdays"

export default function Birthdays(){
    let timeLeft = new Date();
    let text = new Date();
    
    const msPerDay = 24 * 60 * 60 * 1000;
    const today = new Date();
    for (let i of Object.keys(birthdays)){
        timeLeft = (birthdays[i].getTime() - today.getTime()) / msPerDay;
    
    }
    console.log(text)

    
    

    return (
        <div>
            {text}
        </div>
    )
}