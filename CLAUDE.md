# 咲乱雀姫 HP プロジェクト

## 何のプロジェクトか

**咲-Saki-シリーズ**（麻雀漫画・アニメ）のオンリー同人誌即売会イベント「咲乱雀姫」の公式HP。
ユーザー（bukol）が主催する同人イベントのサイトで、PayBalance株式会社の将来的なHP制作事業のポートフォリオも兼ねる。

## イベント基本情報

- **イベント名:** 咲乱雀姫01（さくらんじゃんき）
- **サブタイトル:** SUPER Heroine Time 2026 / Die derangierten Süchtigen
- **開催日:** 2026年9月22日（火・祝）
- **会場:** 大田区産業プラザPiO 大展示ホール
- **住所:** 〒144-0035 大田区南蒲田一丁目20番20号
- **アクセス:** 京急蒲田駅東口 徒歩3分 / 蒲田駅東口 徒歩13分
- **申し込み窓口:** スーパーヒロインタイム（ぷにけっと準備会）

## URL・ドメイン

- **本番URL:** https://sakuranjyanki.jp（カスタムドメイン、2026/4/16取得）
- **GitHub Pages URL:** https://sakuranjunkie-staff.github.io/sakuranjunkie/
- **GitHubリポジトリ:** https://github.com/sakuranjunkie-staff/sakuranjunkie
- **ローカルパス:** `C:\Users\bukol\Documents\sakuranjunkie`

## 技術スタック

- 静的HTML/CSS/JS（GitHub Pages ホスティング）
- ビルドツールなし、フレームワークなし
- フォント: Google Fonts（Noto Serif JP / Cinzel / Playfair Display）

## ファイル構成

```
index.html          メインページ（全コンテンツ）
style.css           全スタイル定義
main_visual.webp    メインビジュアル（表示用・圧縮版）
main_visual_original.webp  メインビジュアル（原画・OGP用）
sakuran_banner.webp サークル参加バナー
CNAME               カスタムドメイン設定（sakuranjyanki.jp）
バナー/             SHTへ提出したバナー素材
docs/               その他ドキュメント
```

## ページ構成（セクション）

| セクションID | 名称 | 内容 |
|---|---|---|
| `#top` | メインビジュアル | ゆんこ氏イラスト・ライトボックス付き |
| `#circle` | サークル参加 | ももよ氏バナー → SHTフォームへリンク |
| `#general` | 一般参加 | SHT公式サイトへのリンクボタン |
| `#info` | 会場・アクセス | Googleマップ埋め込み・交通案内 |
| footer | フッター | お問い合わせ・各種リンク・著作権表示 |

## 主要リンク先

| 用途 | URL |
|---|---|
| サークル申し込み | http://www.puniket.com/sht/ |
| 一般参加案内 | https://www.puniket.com/sht/ |
| ぷにけっと準備会 | https://www.puniket.com/ |
| スーパーヒロインタイム | http://www.puniket.com/sht/ |
| 公式X | https://x.com/Tli6UYdZ4P68591 |

## イラストレーター クレジット

- **メインビジュアル:** ゆんこ（https://x.com/haruno_rai）
- **サークル参加バナー:** ももよ（https://x.com/momodaje_726）

## ドメイン管理

- **レジストラ:** ムームードメイン（bukol アカウント）
- **DNS設定:** Aレコード×4（GitHub Pages IP）+ CNAMEレコード（www）
- **HTTPS:** GitHub Pages の Enforce HTTPS を有効化（DNS確認後）

## 2026/4/16 実施した主な改修

1. 不要ファイル削除（`script.js`, `data.json`）
2. カスタムドメイン取得・設定（`sakuranjyanki.jp`）
3. フッターに著作権表示追加
4. サークル参加の説明文を親切な表現に修正
5. 一般参加セクション新規追加（ナビリンクも追加）
6. フッターにお問い合わせ（公式X）追加
7. スクロールオフセット修正（固定ナビバー被り対策・JS動的計算）

## 残タスク・待ち事項

- [ ] イラストレーター（ゆんこ氏）からメインビジュアルへのテキスト挿入待ち
- [ ] SHTから秋の申し込みフォームURL入手 → サークル参加バナーリンク先を更新
- [ ] DNS確認完了後にGitHub Pages の Enforce HTTPS を有効化
- [ ] シェアボタンURLとOGPメタタグを旧GitHub Pages URLから `sakuranjyanki.jp` に更新（任意）

## CSS変数・設計メモ

- メインカラー: `#8b0000`（深紅）、`#b22222`（赤）
- 背景: ピンク系グラデーション（radial-gradient）
- ナビバーは sticky 固定。モバイルはハンバーガーメニュー
- スクロールオフセットはJSで動的計算（`nav.offsetHeight - menuHeight + 16px`）
