(() => {
  function loadCards($cardDeck, data) {
    data.forEach((_) => {
      const title = document.createElement("a");
      title.classList = "card-title link-offset-3";
      title.text = _.title;
      title.href = _.href;
      title.target = "_blank";

      const text = document.createElement("p");
      text.classList = "cart-text";
      text.innerText = _.text;

      const cardHeader = document.createElement("div");
      cardHeader.classList = "card-header border-dark";
      cardHeader.append(title);

      const cardBody = document.createElement("div");
      cardBody.classList = "card-body";
      cardBody.append(text);

      const card = document.createElement("div");
      card.classList = "card text-bg-dark border-light";
      card.append(cardHeader, cardBody);
      $cardDeck.append(card);
    });
  }

  loadCards($("#cards_general"), [
    {
      src: "",
      title: "Blog",
      text: "雑記です。",
      href: "https://ushibutatory.hateblo.jp/",
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
  ]);

  loadCards($("#cards_tech"), [
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
      src: "",
      title: "Qiita",
      text: "現在は更新していません。",
      href: "https://qiita.com/ushibutatory",
    },
  ]);

  loadCards($("#cards_artifact"), [
    {
      src: "images/",
      title: "ウマ娘誕生日カレンダー",
      text: "各種カレンダーアプリで表示できるように、iCalendarを配信しています。",
      href: "https://umamusume-birthdays.ushibutatory.net/",
    },
    {
      src: "",
      title: "YouTube",
      text: "ごくまれに動画を投稿します。",
      href: "https://www.youtube.com/channel/UCfg46UpZVeVx8d8MW--J9TA",
    },
  ]);
})();
