import'../styles/globals.css'
//INTERNAL IMPORT
import {NavBar, Footer} from '../../components/ComponentIndex';

const  App = ({ Component, pageProps }) => (
<div>
    <NavBar/>
    <Component {...pageProps} />
    <Footer/>
</div>
);
export default App