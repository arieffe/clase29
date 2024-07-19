import React from "react";

const Footer = ({company, year}) => {
    return (
        <footer>
            <div className="props">
                <h5 className="text-uppercase">{company}</h5>
                <p>
                    © {year}. All rights reserved.
                </p>
            </div>
        </footer>
    )}

export default Footer;