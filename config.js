// ===== ここだけ書きかえればOKです =====
// ASP（もしもアフィリエイトなど）で提携が承認されたら、発行された「広告リンク」を url に貼ってください。
// url が空のサービスはページに表示されません。
//
// subParam：ASPの「サブID」（どの動画から来たかを区別する目印）のパラメータ名。
//   ASPの管理画面やヘルプで名前を確認してから入れてください。わからなければ空のままでOK（付けずにリンクします）。
//   ページのURLの末尾に ?v=001 を付けると、「v001-lognavi」のような値がこの名前で広告リンクに付きます。

window.SITE_CONFIG = {
  // TikTokのアカウント名（ページ下部の運営者表示に使います）
  tiktokName: "まさき｜28卒の就活データ",
  tiktokUrl: "https://www.tiktok.com/@masaki200411",

  services: [
    {
      key: "lognavi",
      type: "対策型",
      name: "Lognavi（ログナビ）",
      desc: "Webテスト（SPIなど）の練習ができる就活アプリです。",
      fit: "Webテストが不安な人、すきま時間に練習したい人",
      url: "",
      subParam: ""
    },
    {
      key: "offerbox",
      type: "スカウト型",
      name: "OfferBox（オファーボックス）",
      desc: "プロフィールを登録しておくと、企業からオファーが届く逆求人型のサービスです。",
      fit: "自分では知らなかった企業とも出会いたい人",
      url: "",
      subParam: ""
    },
    {
      key: "agent",
      type: "エージェント",
      name: "シュトキャリ",
      desc: "担当者が面談をして、求人の紹介やES・面接の準備を手伝ってくれる就活エージェントです。",
      fit: "ひとりで進めるのが不安な人、相談しながら決めたい人",
      url: "https://www.medipartner.jp/clickJP.php?APID=40556&affID=8148",
      subParam: ""
    }
  ]
};
