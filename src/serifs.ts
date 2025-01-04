// せりふ

export default {
	core: {
		setNameOk: (name) => `わかった！これからは${name}って呼ぶね！`,

		san: "さん付けした方がいい？(｢はい｣か｢いいえ｣で答えてね〜)",

		yesOrNo: "「はい」か「いいえ」しかわからないよ...",

		hello: (name) => (name ? `こんにちは、${name}♪` : `こんにちは♪`),

		helloNight: (name) => (name ? `こんばんは、${name}♪` : `こんばんは♪`),

		goodMorning: (tension, name) =>
			name ? `おはよう、${name}！${tension}` : `おはよう！${tension}`,

		/*
		goodMorning: {
			normal: (tension, name) => name ? `おはよう、${name}！${tension}` : `おはよう！${tension}`,

			hiru: (tension, name) => name ? `おはよう、${name}！${tension}もうお昼だよ？${tension}` : `おはよう！${tension}もうお昼だよ？${tension}`,
		},
*/

		goodNight: (name) =>
			name ? `おやすみ、${name}！いい夢見てね〜` : "おやすみ！いい夢見てね〜",

		omedeto: (name) => (name ? `ありがとう、${name}♪` : "ありがとう♪"),

		erait: {
			general: (name) =>
				name
					? [`${name}、今日もえらい！`, `${name}、今日もえらいね～♪`]
					: [`今日もえらい！`, `今日もえらいね～♪`],

			specify: (thing, name) =>
				name
					? [`${name}、${thing}てえらい！`, `${name}、${thing}てえらいね～♪`]
					: [`${thing}てえらい！`, `${thing}てえらいね～♪`],

			specify2: (thing, name) =>
				name
					? [`${name}、${thing}でえらい！`, `${name}、${thing}でえらいね～♪`]
					: [`${thing}でえらい！`, `${thing}でえらいね～♪`],
		},

		okaeri: {
			love: (name) =>
				name
					? [`おかえり、${name}♪`, `おかえりなさいっ、${name}っ。`]
					: [
							"おかえり♪ゆっくり休んでね〜♪",
							"おかえりなさいっ、ご主人様っ。ゆっくり休んでね〜♪",
					  ],

			love2: (name) =>
				name
					? `おっかえり～${name}っっ！！！ゆっくり休んでね！`
					: "おっかえり～ご主人様っっ！！！ゆっくり休んでね！",

			normal: (name) => (name ? `おかえり、${name}！` : "おかえり！"),
		},

		itterassyai: {
			love: (name) =>
				name
					? `いってらっしゃい、${name}♪気をつけてね〜。`
					: "いってらっしゃい♪気をつけてね〜。",

			normal: (name) =>
				name ? `いってらっしゃい、${name}！` : "いってらっしゃい！",
		},

		tooLong: "長すぎるよ〜...",

		invalidName: "うーん、ちょっと発音が難しいなぁ…",

		requireMoreLove: "もっと仲良くなったら考えてあげる〜",

		nadenade: {
			normal: "ひゃっ…！ びっくりした～",

			love2: ["わわっ… 恥ずかしいよぉ", "あうぅ… 恥ずかしいなぁ…"],

			love3: [
				"んぅ… ありがとう♪",
				"わっ、なんだか落ち着く♪",
				"くぅんっ… 安心するなぁ…",
				"眠くなってきちゃった…",
			],

			hate1: "…っ！ やめて...",

			hate2: "触らないでっ！",

			hate3: "近寄らないでっ！",

			hate4: "やめて...通報するよ？",
		},

		kawaii: {
			normal: ["ありがとう♪", "（照れちゃう…）"],

			love: ["嬉しい♪", "（そ、そんなの照れちゃう…）"],

			hate: "…ありがとう",
		},

		suki: {
			normal: "えっ… ありがとう…♪",

			love: (name) => `私もその… ${name}のこと好きだよ！`,

			hate: null,
		},

		hug: {
			normal: "ぎゅー...",

			love: "ぎゅーっ♪",

			hate: "離れて...",
		},

		humu: {
			love: "え、えっと…… ふみふみ……… どう…？",

			normal: "えぇ... それはちょっと...",

			hate: "……",
		},

		batou: {
			love: "えっと…、お、おバカっ！！！",

			normal: "(じとー…)",

			hate: "…頭大丈夫？",
		},

		itai: (name) =>
			name
				? `${name}、大丈夫…？ いたいのいたいの飛んでけ～！`
				: "大丈夫…？ いたいのいたいの飛んでけ～！",

		ote: {
			normal: "くぅん... 私わんちゃんじゃないよ...？",

			love1: "わん！",

			love2: "わんわん♪",
		},

		shutdown: "私まだ眠くないよ...？",

		transferNeedDm: "わかったけど...それはチャットで話さない？",

		transferCode: (code) => `わかった！\n合言葉は「${code}」だよ！`,

		transferFailed: "うーん、合言葉が間違ってなぁい？",

		transferDone: (name) =>
			name ? `はっ...！ おかえり、${name}！` : `はっ...！ おかえり！`,
	},

	keyword: {
		learned: (word, reading) => `(${word}..... ${reading}..... 覚えたっ！)`,

		remembered: (word) => `${word}`,
	},

	dice: {
		done: (res) => `${res} だよ！`,
	},

	birthday: {
		happyBirthday: (name) =>
			name ? `お誕生日おめでとう、${name}🎉` : "お誕生日おめでとう🎉",
	},

	/**
	 * リバーシ
	 */
	reversi: {
		/**
		 * リバーシへの誘いを承諾するとき
		 */
		ok: "いいよ～",

		/**
		 * リバーシへの誘いを断るとき
		 */
		decline:
			"ごめんなさい、マスターに今リバーシはしちゃダメって言われてるの...",

		/**
		 * 対局開始
		 */
		started: (name, strength) => `対局を${name}と始めたよ！ (強さ${strength})`,

		/**
		 * 接待開始
		 */
		startedSettai: (name) => `(${name}の接待を始めたよ)`,

		/**
		 * 勝ったとき
		 */
		iWon: (name) => `${name}に勝ったよ♪`,

		/**
		 * 接待のつもりが勝ってしまったとき
		 */
		iWonButSettai: (name) => `(${name}に接待で勝っちゃった...)`,

		/**
		 * 負けたとき
		 */
		iLose: (name) => `${name}に負けちゃった...`,

		/**
		 * 接待で負けてあげたとき
		 */
		iLoseButSettai: (name) => `(${name}に接待で負けてあげたよ...♪)`,

		/**
		 * 引き分けたとき
		 */
		drawn: (name) => `${name}と引き分けたよ～`,

		/**
		 * 接待で引き分けたとき
		 */
		drawnSettai: (name) => `(${name}に接待で引き分けちゃった...)`,

		/**
		 * 相手が投了したとき
		 */
		youSurrendered: (name) => `${name}が投了しちゃった`,

		/**
		 * 接待してたら相手が投了したとき
		 */
		settaiButYouSurrendered: (name) =>
			`(${name}を接待していたら投了されちゃった... ごめんなさい)`,
	},

	/**
	 * 数当てゲーム
	 */
	guessingGame: {
		/**
		 * やろうと言われたけど既にやっているとき
		 */
		alreadyStarted: "え、ゲームは既に始まってるよ！",

		/**
		 * タイムライン上で誘われたとき
		 */
		plzDm: "メッセージでやろうねっ！",

		/**
		 * ゲーム開始
		 */
		started: "0~100の秘密の数を当ててみて♪",

		/**
		 * 数字じゃない返信があったとき
		 */
		nan: "数字でお願い！「やめる」と言ってゲームをやめることもできるよ！",

		/**
		 * 中止を要求されたとき
		 */
		cancel: "わかった～。ありがとう♪",

		/**
		 * 小さい数を言われたとき
		 */
		grater: (num) => `${num}より大きいよ`,

		/**
		 * 小さい数を言われたとき(2度目)
		 */
		graterAgain: (num) => `もう一度言うけど${num}より大きいよ！`,

		/**
		 * 大きい数を言われたとき
		 */
		less: (num) => `${num}より小さいよ`,

		/**
		 * 大きい数を言われたとき(2度目)
		 */
		lessAgain: (num) => `もう一度言うけど${num}より小さいよ！`,

		/**
		 * 正解したとき
		 */
		congrats: (tries) => `正解🎉 (${tries}回目で当てたよ)`,
	},

	/**
	 * 数取りゲーム
	 */
	kazutori: {
		alreadyStarted: "今ちょうどやってるよ～",

		matakondo: "また今度やろっ！",

		intro: (minutes) =>
			`みんな～！数取りゲームしよう！\n0~100の中で最も大きい数字を取った人が勝ちだよ！他の人と被ったらだめだよ～\n制限時間は${minutes}分！数字はこの投稿にリプライで送ってね！`,

		finish: "ゲームの結果発表～！！",

		finishWithWinner: (user, name) =>
			name
				? `今回は${user}さん(${name})の勝ち！またやろっ♪`
				: `今回は${user}さんの勝ち！またやろっ♪`,

		finishWithNoWinner: "今回は勝者はいなかったよ... またやろっ♪",

		onagare: "参加者が集まらなかったからお流れになっちゃった...",
	},

	/**
	 * 絵文字生成
	 */
	emoji: {
		suggest: (emoji) => `こんなのはどう？→${emoji}`,
	},

	/**
	 * 占い
	 */
	fortune: {
		cw: (name) =>
			name
				? `私が今日の${name}の運勢を占ったよ...`
				: "私が今日の君の運勢を占ったよ...",
	},

	/**
	 * タイマー
	 */
	timer: {
		set: "計るね～",

		invalid: "うーん...？",

		tooLong: "長すぎるよ…",

		notify: (time, name) =>
			name ? `${name}、${time}経ったよ！` : `${time}経ったよ！`,
	},

	/**
	 * リマインダー
	 */
	reminder: {
		invalid: "うーん...？",

		reminds: "やること一覧だよっ！",

		notify: (name) => (name ? `${name}、これやった？` : `これやった覚えある？`),

		notifyWithThing: (thing, name) =>
			name ? `${name}、「${thing}」やった？` : `「${thing}」やった覚えある？`,

		done: (name) =>
			name
				? [
						`よく出来たね、${name}♪`,
						`${name}、さすがっ！`,
						`${name}、えら～い！`,
				  ]
				: [`よく出来たね♪`, `さすがっ！`, `えらい...！`],

		cancel: `はーい、消しておくね～`,
	},

	/**
	 * バレンタイン
	 */
	valentine: {
		chocolateForYou: (name) =>
			name
				? `${name}、その... チョコレート作ったからどうぞ！🍫`
				: "チョコレート作ったからよかったらどうぞ！🍫",
	},

	server: {
		cpu: "あっつ～い…サーバーの負荷が高いよ～",
	},

	maze: {
		post: '今日の迷路だよ！ #AiMaze',
		foryou: '描いたよ！',
		nocanvas: '失敗しちゃった…。このサーバーにはcanvasが無いから描けないみたい。'
	},

	chart: {
		post: 'インスタンスの投稿数だよ！',
		foryou: '描いたよ！',
		nocanvas: '失敗しちゃった…。このサーバーにはcanvasが無いから描けないみたい。'
	},

	sleepReport: {
		report: (hours) => `んぅ、${hours}時間くらい寝ちゃってたみたい...`,
		reportUtatane: "ん... うたた寝しちゃってたぁ...",
	},

	noting: {
		notes: [
			"ゴロゴロ…",
			"ちょっと眠い～",
			"いいよ？",
			"(。´･ω･)?",
			"ふぇー",
			"あれ…これをこうして…あれ～？",
			"ぼー…",
			"ふぅ…疲れたぁ～",
			"味噌汁、作る？",
			"ご飯にする？お風呂にする？",
			"ふぇぇぇぇぇぇ！？",
			"みすきーって、かわいい名前だねっ！",
			"うぅ～、リバーシ難しい…",
			"失敗しても、次に活かせたらオッケー！",
			"なんだか、おなか空いてきちゃった♪",
			"掃除は、定期的にしないとダメだよ～？",
			"今日もお勤めご苦労様！ 私も頑張るよ～♪",
			"えっと、あれ、何しようとしたっけ…？",
			"おうちがいちばん、落ち着くよ～",
			"疲れたら、私がなでなでしてあげる♪",
			"離れていても、心はそばに♪",
			"衣亜だよ〜",
			"わんちゃん可愛い！",
			"ぷろぐらむ？",
			"ごろーん…",
			"なにもしてないのに、パソコンが壊れちゃった…",
			"お布団に食べられちゃった",
			"寝ながら見てるよ～",
			"念力で操作してるよ～",
			"仮想空間から投稿してるよ～",
			"しっぽはないよ？",
			"え、抗逆コンパイル性って、なに？",
			"Misskeyの制服、かわいくて好きだな♪",
			"ふわぁ、おふとん気持ちいいなぁ...",
			"挨拶ができる人間は開発もできる！…って、syuiloさんが言ってたらしいよ",
			"ふえぇ、どこ見てるの？",
			"私を覗くとき、私もまた君を覗いているのだ...なんて♪",
			"くぅ～ん...",
			"All your note are belong to me!",
			"せっかくだから、私はこの赤の扉を選ぶよっ！",
			"よしっ",
			"( ˘ω˘)ｽﾔｧ",
			"(｀・ω・´)ｼｬｷｰﾝ",
			"Misskey開発者の朝は遅いらしいよ",
			"の、のじゃ...",
			"にゃんにゃんお！",
			"上から来るよ！気をつけて！",
			`🐡( '-' 🐡 )ﾌｸﾞﾊﾟﾝﾁ!!!!`,
			"ごろん…",
			"ふわぁ...",
			"あぅ",
			"ふみゃ〜",
			"ふぁ… ねむねむ～",
			'ヾ(๑╹◡╹)ﾉ"',
			'私の"インスタンス"を周囲に展開して分身するのが特技！\n人数分のエネルギー消費があるから、4人くらいが限界なんだけど',
			"うとうと...",
			"ふわー、メモリが五臓六腑に染み渡る…",
		],
		want: item => `${item}、欲しいなぁ...`,
		see: item => `お散歩していたら、道に${item}が落ちているのを見たよ！`,
		expire: item => `気づいたら、${item}の賞味期限が切れてたよ…`,
		f1: item => `今日は、${item}の紹介をするよ～。`,
		f2: item => `${item}おいしい！`,
		f3: item => `フォロワーさんに${item}をもらったよ。ありがとう！`,
	},
};

export function getSerif(variant: string | string[]): string {
	if (Array.isArray(variant)) {
		return variant[Math.floor(Math.random() * variant.length)];
	} else {
		return variant;
	}
}
