import "./styles.scss";

import iconSucess from "../../assets/images/icon-success.svg";
import iconSignUpDesktop from "../../assets/images/illustration-sign-up-desktop.svg";
import iconSignUpMobile from "../../assets/images/illustration-sign-up-mobile.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

interface INewsletter {
    setEmail: React.Dispatch<React.SetStateAction<string | undefined>>;
    email: string | undefined;
}

export default function Newsletter(props: INewsletter) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [success, setSuccess] = useState(false);

    const onSubmit = () => {
        setSuccess(true);
        if (!success) {
            navigate("/subscribed");
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const isMobile = windowWidth <= 768;

    return (
        <div className="container">
            <div className="container-newsletter">
                <div className="container-stay-updated">
                    <h3 className="container-stay-updated-title">
                        Stay updated!
                    </h3>
                    <span className="container-stay-updated-span">
                        Join 60,000+ product managers receiving monthly updates
                        on:
                    </span>

                    <div className="container-success">
                        <span>
                            <img src={iconSucess} />
                            Product discovery and building what matters
                        </span>
                        <span>
                            <img src={iconSucess} />
                            Measuring to ensure updates are a success
                        </span>
                        <span>
                            <img src={iconSucess} />
                            And much more
                        </span>
                    </div>

                    <div className="container-email">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <h5>Email address</h5>
                                {errors.email && (
                                    <p className="error-message">
                                        {errors.email.message?.toString()}
                                    </p>
                                )}{" "}
                            </div>
                            <div>
                                <Controller
                                    name="email"
                                    control={control}
                                    rules={{
                                        required: "Valid email required",
                                        onChange(e) {
                                            props.setEmail(e.target.value);
                                        },
                                    }}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            placeholder="email@company.com"
                                            type="email"
                                        />
                                    )}
                                />
                            </div>

                            <button type="submit">
                                Subscribe to monthly newsletter
                            </button>
                        </form>
                    </div>
                </div>
                <div className="container-sign-up-desktop">
                    <img
                        src={isMobile ? iconSignUpMobile : iconSignUpDesktop}
                    />
                </div>
            </div>
        </div>
    );
}
