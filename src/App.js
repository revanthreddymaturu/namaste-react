import React,{Suspense,lazy} from "react"
import  ReactDOM from "react-dom/client"
import HeaderComp from "./components/Header"
import BodyComp from "./components/Body"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Contact from "./components/Contact"
import About from "./components/About"
import ErrorPage from "./components/Error"
import RestaurantInfo from "./components/RestaurantInfo"
import appStore from "./utils/ appStore"
import { Provider } from "react-redux"
import Cart from "./components/Cart"

// const heading=React.createElement(
//     "div",
//     {id:"parent"},[React.createElement("div",{id:"child"},[React.createElement("h1",{},"i am h1 tag"),React.createElement("h2",{},"i am h2 tag")]),React.createElement("div",{id:"child2"},[React.createElement("h1",{},"i am h1 tag"),React.createElement("h2",{},"i am h2 tag")])]);
//const heading=React.createElement("h1",{id:"heading"},"Hello World from React");
// const jsxHeading=(
// <h1 id="heading">Namaste React Using JSX
// </h1>)
const Grocery=lazy(()=>import("./components/Grocery"))
const AppLayout=()=>{
    return (
    <Provider store={appStore}>
        <div className="appLayout">
            <HeaderComp/>
            <Outlet/>
        </div>
    </Provider>
    )
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<ErrorPage/>,    
        children:[
            {
                path:"/",
                element:<BodyComp/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/grocery",
                element:(<Suspense fallback={<h2>Loading....</h2>}><Grocery/></Suspense>)
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantInfo/>,
                errorElement:<ErrorPage/>,    

            },
            {
                path:"/grocery",
                element:(<Suspense fallback={<h2>Loading....</h2>}><Grocery/></Suspense>)
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ]
    },

])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);