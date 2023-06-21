const createHCPost = () => {
  const post = `
<article>
  <h1>ID - TITLE</h1>
  <p>CONTENT</p>
  <p>By: user # USERID</p>
</article>
`;
  return post;
};

const changeBackgroundColor = (target) => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  console.log("Color changed for target", target);

  $(target).css("background-color", `rgb(${r},${g},${b})`);
};

// {
//   userId: 1,
//   id: 1,
//   title:
//     "<script>alert('MWAHAHAHA')</script>sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
// }

// Is that a good way to build a post?
// Kinda bad for 2 reasons
// 1 - Insecure, need to sanitize inputs before running
// 2 - Doesn't manage the event handlers properly

const createPost = (postData) => {
  const { id, userId, title, body } = postData;

  const post = `
<article>
  <h1>${id} - ${title}</h1>
  <p>${body}</p>
  <p>By: user #${userId}</p>
</article>
`;
  return post;
};

const createPostButBetter = (postData) => {
  const { id, userId, title, body } = postData;

  const $article = $("<article>");
  const $title = $("<h1>");
  const $content = $("<p>");
  const $author = $("<p>");

  $title.text(title);
  $content.text(body);
  $author.text(`By: user #${userId}`);

  $article.append($title);
  $article.append($content);
  $article.append($author);

  $article.on("click", (event) => {
    changeBackgroundColor(event.currentTarget);
  });

  return $article;
};

const addPostToPage = (target, post) => {
  $(target).append(post);
};

const addAllPostsToPage = (target, postList) => {
  for (const postData of postList) {
    const newPost = createPostButBetter(postData);
    addPostToPage(target, newPost);
  }
};

const showWeatherForMontreal = (weatherData) => {
  const rawTemp = weatherData.main.temp;
  const temp = Math.round(rawTemp - 273.15);

  const $title = $("<h1>");

  $title.text(`It is currently ${temp}°C`);

  $("body").prepend($title);
};

const sendPostToBackend = (title, body) => {
  $.ajax({
    method: "POST",
    url: "http://localhost:3000/api/posts",
    data: { title, body },
  }).then((res) => {
    const newPost = createPostButBetter(res);
    addPostToPage("#post-container-4", newPost);
  });
};

$(document).ready(() => {
  const hardCodedPost = createHCPost();

  addPostToPage("#post-container-1", hardCodedPost);

  // const localDataPost = createPost(somePosts[1]);
  // const localDataPost2 = createPost(somePosts[1]);

  const localDataPost = createPostButBetter(somePosts[0]);
  const localDataPost2 = createPostButBetter(somePosts[0]);

  addPostToPage("#post-container-2", localDataPost);

  setTimeout(() => {
    addPostToPage("#post-container-2", localDataPost2);
    // $("#post-container-2 article").on("click", (event) => {
    //   changeBackgroundColor(event.currentTarget);
    // });
  }, 2000);

  // $("#post-container-2 article").on("click", (event) => {
  //   changeBackgroundColor(event.currentTarget);
  // });

  addAllPostsToPage("#post-container-3", somePosts);

  $.ajax({
    method: "GET",
    url: "http://localhost:3000/api/posts",
    // url: "https://jsonplaceholder.typicode.com/posts",
  }).then((res) => {
    addAllPostsToPage("#post-container-4", res);
  });

  $.ajax({
    method: "GET",
    url: `https://api.openweathermap.org/data/2.5/weather?q=Montreal&appid=${APIKEY}`,
  }).then((res) => {
    showWeatherForMontreal(res);
  });

  $("form").on("submit", (event) => {
    event.preventDefault();
    console.log("Form submitted!", $(event.currentTarget).serialize());

    // const result = $(event.currentTarget).find("input").val();
    const title = $("form input[name='title']").val();
    const body = $("form input[name='body']").val();
    console.log(title, body);

    sendPostToBackend(title, body);
  });

  //   setTimeout(() => {
  //     $.ajax({
  //       method: "POST",
  //       url: "http://localhost:3000/api/posts",
  //       data: { title: "Wiggle wiggle", body: "YEAAAAAH" },
  //     }).then((res) => {
  //       const newPost = createPostButBetter(res);
  //       addPostToPage("#post-container-4", newPost);
  //     });
  //   }, 2000);
});
