import { useRouteError } from "react-router"
const ErrorPage=()=>{
    console.log(useRouteError());
    return(
        <div>Oops! You came to the wrong page</div>
    );
}
export default ErrorPage