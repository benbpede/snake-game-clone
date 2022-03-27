const ul = document.querySelector("ul");
let li;
let count = ul.children.length;

function scroll() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    li = ul.appendChild(document.createElement("li"));
    li.textContent = ++count;
  }
}

document.addEventListener("scroll", scroll);

//1.인터섹션 옵저버 생성
const io = new IntersectionObserver(
  (entry, observer) => {
    //3.현재 보이는 target 출력
    const ioTarget = entry[0].target;

    //4. viewport에 target이 보이면 하는 일
    if (entry[0].isIntersecting) {
      console.log("현재보이는 타겟", ioTarget);
      //5.현재 보이는 target 감시 취소해줘
      io.unobserve(li);

      //6.새로운 li 추가
      li = ul.appendChild(document.createElement("li"));
      li.textContent = ++count;
      //7. 새로 추가된 li 감시
      io.observe(li);
    }
  },
  {
    // 8.target이 50% 이상 보이면 작동
    threshold: 0.5,
  }
);

//2. li 감시
io.observe(li);
