import React from 'react'
import LTIMG from './ForPages/LinksComputer.png'

export default function Links() {
    return (
        <div className="Links">
            <div className="LinksTop">
                <img src={LTIMG} className="LTIMG" />
            </div>
            <a href="http://www.dora-world.com"><button className="button"><span>Doraemon website</span></button></a>
        </div>
    )
}