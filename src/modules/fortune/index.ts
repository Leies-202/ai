import 藍 from '../../ai';
import IModule from '../../module';
import MessageLike from '../../message-like';
import serifs from '../../serifs';
import * as seedrandom from 'seedrandom';

const omikujis = [
	'メガ吉',
	'超吉',
	'大大吉',
	'大吉',
	'吉',
	'中吉',
	'小吉',
	'末吉',
	'ナノ吉',
	'凶',
	'大凶',
];

const itemPrefixes = [
	'お淑やかな',
	'お上品な',
	'健全な',
	'エレガントな'
];

const items = [
	'ドール', 'テディベア',
	'ポップコーン',
	'コーンスープ', 'ラーメン',
	'ニーソックス',
	'パンジャンドラム', 'カチューシャ', 'トレバシェット', '投石機',
	'ナス',
	'トマト',
	'きゅうり',
	'じゃがいも',
	'焼きビーフン',
	'腰',
	'寿司',
	'かぼちゃ',
	'諭吉',
	'キロバー',
	'アルミニウム',
	'ナトリウム',
	'マグネシウム',
	'プルトニウム',
	'ちいさなメダル',
	'牛乳パック',
	'ペットボトル',
	'クッキー',
	'チョコレート',
	'メイド服',
	'オレンジ',
	'ニーソ',
	'反物質コンデンサ',
	'粒子加速器',
	'マイクロプロセッサ(4コア8スレッド)',
	'原子力発電所',
	'レイヤ4スイッチ',
	'緩衝チェーン',
	'陽電子頭脳',
	'惑星',
	'テルミン',
	'虫歯車',
	'マウンター',
	'バケットホイールエクスカベーター',
	'デーモンコア',
	'ゲームボーイアドバンス',
	'量子コンピューター',
	'アナモルフィックレンズ',
	'押し入れの奥から出てきた謎の生き物',
	'スマートフォン',
	'時計',
	'プリン',
	'ガブリエルのラッパ',
	'メンガーのスポンジ',
	'ハンドスピナー',
	'超立方体',
	'建築物',
	'エナジードリンク',
	'マウスカーソル',
	'メガネ',
	'まぐろ',
	'ゴミ箱',
	'つまようじ',
	'お弁当に入ってる緑の仕切りみたいなやつ',
	'割りばし',
	'換気扇',
	'ペットボトルのキャップ',
	'消波ブロック',
	'ピザ',
	'歯磨き粉',
	'空き缶',
	'キーホルダー',
	'金髪碧眼の美少女',
	'SDカード',
	'リップクリーム',
	'チョコ無しチョココロネ',
	'鳥インフルエンザ',
	'自動販売機',
	'重いもの',
	'ノートパソコン',
	'ビーフジャーキー',
	'さけるチーズ',
	'ダイヤモンド',
	'物体',
	'月の石',
	'特異点',
	'中性子星',
	'液体',
	'衛星',
	'ズッキーニ',
	'黒いもの',
	'白いもの',
	'赤いもの',
	'丸いもの',
	'四角いもの',
	'カード状のもの',
	'気体',
	'鉛筆',
	'消しゴム',
	'つるぎ',
	'棒状のもの',
	'農産物',
	'メタルスライム',
	'タコの足',
	'きのこ',
	'なめこ',
	'缶チューハイ',
	'爪切り',
	'耳かき',
	'ぬいぐるみ',
];

export default class FortuneModule implements IModule {
	public readonly name = 'fortune';

	private ai: 藍;

	public install = (ai: 藍) => {
		this.ai = ai;
	}

	public onMention = (msg: MessageLike) => {
		if (msg.includes(['占', 'うらな', '運勢', 'おみくじ'])) {
			const date = new Date();
			const seed = `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}@${msg.userId}@${this.ai.account.id}`;
			const rng = seedrandom(seed);
			const omikuji = omikujis[Math.floor(rng() * omikujis.length)];
			const itemPrefix = Math.floor(rng() * 5) != 0 ? itemPrefixes[Math.floor(rng() * itemPrefixes.length)] : '';
			const item = items[Math.floor(rng() * items.length)];
			msg.reply(`**${omikuji}🎉**\nラッキーアイテム: ${itemPrefix}${item}`, serifs.fortune.cw(msg.friend.name));
			return true;
		} else {
			return false;
		}
	}
}
