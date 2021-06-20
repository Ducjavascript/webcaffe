import React, {useContext, useEffect} from 'react';
import GlobalContext from "../context/GlobalContext";
import {getCookie} from "../utils";
import {postData} from "../utils/fetchData";

export const withAuth = AuthComponent => {
    const Authenticated = props => {
        const gContext = useContext(GlobalContext)
        useEffect(()=>{
            console.log("useEffect", props.token,gContext)
            if(props.token){
                postData("user").then(res=>{

                    if(res.err){
                        gContext.setHeader({...gContext.header, ...{button: "account"}})
                        gContext.setAccount(null)
                        return
                    }
                    gContext.setAccount(res)
                })
            }else {
                gContext.setHeader({...gContext.header, ...{button: "account"}})
                gContext.setAccount(null)
            }
        },[])
        return <AuthComponent {...props} />
    }
    Authenticated.getInitialProps = async (ctx) => {
        // Ensures material-ui renders the correct css prefixes server-side
        const token = getCookie('access_token', ctx.req);
        // Check if Page has a `getInitialProps`; if so, call it.
        const pageProps =
            AuthComponent.getInitialProps &&
            (await AuthComponent.getInitialProps(ctx));
        return {
            ...pageProps,
            token,
            pathname: ctx.pathname
        };
    }
    return Authenticated;
};
export default withAuth;
