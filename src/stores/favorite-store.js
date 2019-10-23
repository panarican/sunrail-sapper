import { writable } from 'svelte/store';
export const favorites = favoritesStore();

/**
 * Store for saving your favorite stations
 * @returns {{set: (function(*=): void), subscribe: *, reset: (function(): void)}}
 */
function favoritesStore() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        set: (value) => set(value),
        reset: () => set([]),
    };
}


