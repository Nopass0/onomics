import { useEffect, useState } from "react";
import { string } from "zod";

const useTheme = (themes: boolean) => {
	// const [theme, setTheme] = useState('dark');
    let theme = "dark";
	useEffect(() => {
        if (!themes) {
            const T: string = localStorage.getItem("theme") || "";
            // setTheme(T);
        } else {
            // setTheme(themes ? "true" : "false" );
        }

	}, []);
    return theme;
};

export default useTheme;
