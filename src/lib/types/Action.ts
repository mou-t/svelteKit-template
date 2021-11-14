export type Action<T = void, E extends HTMLElement = HTMLElement> = (
	node: E,
	parameters: T
) => {
	update?: (parameters: T) => void;
	destroy?: () => void;
};
