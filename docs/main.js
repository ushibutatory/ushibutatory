function loadCards() {
  const data = [
    {
      src: "",
      title: "Blog",
      text: "雑記です。",
      href: "https://ushibutatory.hateblo.jp/",
    },
    {
      src: "images/github.png",
      title: "GitHub",
      text: "個人開発や技術検証に使用しています。",
      href: "https://github.com/ushibutatory",
    },
    {
      src: "",
      title: "Zenn",
      text: "技術記事を書ける時に書いています。",
      href: "https://zenn.dev/ushibutatory",
    },
    {
      src: "images/",
      title: "Twitter / X",
      text: "日々の呟きです。",
      href: "https://twitter.com/ushibutatory",
    },
    {
      src: "images/",
      title: "Instagram",
      text: "いいなぁと思ったものを撮っています。",
      href: "https://www.instagram.com/ushibutatory/",
    },
    {
      src: "",
      title: "YouTube",
      text: "ごくまれに動画を投稿します。",
      href: "https://www.youtube.com/channel/UCfg46UpZVeVx8d8MW--J9TA",
    },
    {
      src: "images/",
      title: "ウマ娘誕生日カレンダー",
      text: "各種カレンダーアプリで表示できるように、iCalendarを配信しています。",
      href: "https://umamusume-birthdays.ushibutatory.net/",
    },
  ];

  data.forEach((_) => {
    const title = document.createElement("h2");
    title.classList = "card-title";
    title.innerText = _.title;

    const text = document.createElement("p");
    text.classList = "cart-text";
    text.innerText = _.text;

    const link = document.createElement("a");
    link.classList = "card-link btn btn-link";
    link.target = "_blank";
    link.href = _.href;
    link.text = "Link";

    const cardHeader = document.createElement("div");
    cardHeader.classList = "card-header border-light";
    cardHeader.append(title);

    const cardBody = document.createElement("div");
    cardBody.classList = "card-body";
    cardBody.append(text);

    const cardFooter = document.createElement("div");
    cardFooter.classList = "card-footer border-dark";
    cardFooter.append(link);

    const card = document.createElement("div");
    card.classList = "card text-bg-dark border-light ";
    card.append(cardHeader, cardBody, cardFooter);
    $("#cards").append(card);
  });
}

(() => {
  loadCards();
})();
