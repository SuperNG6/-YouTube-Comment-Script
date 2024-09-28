// ==UserScript==
// @name         YouTube Auto Expand Comments and Replies
// @name:zh-CN   YouTube 自动展开评论和回复
// @name:zh-TW   YouTube 自動展開評論和回覆
// @name:ja      YouTube コメントと返信を自動展開
// @name:ko      YouTube 댓글 및 답글 자동 확장
// @name:es      Expansión automática de comentarios y respuestas de YouTube
// @name:fr      Expansion automatique des commentaires et réponses YouTube
// @name:de      Automatische Erweiterung von YouTube-Kommentaren und Antworten
// @namespace    https://github.com/SuperNG6/YouTube-Comment-Script
// @author       SuperNG6
// @version      1.2
// @description  Automatically expand all comments and replies on YouTube video pages
// @license MIT
// @description:zh-CN  自动展开 YouTube 视频页面的所有评论和回复
// @description:zh-TW  自動展開 YouTube 視頻頁面的所有評論和回覆
// @description:ja     YouTube動画ページのすべてのコメントと返信を自動的に展開します
// @description:ko     YouTube 동영상 페이지의 모든 댓글과 답글을 자동으로 확장합니다
// @description:es     Expande automáticamente todos los comentarios y respuestas en las páginas de videos de YouTube
// @description:fr     Développe automatiquement tous les commentaires et réponses sur les pages vidéo YouTube
// @description:de     Erweitert automatisch alle Kommentare und Antworten auf YouTube-Videoseiten
// @match        https://www.youtube.com/watch?v=*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    function expandReplies() {
        const replyButtons = document.querySelectorAll('ytd-comment-replies-renderer #more-replies');
        let clicked = false;
        replyButtons.forEach(button => {
            if (!button.hidden) {
                button.click();
                clicked = true;
            }
        });
        if (clicked) {
            setTimeout(expandReplies, 1000);
        } else {
            expandComments();
        }
    }

    function expandComments() {
        const moreButton = document.querySelector('#more-replies');
        if (moreButton && !moreButton.hidden) {
            moreButton.click();
            setTimeout(expandReplies, 1000);
        } else {
            console.log('所有评论和回复已展开');
        }
    }

    // 等待页面加载完成
    window.addEventListener('load', function() {
        // 给页面一些时间加载评论区
        setTimeout(expandComments, 3000);
    });
})();
