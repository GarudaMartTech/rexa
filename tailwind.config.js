/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '600px',
      md: '800px',
      lg: '1076px',
      xl: '1440px',
    },
    extend: {
      display: ["group-hover"],
      
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        Agbalumo:["Lobster","Sans"],
        poppins: ["Poppins", "serif"],
        Montserrat : ["Montserrat","sans-serif"],
        Bank: ["Bank Gothic", "Sans serif"]
      },
      colors: {
        gray: "#F5F5F8",
        gray1: "#EFEFEF",
        lightgray: "#F6F8FA",
        lightblack: "#303030b1",
        blue: "#055da7",
        orange:"#FFA500",
        red : "#FF0000"
      },
    },
  },
  plugins: [require("daisyui")],
}

