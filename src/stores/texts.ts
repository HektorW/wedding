import { derived, writable } from 'svelte/store'
import { enTexts } from './texts.en'

export type Languages = 'en'

export const language = writable<Languages>('en')

export const texts = derived(language, (selectedLanguage): typeof enTexts => {
	switch (selectedLanguage) {
		case 'en':
			return enTexts

		default:
			throw Error('Invalid language selected')
	}
})
