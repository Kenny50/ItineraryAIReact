import { Routes, Route, Link } from "react-router-dom";
import Itinerary from "./Itinerary";
import Countries from "./Countries";
import Tags from "./Tags";
import Itineraries from "./Itineraries";
import SideBar from "../components/SideBar";
import styled from 'styled-components';
import Search from "./Search";
import AboutUs from "./AboutUs";
import Mail from "./Mail";

const Container = styled.div`
    display: flex;
`;

const Main = styled.main`
    flex-grow: 1;
    overflow:auto;
    margin-left: 200px;
    @media only screen and (max-width: 768px) { /* styles for tablet screens */
        margin: 0;
        padding: 0;
    }

    @media only screen and (max-width: 480px) { /* styles for mobile screens */
        margin: 0;
        padding: 0;
    }
`;

function App() {
    return (
        <div className="App">
            <Container>

                <SideBar />
                <Main>
                    <Routes>
                        <Route path="/country" element={<Countries />}/>
                        <Route path="/country/:country" element={<Itineraries />} />

                        <Route path="/tags" element={<Tags />}/>
                        <Route path="/tags/:tag" element={<Itineraries />} />

                        <Route path="/itineraries/:id" element={<Itinerary />} />
                        <Route path="/ai" element={<Search />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/mail" element={<Mail />} />
                        <Route index element={<Search/>}></Route>
                        <Route path="*" element={<div>404 Not Found</div>}></Route>
                    </Routes>
                </Main>
            </Container>
        </div>
    );
}
export default App;
