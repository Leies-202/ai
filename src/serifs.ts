// せりふ

export default {
	core: {
		setNameOk: name => `わかった！これからは${name}って呼ぶね！`,

		san: 'さん付けした方がいい？',

		yesOrNo: '「はい」か「いいえ」しかわからないよ...',

		hello: name => name ? `こんにちは、${name}♪` : `こんにちは♪`,

		helloNight: name => name ? `こんばんは、${name}♪` : `こんばんは♪`,

		goodMorning: (tension, name) => name ? `おはよう、${name}！${tension}` : `おはよう！${tension}`,

		/*
		goodMorning: {
			normal: (tension, name) => name ? `おはようございます、${name}！${tension}` : `おはようございます！${tension}`,

			hiru: (tension, name) => name ? `おはようございます、${name}！${tension}もうお昼ですよ？${tension}` : `おはようございます！${tension}もうお昼ですよ？${tension}`,
		},
*/

		goodNight: name => name ? `おやすみ、${name}！` : 'おやすみ～！',

		omedeto: name => name ? `ありがとう、${name}♪` : 'ありがとう♪',

		okaeri: {
			love: name => name ? [
				`おかえりなさい、${name}♪`,
				`おかえりなさい、${name}っ！`
			] : [
				'おかえりなさい♪',
				'おかえりっ！'
			],

			love2: name => name ? `おかえりなさい♡♡♡${name}っっ♡♡♡♡♡` : 'おかえりなさい♡♡♡',

			normal: name => name ? `おかえり、${name}！` : 'おかえりなさい！',
		},

		itterassyai: {
			love: name => name ? `いってら、${name}♪` : 'いってら！',

			normal: name => name ? `いってらっしゃい、${name}！` : 'いってらっしゃい♪',
		},

		tooLong: '長すぎる気がするよ...',

		invalidName: '発音が難しい気がするなぁ',

		requireMoreLove: 'もっと仲良くなったら考えてあげてもいいよ？',

		nadenade: {
			normal: 'ひゃっ…！ びっくりしたぁ～',

			love2: ['わわっ… 恥ずかしいなぁ', 'あうぅ… 恥ずかしいよぉ…'],

			love3: ['んぅ… ありがとう♪', 'わっ、なんだか落ち着くなっ♪', 'くぅんっ… 安心するなぁ…', '眠くなってきちゃった…'],

			hate1: '…っ！ やめて...',

			hate2: '触らないで...',

			hate3: '近寄らないでよ...',

			hate4: 'やめて！通報しちゃうよ？',
		},

		kawaii: {
			normal: ['ありがとう♪', '照れちゃうなぁ...'],

			love: ['嬉しいな♪', '照れちゃうなぁ...'],

			hate: '…ありがとう'
		},

		suki: {
			normal: 'えっ… ありがとう…♪',

			love: name => `私もその… ${name}のこと好きだよっ！`,

			hate: null
		},

		hug: {
			normal: 'ぎゅー...',

			love: 'ぎゅーっ♪',

			hate: '離れて...'
		},

		humu: {
			love: 'え、えっと…… ふみふみ……… どう…？',

			normal: 'えぇ... それはちょっと...',

			hate: '……'
		},

		batou: {
			love: 'お、おたんこなす！',

			normal: '(じとー…)',

			hate: '…頭大丈夫？'
		},

		itai: name => name ? `${name}、大丈夫…？ いたいのいたいの飛んでけ～！` : '大丈夫…？ いたいのいたいの飛んでけ～っ！',

		ote: {
			normal: 'くぅん... 私わんちゃんじゃないよ...？',

			love1: 'わん！',

			love2: 'わんわん♪',
		},

		shutdown: 'まだ眠くないよ...？',
	},

	keyword: {
		learned: (word, reading) => `(${word}..... ${reading}..... 覚えた！)`,

		remembered: (word) => `${word}`
	},

	dice: {
		done: res => `${res} です！`
	},

	birthday: {
		happyBirthday: name => name ? `お誕生日おめでとう！、${name}🎉` : 'お誕生日おめでとう～🎉',
	},

	/**
	 * リバーシ
	 */
	reversi: {
		/**
		 * リバーシへの誘いを承諾するとき
		 */
		ok: '良いよ～',

		/**
		 * リバーシへの誘いを断るとき
		 */
		decline: 'ごめんなさい、今リバーシはするなと言われてるの...',

		/**
		 * 対局開始
		 */
		started: (name, strength) => `対局を${name}と始めたよ！ (強さ${strength})`,

		/**
		 * 接待開始
		 */
		startedSettai: name => `(${name}の接待を始めたよっ)`,

		/**
		 * 勝ったとき
		 */
		iWon: name => `${name}に勝ったよ♪`,

		/**
		 * 接待のつもりが勝ってしまったとき
		 */
		iWonButSettai: name => `(${name}に接待で勝っちゃった...)`,

		/**
		 * 負けたとき
		 */
		iLose: name => `${name}に負けたよ...`,

		/**
		 * 接待で負けてあげたとき
		 */
		iLoseButSettai: name => `(${name}に接待で負けてあげちゃった...♪)`,

		/**
		 * 引き分けたとき
		 */
		drawn: name => `${name}と引き分けた～`,

		/**
		 * 接待で引き分けたとき
		 */
		drawnSettai: name => `(${name}に接待で引き分けたよ...)`,

		/**
		 * 相手が投了したとき
		 */
		youSurrendered: name => `${name}が投了しちゃった`,

		/**
		 * 接待してたら相手が投了したとき
		 */
		settaiButYouSurrendered: name => `(${name}を接待していたら投了されちゃった... ごめんなさい)`,
	},

	/**
	 * 数当てゲーム
	 */
	guessingGame: {
		/**
		 * やろうと言われたけど既にやっているとき
		 */
		alreadyStarted: 'え、ゲームは既に始めてるよ！',

		/**
		 * タイムライン上で誘われたとき
		 */
		plzDm: 'メッセージでやろっ！',

		/**
		 * ゲーム開始
		 */
		started: '0~100の秘密の数を当ててみて♪',

		/**
		 * 数字じゃない返信があったとき
		 */
		nan: '数字でお願い！「やめる」と言ってゲームをやめることもでるよ！',

		/**
		 * 中止を要求されたとき
		 */
		cancel: 'わかった～。ありがとう♪',

		/**
		 * 小さい数を言われたとき
		 */
		grater: num => `${num}より大きいよ`,

		/**
		 * 小さい数を言われたとき(2度目)
		 */
		graterAgain: num => `もう一度言うけど${num}より大きいよ！`,

		/**
		 * 大きい数を言われたとき
		 */
		less: num => `${num}より小さいよ`,

		/**
		 * 大きい数を言われたとき(2度目)
		 */
		lessAgain: num => `もう一度言うけど${num}より小さいよ！`,

		/**
		 * 正解したとき
		 */
		congrats: tries => `正解🎉 (${tries}回目で当てたよ)`,
	},

	/**
	 * 数取りゲーム
	 */
	kazutori: {
		alreadyStarted: '今ちょうどやってるよ～',

		matakondo: 'また今度やろっ！',

		intro: 'みんな～！数取りゲームしよう！\n0~100の中で最も大きい数字を取った人が勝ちだよ！他の人と被ったらだめだよ～！\n制限時間は5分！数字はこの投稿にリプライで送ってね！',

		finish: 'ゲームの結果発表！',

		finishWithWinner: user => `今回は${user}さんの勝ち！またやろっ♪`,

		finishWithNoWinner: '今回は勝者はいなかったよ... またやろうね♪',

		onagare: '参加者が集まらなかったからお流れになっちゃった...'
	},

	/**
	 * 絵文字生成
	 */
	emoji: {
		suggest: emoji => `こんなのはどう？→${emoji}`,
	},

	/**
	 * 占い
	 */
	fortune: {
		cw: name => name ? `私が今日の${name}の運勢を占ったよ...` : '私が今日のあなたの運勢を占ったよ...',
	},

	/**
	 * タイマー
	 */
	timer: {
		set: 'わかった！',

		invalid: 'うーん...？',

		tooLong: '長すぎるよ…',

		notify: (time, name) => name ? `${name}、${time}経ったよ！` : `${time}経ったよ！！！`
	},

	/**
	 * バレンタイン
	 */
	valentine: {
		chocolateForYou: name => name ? `${name}、えっと... チョコレート作ったからよかったらどうぞ！🍫` : 'チョコレート作ったからよかったらどうぞ！🍫',
	},

	server: {
		cpu: 'サーバーの負荷が高いよ。大丈夫かな...？\nマスターは低スペックだから仕方ないって言ってたけど...。'
	},
};

export function getSerif(variant: string | string[]): string {
	if (Array.isArray(variant)) {
		return variant[Math.floor(Math.random() * variant.length)];
	} else {
		return variant;
	}
}
