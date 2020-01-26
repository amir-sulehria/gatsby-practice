import React from 'react'
import header from './header.module.scss'
import { Link, graphql, useStaticQuery } from "gatsby";

const Header = () => {

    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                title
            }
        }
    }
    `)

    return (
        <div className={header.link}>
            <Link className={header.title} to="/">Muhammad Amir</Link>
            <p>{data.site.siteMetadata.title}</p>
            <hr />
            <ul>
                <li>
                    <Link to="/about" className={header.link}>About</Link>
                </li>
                <li>
                    <Link to="/contact" className={header.link}>Contact</Link>
                </li>
                <li>
                    <Link to="/" className={header.link}>Home</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;