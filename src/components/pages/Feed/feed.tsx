import React from "react"
import Header from "../../molecules/header/header"
import Feeds from "../../organisms/feeds/feeds"

const FeedPage: React.FC<{}> = (props: any) => {

    return (
        <section className="page">
            <Header />
            <Feeds />
        </section>
    )
}



export default FeedPage