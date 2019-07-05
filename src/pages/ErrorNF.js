import React from 'react';
import GradCover from '../img/gradient';

export default function NotFound() {
  return (
    <div>
      <GradCover text="Sorry. The requested page could not be found. • 죄송합니다. 지금 찾으시려는 페이지를 찾을 수 없습니다." />
      <p style={{ fontSize: '20pt' }}>
        We are sorry. The requested page could not be found.
      </p>
      <p style={{ fontSize: '20pt' }}>
        The address of the page you wish to visit is entered incorrectly. We can
        not find the requested page because the address on the page was changed
        or deleted.
      </p>
      <p style={{ fontSize: '20pt' }}>
        Please check again that the address you entered is correct.
      </p>
      <a href="/">
        <button>Goto English Home</button>
      </a>
      <p style={{ fontSize: '20pt' }}>
        죄송합니다. 지금 찾으시려는 페이지를 찾을 수 없습니다.
      </p>
      <p style={{ fontSize: '20pt' }}>
        입력하신 페이지 주소가 정확하지 않습니다. 페이지가 변경,삭제 또는
        없음으로 찾으시는 페이지를 찾을 수 없습니다.
      </p>
      <p style={{ fontSize: '20pt' }}>
        입력하신 페이지 주소가 정확한지 다시 확인해 주시기 바랍니다.
      </p>
      <a href="/kr">
        <button>한국어 홈으로 가기</button>
      </a>
      <p style={{ fontSize: '20pt' }}>
        すみません 要請したページが見つかりません。
        訪問しようとするページの住所が間違って入力されたり、ページの住所が変更・削除されて要請したページが見つかりません。
        入力した住所が正しいかどうかをもう一度確認してください。
      </p>
      <a href="/jp">
        <button>Goto Japanese home</button>
      </a>
    </div>
  );
}
