function Hello(){
    let myName = "Abhay Tewatia";
 let fullName = () => {
    return myName;
 }
    return <h3> Hello, This is the time to hustle. {fullName()}</h3>
}
export default Hello;