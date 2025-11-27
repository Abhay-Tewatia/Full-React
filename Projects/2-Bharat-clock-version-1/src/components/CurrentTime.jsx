let CurrentTime = () => {

    let time = new Date();
    return <p  className = "fw-bold">
        This is the Current time is: {time.toLocaleDateString() } - {" "} -
         {time.toLocaleTimeString()} </p>
};
export default CurrentTime;