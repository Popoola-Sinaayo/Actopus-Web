$(document).ready(() => {
  $(document).ajaxError(function (e, xhr, opt) {
    console.log(
      "Error requesting " + opt.url + ": " + xhr.status + " " + xhr.statusText
    );
  });
  console.log("here");
  $("form").submit((event) => {
    event.preventDefault();
    const title = $("#title").val();
    const comment = $("#comment").val();
    const creator = $("#creator").val();
    const content = $("#content").val();
    console.log(title, comment, content, creator);
    $.post(
      "http://localhost:8000/articles/add",
      {
        title: title,
        comment: comment,
        content: content,
        creator: creator,
      },
      (data, status, xhr) => {
        console.log(data);
        console.log(status);
        window.location.replace("./index.html");
      }
    );
  });
});
