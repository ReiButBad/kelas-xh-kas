/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: [require("daisyui")],
  daisyui: {
    "prefix": "dui-",
    "darkTheme": false,
    "themes": [
        {
            "light": {
                "primary": "#b5752b",
                "secondary": "#292524",
                "accent": "#064e3b",
                "neutral": "#ffffff",
                "base-100": "#d6d3d1",
                "info": "#075985",
                "success": "#3f6212",
                "warning": "#facc15",
                "error": "#dc2626"
            }
        }
    ]
}
};
