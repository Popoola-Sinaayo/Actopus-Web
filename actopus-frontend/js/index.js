$(document).ready(function () {
  $(document).ajaxError(function (e, xhr, opt) {
    console.log(
      "Error requesting " + opt.url + ": " + xhr.status + " " + xhr.statusText
    );
  });
  $(".update-article").click((event) => {
    event.preventDefault();
    const title = $("#title").val();
    const comment = $("#comment").val();
    const creator = $("#creator").val();
    const content = $("#content").val();
    const id = $("#article-id").val();
    console.log(title, comment, content, creator);
    $.ajax({
      url: `http://localhost:8000/articles/${id}`,
      type: "PUT",
      data: {
        title: title,
        comment: comment,
        content: content,
        creator: creator,
      },
      success: () => {
        console.log("deleted");
        $("main").empty();
        fetchArticles();
      },
    });
    $("main").show();
    $("form").hide();
  });
  const fetchArticles = () => {
    $.get("http://localhost:8000/articles/all", (data, status) => {
      if (status) {
        console.log(data.length);
        if (data.length === 0) {
          $(".empty-card").show();
        }
        for (let i = 0; i < data.length; i++) {
          console.log(data[i]);
          const parentDiv = document.createElement("div");
          parentDiv.className = "card";
          const cardHeader = document.createElement("div");
          cardHeader.className = "card-header";
          cardHeader.innerHTML = data[i]["creator"];
          const cardBody = document.createElement("div");
          cardBody.className = "card-body";
          const cardTitle = document.createElement("h5");
          cardTitle.className = "card-title";
          cardTitle.innerHTML = data[i]["title"];
          const cardText = document.createElement("p");
          cardText.className = "card-text";
          cardText.innerHTML = data[i]["content"];
          const cardText1 = document.createElement("p");
          cardText1.className = "card-text-1";
          cardText1.innerHTML = data[i]["comment"];
          const cardLink = document.createElement("a");
          cardLink.href = `${data[i]["id"]}`;
          cardLink.className = "btn btn-primary button-update";
          cardLink.innerHTML = "Update";
          const cardDelete = document.createElement("a");
          cardDelete.href = `${data[i]["id"]}`;
          cardDelete.className = "btn btn-danger button-delete";
          cardDelete.innerHTML = "Delete";
          const hiddenInput = document.createElement("input");
          hiddenInput.type = "hidden";
          hiddenInput.value = data[i]["id"];
          hiddenInput.id = "article-input-id";
          $(cardBody).append(
            cardTitle,
            cardText,
            cardText1,
            cardLink,
            cardDelete,
            hiddenInput
          );
          $(parentDiv).append(cardHeader, cardBody);
          $("main").append(parentDiv);
        }
        $(".button-delete").click(function (event) {
          event.preventDefault();
          console.log(this.href.split("/").length);
          const arrLength = this.href.split("/").length;
          const id = this.href.split("/")[arrLength - 1];
          console.log(this.href.split("/")[arrLength - 1]);
          $.ajax({
            url: `http://localhost:8000/articles/${id}`,
            type: "DELETE",
            success: () => {
              console.log("deleted");
              $("main").empty();
              fetchArticles();
            },
          });
        });
        $(".button-update").click(function (event) {
          event.preventDefault();
          const id = this.href.split("/")[3];
          console.log(this.href.split("/")[3]);
          $("main").hide();
          $("form").show();
          console.log($(this).closest(".card-body").find(".card-text").text());
          console.log(
            $(this).closest(".card-body").find(".card-text-1").text()
          );
          console.log($(this).closest(".card-body").find(".card-title").text());
          console.log($(this).closest(".card").find(".card-header").text());
          console.log(
            $(this).closest(".card-body").find("#article-input-id").val()
          );

          // console.log($(this).)
          $("#title").val(
            $(this).closest(".card-body").find(".card-title").text()
          );
          $("#comment").val(
            $(this).closest(".card-body").find(".card-title").text()
          );
          $("#creator").val(
            $(this).closest(".card").find(".card-header").text()
          );
          $("#content").val(
            $(this).closest(".card-body").find(".card-text").text()
          );
          $("#article-id").val(
            $(this).closest(".card-body").find("#article-input-id").val()
          );
        });
      }
      console.log(status);
    });
  };
  fetchArticles();
});
