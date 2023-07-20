class Storage {
    static set(key, value) {
        localStorage.setItem(key, value);
    }

    static get(key) {
        return localStorage.getItem(key);
    }

    static remove(key) {
        localStorage.removeItem(key);
    }
}

export const storage = Storage