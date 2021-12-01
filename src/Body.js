import { useEffect } from "react";
import { Data } from "./Data";
import { useState } from "react";
import Card from "./Card";
import { useHistory } from "react-router-dom";
import Search from "@mui/icons-material/SearchOff"
import "./Body.css";
import "./Header.css";

const Body = () => {
    const history = useHistory();
    const [category, setCategory] = useState([]);

    useEffect(() => {
        filter("");
    }, [history]);

    const filter = (names) => {
        const filtered = Data.filter((item) => (item.name.toUpperCase()).includes(names));
        setCategory(filtered);
    };

    return (
        <>
            <div className="header">

                <div onClick={() => history.push("/")} className="first">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyaMgluH4RscrohRLs-SpN9d4_DUTw0zoiA&usqp=CAU"
                        alt="Too Fun Labs"
                    />
                </div>

                <div className="second">
                    <input type="text"
                        placeholder="Search for various models"
                        onChange={(event) => { filter(event.target.value.toUpperCase()) }} />
                    <Search />
                </div>

                <div onClick={() => history.push("/login")} className="third">
                    <div className="showLogin">
                        <div className="showLogin__button">
                            <button>LOGIN</button>
                        </div>
                    </div>
                </div>

                <div onClick={() => history.push("/about")} className="fourth">
                    <p className="tp">About Us</p>
                </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {category.map((item) => (
                    <Card
                        image={item.image}
                        name={item.name}
                        category={item.category}
                        key={item.id}
                        vid={item.vid}
                        detail={item.detail}
                    />
                ))}
            </div>
        </>

    )
}

export default Body
