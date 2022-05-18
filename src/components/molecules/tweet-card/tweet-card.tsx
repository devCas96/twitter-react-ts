import React from "react"
import "./tweet-card.scss"
const TweetCard: React.FC<{}> = () => {

    return (
        <div className="card">
            <div className="card-wrapper">
                <div className="card-wrapper__image">
                    <img src="https://placekitten.com/50/50" alt="profile" />
                </div>
                <div className="card-wrapper__content">
                    <div className="card-wrapper__header">
                        <a href="https://twitter.com/home" className="card-wrapper__header name">Secretaria de movilidad</a>
                        <a href="https://twitter.com/home" className="card-wrapper__header username">@sstmed</a>
                        <div className="card-wrapper__header timeago"><span> · </span></div>
                        <a href="https://twitter.com/home" className="card-wrapper__header timeago">
                        <time>19min</time> 
                        </a>
                    </div>
                    <div className="card-wrapper__body">
                        <p className="card-wrapper__body text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo perspiciatis sapiente non labore ut esse voluptate facilis maiores accusantium! Maxime quo iusto, sint magnam impedit ut recusandae veritatis quis repellat?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TweetCard