import autobind from 'autobind-decorator';
import { parse } from 'twemoji-parser';
const delay = require('timeout-as-promise');

import { Note } from '@/misskey/note';
import Module from '@/module';
import Stream from '@/stream';
import includes from '@/utils/includes';

export default class extends Module {
	public readonly name = 'emoji-react';

	private htl: ReturnType<Stream['useSharedConnection']>;

	@autobind
	public install() {
		this.htl = this.ai.connection.useSharedConnection('homeTimeline');
		this.htl.on('note', this.onNote);

		return {};
	}

	@autobind
	private async onNote(note: Note) {
		if (note.reply != null) return;
		if (note.text == null) return;
		if (note.text.includes('@')) return; // (自分または他人問わず)メンションっぽかったらreject

		const react = async (reaction: string, immediate = false) => {
			if (!immediate) {
				await delay(1500);
			}
			this.ai.api('notes/reactions/create', {
				noteId: note.id,
				reaction: reaction
			});
		};

		const customEmojis = note.text.match(/:([\w@.-]+):(?!\w)/g);
		if (customEmojis) {
			// カスタム絵文字が複数種類ある場合はキャンセル
			if (!customEmojis.every((val, i, arr) => val === arr[0])) return;

			this.log(`Custom emoji detected - ${customEmojis[0]}`);

			return react(customEmojis[0]);
		}

		const emojis = parse(note.text).map(x => x.text);
		if (emojis.length > 0) {
			// 絵文字が複数種類ある場合はキャンセル
			if (!emojis.every((val, i, arr) => val === arr[0])) return;

			this.log(`Emoji detected - ${emojis[0]}`);

			let reaction = emojis[0];

			switch (reaction) {
				case '✊': reaction = '✋'; break;
				case '✌': reaction = '✊'; break;
				case '🖐': reaction = '✌️'; break;
				case '✋': reaction = '✌️'; break;
				case '🤜': reaction = '🤛'; break;
				case '💩': reaction = '🚽'; break;
			}

			return react(reaction);
		}

		if (includes(note.text, ['ぴざ'])) return react('🍕');
		if (includes(note.text, ['うんち'])) return react('🚽');
		if (includes(note.text, ['衣亜', '衣亜ちゃん', '衣亜たそ'])) return react('🙌');
		if (includes(note.text, ['ログボ', 'ログインボーナス'])) return react('❤️');
		if (includes(note.text, ['寿司', 'sushi']) || note.text === 'すし') return react('🍣');
	}
}
