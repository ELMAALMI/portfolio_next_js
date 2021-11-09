import Head from "next/head"
import { Fragment } from 'react'
import Footer from "../Footer"
import Navbar from "../Navbar"
import ScrollUp from "../ScrollUp"
const Layout = ({ title, keywords, description, children }) => {
    return (
        <Fragment>
            <Head>
                <title> {title} </title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="EL MAALMI BILLAL" />
                <link rel="stylesheet" href="https://unicons.iconscout.com/release/v3.0.6/css/line.css"/>   
            </Head>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
            <ScrollUp/>
        </Fragment>
    )
}

export default Layout

Layout.defaultProps = {
    title: 'EL MAALMI | ^_^',
    description: 'el maalmi billal is web and mobile devloper',
    keywords: 'javascript,Nextjs,vue,reactjs,reactnative,flutter,html,php,laravel,html,css,tailwaid,rest,api,GraphQl',
}
