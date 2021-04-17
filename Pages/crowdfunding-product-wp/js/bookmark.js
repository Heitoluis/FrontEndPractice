const btnBookmark = document.querySelector("#btn-bookmark");

btnBookmark.addEventListener("click", () => {
  btnBookmark.classList.toggle("bookmarked");

  const btnBookmarkChild = document.querySelector(".bookmark__body");

  if (btnBookmark.classList.contains("bookmarked"))
    btnBookmarkChild.innerHTML = "bookmarked";
  else btnBookmarkChild.innerHTML = "bookmark";
});
