import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";


function App() {
    return (
        <>
            <div style={{maxWidth: "70vw", paddingLeft: "50%"}}>
                <Header />
                <Main/>
                <Footer />
            </div>
        </>
    )
}

export default App;