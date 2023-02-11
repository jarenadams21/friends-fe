import React from "react";
import "react-bootstrap";
import LogoCard from "./LogoCard";
import InfoCard from "./LogoCard";

export default function WelcomePage() {
    return (
        <div>
            <div className="m-2">
                <LogoCard></LogoCard>
            </div>
            <div className="text-center p-10">
                <h1> Friendships made easy! </h1>
            </div>
            <center>
                <a href="login" type="button" className="btn btn-info btn-lg">Login</a>
            </center>

        </div>
    );
}