import React from 'react';
import VTIMG from './ForPages/VideosComputer.png';
import YTI from './ForPages/175x175bb.jpg';

export default function Videos() {
    return (
        <div className="Videos">
            <div className="VideosTop">
                <img src={VTIMG} />
            </div>
            <h2>Subscribe!</h2>
            <h2>My youtube Channel⇢<a href="https://goo.gl/o54Jpj" target="blank"><img src={YTI} /></a>⇠Click the YT button!</h2>
            <h2>OR scan QR with your phone⇢<img src="https://goo.gl/o54Jpj.qr" />⇠Scan QR with your phone</h2>
        </div>
    )
}