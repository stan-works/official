// detail.js

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

// 実績データ一覧
const works = {
  1: {
    title: "ularaco様",
    images: [
      "images/ularaco_sign.jpg",
      "images/ularaco_card.jpeg"
    ],
    description: "スイーツやカフェを展開するularaco様のロゴおよびショップカードデザインを担当しました。"
  },
  2: {
    title: "FAA様",
    images: [
      "images/FAA_logo_fin.png",
      "images/yorisoumirai_mockup.png"
    ],
    description: "FAA様の企業ロゴデザイン、LP制作、Webサイト制作し、ブランドイメージを刷新しました。"
  },
  3: {
    title: "マイデンタルクリニック様",
    img: "images/mydentalclinic.png",
    description: "清潔感と安心感を伝える歯科クリニックのロゴデザインを制作しました。"
  },
  4: {
    title: "ほぐしのこかげ神戸様",
    img: "images/hogushinokokage.png",
    description: "リラクゼーションサロンの優しい雰囲気を表現したロゴを制作しました。"
  },
  5: {
    title: "しょうだ様",
    img: "images/shoda.jpeg",
    description: "「特別な日や大切な会話の場にふさわしいお店であること」が伝わることを意識した、店舗のチラシを制作しました。"
  },
  6: {
    title: "DIVA様",
    img: "images/diva.jpeg",
    description: "バーのチラシ制作を担当しました。初めて来店される方でも入りやすく明るいイメージのご依頼。"
  },
  7: {
    title: "HarmonyH様",
    img: "images/harmonyh.jpeg",
    description: "クラシカルな結婚式場の落ち着いたイメージを反映したオープンチラシをデザインしました。"
  },
  8: {
    title: "purple様",
    img: "images/purple_mockup.png",
    description: "カフェpurple様のロゴ、LPとブランドサイトを制作しました。"
  },
  9: {
    title: "おかだ歯科様",
    img: "images/okada.png",
    description: "地域密着型歯科医院の信頼感を表現するプレゼンスライドを提供しました。"
  },
  10: {
    title: "商工会議所様",
    images: [
      "images/sougyoujyuku_ol_tokutei_1.png",
      "images/sougyoujyuku_ol_tokutei_2.png"
    ],
    description: "商工会議所のチラシを作成しました。"
  },
  11: {
    title: "洋菓子店様",
    images: [
      "images/bag1.jpeg",
      "images/bag2.jpeg"
    ],
    description: "イメージを一新したいというご依頼の元、洋菓子店のショップバッグを作成しました。"
  }
};

// DOMへ表示
const titleEl = document.getElementById("detail-title");
const descEl = document.getElementById("detail-desc");
const imagesContainer = document.getElementById("detail-images");

if (works[id]) {
  const work = works[id];
  // 統一処理（.img → .images へ変換）
  if (work.img && !work.images) {
    work.images = [work.img];
  }

  titleEl.textContent = work.title;
  descEl.textContent = work.description;

  work.images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = work.title + "の画像";
    img.className = "detail-img";
    imagesContainer.appendChild(img);
  });
} else {
  titleEl.textContent = "実績が見つかりません";
  descEl.textContent = "お探しの実績は存在しないか、リンクが間違っている可能性があります。";
}