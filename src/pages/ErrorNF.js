import React from 'react';
import GradCover from './ForPages/gradient';

export default function NotFound() {
    return (
        <div>
            <GradCover 
                text="すみません 要請したページが見つかりません。 訪問しようとするページの住所が間違って入力されたり、ページの住所が変更・削除されて要請したページが見つかりません。 入力した住所が正しいかどうかをもう一度確認してください。"
            />
            <p style={{fontSize: '20pt'}}>We are sorry.
            The requested page could not be found.
            </p>
            <p style={{fontSize: '20pt'}}>The address of the page you wish to visit is entered incorrectly.
             We can not find the requested page because the address on the page was changed or deleted.</p>
            <p style={{fontSize: '20pt'}}>Please check again that the address you entered is correct.</p>
        </div>
    )
}
