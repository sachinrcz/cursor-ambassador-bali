import en from './en.json';
import id from './id.json';

export const localeBundles = {
	en,
	id,
} as const;

export type LocaleBundleKey = keyof typeof localeBundles;
