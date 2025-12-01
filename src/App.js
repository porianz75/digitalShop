import './App.css';
import 'react-loading-skeleton/dist/skeleton.css';
import {routes} from "./routes";
import {useRoutes} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchBaskets as getBasketsAction} from "./store/basketsSlice";
import withNetWorkErrorHandler from "./hoc/withNetWorkErrorHandler";


function App() {
    const router = useRoutes(routes)
    const dispatch = useDispatch();
    console.log('app component ')
    useEffect(() => {
        if (localStorage.BasketToken) {
             dispatch(getBasketsAction(localStorage.BasketToken))
        }
    }, [dispatch])

    return (
        <>
            {router}
        </>
    );
}
// باعث میشه کل app دوباره رندر بشه
export default withNetWorkErrorHandler(App);
