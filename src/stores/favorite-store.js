import { writable } from 'svelte/store';

function favoritesStore() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        set: (value) => set(value),
        reset: () => set([]),
    };
}

export const favorites = favoritesStore();
