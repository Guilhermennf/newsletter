import { useNavigate } from "react-router-dom";
import iconSucess from "../../assets/images/icon-success.svg";
import "./styles.scss";

interface ISubscribed {
    email: string | undefined;
}

export default function Subscribed(props: ISubscribed) {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="container-subscribed">
                <div className="container-items">
                    <img src={iconSucess} />
                    <h3 className="container-subscribed-title">
                        Thanks for subscribing!
                    </h3>
                    <div className="container-items-div">
                        <span className="container-subscribed-span">
                            A confirmation email has been sent to{" "}
                            <strong>{props.email}</strong>. Please open it and
                            click the button inside to confirm your
                            subscription.
                        </span>
                    </div>
                    <button
                        className="container-subscribed-button"
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        Dismiss message
                    </button>
                </div>
            </div>
        </div>
    );
}
