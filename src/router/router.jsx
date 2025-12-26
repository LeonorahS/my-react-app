import{ createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from '../layout/MainLayout';
import Accueil from '../pages/Accueil';
import APropos from '../pages/APropos';
import Logements from '../pages/Logements';
import Erreur404 from '../pages/Erreur404';

const router = createBrowserRouter([
    {
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Accueil/>
            },
            {
                path:"/a-propos",
                element:<APropos/>
            },
            {
                path:"/logements",
                element:<Logements/>
            },
            {
                path:"*",
                element:<Erreur404/>
            }
        ]   
    }
]);
export default function AppRouter(){
    return(
        <RouterProvider router={router}/>
    )
}