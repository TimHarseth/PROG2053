$(document).ready(function() {
    let posts = $('#posts');
    let page = 1;
    let maxPosts = 3;

    function loadPosts() {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts?_page=' + page + '&_limit=' + maxPosts,
            method: 'GET',
            success: function(response) {
                response.forEach(post => { // Loop through each post and append it to the posts div
                    let postElement = `
                        <div class="post">
                            <h3>${post.title}</h3>
                            <p>${post.body}</p>
                        </div>`;
                    posts.append(postElement);
                });
                page++;
            }
        });
    }
    loadPosts(); // Initial load
    loadPosts(); // Page didn't have scrolling with only 3 posts, so added another 3 to make it scrollable.

    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 10) { // If the user has scrolled to the bottom of the page
            loadPosts(); // Load more posts
        }
    });
});