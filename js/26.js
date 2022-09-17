const refs = {
  parent: document.querySelector("#parent"),
  child: document.querySelector("#child"),
  innerChild: document.querySelector("#inner-child"),
};

refs.parent.addEventListener("click", onParentClick);
refs.child.addEventListener("click", onChildClick);
refs.innerChild.addEventListener("click", onInnerChildClick);

function onParentClick(evt) {
  console.log("onParentClick");
  console.log("onParentClick -> evt.target", evt.target);
  console.log("onParentClick -> evt.currenTarget", evt.currentTarget);
}

function onChildClick(evt) {
  console.log("onChildClick");
  console.log("onChildClick -> evt.target", evt.target);
  console.log("onChildClick -> evt.currenTarget", evt.currentTarget);
}

function onInnerChildClick(evt) {
  console.log("onInnerChildClick");
  console.log("onInnerChildClick -> evt.target", evt.target);
  console.log("onInnerChildClick -> evt.currenTarget", evt.currentTarget);
}
