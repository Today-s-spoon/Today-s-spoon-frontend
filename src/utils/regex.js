import { numberRegex, emailRegex } from '../constants/regex';

export const validateIsOnlyNumber = (value) => {
	return numberRegex.test(value);
};

export const validateEmail = (email) => {
	return emailRegex.test(email);
};
