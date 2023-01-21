import autobind from 'autobind-decorator';
import Message from '@/message';
import Module from '@/module';
import { genItem } from '@/vocabulary';
import config from '@/config';
import { Note } from '@/misskey/note';
import * as loki from 'lokijs';
import { kewyegenabo } from '@/kewyegenabo';

export default class extends Module {
	public readonly name = 'poll';

	private learnedKeywords?: loki.Collection<{
		keyword: string;
		learnedAt: number;
	}>;

	@autobind
	public install() {
		if (config.keywordEnabled) {
			this.learnedKeywords = this.ai.getCollection('_keyword_learnedKeywords', {
				indices: ['userId']
			});
		}

		setInterval(() => {
			if (Math.random() < 0.1) {
				this.post();
			}
		}, 1000 * 60 * 60);

		return {
			mentionHook: this.mentionHook,
			timeoutCallback: this.timeoutCallback,
		};
	}

	@autobind
	private async post() {
		const duration = 1000 * 60 * 30;

		const polls = [ // TODO: Extract serif
			['珍しそうなもの', 'みんなは、どれがいちばん珍しいと思う？'],
			['美味しそうなもの', 'みんなは、どれがいちばん美味しいと思う？'],
			['重そうなもの', 'みんなは、どれがいちばん重いと思う？'],
			['欲しいもの', 'みんなは、どれがいちばん欲しい？'],
			['無人島に持っていきたいもの', 'みんなは、無人島にひとつ持っていけるとしたらどれにする？'],
			['家に飾りたいもの', 'みんなは、家に飾るとしたらどれにする？'],
			['売れそうなもの', 'みんなは、どれがいちばん売れそうだと思う？'],
			['降ってきてほしいもの', 'みんなは、どれが空から降ってきてほしい？'],
			['携帯したいもの', 'みんなは、どれを携帯したい？'],
			['商品化したいもの', 'みんなは、商品化するとしたらどれにする？'],
			['発掘されそうなもの', 'みんなは、遺跡から発掘されそうなものはどれだと思う？'],
			['良い香りがしそうなもの', 'みんなは、どれがいちばんいい香りがすると思う？'],
			['高値で取引されそうなもの', 'みんなは、どれがいちばん高値で取引されると思う？'],
			['地球周回軌道上にありそうなもの', 'みんなは、どれが地球周回軌道上を漂っていそうだと思う？'],
			['プレゼントしたいもの', 'みんなは、私にプレゼントしてくれるとしたらどれにする？'],
			['プレゼントされたいもの', 'みんなは、プレゼントでもらうとしたらどれにする？'],
			['私が持ってそうなもの', 'みんなは、私が持ってそうなものはどれだと思う？'],
			['流行りそうなもの', 'みんなは、どれが流行りそうだと思う？'],
			['朝ごはん', 'みんなは、朝ごはんにどれが食べたい？'],
			['お昼ごはん', 'みんなは、お昼ごはんにどれが食べたい？'],
			['お夕飯', 'みんなは、お夕飯にどれが食べたい？'],
			['体に良さそうなもの', 'みんなは、どれが体に良さそうだと思う？'],
			['後世に遺したいもの', 'みんなは、どれを後世に遺したい？'],
			['楽器になりそうなもの', 'みんなは、どれが楽器になりそうだと思う？'],
			['お味噌汁の具にしたいもの', 'みんなは、お味噌汁の具にするとしたらどれがいい？'],
			['ふりかけにしたいもの', 'みんなは、どれをごはんにふりかけたい？'],
			['よく見かけるもの', 'みんなは、どれをよく見かける？'],
			['道に落ちてそうなもの', 'みんなは、道端に落ちてそうなものはどれだと思う？'],
			['美術館に置いてそうなもの', 'みんなは、この中で美術館に置いてありそうなものはどれだと思う？'],
			['教室にありそうなもの', 'みんなは、教室にありそうなものってどれだと思う？'],
			['絵文字になってほしいもの', '絵文字になってほしいものはどれ？'],
			['Misskey本部にありそうなもの', 'みんなは、Misskey本部にありそうなものはどれだと思う？'],
			['燃えるゴミ', 'みんなは、どれが燃えるゴミだと思う？'],
			['好きなおにぎりの具', 'みんなの好きなおにぎりの具はなぁに？'],
			['そして輝くウルトラ', 'そして輝くウルトラ'],
		];

		const poll = polls[Math.floor(Math.random() * polls.length)];

		const getKeyword = (rng: () => number) => {
			if (!this.learnedKeywords) return null;

			const count = this.learnedKeywords.count();
			const offset = Math.floor(rng() * count);

			const x = this.learnedKeywords.chain().find().offset(offset).limit(1).data();
			let keyword = x[0]?.keyword || null;
			if (Math.random() * 100 > 80) keyword = kewyegenabo(keyword);
			return keyword;
		};

		const choices = poll[0] === 'そして輝くウルトラ' ? [
			'そう',
			'どちらかというとそう',
			'どちらでもない',
			'どちらかというとそうではない',
			'そうではない',
			'わからない・回答しない',
		] : [
			genItem(undefined, getKeyword),
			genItem(undefined, getKeyword),
			genItem(undefined, getKeyword),
			genItem(undefined, getKeyword),
			genItem(undefined, getKeyword),
		];

		const note = await this.ai.post({
			text: poll[1],
			poll: {
				choices,
				expiredAfter: duration,
				multiple: false,
			}
		});

		// タイマーセット
		this.setTimeoutWithPersistence(duration + 3000, {
			title: poll[0],
			noteId: note.id,
		});
	}

	@autobind
	private async mentionHook(msg: Message) {
		if (!msg.or(['/poll']) || msg.user.username !== config.master) {
			return false;
		} else {
			this.log('Manualy poll requested');
		}

		this.post();

		return true;
	}

	@autobind
	private async timeoutCallback({ title, noteId }) {
		const note: Note = await this.ai.api('notes/show', { noteId });

		const choices = note.poll!.choices;

		let mostVotedChoice;

		for (const choice of choices) {
			if (mostVotedChoice == null) {
				mostVotedChoice = choice;
				continue;
			}

			if (choice.votes > mostVotedChoice.votes) {
				mostVotedChoice = choice;
			}
		}

		const mostVotedChoices = choices.filter(choice => choice.votes === mostVotedChoice.votes);

		if (mostVotedChoice.votes === 0) {
			this.ai.post({ // TODO: Extract serif
				text: '投票はなかったよ〜…',
				renoteId: noteId,
			});
		} else if (mostVotedChoices.length === 1) {
			this.ai.post({ // TODO: Extract serif
				cw: `${title}アンケートの結果発表！`,
				text: `結果は${mostVotedChoice.votes}票の「${mostVotedChoice.text}」だったよ！`,
				renoteId: noteId,
			});
		} else {
			const choices = mostVotedChoices.map(choice => `「${choice.text}」`).join('と');
			this.ai.post({ // TODO: Extract serif
				cw: `${title}アンケートの結果発表！`,
				text: `結果は${mostVotedChoice.votes}票の${choices}だったよ！`,
				renoteId: noteId,
			});
		}
	}
}
