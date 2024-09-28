// ==UserScript==
// @name         YouTube 自动展开评论和回复
// @namespace    https://github.com/SuperNG6/YouTube-Comment-Script
// @author       SuperNG6
// @version      1.1
// @description  自动展开 YouTube 视频页面的所有评论和回复
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
