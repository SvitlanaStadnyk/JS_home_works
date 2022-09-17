// const tagsContainer = document.querySelector(".js-tags");
// let selectedTag = null;
// // console.log(tagsContainer);
// tagsContainer.addEventListener("click", onTagsContainerClick);
// function onTagsContainerClick(evt) {
//   if (evt.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const currentActiveBtn = document.querySelector(".tags__btn--active");
//   //   console.log(evt.target);

//   //   console.log(currentActiveBtn);
//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove("tags__btn--active");
//   }

//   //   currentActiveBtn?.classList.remove("tags__btn--active");

//   const nextActiveBtn = evt.target;
//   nextActiveBtn.classList.add("tags__btn--active");
//   selectedTag = nextActiveBtn.dataset.value;
//   console.log(selectedTag);
// }

// const settings = {
//   theme: {
//     userDefined: {
//       color: "qweqwe",
//     },
//   },
// };
// if (settings && settings.theme && settings.theme.userDefined) {
//   console.log(settings.theme.userDefined.color);
// }
// console.log(settings?.theme?.userDefined?.color);

const tagsContainer = document.querySelector(".js-tags");
const selectedTags = new Set();
// selectedTags.add(5);
// selectedTags.add(5);
// selectedTags.add(5);

// selectedTags.add(4);
// selectedTags.add(4);

// selectedTags.add({ a: 1 });
// selectedTags.add({ a: 1 });

tagsContainer.addEventListener("click", onTagsContainerClick);
function onTagsContainerClick(evt) {
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }

  const btn = evt.target;
  const tag = btn.dataset.value;
  const isActive = btn.classList.contains("tags__btn--active");

  if (isActive) {
    selectedTags.delete(tag);
  } else {
    selectedTags.add(tag);
  }

  btn.classList.toggle("tags__btn--active");

  //   console.log(evt.target);
  //   evt.target.classList.toggle("tags__btn--active");
  //   //   selectedTags.push(evt.target.dataset.value);
  //   //   console.log(selectedTags);
  //   selectedTags.add(evt.target.dataset.value);
  console.log(selectedTags);
}
